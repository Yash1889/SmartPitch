from typing import Dict, List, Any, Optional
from .confidence_scorer import grade_sentence
from .clarifier import get_clarifying_questions
from .generator import generate_pitch_json, generate_email
from .improver import improve_pitch_section
from .llm_router import route_llm_call
from .matching import match_vc_to_startup_enhanced
from .db import DatabaseManager

class PitchAgent:
    def __init__(self):
        self.db = DatabaseManager()
        self.startup_info = {}
        self.pitch_data = {}
        self.confidence_scores = {}
        self.startup_id = None
        
    async def set_startup_info(self, startup_id: str, info: Dict[str, Any]):
        """Set startup information for pitch generation"""
        self.startup_id = startup_id
        self.startup_info = info
        
        # Print info for debugging
        print(f"Setting startup info: {info}")
        
        # Load existing pitch data if available
        try:
            startup_data = await self.db.get_startup_info(startup_id)
            if startup_data and startup_data.get('pitchDeck'):
                # Handle both object and dictionary access patterns
                pitch_deck = startup_data['pitchDeck']
                if hasattr(pitch_deck, 'content'):
                    self.pitch_data = pitch_deck.content
                elif isinstance(pitch_deck, dict) and 'content' in pitch_deck:
                    self.pitch_data = pitch_deck['content']
                else:
                    print(f"No content found in pitch deck data: {pitch_deck}")
        except Exception as e:
            print(f"Non-critical error loading existing pitch data: {str(e)}")
            # Continue without existing data
            
    async def generate_initial_pitch(self) -> Dict[str, Any]:
        """Generate initial pitch deck content"""
        try:
            # Print the startup info for debugging
            print(f"Startup info received: {self.startup_info}")
            
            # Generate pitch sections with proper field mapping
            self.pitch_data = generate_pitch_json(
                startup_name=self.startup_info.get('startup_name', ''),
                industry=self.startup_info.get('sector', ''),
                product=self.startup_info.get('product', ''),
                traction=self.startup_info.get('traction', ''),
                ask=self.startup_info.get('raise_amount', ''),  # Fixed field name
                stage=self.startup_info.get('stage', '')
            )
            
            # Save to database
            if self.startup_id:
                try:
                    await self.db.save_pitch_deck(
                        self.startup_id,
                        self.pitch_data
                    )
                except Exception as db_error:
                    print(f"Database save error (non-critical): {str(db_error)}")
            
            return self.pitch_data
        except Exception as e:
            print(f"Detailed error in generate_initial_pitch: {str(e)}")
            raise Exception(f"Error generating pitch: {str(e)}")

    
    async def get_clarifying_questions(self) -> List[Dict[str, str]]:
        """Get clarifying questions for low-confidence sections"""
        try:
            if not self.pitch_data:
                print("No pitch data available for generating questions")
                return []
                
            questions = get_clarifying_questions(self.pitch_data)
            
            # Save feedback to database
            try:
                if self.startup_id and questions:
                    pitch_deck = await self.db.get_startup_info(self.startup_id)
                    if pitch_deck and pitch_deck.get('pitchDeck'):
                        pitch_deck_id = None
                        if hasattr(pitch_deck['pitchDeck'], 'id'):
                            pitch_deck_id = pitch_deck['pitchDeck'].id
                        elif isinstance(pitch_deck['pitchDeck'], dict) and 'id' in pitch_deck['pitchDeck']:
                            pitch_deck_id = pitch_deck['pitchDeck']['id']
                            
                        if pitch_deck_id:
                            await self.db.save_feedback(
                                pitch_deck_id,
                                f"Clarifying questions generated: {questions}",
                                rating=None
                            )
            except Exception as db_error:
                print(f"Non-critical database error: {str(db_error)}")
                # Continue even if database operations fail
            
            return questions
        except Exception as e:
            print(f"Error getting clarifying questions: {str(e)}")
            # Return empty list instead of failing
            return []
    
    async def improve_section(self, section_name: str, user_input: str) -> Dict[str, Any]:
        """Improve a specific section based on user input"""
        try:
            # Print debug info
            print(f"Attempting to improve section: {section_name}")
            print(f"Current pitch data: {self.pitch_data}")
            
            # Check if we have any pitch data
            if not self.pitch_data:
                # If no pitch data, let's create a sample pitch for testing
                print("No pitch data available. Creating a sample pitch.")
                self.pitch_data = {
                    "problem": {"text": "Businesses struggle with finding the right AI solutions.", "confidence": 0.8},
                    "solution": {"text": "Our platform provides easy access to AI tools.", "confidence": 0.7},
                    "market": {"text": "The AI market is growing rapidly.", "confidence": 0.8},
                    "business_model": {"text": "We offer subscription-based pricing.", "confidence": 0.6},
                    "competition": {"text": "Few competitors offer our range of AI services.", "confidence": 0.7},
                    "traction": {"text": "We have acquired 100 customers in our first 6 months.", "confidence": 0.8},
                    "ask": {"text": "We're seeking $1M to scale our operations.", "confidence": 0.9}
                }
            
            # Convert section_name to possible variations
            section_variations = [
                section_name.lower(),
                section_name.lower().replace(' ', '_'),
                section_name.lower().replace('_', ' '),
                section_name.lower().replace('-', '_'),
                section_name.lower().replace('-', ' ')
            ]
            
            # Find matching section in the pitch data
            matching_section = None
            for section_key in self.pitch_data.keys():
                if section_key.lower() in section_variations or any(var in section_key.lower() for var in section_variations):
                    matching_section = section_key
                    break
            
            if not matching_section:
                # If section not found, use the first standard section as fallback
                standard_sections = ["problem", "solution", "market", "business_model", "competition", "traction", "ask"]
                for std_section in standard_sections:
                    if std_section in self.pitch_data:
                        matching_section = std_section
                        break
                
                if not matching_section:
                    # Use first available section if no standard sections are found
                    matching_section = list(self.pitch_data.keys())[0]
                
                print(f"Section '{section_name}' not found. Using '{matching_section}' instead.")
                
            print(f"Found matching section: {matching_section}")
            
            # Now improve the section
            improved_section = improve_pitch_section(
                matching_section,
                self.pitch_data[matching_section]['text'],
                user_input
            )
            
            # Update the pitch data
            self.pitch_data[matching_section] = improved_section
            
            # Save updated pitch to database
            if self.startup_id:
                try:
                    await self.db.save_pitch_deck(
                        self.startup_id,
                        self.pitch_data
                    )
                except Exception as db_error:
                    print(f"Database save error (non-critical): {str(db_error)}")
            
            return self.pitch_data
        except Exception as e:
            print(f"Error improving section: {str(e)}")
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
