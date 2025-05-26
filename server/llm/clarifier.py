from typing import List, Dict, Any
from .llm_router import route_llm_call
from .openai_client import OpenAIClient
import json

def get_clarifying_questions(section_name: str, section_text: str, confidence_score: Dict[str, Any]) -> List[str]:
    """Generate clarifying questions for a pitch section marked as red."""
    prompt = f"""You are an AI pitch advisor helping improve a startup pitch. A section of the pitch has been marked as needing clarification.

Section: {section_name}
Current text: {section_text}

This section was marked as needing improvement because: {confidence_score['reason']}

Generate 2-3 specific questions that would help gather information to improve this section. Focus on:
1. Requesting concrete data and metrics
2. Clarifying vague or generic statements
3. Getting specific examples or proof points

Format your response as a Python list of questions only.
"""

    response = route_llm_call(
        task_type='clarify_question',
        prompt=prompt,
        max_tokens=300
    )

    # Convert string response to list of questions
    try:
        # Clean up the response and evaluate it as a Python list
        questions_str = response.strip().replace('```python', '').replace('```', '').strip()
        questions = eval(questions_str)
        
        # Validate and clean questions
        if isinstance(questions, list):
            return [q.strip() for q in questions if isinstance(q, str)]
        return []
    except:
        # Fallback: split by newlines and clean up
        questions = response.split('\n')
        return [q.strip('- ').strip() for q in questions if q.strip('- ').strip()]

def get_clarifying_questions_for_pitch(analyzed_pitch: Dict[str, Any]) -> Dict[str, List[str]]:
    """Generate clarifying questions for all sections with low confidence scores."""
    clarifying_questions = {}
    
    for section_name, section_data in analyzed_pitch.items():
        # Check if section has confidence score and it's below threshold
        if section_data.get('confidence', 1.0) < 0.7:
            questions = get_clarifying_questions(
                section_name,
                section_data['text'],
                section_data
            )
            if questions:
                clarifying_questions[section_name] = questions
    
    return clarifying_questions

class PitchClarifier:
    def __init__(self, openai_client: OpenAIClient):
        self.openai = openai_client
    
    def get_questions(self, pitch_data: Dict[str, Any], confidence_scores: Dict[str, Any], startup_info: Dict[str, Any]) -> List[Dict[str, str]]:
        """Generate clarifying questions for sections with low confidence"""
        system_prompt = """You are an expert at analyzing pitch decks and identifying areas that need more detail or clarity.
        Generate specific, targeted questions that will help improve the pitch."""
        
        # Filter sections with low confidence
        low_confidence_sections = {
            section: data
            for section, data in pitch_data.items()
            if section in confidence_scores and confidence_scores[section].get('confidence', 1.0) < 0.7
        }
        
        if not low_confidence_sections:
            return []
            
        prompt = f"""Review these pitch deck sections and generate specific questions to improve them:

Company Context:
Name: {startup_info.get('startup_name', '')}
Sector: {startup_info.get('sector', '')}
Stage: {startup_info.get('stage', '')}

Sections needing improvement:
{json.dumps(low_confidence_sections, indent=2)}

For each section, provide 1-2 specific questions that would help gather information to make the section more compelling.
Format the response as a list of dictionaries with 'section' and 'question' keys."""
        
        try:
            response = self.openai.complete(prompt, system_prompt)
            questions = eval(response)  # Convert string response to list
            return questions
        except Exception as e:
            raise Exception(f"Error generating questions: {str(e)}")