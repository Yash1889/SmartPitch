# SmartPitch - AI-Powered Fundraising Assistant for Startups

![SmartPitch Logo](public/hero-pattern.svg)

SmartPitch is an AI-powered platform that helps founders create compelling investor pitches, connect with the right investors, and improve their fundraising success rate. The application uses advanced AI technologies from OpenAI and Anthropic to generate high-quality pitch content with confidence scoring, provide section-specific improvements, and match startups with relevant investors.

## Project Structure

```
├── app/                     # Next.js frontend application
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and API clients
│   └── [feature]/page.tsx   # Page components for each feature
├── public/                  # Static assets
├── server/                  # FastAPI backend server
│   ├── llm/                 # LLM integration with OpenAI and Anthropic
│   ├── routes/              # API endpoints
│   └── simple.py            # Main server application
└── .env                     # Environment variables for API keys
```

## Key Features

### 1. AI Pitch Generation
- Creates complete startup pitches using OpenAI API
- Includes key sections: problem, solution, market, business model, competition, traction, and ask
- Provides confidence scoring for each section to highlight strengths and weaknesses

### 2. Section Improvement
- AI-powered enhancement of specific pitch sections
- Uses Anthropic API to provide targeted improvements based on user feedback
- Maintains tone and style while enhancing content quality

### 3. Investor Matching
- Matches startups with relevant investors based on specific criteria
- Provides detailed investor profiles including investment range, portfolio, and contact information
- Sorts investors by match score to prioritize outreach

### 4. Email Generation
- Creates personalized outreach emails for matched investors
- Tailors content based on investor preferences and startup details
- Includes customizable templates for different outreach scenarios

### 5. Pitch Status
- Provides comprehensive analysis of pitch quality
- Highlights strengths and areas for improvement
- Indicates investor readiness with actionable feedback

### 6. Questions Database
- Curated list of common investor questions with strategic answers
- Helps founders prepare for investor meetings
- Includes copy functionality for easy reference

## Tech Stack

### Frontend
- Next.js 15.1.8
- React with TypeScript
- Framer Motion for animations
- Tailwind CSS for styling
- Local storage for state persistence

### Backend
- FastAPI
- Python 3.13
- OpenAI API integration
- Anthropic API integration
- Error handling with fallback mechanisms

## Setup

1. Clone the repository
```bash
git clone https://github.com/Yash1889/SmartPitch.git
cd SmartPitch
```

2. Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
pip install fastapi uvicorn openai anthropic python-dotenv
```

3. Configure environment variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env to add your API keys
# Required: OPENAI_API_KEY, ANTHROPIC_API_KEY
```

4. Start the servers
```bash
# Start the backend server
python -m uvicorn server.simple:app --host 0.0.0.0 --port 8000

# In a separate terminal, start the frontend
npm run dev
```

5. Access the application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Development Notes

- The application uses local storage to persist pitch data between pages
- Both OpenAI and Anthropic APIs require valid API keys for full functionality
- Mock data is available as fallback if API keys are not configured

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [https://github.com/Yash1889](https://github.com/Yash1889)
- Project Link: [https://github.com/Yash1889/SmartPitch](https://github.com/Yash1889/SmartPitch)
- Developer: Yashraj Gupta
