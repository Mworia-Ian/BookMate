import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useFavorites } from "./Favourite";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedDate: "",
    coverImage: "",
    price: "",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBuyNow = (bookTitle) => {
    alert(`${bookTitle} has been purchased`);
  };

  const handleLikeToggle = (book) => {
    if (favorites.find((fav) => fav.title === book.title)) {
      removeFavorite(book.title);
    } else {
      addFavorite(book);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e, isEditForm = false) => {
    const { name, value } = e.target;
    if (isEditForm) {
      setEditingBook({ ...editingBook, [name]: value });
    } else {
      setNewBook({ ...newBook, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/books/${editingBook.id}`,
        editingBook,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`http://localhost:5000/books/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        fetchBooks();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="p-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-left font-bold text-3xl mt-4 mb-4">
          Books Available
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
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
                <div className="flex items-center mt-4">
                  <button
                    onClick={() => handleBuyNow(book.title)}
                    className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => handleLikeToggle(book)}
                    className="ml-4 text-gray-500 dark:text-gray-400 hover:text-red-500"
                  >
                    <HeartIcon
                      className={`w-6 h-6 ${
                        favorites.find((fav) => fav.title === book.title)
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>
                {editingBook && editingBook.id === book.id ? (
                  <form onSubmit={handleUpdate} className="w-full mt-4">
                    <input
                      type="text"
                      name="title"
                      value={editingBook.title}
                      onChange={(e) => handleInputChange(e, true)}
                      className="w-full p-2 border rounded mb-2"
                      required
                    />
                    <input
                      type="text"
                      name="author"
                      value={editingBook.author}
                      onChange={(e) => handleInputChange(e, true)}
                      className="w-full p-2 border rounded mb-2"
                      required
                    />
                    <input
                      type="text"
                      name="genre"
                      value={editingBook.genre}
                      onChange={(e) => handleInputChange(e, true)}
                      className="w-full p-2 border rounded mb-2"
                      required
                    />
                    <input
                      type="date"
                      name="publishedDate"
                      value={editingBook.publishedDate}
                      onChange={(e) => handleInputChange(e, true)}
                      className="w-full p-2 border rounded mb-2"
                      required
                    />
                    <input
                      type="url"
                      name="coverImage"
                      value={editingBook.coverImage}
                      onChange={(e) => handleInputChange(e, true)}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingBook(null)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      onClick={() => setEditingBook(book)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
