import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function BooksForYou() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15.99, image: 'path/to/image1.jpg', rating: 4 },
    { id: 2, title: '1984', author: 'George Orwell', price: 12.99, image: 'path/to/image2.jpg', rating: 5 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.99, image: 'path/to/image3.jpg', rating: 4 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 19.99, image: 'path/to/image4.jpg', rating: 3 },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, image: 'path/to/image5.jpg', rating: 5 },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 24.99, image: 'path/to/image6.jpg', rating: 4 },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 13.99, image: 'path/to/image7.jpg', rating: 4 },
    { id: 8, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 29.99, image: 'path/to/image8.jpg', rating: 5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Books for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksForYou;
