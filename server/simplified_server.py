from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from typing import Dict, Any
import os
import json
import requests
import random

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data for endpoints
MOCK_QUESTIONS = [
    "What problem does your product solve that customers are willing to pay for?",
    "Who are your target customers and how large is this market segment?",
    "How is your solution different from existing alternatives?",
    "What is your go-to-market strategy?",
    "How do you plan to acquire customers and what is your CAC?",
    "What is your current traction (users, revenue, growth rate)?",
    "Who are your key competitors and what is your competitive advantage?",
    "What are your key revenue streams and pricing model?",
    "What are the primary risks to your business and how do you plan to mitigate them?",
    "How will you use the funding you're raising?"
]

MOCK_INVESTORS = [
    {
        "name": "Alex Chen",
        "firm": "Horizon Ventures",
        "match_score": 92,
        "investment_range": "$500K - $2M",
        "portfolio": ["TechFlow", "DataSense", "AIMetrics"],
        "sectors": ["AI", "Machine Learning", "Computer Vision"],
        "location": "New York, USA",
        "contact": "alex@horizonvc.com"
    },
    {
        "name": "Sarah Williams",
        "firm": "Elevate Capital",
        "match_score": 87,
        "investment_range": "$1M - $5M",
        "portfolio": ["SecureID", "FaceFirst", "RecogniTech"],
        "sectors": ["Security", "Facial Recognition", "Enterprise Software"],
        "location": "San Francisco, USA",
        "contact": "sarah@elevatecap.com"
    },
    {
        "name": "Michael Johnson",
        "firm": "TechFusion Partners",
        "match_score": 85,
        "investment_range": "$250K - $1M",
        "portfolio": ["VerifyMe", "SmartScan", "IDCloud"],
        "sectors": ["Security Tech", "AI", "SaaS"],
        "location": "Boston, USA",
        "contact": "michael@techfusionpartners.com"
    },
    {
        "name": "Priya Sharma",
        "firm": "Innovation Accelerator",
        "match_score": 83,
        "investment_range": "$500K - $3M",
        "portfolio": ["DeepSight", "IdentityAI", "FacialMetrix"],
        "sectors": ["Computer Vision", "AI/ML", "Identity Verification"],
        "location": "Austin, USA",
        "contact": "priya@innovationacc.com"
    },
    {
        "name": "David Lee",
        "firm": "NextGen Ventures",
        "match_score": 79,
        "investment_range": "$1M - $4M",
        "portfolio": ["BioMetrics+", "SecurityFirst", "TrustID"],
        "sectors": ["Biometrics", "Security", "Enterprise Tech"],
        "location": "Chicago, USA",
        "contact": "david@nextgenvc.com"
    }
]

MOCK_PITCH_STATUS = {
    "completion_percentage": 85,
    "strengths": [
        "Clear problem statement",
        "Compelling market size data",
        "Strong traction metrics"
    ],
    "improvement_areas": [
        "Competition section needs more specific differentiators",
        "Business model could include more detail on unit economics",
        "Ask section would benefit from more specific use of funds"
    ],
    "investor_readiness": "Medium-High",
    "recommended_next_steps": [
        "Enhance competition section with direct competitor comparison",
        "Add more detail on go-to-market strategy",
        "Include key team credentials and background"
    ]
}

# Function to generate a sample pitch
def generate_sample_pitch(startup_info):
    startup_name = startup_info.get("startup_name", "Your Startup")
    sector = startup_info.get("sector", "Technology")
    raise_amount = startup_info.get("raise_amount", "$1M")
    product = startup_info.get("product", "")
    location = startup_info.get("location", "San Francisco, CA")
    
    return {
        "problem": {
            "text": f"Businesses struggle with finding reliable {product} solutions that balance accuracy, privacy, and ethical considerations. Traditional systems have high error rates for diverse populations and raise significant security concerns.",
            "confidence": 0.85
        },
        "solution": {
            "text": f"{startup_name} provides advanced {sector}-powered {product} technology that achieves 99.7% accuracy across all demographic groups while maintaining strong privacy safeguards and ethical compliance.",
            "confidence": 0.9
        },
        "market": {
            "text": f"The global {product} market is projected to reach $12.7B by 2028, growing at 16.8% CAGR. Our target segments in security, access control, and identity verification represent a $4.2B immediately addressable market.",
            "confidence": 0.88
        },
        "business_model": {
            "text": f"We offer a SaaS solution with tiered pricing: Basic ($199/mo), Professional ($499/mo), and Enterprise ($2,999/mo). Current margins are 83% with CAC of $1,850 and LTV of $25,400.",
            "confidence": 0.82
        },
        "competition": {
            "text": f"Key competitors include FaceID Tech (lower accuracy), Clearview (privacy concerns), and traditional biometric systems. We differentiate through our proprietary neural architecture that maintains accuracy while using 70% less training data.",
            "confidence": 0.78
        },
        "traction": {
            "text": f"We've secured 15 enterprise clients including two Fortune 500 companies, generating $42K MRR with 22% month-over-month growth. Our churn rate is under 3%, and we've achieved 142% net revenue retention.",
            "confidence": 0.92
        },
        "ask": {
            "text": f"We're raising {raise_amount} to expand our engineering team (40%), accelerate sales (35%), and enhance our ethical AI governance framework (25%). Targeting 3x ARR growth in 18 months.",
            "confidence": 0.88
        }
    }

# Function to improve section text
def improve_section_text(section_name, user_input):
    try:
        # Use OpenAI API for simplicity
        openai_api_key = os.getenv("OPENAI_API_KEY", "").strip()
        anthropic_api_key = os.getenv("ANTHROPIC_API_KEY", "").strip()
        
        # Try OpenAI first
        if openai_api_key:
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {openai_api_key}"
            }
            
            prompt = f"""Improve this {section_name} section for a startup pitch based on this additional information:

{user_input}

Make it compelling, specific, and focused on investors. Keep it to 3-5 sentences maximum."""
            
            payload = {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {"role": "system", "content": "You are an expert pitch writer helping startups create compelling content for investors."},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.7
            }
            
            response = requests.post(
                "https://api.openai.com/v1/chat/completions",
                headers=headers,
                data=json.dumps(payload)
            )
            
            if response.status_code == 200:
                data = response.json()
                return data["choices"][0]["message"]["content"].strip()
        
        # Try Anthropic if OpenAI fails
        if anthropic_api_key:
            headers = {
                "Content-Type": "application/json",
                "x-api-key": anthropic_api_key,
                "anthropic-version": "2023-06-01"
            }
            
            prompt = f"""Improve this {section_name} section for a startup pitch based on this additional information:

{user_input}

Make it compelling, specific, and focused on investors. Keep it to 3-5 sentences maximum."""
            
            payload = {
                "model": "claude-3-haiku-20240307",
                "max_tokens": 1000,
                "temperature": 0.7,
                "system": "You are an expert pitch writer helping startups create compelling content for investors.",
                "messages": [{"role": "user", "content": prompt}]
            }
            
            response = requests.post(
                "https://api.anthropic.com/v1/messages",
                headers=headers,
                data=json.dumps(payload)
            )
            
            if response.status_code == 200:
                data = response.json()
                return data["content"][0]["text"].strip()
    
    except Exception as e:
        print(f"Error using AI APIs: {str(e)}")
    
    # Fallback response if all API calls fail
    return f"Our {section_name} addresses the critical needs you mentioned about {user_input[:30]}... We've developed proprietary technology that achieves 99.7% accuracy while maintaining strong privacy safeguards. This provides our customers with measurable improvements in efficiency and cost-effectiveness, resulting in an average ROI of 320% within the first year."

# Function to generate mock email for investor
def generate_mock_email(investor, startup_name="AI Face Recognition"):
    email_template = f"""
Subject: Introducing {startup_name}: Advanced Technology Seeking {investor.get('investment_range', '$1M - $3M')} Investment

Dear {investor.get('name', 'Investor')},

I hope this email finds you well. My name is [Founder Name], founder of {startup_name}. I'm reaching out because our technology aligns perfectly with your investment focus on {', '.join(investor.get('sectors', ['AI', 'Technology']))}.

{startup_name} has developed advanced technology that achieves 99.7% accuracy while addressing key market concerns around privacy and security. Our solution is currently being used by 100+ clients across multiple use cases.

Some highlights of our business:
- Proprietary algorithms trained on diverse datasets to eliminate recognition bias
- Unique privacy-preserving technology that complies with GDPR and CCPA
- SaaS model with 83% margins and $18K MRR growing at 22% month-over-month
- Team with 15+ years combined experience in our industry

We're raising {investor.get('investment_range', '$1M - $3M')} to scale our sales team and expand our enterprise client base. Given your investments in {', '.join(investor.get('portfolio', ['Similar Companies']))}, I believe there could be strong synergies and would value your expertise in scaling B2B SaaS businesses.

Would you be available for a brief 20-minute call next week to discuss potential collaboration? I'd be happy to provide our pitch deck and demo access in advance.

Thank you for your consideration.

Best regards,
[Your Name]
Founder & CEO, {startup_name}
[Your Phone]
"""
    return email_template


# API Routes
@app.post("/api/generate-pitch")
async def generate_pitch(startup_info: Dict[str, Any]):
    try:
        pitch_data = generate_sample_pitch(startup_info)
        return {"status": "success", "data": pitch_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/improve-section")
async def improve_section(data: Dict[str, Any]):
    try:
        section_name = data.get("section_name", "")
        user_input = data.get("user_input", "")
        
        if not section_name or not user_input:
            raise HTTPException(status_code=400, detail="Missing section_name or user_input")
        
        # Get improved text
        improved_text = improve_section_text(section_name, user_input)
        
        # Create response
        section_key = section_name.lower().replace(" ", "_")
        result = {
            section_key: {
                "text": improved_text,
                "original": user_input
            }
        }
        
        return {"status": "success", "data": result}
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/get-questions")
async def get_questions():
    return {"status": "success", "data": MOCK_QUESTIONS}

@app.get("/api/match-investors")
async def match_investors():
    return {"status": "success", "data": MOCK_INVESTORS}

@app.post("/api/generate-email")
async def generate_email(investor: Dict[str, Any]):
    try:
        email = generate_mock_email(investor)
        return {"status": "success", "data": email}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/pitch-status")
async def get_pitch_status():
    return {"status": "success", "data": MOCK_PITCH_STATUS}

if __name__ == "__main__":
    uvicorn.run("simplified_server:app", host="0.0.0.0", port=8000)
