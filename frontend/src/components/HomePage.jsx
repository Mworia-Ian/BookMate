import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publishedDate: '',
    coverImage: '',
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

  const handleInputChange = (e, isEditForm = false) => {
    const { name, value } = e.target;
    if (isEditForm) {
      setEditingBook({ ...editingBook, [name]: value });
    } else {
      setNewBook({ ...newBook, [name]: value });
    }
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
        coverImage: '',
      });
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/books/${editingBook.id}`, editingBook, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:5000/books/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        fetchBooks();
      } catch (error) {
        console.error('Error deleting book:', error);
      }
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
            name="coverImage"
            value={newBook.coverImage}
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
            {editingBook && editingBook.id === book.id ? (
              <form onSubmit={handleUpdate} className="p-4">
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
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Save
                  </button>
                  <button type="button" onClick={() => setEditingBook(null)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                {book.coverImage && (
                  <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover"/>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{book.title}</h3>
                  <p className="text-gray-700 text-base mb-2">Author: {book.author}</p>
                  <p className="text-gray-700 text-base mb-2">Genre: {book.genre}</p>
                  <p className="text-gray-700 text-base mb-2">Published: {book.publishedDate}</p>
                  <div className="flex justify-end space-x-2">
                    <button onClick={() => setEditingBook(book)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(book.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;