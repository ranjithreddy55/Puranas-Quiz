import bcrypt
from flask import Blueprint, request, jsonify
from database.mongodb import db
from utils.jwt_helper import generate_token

auth = Blueprint("auth", __name__)

# ---------------- REGISTER ----------------
@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    existing_user = db.users.find_one({"email": data["email"]})

    if existing_user:
        return jsonify({"message": "Email already registered"}), 400

    hashed_password = bcrypt.hashpw(
        data["password"].encode("utf-8"),
        bcrypt.gensalt()
    )

    user = {
    "name": data["name"],
    "email": data["email"],
    "password": hashed_password.decode("utf-8"),
    "isAdmin": False
}

    db.users.insert_one(user)

    return jsonify({
        "message": "User registered successfully"
    }), 201


# ---------------- LOGIN ----------------
@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    user = db.users.find_one({
        "email": data["email"]
    })

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    if not bcrypt.checkpw(
        data["password"].encode("utf-8"),
        user["password"].encode("utf-8")
    ):
        return jsonify({
            "message": "Incorrect password"
        }), 401

    token = generate_token(user)

    return jsonify({
        "message": "Login successful",
        "token": token,
        "name": user["name"],
        "email": user["email"]
    }), 200