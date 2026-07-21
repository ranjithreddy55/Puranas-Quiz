from pymongo import MongoClient

uri = "mongodb+srv://heartkillerg2001_db_user:ranjith12@puranasquiz.nedk6u8.mongodb.net/?appName=PuranasQuiz"

try:
    client = MongoClient(uri, serverSelectionTimeoutMS=5000)
    client.admin.command("ping")
    print("✅ Connected successfully!")
except Exception as e:
    print("❌ Connection failed:")
    print(e)