from typing import Dict, List, Any, Optional
from .confidence_scorer import grade_sentence
from .clarifier import get_clarifying_questions
from .generator import generate_pitch_json, generate_email
from .improver import improve_pitch_section
from .llm_router import route_llm_call
from .matching import match_vc_to_startup_enhanced
# from .db import DatabaseManager  # Temporarily disabled

class PitchAgent:
    def __init__(self):
        # self.db = DatabaseManager()  # Temporarily disabled
        self.startup_info = {}
        self.pitch_data = {}
        self.confidence_scores = {}
        self.startup_id = None
        
    async def set_startup_info(self, startup_id: str, info: Dict[str, Any]):
        """Set startup information for pitch generation"""
        self.startup_id = startup_id
        self.startup_info = info
        
        # Load existing pitch data if available
        startup_data = await self.db.get_startup_info(startup_id)
        if startup_data and startup_data.get('pitchDeck'):
            self.pitch_data = startup_data['pitchDeck'].content
            
    async def generate_initial_pitch(self) -> Dict[str, Any]:
        """Generate initial pitch deck content"""
        try:
            # Generate pitch sections
            self.pitch_data = generate_pitch_json(
                self.startup_info.get('startup_name', ''),
                self.startup_info.get('sector', ''),
                self.startup_info.get('product', ''),
                self.startup_info.get('traction', ''),
                self.startup_info.get('raise_', ''),
                self.startup_info.get('stage', '')
            )
            
            # Save to database
            if self.startup_id:
                await self.db.save_pitch_deck(
                    self.startup_id,
                    self.pitch_data
                )
            
            return self.pitch_data
        except Exception as e:
            raise Exception(f"Error generating pitch: {str(e)}")
    
    async def get_clarifying_questions(self) -> List[Dict[str, str]]:
        """Get clarifying questions for low-confidence sections"""
        try:
            questions = get_clarifying_questions(self.pitch_data)
            
            # Save feedback to database
            if self.startup_id and questions:
                pitch_deck = await self.db.get_startup_info(self.startup_id)
                if pitch_deck and pitch_deck.get('pitchDeck'):
                    await self.db.save_feedback(
                        pitch_deck['pitchDeck'].id,
                        f"Clarifying questions generated: {questions}",
                        rating=None
                    )
            
            return questions
        except Exception as e:
            raise Exception(f"Error getting clarifying questions: {str(e)}")
    
    async def improve_section(self, section_name: str, user_input: str) -> Dict[str, Any]:
        """Improve a specific section based on user input"""
        try:
            if section_name in self.pitch_data:
                improved_section = improve_pitch_section(
                    section_name,
                    self.pitch_data[section_name]['text'],
                    user_input
                )
                
                self.pitch_data[section_name] = improved_section
                
                # Save updated pitch to database
                if self.startup_id:
                    await self.db.save_pitch_deck(
                        self.startup_id,
                        self.pitch_data
                    )
            
            return self.pitch_data
        except Exception as e:
            raise Exception(f"Error improving section: {str(e)}")
    
    async def match_investors(self) -> List[Dict[str, Any]]:
        """Find matching investors based on startup profile"""
        try:
            matches = match_vc_to_startup_enhanced(
                self.startup_info.get('startup_name', ''),
                self.startup_info.get('sector', ''),
                self.startup_info.get('stage', ''),
                self.startup_info.get('location', '')
            )
            
            # Save matches to database
            if self.startup_id:
                for match in matches:
                    await self.db.save_match(
                        self.startup_id,
                        match['id'],  # Assuming the match has an id field
                        match.get('match_score', 0.0),
                        match.get('reasons', [])
                    )
            
            return matches
        except Exception as e:
            raise Exception(f"Error matching investors: {str(e)}")
    
    async def generate_email(self, investor: Dict[str, str]) -> str:
        """Generate a personalized email for an investor"""
        try:
            email_content = generate_email(
                self.pitch_data,
                investor.get('name', ''),
                self.startup_info.get('your_name', ''),
                self.startup_info.get('startup_name', ''),
                self.startup_info.get('your_email', '')
            )
            
            # Save communication to database
            if self.startup_id and investor.get('id'):
                match = await self.db.save_match(
                    self.startup_id,
                    investor['id'],
                    1.0,  # Full score since email is being sent
                    "Email generated and ready to send"
                )
                
                if match:
                    await self.db.save_communication(
                        match.id,
                        email_content,
                        'EMAIL',
                        {'status': 'DRAFT'}
                    )
            
            return email_content
        except Exception as e:
            raise Exception(f"Error generating email: {str(e)}")
    
    async def get_pitch_status(self) -> Dict[str, Any]:
        """Get current pitch status including confidence scores"""
        try:
            status = {
                'pitch_data': self.pitch_data,
                'clarifying_questions': await self.get_clarifying_questions()
            }
            
            # Add analytics if available
            if self.startup_id:
                startup_data = await self.db.get_startup_info(self.startup_id)
                if startup_data and startup_data.get('pitchDeck'):
                    status['analytics'] = startup_data['pitchDeck'].analytics
            
            return status
        except Exception as e:
            raise Exception(f"Error getting pitch status: {str(e)}")