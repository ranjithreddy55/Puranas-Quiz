from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

from database.mongodb import db
from routes.puranas import puranas_bp
from routes.questions import questions_bp
from routes.auth import auth
from routes.result import result
from routes.dashboard import dashboard
from routes.leaderboard import leaderboard
from routes.admin import admin

load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(result, url_prefix="/api")
app.register_blueprint(dashboard, url_prefix="/api")
app.register_blueprint(puranas_bp)
app.register_blueprint(questions_bp)
app.register_blueprint(leaderboard, url_prefix="/api")
app.register_blueprint(admin, url_prefix="/api")


@app.route("/")
def home():
    return {"message": "Puranas Quiz API is running!"}


@app.route("/api/test-db")
def test_db():
    collections = db.list_collection_names()
    return {
        "status": "Connected",
        "collections": collections
    }


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)