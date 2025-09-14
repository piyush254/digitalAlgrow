import React from "react";
import Link from "next/link"; // ✅ Import Link from Next.js
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import WhatsappWidget from "./WhatsappWidget";

function Footer() {
  return (
    <>
      <WhatsappWidget />

      <footer className="bg-black text-gray-300 py-12 relative">
        {/* Orange accent top strip */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-orange-100 to-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Logo & Description */}
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white flex justify-center sm:justify-start items-center space-x-1">
                <span>Digital</span>
                <span className="text-orange-500">Algrow</span>
              </h2>
              <p className="mt-3 text-gray-400 max-w-sm mx-auto sm:mx-0">
                Empowering businesses with creative digital solutions, marketing
                strategies, and designs that drive real results.
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                <Link
                  href="https://www.instagram.com/digitalalgrow.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-orange-500 transition-transform transform hover:scale-125 text-2xl shadow-lg p-2 rounded-full bg-gray-900"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100087778149569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-orange-500 transition-transform transform hover:scale-125 text-2xl shadow-lg p-2 rounded-full bg-gray-900"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <h3 className="text-orange-500 font-semibold mb-2 text-lg">
                Quick Links
              </h3>
              <Link
                href="/portfolio"
                className="hover:text-orange-500 transition duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="hover:text-orange-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/success"
                className="hover:text-orange-500 transition duration-300"
              >
                Client Success
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-500 transition duration-300"
              >
                About Us
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <h3 className="text-orange-500 font-semibold mb-2 text-lg">
                Contact
              </h3>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:help.digitalalgrow@gmail.com"
                  className="hover:underline break-all"
                >
                  help.digitalalgrow@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition">
                <FaPhone className="text-orange-500" />
                <a href="tel:+917321884277" className="hover:underline">
                  +91 73218 84277
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Digital Algrow. All rights
              reserved.
            </p>

            <p className="text-gray-400 text-sm">
              Designed with ❤️ by Digital Algrow Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
