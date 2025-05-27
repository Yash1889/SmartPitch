"""Mock data for API endpoints when real AI services are unavailable"""

# Mock questions for startups
MOCK_QUESTIONS = [
    "What problem does your product solve that customers are willing to pay for?",
    "Who are your target customers and how large is this market segment?",
    "How is your solution different from existing alternatives?",
    "What is your go-to-market strategy?",
    "How do you plan to acquire customers and what is your CAC (Customer Acquisition Cost)?",
    "What is your current traction (users, revenue, growth rate)?",
    "Who are your key competitors and what is your competitive advantage?",
    "What are your key revenue streams and pricing model?",
    "What are the primary risks to your business and how do you plan to mitigate them?",
    "How will you use the funding you're raising?"
]

# Mock investor matches
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

# Mock email template
MOCK_EMAIL_TEMPLATE = """
Subject: Introducing {startup_name}: AI Face Recognition Technology Seeking {investment_range} Investment

Dear {investor_name},

I hope this email finds you well. My name is [Founder Name], founder of {startup_name}. I'm reaching out because our AI face recognition technology aligns perfectly with your investment focus on {sectors}.

{startup_name} has developed advanced facial recognition technology that achieves 99.7% accuracy while addressing key market concerns around privacy and bias. Our solution is currently being used by {traction} clients across security, access control, and identity verification use cases.

Some highlights of our business:
- Proprietary AI algorithms trained on diverse datasets to eliminate recognition bias
- Unique privacy-preserving technology that complies with GDPR and CCPA
- SaaS model with 83% margins and $18K MRR growing at 22% month-over-month
- Team with 15+ years combined experience in computer vision and ML

We're raising {investment_range} to scale our sales team and expand our enterprise client base. Given your investments in {portfolio}, I believe there could be strong synergies and would value your expertise in scaling B2B SaaS businesses.

Would you be available for a brief 20-minute call next week to discuss potential collaboration? I'd be happy to provide our pitch deck and demo access in advance.

Thank you for your consideration.

Best regards,
[Your Name]
Founder & CEO, {startup_name}
[Your Phone]
"""

# Mock pitch status data
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
