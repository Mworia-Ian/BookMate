from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)

CORS(app)

# Update the database URI to use PostgreSQL
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://username:password@localhost/bookmate"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = "your-secret-key"  # Change this to a secure secret key

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

