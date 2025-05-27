import json

def extract_text_from_json(text):
    """Try to extract text from JSON if it looks like JSON"""
    try:
        if text.strip().startswith('{') and text.strip().endswith('}'):
            data = json.loads(text)
            # Try to find a text field in the JSON
            if isinstance(data, dict):
                # Case 1: Direct text field
                if 'text' in data:
                    return data['text']
                
                # Case 2: Nested text field
                for key, value in data.items():
                    if isinstance(value, dict) and 'text' in value:
                        return value['text']
    except:
        pass
    return text  # Return original if not JSON or can't extract

def improve_text(section_name, current_text, user_feedback):
    """Simple function to combine text with user feedback for testing"""
    improved = f"IMPROVED {section_name.upper()}: Based on your feedback about {user_feedback}, " + \
               f"here's the enhanced version of the original text: '{current_text}'"
    return improved
