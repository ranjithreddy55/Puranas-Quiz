from flask import Blueprint, request, jsonify
from database.mongodb import db

result = Blueprint("result", __name__)

@result.route("/results", methods=["POST"])
def save_result():

    data = request.get_json()

    quiz_result = {
        "userEmail": data["userEmail"],
        "puranaId": data["puranaId"],
        "score": data["score"],
        "total": data["total"]
    }

    db.results.insert_one(quiz_result)

    return jsonify({
        "message": "Result saved successfully"
    }), 201