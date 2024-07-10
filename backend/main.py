from flask import request, jsonify
from config import app, db
from models import Book

@app.route("/books", methods=["GET"])
def get_books():
    books = Book.query.all()
    json_books =list(map(lambda x: x.to_json(), books))
    return jsonify({"books": json_books})

@app.route("/add_books", methods=["POST"])
def add_books():
    title = request.json.get("title")
    author = request.json.get("author")
    genre = request.json.get("genre")
    published_date = request.json.get("publishedDate")

    if not title or not author or not genre or not published_date:
        return (jsonify({"message":"You must include a title, author, genre and published date"}), 400)
    
    new_book = Book(title=title, author = author, genre = genre, published_date = published_date)
    try:
        db.session.add(new_book)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}), 400
    
    return jsonify({"message":"Book added successfully!"}), 201

@app.route("/update_book/<int:book_id>", methods = ["PATCH"])
def update_book(book_id):
    book = Book.query.get(book_id)

    if not book:
        return jsonify({"message":"User not found"}), 404
    
    data = request.json
    book.title = data.get("title", book.title)
    book.author = data.get("author", book.author)
    book.genre = data.get("genre", book.genre)
    book.published_date = data.get("publishedDate", book.published_date)

    db.session.commit()

    return jsonify({"message":"book Updated"}), 200

@app.route("/delete_book/<int:book_id>", methods = ["DELETE"])
def delete_book(book_id):
    book = Book.query.get(book_id)

    if not book:
        return jsonify({"message":"User not found"}), 404
    
    db.session.delete(book)
    db.session.commit()

    return jsonify({"message":"book deleted!"})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)