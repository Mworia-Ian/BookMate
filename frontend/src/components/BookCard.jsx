import React from 'react';

function BookCard({ book, bidding = false }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {bidding && (
          <p className="text-red-500 text-sm mb-2">Closes: {book.closingTime}</p>
        )}
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xl ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
        </div>
        <p className="font-bold mt-2">Rs.{book.price.toFixed(2)}</p>
        <button className="mt-2 w-full bg-be5a36 text-white py-2 rounded-lg hover:bg-be5a36-dark">
          {bidding ? 'Place Bid' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
