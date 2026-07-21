from flask import Blueprint, request, jsonify
from database.mongodb import db
from bson import ObjectId

admin = Blueprint("admin", __name__)

# ---------------- ADD QUESTION ----------------
@admin.route("/admin/add-question", methods=["POST"])
def add_question():
    data = request.get_json()

    question = {
        "puranaId": int(data["puranaId"]),
        "question": data["question"],
        "options": [
            data["option1"],
            data["option2"],
            data["option3"],
            data["option4"],
        ],
        "answer": data["answer"],
    }

    db.questions.insert_one(question)

    return jsonify({
        "message": "Question added successfully!"
    }), 201


# ---------------- GET ALL QUESTIONS ----------------
@admin.route("/admin/questions", methods=["GET"])
def get_questions():
    questions = []

    for q in db.questions.find():
        q["_id"] = str(q["_id"])
        questions.append(q)

    return jsonify(questions), 200


# ---------------- DELETE QUESTION ----------------
@admin.route("/admin/delete-question/<id>", methods=["DELETE"])
def delete_question(id):
    db.questions.delete_one({"_id": ObjectId(id)})

    return jsonify({
        "message": "Question deleted successfully!"
    }), 200