import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publishedDate: '',
    coverImageUrl: '',
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', newBook, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewBook({
        title: '',
        author: '',
        genre: '',
        publishedDate: '',
        coverImageUrl: '',
      });
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">BookMate Home</h1>

      {/* Add Book Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={handleInputChange}
            placeholder="Genre"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="publishedDate"
            value={newBook.publishedDate}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="url"
            name="coverImageUrl"
            value={newBook.coverImageUrl}
            onChange={handleInputChange}
            placeholder="Cover Image URL"
            className="p-2 border rounded col-span-2"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Book
        </button>
      </form>

      {/* Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {book.coverImageUrl && (
              <img src={book.coverImageUrl} alt={book.title} className="w-full h-48 object-cover"/>
            )}
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{book.title}</h3>
              <p className="text-gray-700 text-base mb-2">Author: {book.author}</p>
              <p className="text-gray-700 text-base mb-2">Genre: {book.genre}</p>
              <p className="text-gray-700 text-base">Published: {book.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;