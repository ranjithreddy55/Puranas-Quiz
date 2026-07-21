from flask import Blueprint, jsonify
from database.mongodb import db

questions_bp = Blueprint("questions", __name__)

@questions_bp.route("/api/questions/<int:purana_id>", methods=["GET"])
def get_questions(purana_id):

    questions = list(
        db.questions.find(
            {"puranaId": purana_id},
            {"_id": 0}
        )
    )

    return jsonify(questions)