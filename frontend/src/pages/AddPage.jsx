import React from 'react';
import BookForm from '../components/BookForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const [newBook, setNewBook] = React.useState({
    title: '',
    author: '',
    genre: '',
    publishedDate: '',
    coverImage: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', newBook, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding books:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Book</h1>
      <BookForm
        book={newBook}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        isEditing={false}
      />
    </div>
  );
}

export default AddPage;
