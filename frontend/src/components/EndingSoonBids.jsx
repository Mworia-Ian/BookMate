import React from 'react';
import BookCard from './BookCard';

function EndingSoonBids() {
  const books = [
    { id: 1, title: 'Book Name', author: 'Author\'s Name', price: 500, image: 'path/to/image1.jpg', closingTime: '5hrs 1min' },
    { id: 2, title: 'Book Name', author: 'Author\'s Name', price: 500, image: 'path/to/image2.jpg', closingTime: '8hrs 11min' },
    { id: 3, title: 'Spring Story', author: 'Author\'s Name', price: 500, image: 'path/to/image3.jpg', closingTime: '15hrs 17min' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Ending Soon Bids</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} bidding={true} />
        ))}
      </div>
    </div>
  );
}

export default EndingSoonBids;
