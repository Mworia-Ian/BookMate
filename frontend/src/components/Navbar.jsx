import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center p-2 space-x-4 ml-4">
        <div className="text-orange-500 text-3xl font-bold ml-4">
          BookMate 📚
        </div>
        <div className="hidden md:flex space-x-4 ml-4">
          <Link to="/home" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link to="/add-book" className="text-gray-700 hover:text-orange-500">
            Add Book
          </Link>
          <Link to="/favourite" className="text-gray-700 hover:text-orange-500">
            Favourite
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-500">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden mr-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link
            to="/home"
            className="block text-gray-700 hover:text-orange-500 mb-2"
          >
            Home
          </Link>
          <Link
            to="/add-book"
            className="block text-gray-700 hover:text-orange-500 mb-2"
          >
            Add Book
          </Link>
          <Link
            to="/favourite"
            className="block text-gray-700 hover:text-orange-500 mb-2"
          >
            Favourite
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-orange-500"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
