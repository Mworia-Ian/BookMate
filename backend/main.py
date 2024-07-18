from flask import request
from flask_restful import Resource, Api
from config import app, db
from models import Book

api = Api(app)

class BookListResource(Resource):
    def get(self):
        books = Book.query.all()
        json_books = list(map(lambda x: x.to_json(), books))
        return {"books": json_books}
    
    def post(self):
        title = request.json.get("title")
        author = request.json.get("author")
        genre = request.json.get("genre")
        published_date = request.json.get("publishedDate")

        if not title or not author or not genre or not published_date:
            return {"message": "You must include a title, author, genre and published date"}, 400
        
        new_book = Book(title=title, author=author, genre=genre, published_date=published_date)
        try:
            db.session.add(new_book)
            db.session.commit()
        except Exception as e:
            return {"message": str(e)}, 400
        
        return {"message": "Book added successfully!"}, 201

class BookResource(Resource):
    def patch(self, book_id):
        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404
        
        data = request.json
        book.title = data.get("title", book.title)
        book.author = data.get("author", book.author)
        book.genre = data.get("genre", book.genre)
        book.published_date = data.get("publishedDate", book.published_date)

        db.session.commit()

        return {"message": "Book updated"}, 200
    
    def delete(self, book_id):
        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404
        
        db.session.delete(book)
        db.session.commit()

        return {"message": "Book deleted!"}

api.add_resource(BookListResource, '/books')
api.add_resource(BookResource, '/books/<int:book_id>')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)