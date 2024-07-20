import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import Footer from "./components/Footer";
import FavoritesContext from "./contexts/FavoritesContext";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import HomePage from './components/HomePage';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <main className="flex-grow container mx-auto px-4 py-8 dark:bg-gray-800">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:id" element={<BookDetailPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoritesContext.Provider>
    </Router>
  ); 
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;