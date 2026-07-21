from flask import Blueprint
from database.mongodb import db

puranas_bp = Blueprint("puranas", __name__)

@puranas_bp.route("/api/puranas", methods=["GET"])
def get_puranas():
    puranas = list(db.puranas.find({}, {"_id": 0}))
    return puranas