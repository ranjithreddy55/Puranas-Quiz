from flask import Blueprint, jsonify
from database.mongodb import db

dashboard = Blueprint("dashboard", __name__)

@dashboard.route("/dashboard/<email>")
def get_dashboard(email):

    results = list(
        db.results.find(
            {"userEmail": email},
            {"_id": 0}
        )
    )

    return jsonify(results)