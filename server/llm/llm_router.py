from typing import Optional
from .openai_client import OpenAIClient
from .anthropic_client import AnthropicClient

# Initialize clients
openai_client = OpenAIClient()
anthropic_client = AnthropicClient()

def deduplicate_response(response: str) -> str:
    """Remove duplicate lines and paragraphs from LLM response."""
    lines = response.split('\n')
    deduped_lines = []
    prev_line = None
    empty_line_count = 0
    
    for line in lines:
        # Handle empty lines: allow max one empty line between content
        if not line.strip():
            empty_line_count += 1
            if empty_line_count <= 1:
                deduped_lines.append(line)
            continue
        
        # Reset empty line counter when we hit content
        empty_line_count = 0
        
        # Skip if line is identical to previous non-empty line
        if line.strip() == (prev_line.strip() if prev_line else None):
            continue
            
        deduped_lines.append(line)
        prev_line = line
    
    # Clean up trailing empty lines
    while deduped_lines and not deduped_lines[-1].strip():
        deduped_lines.pop()
    
    return '\n'.join(deduped_lines)

def route_llm_call(task_type: str, prompt: str, max_tokens: Optional[int] = None) -> str:
    """Route LLM calls to appropriate service based on task type"""
    try:
        if task_type in ['pitch_block', 'clarify_question']:
            # Use OpenAI for core pitch generation and clarification
            response = openai_client.complete(prompt)
        elif task_type in ['improve', 'regenerate']:
            # Use Anthropic for improvements and regeneration
            response = anthropic_client.complete(prompt)
        else:
            # Default to OpenAI
            response = openai_client.complete(prompt)
        
        return deduplicate_response(response)
    except Exception as e:
        raise Exception(f"LLM routing error: {str(e)}")
