import os
from dotenv import load_dotenv
from anthropic import Anthropic
from typing import Dict, Any

# Load environment variables from .env
load_dotenv()

class AnthropicClient:
    def __init__(self):
        self.client = Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))
        self.model = "claude-3-opus-20240229"
    
    def complete(self, prompt: str, system_prompt: str = None) -> str:
        """Get completion from Anthropic API"""
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
            raise Exception(f"Anthropic API error: {str(e)}")
    
    def improve(self, text: str, feedback: str) -> str:
        """Improve text based on feedback"""
        prompt = f"""Please improve the following text based on this feedback:
        
        Original text:
        {text}
        
        Feedback:
        {feedback}
        
        Provide an improved version that addresses the feedback while maintaining the original message."""
        
        try:
            return self.complete(prompt)
        except Exception as e:
            raise Exception(f"Improvement error: {str(e)}")

def call_claude(prompt: str, temperature: float = 0.3, max_tokens: int = 512) -> str:
    """
    Send a prompt to Anthropic Claude and return the completion.

    Args:
        prompt: The user prompt to send to Claude.
        temperature: Sampling temperature.
        max_tokens: Maximum tokens to sample in the response.

    Returns:
        The generated text response from Claude, stripped of leading/trailing whitespace.
    """
    response = client.messages.create(
        model="claude-3-opus-20240229",
        max_tokens=max_tokens,
        temperature=temperature,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.content[0].text.strip()
