import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative  top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-yellow-500">WOLF</span>
          <span className="text-2xl font-bold text-white">SPORTS</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400 font-medium transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-white hover:text-yellow-400 font-medium transition-colors">
            Shop
          </Link>
          <Link to="/collections" className="text-white hover:text-yellow-400 font-medium transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 font-medium transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-yellow-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button className="text-white hover:text-yellow-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </button>
          <button className="text-white hover:text-yellow-400 transition-colors relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;