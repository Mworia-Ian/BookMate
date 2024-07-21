import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../assets/avatar.png';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-be5a36">
              B<span className="text-be5a36">OO</span>KMATE 📚
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/favorites" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    Favorites
                  </Link>
                  <Link to="/add" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    Add Book
                  </Link>
                </>
              )}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <img
                  src={Avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="text-black px-4 py-2 rounded transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-black"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
