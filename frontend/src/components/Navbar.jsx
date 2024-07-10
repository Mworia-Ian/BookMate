// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">BookMate</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/marketplace" className="text-gray-300 hover:text-white">Marketplace</Link>
          <Link to="/favourite" className="text-gray-300 hover:text-white">Favourite</Link>
          <Link to="/review" className="text-gray-300 hover:text-white">Reviews</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
