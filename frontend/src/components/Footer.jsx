import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-be5a36 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">BookMate</h3>
            <p>Your one-stop shop for all types of books.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/home" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-gray-200">
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@bookmate.com</p>
            <p>Phone: +1 234 567 8900</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 BookMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;