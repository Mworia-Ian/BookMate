import React, { createContext, useState, useContext } from "react";
import Navbar from "../components/Navbar";


const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFavorite = (bookTitle) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.title !== bookTitle)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

function Favourite() {
  const { favorites } = useFavorites();

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-left font-bold text-3xl mt-4 mb-4">
          My Favourites
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div
                key={book.id}
                className="flex flex-col items-start bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:border-gray-500 dark:border-gray-50 dark:hover:border-gray-200 p-6"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-48"
                  src={book.coverImage}
                  alt={book.title}
                />
                <div className="flex flex-col justify-start p-4 leading-normal text-sm md:text-base w-full">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {book.title}
                  </h2>
                  <p className="mb-1 font-normal text-gray-600 dark:text-gray-600">
                    Author: {book.author}
                  </p>
                  <p className="mb-1 font-normal text-gray-600 dark:text-gray-600">
                    Genre: {book.genre}
                  </p>
                  <p className="mb-1 font-normal text-gray-600 dark:text-gray-600">
                    Published: {book.publishedDate}
                  </p>
                  <p className="mb-1 font-normal text-gray-600 dark:text-gray-600">
                    Price: {book.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
