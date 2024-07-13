import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToFavorites = () => {
    if (!favorites.some(fav => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!book) {
    return <div className="text-center">Book not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold dark:text-white">{book.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{book.author}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`h-6 w-6 ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
            <span className="ml-2 text-gray-600 dark:text-gray-300">({book.rating} out of 5)</span>
          </div>
          <p className="text-2xl font-bold mt-4 dark:text-white">Rs.{book.price.toFixed(2)}</p>
          <button 
            onClick={handleAddToFavorites}
            className="mt-4 bg-booknet-orange text-white py-2 px-6 rounded-lg hover:bg-booknet-orange-dark transition-colors duration-200"
          >
            Add to Favorites
          </button>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Description</h2>
            <p className="text-gray-700 dark:text-gray-300">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;