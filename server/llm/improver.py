from typing import Dict, Any
from .confidence_scorer import analyze_pitch_confidence
from .llm_router import route_llm_call
from .anthropic_client import AnthropicClient
import json
import re

def improve_pitch_section(section_name: str, current_text: str, user_input: str) -> Dict[str, Any]:
    """Improve a specific section of the pitch based on user input."""
    prompt = f"""You are a world-class startup storyteller helping to improve a pitch for investors.

I need to improve the '{section_name}' section of my pitch based on additional information.

Current text:
"{current_text}"

Additional information from the user:
"{user_input}"

Please rewrite this section to incorporate the user's input while maintaining a compelling narrative style.
Focus on making the content specific, credible, and impactful for investors.

Avoid buzzwords, vague claims, and unsubstantiated statements.
Include concrete details, metrics, and specific examples wherever possible.

Return only the improved text without any explanations or formatting."""
    
    # Call LLM for improving the section
    improved_text = route_llm_call("pitch_block", prompt, max_tokens=500)
    
    # Check if the improved text might be JSON and clean it up
    improved_text = improved_text.strip()
    
    # Try to detect if the response is JSON and extract just the text we need
    if improved_text.startswith('{') and improved_text.endswith('}'):
        try:
            # If it looks like JSON, try to parse it
            json_data = json.loads(improved_text)
            
            # Case 1: If the JSON has the section we want directly
            if section_name.lower() in json_data:
                section_data = json_data[section_name.lower()]
                if isinstance(section_data, dict) and 'text' in section_data:
                    improved_text = section_data['text']
            
            # Case 2: Look for a section containing our target text
            else:
                for key, value in json_data.items():
                    if isinstance(value, dict) and 'text' in value:
                        improved_text = value['text']
                        break
        except:
            # If parsing fails, just keep the original text
            pass
    
    # Remove any markdown code block markers
    improved_text = re.sub(r'^```.*\n|```$', '', improved_text)
    
    return {
        "text": improved_text,
        "original": current_text
    }

def regenerate_pitch_section(section_name: str, current_text: str) -> Dict[str, Any]:
    """Completely regenerate a section of the pitch to improve its quality."""
    prompt = f"""You are a world-class startup storyteller helping to improve a pitch for investors.

I need to completely regenerate the '{section_name}' section of my pitch to make it more compelling and specific.

Current text:
"{current_text}"

Please rewrite this section to make it:
1. More specific with concrete details and metrics
2. Free of buzzwords and vague claims
3. Compelling and credible for investors
4. Structured as a short narrative that builds conviction

Return only the improved text without any explanations or formatting."""
    
    # Call LLM for regenerating the section
    regenerated_text = route_llm_call("regenerate", prompt, max_tokens=500)
    
    # Clean up the text similar to improve_pitch_section
    regenerated_text = regenerated_text.strip()
    regenerated_text = re.sub(r'^```.*\n|```$', '', regenerated_text)
    
    return {
        "text": regenerated_text,
        "original": current_text
    }

def update_pitch_with_improvements(pitch_json: Dict[str, Any], improvements: Dict[str, str], user_inputs: list) -> Dict[str, Any]:
    """Update the pitch JSON with improvements and recalculate confidence scores."""
    # Create a copy of the original pitch structure
    updated_pitch = {}
    
    for section, data in pitch_json.items():
        if section in improvements:
            # Update the section text with the improvement
            updated_pitch[section] = {
                "text": improvements[section],
                "confidence": data.get("confidence", 0.0)
            }
        else:
            # Keep the original section data
            updated_pitch[section] = data
    
    # Recalculate confidence scores
    return analyze_pitch_confidence(updated_pitch, user_inputs)

class PitchImprover:
    def __init__(self, anthropic_client: AnthropicClient):
        self.anthropic = anthropic_client
    
    def improve_section(self, section_name: str, current_text: str, user_input: str, startup_info: Dict[str, Any]) -> str:
        """Improve a pitch deck section based on user feedback"""
        system_prompt = f"""You are an expert at improving pitch deck content.
        Focus on the {section_name} section and incorporate the user's feedback
        while maintaining a professional and compelling narrative."""
        
        prompt = f"""Improve this pitch deck section:
        
        Section: {section_name}
        Current Content: {current_text}
        
        User Feedback: {user_input}
        
        Company Context:
        Name: {startup_info.get('startup_name', '')}
        Sector: {startup_info.get('sector', '')}
        Stage: {startup_info.get('stage', '')}"""
        
        try:
            improved_text = self.anthropic.complete(prompt, system_prompt)
            return improved_text
        except Exception as e:
            raise Exception(f"Section improvement error: {str(e)}")
