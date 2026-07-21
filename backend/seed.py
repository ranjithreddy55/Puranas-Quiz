from database.mongodb import db

puranas = [
    {
        "id": 1,
        "title": "Brahma Purana",
        "description": "Creation of the universe and sacred places.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 2,
        "title": "Padma Purana",
        "description": "Stories of devotion and pilgrimage.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 3,
        "title": "Vishnu Purana",
        "description": "Stories and teachings of Lord Vishnu.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 4,
        "title": "Shiva Purana",
        "description": "Life and teachings of Lord Shiva.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 5,
        "title": "Bhagavata Purana",
        "description": "Stories of Lord Krishna and devotion.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 6,
        "title": "Narada Purana",
        "description": "Teachings of Sage Narada.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 7,
        "title": "Markandeya Purana",
        "description": "Includes Devi Mahatmya.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 8,
        "title": "Agni Purana",
        "description": "Knowledge of rituals and sciences.",
        "questions": 25,
        "difficulty": "Hard"
    },
    {
        "id": 9,
        "title": "Bhavishya Purana",
        "description": "Prophecies and future events.",
        "questions": 25,
        "difficulty": "Hard"
    },
    {
        "id": 10,
        "title": "Brahmavaivarta Purana",
        "description": "Stories of Krishna and Radha.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 11,
        "title": "Linga Purana",
        "description": "Glory of Lord Shiva.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 12,
        "title": "Varaha Purana",
        "description": "Lord Vishnu's Varaha avatar.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 13,
        "title": "Skanda Purana",
        "description": "Largest Purana dedicated to Kartikeya.",
        "questions": 25,
        "difficulty": "Hard"
    },
    {
        "id": 14,
        "title": "Vamana Purana",
        "description": "Lord Vishnu's Vamana avatar.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 15,
        "title": "Kurma Purana",
        "description": "Kurma avatar and Samudra Manthan.",
        "questions": 25,
        "difficulty": "Medium"
    },
    {
        "id": 16,
        "title": "Matsya Purana",
        "description": "Matsya avatar and the great flood.",
        "questions": 25,
        "difficulty": "Easy"
    },
    {
        "id": 17,
        "title": "Garuda Purana",
        "description": "Afterlife, karma and dharma.",
        "questions": 25,
        "difficulty": "Hard"
    },
    {
        "id": 18,
        "title": "Brahmanda Purana",
        "description": "Cosmology and Lalita Sahasranama.",
        "questions": 25,
        "difficulty": "Medium"
    }
]

collection = db["puranas"]

if collection.count_documents({}) == 0:
    collection.insert_many(puranas)
    print("✅ 18 Puranas inserted successfully!")
else:
    print("ℹ️ Puranas collection already contains data.")