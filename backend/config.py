import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")
SECRET_KEY = os.getenv("SECRET_KEY", "secret")
PORT = int(os.getenv("PORT", 5000))
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")