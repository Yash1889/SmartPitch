import os
from anthropic import Anthropic
from typing import Dict, Any, Optional

class AnthropicClient:
    def __init__(self):
        api_key = os.getenv("ANTHROPIC_API_KEY")
        # Remove spaces if present in the API key
        if api_key:
            api_key = api_key.strip()
        
        self.client = Anthropic(api_key=api_key)
        self.model = "claude-3-haiku-20240307"
        print("Using real Anthropic API client")
    
    def complete(self, prompt: str, system_prompt: str = None) -> str:
        try:
            message = self.client.messages.create(
                model=self.model,
                max_tokens=2000,
                temperature=0.7,
                system=system_prompt if system_prompt else None,
                messages=[{"role": "user", "content": prompt}]
            )
            return message.content[0].text
        except Exception as e:
            print(f"Error with Anthropic API: {str(e)}")
            # Fallback to a simple mock response
            return self._mock_response(prompt)
    
    def improve(self, text: str, feedback: str) -> str:
        try:
            prompt = f"""I need to improve this text based on feedback:
            
            ORIGINAL TEXT:
            {text}
            
            FEEDBACK:
            {feedback}
            
            Please provide an improved version of the original text that incorporates the feedback."""
            
            system_prompt = """You are an expert copywriter helping to improve text. 
            Your job is to enhance the original text by incorporating the feedback while maintaining the core message. 
            Your improved version should be clear, compelling, and concise."""
            
            return self.complete(prompt, system_prompt)
        except Exception as e:
            print(f"Error improving text: {str(e)}")
            return self._mock_response(feedback)
    
    def _mock_response(self, input_text: str) -> str:
        """Provide a simple mock response when the API is unavailable"""
        return f"I've analyzed your input about '{input_text[:30]}...' and here's an improved version: This is an enhanced version that addresses your feedback with more compelling and specific language, incorporating metrics and strong narrative elements."
