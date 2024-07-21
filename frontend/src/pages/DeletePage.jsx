import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBook } from '../api';

function DeletePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setError(null);
    try {
      await deleteBook(id);
      navigate('/');
    } catch (error) {
      setError('Error deleting book. Please try again later.');
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Delete Book</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!isConfirming ? (
        <div>
          <p className="mb-4">Are you sure you want to delete this book?</p>
          <button 
            onClick={() => setIsConfirming(true)} 
            className="bg-red-500 text-white p-2 rounded mr-2 hover:bg-red-600 transition-colors duration-200"
          >
            Delete
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">This action cannot be undone. Are you absolutely sure?</p>
          <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white p-2 rounded mr-2 hover:bg-red-600 transition-colors duration-200"
          >
            Confirm Delete
          </button>
          <button 
            onClick={() => setIsConfirming(false)} 
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default DeletePage;