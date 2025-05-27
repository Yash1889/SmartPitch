from typing import Dict, Any, Optional
import json
import os
import uuid
from datetime import datetime

# Create data directory if it doesn't exist
os.makedirs('data', exist_ok=True)

class DatabaseManager:
    def __init__(self):
        # File paths for different data types
        self.data_dir = 'data'
        self.startups_file = os.path.join(self.data_dir, 'startups.json')
        self.investors_file = os.path.join(self.data_dir, 'investors.json')
        self.pitch_decks_file = os.path.join(self.data_dir, 'pitch_decks.json')
        self.matches_file = os.path.join(self.data_dir, 'matches.json')
        self.communications_file = os.path.join(self.data_dir, 'communications.json')
        self.feedback_file = os.path.join(self.data_dir, 'feedback.json')
        self.analytics_file = os.path.join(self.data_dir, 'analytics.json')
        
        # Initialize data storage
        self._data = {
            'startups': self._load_json(self.startups_file, {}),
            'investors': self._load_json(self.investors_file, {}),
            'pitch_decks': self._load_json(self.pitch_decks_file, {}),
            'matches': self._load_json(self.matches_file, {}),
            'communications': self._load_json(self.communications_file, {}),
            'feedback': self._load_json(self.feedback_file, []),
            'analytics': self._load_json(self.analytics_file, {})
        }
    
    def _load_json(self, file_path, default_value):
        """Load JSON data from file or return default if file doesn't exist"""
        try:
            if os.path.exists(file_path):
                with open(file_path, 'r') as f:
                    return json.load(f)
            return default_value
        except Exception as e:
            print(f"Error loading {file_path}: {str(e)}")
            return default_value
    
    def _save_json(self, file_path, data):
        """Save data to JSON file"""
        try:
            with open(file_path, 'w') as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            print(f"Error saving to {file_path}: {str(e)}")
    
    async def save_pitch_deck(self, startup_id: str, content: Dict[str, Any]) -> Any:
        """Save or update a pitch deck for a startup"""
        try:
            deck_id = f"pitch_{startup_id}"
            
            if deck_id in self._data['pitch_decks']:
                version = self._data['pitch_decks'][deck_id].get('currentVersion', 0) + 1
            else:
                version = 1
                
            pitch_deck = {
                'id': deck_id,
                'startupId': startup_id,
                'content': content,
                'currentVersion': version,
                'updatedAt': datetime.now().isoformat()
            }
            
            self._data['pitch_decks'][deck_id] = pitch_deck
            self._save_json(self.pitch_decks_file, self._data['pitch_decks'])
            
            # Link to startup
            if startup_id not in self._data['startups']:
                self._data['startups'][startup_id] = {
                    'id': startup_id,
                    'pitchDeckId': deck_id
                }
            else:
                self._data['startups'][startup_id]['pitchDeckId'] = deck_id
            self._save_json(self.startups_file, self._data['startups'])
            
            return pitch_deck
        except Exception as e:
            print(f"Error saving pitch deck: {str(e)}")
            return None

    async def save_feedback(self, pitch_deck_id: str, content: str, rating: Optional[int] = None) -> Any:
        """Save feedback for a pitch deck"""
        try:
            feedback_id = f"feedback_{len(self._data['feedback']) + 1}"
            
            feedback = {
                'id': feedback_id,
                'pitchDeckId': pitch_deck_id,
                'content': content,
                'rating': rating,
                'createdAt': datetime.now().isoformat()
            }
            
            self._data['feedback'].append(feedback)
            self._save_json(self.feedback_file, self._data['feedback'])
            return feedback
        except Exception as e:
            print(f"Error saving feedback: {str(e)}")
            return None

    async def save_match(self, startup_id: str, investor_id: str, score: float, notes: Optional[str] = None) -> Any:
        """Save or update a match between startup and investor"""
        try:
            match_id = f"match_{startup_id}_{investor_id}"
            
            match = {
                'id': match_id,
                'startupId': startup_id,
                'investorId': investor_id,
                'score': score,
                'notes': notes or '',
                'status': 'PENDING',
                'updatedAt': datetime.now().isoformat()
            }
            
            self._data['matches'][match_id] = match
            self._save_json(self.matches_file, self._data['matches'])
            
            # Create investor if it doesn't exist
            if investor_id not in self._data['investors']:
                self._data['investors'][investor_id] = {
                    'id': investor_id,
                    'name': f"Investor {investor_id}",
                }
                self._save_json(self.investors_file, self._data['investors'])
            
            return match
        except Exception as e:
            print(f"Error saving match: {str(e)}")
            return None

    async def save_communication(self, match_id: str, content: str, type: str, metadata: Optional[Dict[str, Any]] = None) -> Any:
        """Save communication record for a match"""
        try:
            comm_id = f"comm_{match_id}_{len(self._data.get('communications', {}).get(match_id, [])) + 1}"
            
            communication = {
                'id': comm_id,
                'matchId': match_id,
                'content': content,
                'type': type,
                'metadata': metadata or {},
                'createdAt': datetime.now().isoformat()
            }
            
            if match_id not in self._data['communications']:
                self._data['communications'][match_id] = []
                
            self._data['communications'][match_id].append(communication)
            self._save_json(self.communications_file, self._data['communications'])
            return communication
        except Exception as e:
            print(f"Error saving communication: {str(e)}")
            return None

    async def update_analytics(self, pitch_deck_id: str, views: int = 0, unique_views: int = 0, average_time: float = 0) -> Any:
        """Update analytics for a pitch deck"""
        try:
            if pitch_deck_id in self._data['analytics']:
                analytics = self._data['analytics'][pitch_deck_id]
                analytics['views'] += views
                analytics['uniqueViews'] += unique_views
                analytics['averageTime'] = average_time
                analytics['lastViewed'] = datetime.now().isoformat()
            else:
                analytics = {
                    'pitchDeckId': pitch_deck_id,
                    'views': views,
                    'uniqueViews': unique_views,
                    'averageTime': average_time,
                    'lastViewed': datetime.now().isoformat() if views > 0 else None
                }
                
            self._data['analytics'][pitch_deck_id] = analytics
            self._save_json(self.analytics_file, self._data['analytics'])
            return analytics
        except Exception as e:
            print(f"Error updating analytics: {str(e)}")
            return None

    async def get_startup_info(self, startup_id: str) -> Any:
        """Get startup information including pitch deck"""
        try:
            if startup_id not in self._data['startups']:
                return None
                
            startup = self._data['startups'][startup_id]
            pitch_deck_id = startup.get('pitchDeckId')
            
            # Get pitch deck if it exists
            pitch_deck = None
            if pitch_deck_id and pitch_deck_id in self._data['pitch_decks']:
                pitch_deck = self._data['pitch_decks'][pitch_deck_id]
                
                # Get analytics if they exist
                if pitch_deck_id in self._data['analytics']:
                    pitch_deck['analytics'] = self._data['analytics'][pitch_deck_id]
            
            # Get matches if they exist
            matches = []
            for match_id, match in self._data['matches'].items():
                if match.get('startupId') == startup_id:
                    # Add investor info
                    investor_id = match.get('investorId')
                    if investor_id in self._data['investors']:
                        match['investor'] = self._data['investors'][investor_id]
                    
                    # Add communications
                    match['communications'] = self._data['communications'].get(match_id, [])
                    matches.append(match)
            
            # Return full startup info
            result = {
                **startup,
                'pitchDeck': pitch_deck,
                'matches': matches
            }
            
            return result
        except Exception as e:
            print(f"Error fetching startup info: {str(e)}")
            return None

    async def get_investor_matches(self, investor_id: str) -> Any:
        """Get all matches for an investor"""
        try:
            if investor_id not in self._data['investors']:
                return None
                
            investor = self._data['investors'][investor_id]
            
            # Get matches if they exist
            matches = []
            for match_id, match in self._data['matches'].items():
                if match.get('investorId') == investor_id:
                    # Add startup info
                    startup_id = match.get('startupId')
                    if startup_id in self._data['startups']:
                        startup = self._data['startups'][startup_id]
                        
                        # Add pitch deck if it exists
                        pitch_deck_id = startup.get('pitchDeckId')
                        if pitch_deck_id and pitch_deck_id in self._data['pitch_decks']:
                            startup['pitchDeck'] = self._data['pitch_decks'][pitch_deck_id]
                        
                        match['startup'] = startup
                    
                    # Add communications
                    match['communications'] = self._data['communications'].get(match_id, [])
                    matches.append(match)
            
            # Return full investor info
            result = {
                **investor,
                'matches': matches
            }
            
            return result
        except Exception as e:
            print(f"Error fetching investor matches: {str(e)}")
            return None 