import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ setDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-be5a36 dark:text-white">
              B<span className="text-be5a36 dark:text-white">OO</span>KMATE 📚
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/favorites" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Favorites
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              className="md:hidden text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        <nav className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:hidden'}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <li className="my-2 md:my-0">
              <Link to="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/favorites" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
