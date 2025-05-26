from typing import Dict, Any, Optional
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from app.lib.prisma import prisma

class DatabaseManager:
    @staticmethod
    async def save_pitch_deck(startup_id: str, content: Dict[str, Any]) -> Any:
        """Save or update a pitch deck for a startup"""
        try:
            return await prisma.pitchdeck.upsert(
                where={
                    'startupId': startup_id
                },
                create={
                    'startupId': startup_id,
                    'content': content,
                    'currentVersion': 1
                },
                update={
                    'content': content,
                    'currentVersion': {'increment': 1}
                }
            )
        except Exception as e:
            raise Exception(f"Error saving pitch deck: {str(e)}")

    @staticmethod
    async def save_feedback(pitch_deck_id: str, content: str, rating: Optional[int] = None) -> Any:
        """Save feedback for a pitch deck"""
        try:
            return await prisma.feedback.create({
                'pitchDeckId': pitch_deck_id,
                'content': content,
                'rating': rating
            })
        except Exception as e:
            raise Exception(f"Error saving feedback: {str(e)}")

    @staticmethod
    async def save_match(startup_id: str, investor_id: str, score: float, notes: Optional[str] = None) -> Any:
        """Save or update a match between startup and investor"""
        try:
            return await prisma.match.upsert(
                where={
                    'startupId_investorId': {
                        'startupId': startup_id,
                        'investorId': investor_id
                    }
                },
                create={
                    'startupId': startup_id,
                    'investorId': investor_id,
                    'score': score,
                    'notes': notes,
                    'status': 'PENDING'
                },
                update={
                    'score': score,
                    'notes': notes
                }
            )
        except Exception as e:
            raise Exception(f"Error saving match: {str(e)}")

    @staticmethod
    async def save_communication(match_id: str, content: str, type: str, metadata: Optional[Dict[str, Any]] = None) -> Any:
        """Save communication record for a match"""
        try:
            return await prisma.communication.create({
                'matchId': match_id,
                'content': content,
                'type': type,
                'metadata': metadata
            })
        except Exception as e:
            raise Exception(f"Error saving communication: {str(e)}")

    @staticmethod
    async def update_analytics(pitch_deck_id: str, views: int = 0, unique_views: int = 0, average_time: float = 0) -> Any:
        """Update analytics for a pitch deck"""
        try:
            return await prisma.analytics.upsert(
                where={
                    'pitchDeckId': pitch_deck_id
                },
                create={
                    'pitchDeckId': pitch_deck_id,
                    'views': views,
                    'uniqueViews': unique_views,
                    'averageTime': average_time,
                    'lastViewed': None
                },
                update={
                    'views': {'increment': views},
                    'uniqueViews': {'increment': unique_views},
                    'averageTime': average_time,
                    'lastViewed': 'now'
                }
            )
        except Exception as e:
            raise Exception(f"Error updating analytics: {str(e)}")

    @staticmethod
    async def get_startup_info(startup_id: str) -> Any:
        """Get startup information including pitch deck"""
        try:
            return await prisma.startup.find_unique(
                where={
                    'id': startup_id
                },
                include={
                    'pitchDeck': True,
                    'matches': {
                        'include': {
                            'investor': True,
                            'communications': True
                        }
                    }
                }
            )
        except Exception as e:
            raise Exception(f"Error fetching startup info: {str(e)}")

    @staticmethod
    async def get_investor_matches(investor_id: str) -> Any:
        """Get all matches for an investor"""
        try:
            return await prisma.investor.find_unique(
                where={
                    'id': investor_id
                },
                include={
                    'matches': {
                        'include': {
                            'startup': {
                                'include': {
                                    'pitchDeck': True
                                }
                            },
                            'communications': True
                        }
                    }
                }
            )
        except Exception as e:
            raise Exception(f"Error fetching investor matches: {str(e)}") 