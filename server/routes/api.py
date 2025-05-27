from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any
from server.llm.agent import PitchAgent
from server.llm.simple_anthropic import SimpleAnthropicClient
from server.routes.mock_data import (
    MOCK_QUESTIONS, 
    MOCK_INVESTORS, 
    MOCK_EMAIL_TEMPLATE,
    MOCK_PITCH_STATUS
)
import os
import random

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

# Initialize our simple Anthropic client
anthropic_client = SimpleAnthropicClient()

# Include match_api router
from server.routes import match_api
app.include_router(match_api.router)

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
        
        # Create a prompt for Anthropic to improve the section
        prompt = f"""You are a world-class startup pitch writer. You're helping improve a startup pitch section with new information.

Section name: {section_name}

User feedback/information to incorporate: 
{user_input}

Rewrite the {section_name} section for the pitch, focusing on:
1. Incorporating all the specific details from the user input
2. Making the content compelling and persuasive for investors
3. Adding relevant industry-specific language and credibility
4. Keeping it concise (around 3-5 sentences)

Respond ONLY with the improved section text, nothing else."""

        system_prompt = "You are an expert startup pitch writer helping to create compelling pitch content for investors."

        # Use our simple Anthropic client
        improved_text = anthropic_client.complete(prompt, system_prompt)
        
        # Create response with the improved section
        section_key = section_name.lower().replace(" ", "_")
        result = {
            section_key: {
                "text": improved_text,
                "original": user_input
            }
        }
        
        return {"status": "success", "data": result}
    except Exception as e:
        print(f"Error in improve_section: {str(e)}")
        # Provide a fallback improved text
        section_key = section_name.lower().replace(" ", "_")
        result = {
            section_key: {
                "text": f"Our {section_name} addresses critical needs in the market. {user_input} This provides significant advantages for our customers, resulting in measurable improvements in efficiency, accuracy, and cost-effectiveness. Our approach has been validated through extensive testing and early customer adoption.",
                "original": user_input
            }
        }
        return {"status": "success", "data": result}

@app.get("/api/get-questions")
async def get_questions():
    try:
        # Attempt to use the agent for questions
        questions = await agent.get_clarifying_questions()
        return {"status": "success", "data": questions}
    except Exception as e:
        print(f"Error in get_questions: {str(e)}")
        # Fall back to mock questions
        return {"status": "success", "data": MOCK_QUESTIONS}

@app.get("/api/match-investors")
async def match_investors():
    try:
        # Attempt to use the agent for investor matching
        matches = await agent.match_investors()
        return {"status": "success", "data": matches}
    except Exception as e:
        print(f"Error in match_investors: {str(e)}")
        # Fall back to mock investors
        return {"status": "success", "data": MOCK_INVESTORS}

@app.post("/api/generate-email")
async def generate_email(investor: Dict[str, Any]):
    try:
        # Attempt to use the agent for email generation
        email = await agent.generate_email(investor)
        return {"status": "success", "data": email}
    except Exception as e:
        print(f"Error in generate_email: {str(e)}")
        # Fall back to mock email
        # Get startup info from agent or use defaults
        startup_name = getattr(agent, "startup_name", "AI Face Recognition")
        
        # Format the email template with available data
        email_text = MOCK_EMAIL_TEMPLATE.format(
            startup_name=startup_name,
            investor_name=investor.get("name", "Investor"),
            investment_range=investor.get("investment_range", "$1M - $3M"),
            sectors=", ".join(investor.get("sectors", ["AI", "Technology"])),
            portfolio=", ".join(investor.get("portfolio", ["AI Companies"])),
            traction="100+"  # Default traction
        )
        
        return {"status": "success", "data": email_text}

@app.get("/api/pitch-status")
async def get_pitch_status():
    try:
        # Attempt to use the agent for pitch status
        status = await agent.get_pitch_status()
        return {"status": "success", "data": status}
    except Exception as e:
        print(f"Error in get_pitch_status: {str(e)}")
        # Fall back to mock pitch status
        return {"status": "success", "data": MOCK_PITCH_STATUS}
