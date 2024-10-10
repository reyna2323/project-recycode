// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Project Recycode</h1>
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Mission</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Impact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Get Involved</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
