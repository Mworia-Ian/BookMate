// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center p-2 space-x-4 ml-4">
        <div className="text-orange-500 text-3xl font-bold">BookMate</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link to="/marketplace" className="text-gray-700 hover:text-orange-500">Marketplace</Link>
          <Link to="/favourite" className="text-gray-700 hover:text-orange-500">Favourite</Link>
          <Link to="/review" className="text-gray-700 hover:text-orange-500">Reviews</Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
