import jwt
import datetime

SECRET_KEY = "PuranasQuizSecretKey123"

def generate_token(user):
    payload = {
        "name": user["name"],
        "email": user["email"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)
    }

    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

    return token