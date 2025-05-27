import os
import json
from pathlib import Path

# Function to load environment variables from .env file
def load_env_vars():
    try:
        env_path = Path(__file__).parent.parent / '.env'
        if env_path.exists():
            print(f"Loading environment variables from {env_path}")
            with open(env_path, 'r') as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith('#') or '=' not in line:
                        continue
                    key, value = line.split('=', 1)
                    key = key.strip()
                    value = value.strip()
                    # Don't override existing environment variables
                    if key not in os.environ:
                        os.environ[key] = value
                        print(f"Set environment variable: {key}")
        else:
            print(f"Warning: .env file not found at {env_path}")
    except Exception as e:
        print(f"Error loading environment variables: {str(e)}")

# Load environment variables before any other imports
load_env_vars()

# Now import everything else after environment variables are loaded
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from typing import Dict, Any

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple route for testing
@app.get("/")
async def root():
    return {"message": "Server is running!"}

# API Routes
@app.post("/api/generate-pitch")
async def generate_pitch(startup_info: Dict[str, Any]):
    pitch_data = {
        "problem": {
            "text": "Businesses struggle with finding reliable AI solutions that balance accuracy and user needs.",
            "confidence": 0.85
        },
        "solution": {
            "text": "Our platform provides intelligent AI-powered tools that deliver high accuracy results.",
            "confidence": 0.9
        },
        "market": {
            "text": "The global AI market is growing rapidly with significant potential for disruption.",
            "confidence": 0.8
        },
        "business_model": {
            "text": "We offer a SaaS solution with tiered pricing and strong unit economics.",
            "confidence": 0.7
        },
        "competition": {
            "text": "We differentiate through our proprietary technology and focus on specific use cases.",
            "confidence": 0.75
        },
        "traction": {
            "text": "We've secured multiple enterprise clients with strong month-over-month growth.",
            "confidence": 0.85
        },
        "ask": {
            "text": f"We're raising {startup_info.get('raise_amount', '$1M')} to expand our operations and market reach.",
            "confidence": 0.8
        }
    }
    return {"status": "success", "data": pitch_data}

@app.post("/api/improve-section")
async def improve_section(data: Dict[str, Any]):
    section_name = data.get("section_name", "")
    user_input = data.get("user_input", "")
    
    # Create response
    section_key = section_name.lower().replace(" ", "_")
    result = {
        section_key: {
            "text": f"Based on your input about '{user_input[:30]}...', we've created an improved version that incorporates your specific details while maintaining a compelling narrative for investors. Our solution addresses the core needs you've identified with measurable results and clear market differentiation.",
            "original": user_input
        }
    }
    
    return {"status": "success", "data": result}

@app.get("/api/get-questions")
async def get_questions():
    questions = [
        "What problem does your product solve?",
        "Who are your target customers?",
        "How is your solution different from alternatives?",
        "What is your go-to-market strategy?",
        "What is your current traction?",
        "Who are your key competitors?",
        "How will you use the funding?"
    ]
    return {"status": "success", "data": questions}

@app.get("/api/match-investors")
async def match_investors():
    investors = [
        {
            "name": "Alex Chen",
            "firm": "Horizon Ventures",
            "match_score": 92,
            "investment_range": "$500K - $2M",
            "portfolio": ["TechFlow", "DataSense", "AIMetrics"],
            "sectors": ["AI", "Machine Learning"],
            "location": "New York, USA",
            "contact": "alex@example.com"
        },
        {
            "name": "Sarah Williams",
            "firm": "Elevate Capital",
            "match_score": 87,
            "investment_range": "$1M - $5M",
            "portfolio": ["SecureID", "FaceFirst"],
            "sectors": ["Security", "Enterprise Software"],
            "location": "San Francisco, USA",
            "contact": "sarah@example.com"
        }
    ]
    return {"status": "success", "data": investors}

@app.post("/api/generate-email")
async def generate_email(investor: Dict[str, Any]):
    email = f"""
Subject: Introduction from [Your Startup Name]

Dear {investor.get('name', 'Investor')},

I hope this email finds you well. I'm the founder of [Your Startup Name], and I'm reaching out because our technology aligns with your investment focus.

Our company has developed innovative solutions that address key market needs. We're currently raising {investor.get('investment_range', '$1M - $3M')} to scale our operations.

Would you be available for a brief call to discuss potential collaboration?

Best regards,
[Your Name]
Founder & CEO
"""
    return {"status": "success", "data": email}

@app.get("/api/pitch-status")
async def get_pitch_status():
    status = {
        "completion_percentage": 85,
        "strengths": [
            "Clear problem statement",
            "Strong market analysis"
        ],
        "improvement_areas": [
            "Competition section needs more detail",
            "Business model could be more specific"
        ],
        "investor_readiness": "Medium-High"
    }
    return {"status": "success", "data": status}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
