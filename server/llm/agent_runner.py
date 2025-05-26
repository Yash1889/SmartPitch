import asyncio
from server.llm.agent import PitchAgent

async def run_pitch_agent():
    # Initialize agent
    agent = PitchAgent()
    
    # Set startup info
    startup_info = {
        'startup_name': 'TechFlow',
        'sector': 'AI/ML',
        'product': 'An AI platform that automates document processing',
        'traction': '500 enterprise customers and $2M ARR',
        'raise_': '$5M Series A',
        'stage': 'Series A',
        'location': 'San Francisco',
        'your_name': 'Alex',
        'your_email': 'alex@techflow.ai'
    }
    
    # Create a startup in the database first (this would normally be done through the API)
    # This is just for testing purposes
    startup_id = "test_startup_id"  # In production, this would be a real database ID
    await agent.set_startup_info(startup_id, startup_info)
    
    # Generate initial pitch
    print('\n1. Generating initial pitch...')
    pitch_data = await agent.generate_initial_pitch()
    
    # Print initial pitch and confidence scores
    print('\nInitial Pitch:')
    for section, data in pitch_data.items():
        print(f"\n{section.upper()}:")
        print(data['text'])
        if section in agent.confidence_scores:
            score = agent.confidence_scores[section]
            print(f"Confidence: {score['color']} ({score['confidence']:.2f})")
            print(f"Reason: {score['reason']}")
    
    # Get clarifying questions for red sections
    print('\n2. Getting clarifying questions for low-confidence sections...')
    questions = await agent.get_clarifying_questions()
    for section, q_list in questions.items():
        print(f"\n{section.upper()} questions:")
        for q in q_list:
            print(f"- {q}")
    
    # Simulate improving a section
    print('\n3. Improving a section with user input...')
    section_to_improve = 'problem'
    user_input = 'The document processing industry loses $50B annually to manual errors, with the average enterprise spending 4,000 person-hours per year on manual document review.'
    improved_pitch = await agent.improve_section(section_to_improve, user_input)
    
    print(f"\nImproved {section_to_improve.upper()} section:")
    print(improved_pitch[section_to_improve]['text'])
    print(f"New confidence: {agent.confidence_scores[section_to_improve]['color']} ({agent.confidence_scores[section_to_improve]['confidence']:.2f})")
    
    # Match with investors
    print('\n4. Finding matching investors...')
    matches = await agent.match_investors()
    print(f"Found {len(matches)} potential investors")
    
    # Generate email for top investor
    if matches:
        print('\n5. Generating investor email...')
        top_investor = matches[0]
        email = await agent.generate_email(top_investor)
        print(f"\nEmail preview for {top_investor['name']}:")
        print(email)
        
    # Get final pitch status with analytics
    status = await agent.get_pitch_status()
    print("\n6. Final pitch status:")
    print(f"Confidence scores: {status['confidence_scores']}")
    if 'analytics' in status:
        print(f"Analytics: {status['analytics']}")

if __name__ == '__main__':
    asyncio.run(run_pitch_agent())