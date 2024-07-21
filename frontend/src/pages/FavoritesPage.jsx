import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';
import BookCard from '../components/BookCard';

function FavoritesPage() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const removeFromFavorites = (bookId) => {
    setFavorites(favorites.filter(book => book.id !== bookId));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((book) => (
            <div key={book.id} className="relative">
              <Link to={`/book/${book.id}`}>
                <BookCard book={book} />
              </Link>
              <button
                onClick={() => removeFromFavorites(book.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;