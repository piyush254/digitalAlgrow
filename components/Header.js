import React, { useState } from "react";
import { FaWhatsapp, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <span className="text-white">Digital</span>
          <span className="text-orange-500">Algrow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-black border border-gray-700 rounded-full px-6 py-2 space-x-6 text-gray-300">
          <a href="#portfolio" className="hover:text-white transition">
            Portfolio
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#success" className="hover:text-white transition">
            Client Success
          </a>
          <a href="#about" className="hover:text-white transition">
            About Us
          </a>
          <FaWhatsapp className="text-green-500 text-lg cursor-pointer" />
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-black border border-orange-500 text-white rounded-full px-5 py-2 hover:bg-orange-600 transition">
            <span>Get In Touch</span>
            <FaArrowRight className="text-orange-400" />
          </button>

          <button className="bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-lg px-5 py-2 hover:opacity-90 transition">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="bg-black px-4 space-y-4 text-gray-300">
          <a href="#portfolio" className="block hover:text-white transition">
            Portfolio
          </a>
          <a href="#services" className="block hover:text-white transition">
            Services
          </a>
          <a href="#success" className="block hover:text-white transition">
            Client Success
          </a>
          <a href="#about" className="block hover:text-white transition">
            About Us
          </a>
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-500 text-lg cursor-pointer" />
            <button className="flex items-center space-x-2 bg-black border border-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition">
              <span>Get In Touch</span>
              <FaArrowRight className="text-orange-400" />
            </button>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-lg px-4 py-2 hover:opacity-90 transition">
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
