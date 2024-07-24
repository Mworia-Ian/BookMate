from flask import request, jsonify
from flask_restful import Resource, Api
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from config import app, db
from models import Book, User

api = Api(app)

class BookListResource(Resource):
    @jwt_required()
    def get(self):
        books = Book.query.all()
        json_books = list(map(lambda x: x.to_json(), books))
        return {"books": json_books}
    
    @jwt_required()
    def post(self):
        title = request.json.get("title")
        author = request.json.get("author")
        genre = request.json.get("genre")
        published_date = request.json.get("publishedDate")
        cover_image = request.json.get("coverImage")

        if not title or not author or not genre or not published_date:
            return {"message": "You must include a title, author, genre and published date"}, 400
        
        new_book = Book(title=title, author=author, genre=genre, published_date=published_date, cover_image=cover_image)
        try:
            db.session.add(new_book)
            db.session.commit()
        except Exception as e:
            return {"message": str(e)}, 400
        
        return {"message": "Book added successfully!"}, 201

class BookResource(Resource):
    @jwt_required()
    def patch(self, book_id):
        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404
        
        data = request.json
        book.title = data.get("title", book.title)
        book.author = data.get("author", book.author)
        book.genre = data.get("genre", book.genre)
        book.published_date = data.get("publishedDate", book.published_date)
        book.cover_image = data.get("coverImage", book.cover_image)

        db.session.commit()

        return {"message": "Book updated"}, 200
    
    @jwt_required()
    def delete(self, book_id):
        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404
        
        db.session.delete(book)
        db.session.commit()

        return {"message": "Book deleted!"}

class UserSignup(Resource):
    def post(self):
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')

        if not first_name or not last_name or not email or not password:
            return {"message": "Missing required fields"}, 400

        if User.query.filter_by(email=email).first():
            return {"message": "Email already registered"}, 400

        new_user = User(first_name=first_name, last_name=last_name, email=email)
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()

        return {"message": "User created successfully"}, 201

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            access_token = create_access_token(identity=user.id)
            return {"access_token": access_token}, 200
        else:
            return {"message": "Invalid email or password"}, 401
        
class Contact(Resource):
    def post(self):
        data = request.get_json()
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        solution = data.get("solution")

        if not first_name or not last_name or not email or not solution:
            return {"message": "All fields are required"}, 400

        new_contact = Contact(first_name=first_name, last_name=last_name, email=email, solution=solution)
        try:
            db.session.add(new_contact)
            db.session.commit()
        except Exception as e:
            return {"message": str(e)}, 400

        return {"message": "Contact query submitted successfully"}, 201

api.add_resource(BookListResource, '/books')
api.add_resource(BookResource, '/books/<int:book_id>')
api.add_resource(UserSignup, '/signup')
api.add_resource(UserLogin, '/login')
api.add_resource(Contact, '/contact')

if __name__ == "__main__":
    app.run(debug=True)