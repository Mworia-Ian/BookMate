import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/books/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setBook(response.data);
    } catch (error) {
      setError('Error fetching book details. Please try again later.');
      console.error('Error fetching book:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    navigate(`/delete/${id}`);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (!book) {
    return <div className="text-center mt-8">Book not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {book.coverImage && (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{book.title}</h3>
          <p className="text-gray-700 text-base mb-2">Author: {book.author}</p>
          <p className="text-gray-700 text-base mb-2">Genre: {book.genre}</p>
          <p className="text-gray-700 text-base mb-2">Published: {book.publishedDate}</p>
          <p className="text-gray-700 text-base mt-4">{book.description}</p>
          <div className="mt-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;