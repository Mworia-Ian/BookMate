import React from 'react';

function BookCard({ book, onClick }) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {book.coverImage && (
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{book.title}</h3>
        <p className="text-gray-700 text-base mb-2">Author: {book.author}</p>
        <p className="text-gray-700 text-base mb-2">Genre: {book.genre}</p>
        <p className="text-gray-700 text-base mb-2">Published: {book.publishedDate}</p>
      </div>
    </div>
  );
}

export default BookCard;
