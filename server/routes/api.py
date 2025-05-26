from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any
from server.llm.agent import PitchAgent

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the agent
agent = PitchAgent()

@app.post("/api/generate-pitch")
async def generate_pitch(startup_info: Dict[str, Any]):
    try:
        await agent.set_startup_info("test_startup", startup_info)
        pitch_data = await agent.generate_initial_pitch()
        return {"status": "success", "data": pitch_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/improve-section")
async def improve_section(data: Dict[str, Any]):
    try:
        section_name = data.get("section_name")
        user_input = data.get("user_input")
        if not section_name or not user_input:
            raise HTTPException(status_code=400, detail="Missing section_name or user_input")
        
        improved_pitch = await agent.improve_section(section_name, user_input)
        return {"status": "success", "data": improved_pitch}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/get-questions")
async def get_questions():
    try:
        questions = await agent.get_clarifying_questions()
        return {"status": "success", "data": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/match-investors")
async def match_investors():
    try:
        matches = await agent.match_investors()
        return {"status": "success", "data": matches}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/generate-email")
async def generate_email(investor: Dict[str, Any]):
    try:
        email = await agent.generate_email(investor)
        return {"status": "success", "data": email}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/pitch-status")
async def get_pitch_status():
    try:
        status = await agent.get_pitch_status()
        return {"status": "success", "data": status}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 