from fastapi import APIRouter, HTTPException
from typing import Dict, Any
from server.llm.dummy_improve import improve_text, extract_text_from_json

router = APIRouter()

@router.post("/api/improve-section-test")
async def improve_section_test(data: Dict[str, Any]):
    """Test endpoint for section improvement"""
    try:
        section_name = data.get("section_name", "")
        user_input = data.get("user_input", "")
        
        if not section_name or not user_input:
            raise HTTPException(status_code=400, detail="Missing section_name or user_input")
        
        # Use simple dummy text for testing
        current_text = "This is the original section text that needs improvement."
        
        # Generate improved text
        improved = improve_text(section_name, current_text, user_input)
        
        # Create response with improved section
        result = {
            section_name.lower().replace(" ", "_"): {
                "text": improved,
                "original": current_text
            }
        }
        
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error improving section: {str(e)}")
