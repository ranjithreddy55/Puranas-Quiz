import os
import json
from pymongo import MongoClient
from dotenv import load_dotenv

# Load .env
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

collection = db["questions"]

# Folder containing JSON files
DATA_FOLDER = "data"

total_inserted = 0

for filename in os.listdir(DATA_FOLDER):

    if not filename.endswith(".json"):
        continue

    filepath = os.path.join(DATA_FOLDER, filename)

    with open(filepath, "r", encoding="utf-8") as f:
        questions = json.load(f)

    inserted = 0

    for question in questions:

        # Prevent duplicates
        exists = collection.find_one({
            "puranaId": question["puranaId"],
            "question": question["question"]
        })

        if not exists:
            collection.insert_one(question)
            inserted += 1

    total_inserted += inserted
    print(f"{filename}: {inserted} inserted")

print("\n--------------------------------")
print(f"Total inserted: {total_inserted}")
print("--------------------------------")