import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import DeletePage from './pages/DeletePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookDetailPage from './pages/BookDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesContext from './contexts/FavoritesContext';
import LimitedAccessWrapper from './components/LimitedAccessWrapper';

const isAuthenticated = () => !!localStorage.getItem('token');

const Layout = ({ children, isLoggedIn, onLogout }) => (
  <div className="flex flex-col min-h-screen">
    <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
    <main className="flex-grow container mx-auto px-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

const AppContent = ({ children, isLoggedIn, onLogout }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      {children}
    </Layout>
  );
};

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setFavorites([]);
  };

  return (
    <Router>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <AppContent isLoggedIn={isLoggedIn} onLogout={handleLogout}>
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onLogin={handleLogin} />} />
            <Route path="/" element={
              <LimitedAccessWrapper isLoggedIn={isLoggedIn}>
                <HomePage />
              </LimitedAccessWrapper>
            } />
            <Route path="/books/:id" element={
              <LimitedAccessWrapper isLoggedIn={isLoggedIn}>
                <BookDetailPage />
              </LimitedAccessWrapper>
            } />
            <Route path="/add" element={
              isLoggedIn ? <AddPage /> : <Navigate to="/login" />
            } />
            <Route path="/edit/:id" element={
              isLoggedIn ? <EditPage /> : <Navigate to="/login" />
            } />
            <Route path="/delete/:id" element={
              isLoggedIn ? <DeletePage /> : <Navigate to="/login" />
            } />
            <Route path="/favorites" element={
              isLoggedIn ? <FavoritesPage /> : <Navigate to="/login" />
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppContent>
      </FavoritesContext.Provider>
    </Router>
  );
};

export default App;