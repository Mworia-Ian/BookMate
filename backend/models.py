from config import db
from flask_login import UserMixin

class Book(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(80), unique = False, nullable = False)
    author = db.Column(db.String(80), unique = False, nullable = False)
    genre = db.Column(db.String(120), unique = False, nullable = False)
    published_date = db.Column(db.String(80), unique = False, nullable = False)

    def to_json(self):
        return {
            "id":self.id,
            "title": self.title,
            "author":self.author,
            "genre":self.genre,
            "publishedDate":self.published_date
        }
    

class User(db.Model,UserMixin):
    
    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key = True)
    user_name = db.Column(db.String(80), unique = True, nullable = False)
    email = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(120), nullable = False)

    def get_id(self):
        return self.user_id