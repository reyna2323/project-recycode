// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Navigation Links */}
          <ul className="flex space-x-4 mb-4 md:mb-0">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Mission</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Impact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Get Involved</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Project Recycode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
