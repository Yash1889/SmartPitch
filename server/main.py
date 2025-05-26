import uvicorn
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Import after loading environment variables
from server.routes.api import app

if __name__ == "__main__":
    # Get port from environment or use default
    port = int(os.getenv("PORT", "8000"))
    host = os.getenv("HOST", "0.0.0.0")
    
    # Run the server
    uvicorn.run(
        app,
        host=host,
        port=port,
        reload=True  # Enable auto-reload for development
    ) 