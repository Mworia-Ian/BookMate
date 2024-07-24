import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const booksPerPage = 10;

  useEffect(() => {
    fetchBooks();
  }, [page, searchTerm]);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/books', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        params: { page, limit: booksPerPage, search: searchTerm }
      });
      if (page === 1) {
        setBooks(response.data.books);
      } else {
        setBooks(prevBooks => [...prevBooks, ...response.data.books]);
      }
      setHasMore(response.data.books.length === booksPerPage);
    } catch (error) {
      setError('Error fetching books. Please try again later.');
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    console.log('New search term:', searchTerm);
    setSearchTerm(searchTerm);
    setPage(1);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <BookList books={books} onBookClick={handleBookClick} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!loading && hasMore && (
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Load More
        </button>
      )}
      {!loading && !hasMore && (
        <p className="text-center mt-4">End of books.</p>
      )}
    </div>
  );
}

export default HomePage;
