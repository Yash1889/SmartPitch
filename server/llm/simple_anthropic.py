import os
import requests
import json

class SimpleAnthropicClient:
    """A simple client for Anthropic API that doesn't require the anthropic package"""
    
    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "").strip()
        self.base_url = "https://api.anthropic.com/v1/messages"
        self.model = "claude-3-haiku-20240307"
        
        # Set up headers
        self.headers = {
            "Content-Type": "application/json",
            "X-API-Key": self.api_key,
            "anthropic-version": "2023-06-01"
        }
    
    def complete(self, prompt, system_prompt=None):
        """Call the Anthropic API to get a completion"""
        try:
            payload = {
                "model": self.model,
                "max_tokens": 1000,
                "temperature": 0.7,
                "messages": [{"role": "user", "content": prompt}]
            }
            
            if system_prompt:
                payload["system"] = system_prompt
                
            response = requests.post(
                self.base_url,
                headers=self.headers,
                data=json.dumps(payload)
            )
            
            # Check if the request was successful
            if response.status_code == 200:
                data = response.json()
                return data["content"][0]["text"]
            else:
                print(f"Error from Anthropic API: {response.status_code}")
                print(f"Response: {response.text}")
                # Fall back to a mock response
                return self._mock_response(prompt)
                
        except Exception as e:
            print(f"Exception calling Anthropic API: {str(e)}")
            return self._mock_response(prompt)
    
    def _mock_response(self, prompt):
        """Generate a mock response when the API fails"""
        return f"Based on your input, I've crafted an improved version that incorporates your specific details while maintaining a compelling narrative structure. The text highlights key strengths, addresses investor concerns, and presents a clear value proposition with supporting evidence."
