import os
from openai import OpenAI
from typing import Dict, Any, List

class OpenAIClient:
    def __init__(self):
        self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
        self.model = "gpt-4-turbo-preview"

    def complete(self, prompt: str, system_prompt: str = None) -> str:
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})
        
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=0.7,
                max_tokens=2000
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"OpenAI API error: {str(e)}")
    
    def analyze(self, text: str, criteria: List[str]) -> Dict[str, Any]:
        """Analyze text based on given criteria"""
        prompt = f"""Analyze the following text based on these criteria: {', '.join(criteria)}
        
        Text: {text}
        
        Provide a JSON response with scores and explanations for each criterion."""
        
        try:
            response = self.complete(prompt)
            return eval(response)  # Convert string response to dict
        except Exception as e:
            raise Exception(f"Analysis error: {str(e)}")
