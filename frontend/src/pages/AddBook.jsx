import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

function AddBook() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedDate: "",
    coverImage: "",
    price: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", newBook, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNewBook({
        title: "",
        author: "",
        genre: "",
        publishedDate: "",
        coverImage: "",
        price: "",
      });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
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
  return (
    <div>
      <Navbar />
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
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
