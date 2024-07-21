import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) => api.post('/login', { email, password });
export const register = (userData) => api.post('/signup', userData);
export const getBooks = (page, limit, search) => api.get('/books', { params: { page, limit, search } });
export const getBook = (id) => api.get(`/books/${id}`);
export const addBook = (bookData) => api.post('/books', bookData);
export const updateBook = (id, bookData) => api.patch(`/books/${id}`, bookData);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export default api;