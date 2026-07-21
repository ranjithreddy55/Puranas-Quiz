from flask import Blueprint, jsonify
from database.mongodb import db

leaderboard = Blueprint("leaderboard", __name__)

@leaderboard.route("/leaderboard")
def get_leaderboard():

    results = list(
        db.results.find({}, {"_id": 0})
        .sort("score", -1)
        .limit(20)
    )

    return jsonify(results)