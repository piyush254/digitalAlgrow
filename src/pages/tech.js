import React from "react";
import Technologies from "../../components/Tech";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function tech() {
  return (
    <>
      <Header />

      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-24 text-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 animate-gradient-x"></div>
        {/* Subtle Overlay Texture (optional) */}
        <div className="absolute inset-0 bg-[url('/images/tech-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Technologies We Use
          </h1>
          <p className="mt-6 text-lg text-yellow-100 leading-relaxed">
            Powering modern solutions with cutting-edge frameworks, databases,
            and tools to deliver high-performance digital experiences.
          </p>
        </div>
      </motion.section>

      <Technologies />
      <Footer />
    </>
  );
}

export default tech;
