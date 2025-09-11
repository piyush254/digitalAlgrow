"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Success() {
  const caseStudies = [
    {
      id: 1,
      client: "Fashion Brand X",
      result: "3x increase in online sales",
      description:
        "We built a targeted social media funnel with influencer collaborations, resulting in exponential growth.",
      image: "/success/fashion.jpg",
    },
    {
      id: 2,
      client: "Tech Startup Y",
      result: "50% boost in qualified leads",
      description:
        "By optimizing ad campaigns and SEO, we helped them acquire high-quality leads at a lower cost.",
      image: "/success/tech.jpg",
    },
    {
      id: 3,
      client: "Health Clinic Z",
      result: "400% ROI on ad spend",
      description:
        "Our Google Ads strategy drove consistent patient bookings and expanded their local presence.",
      image: "/success/health.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white py-24 text-center relative overflow-hidden"
      >
        {/* Animated Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold z-10 relative"
        >
          Client Success Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-orange-100 z-10 relative"
        >
          We partner with ambitious brands to deliver measurable results. Here’s
          how we’ve helped our clients grow.
        </motion.p>
      </motion.section>

      {/* Case Studies Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg overflow-hidden hover:shadow-2xl transition relative"
            >
              <motion.img
                src={study.image}
                alt={study.client}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {study.client}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-orange-500 font-bold mt-2"
                >
                  {study.result}
                </motion.p>
                <p className="text-gray-400 text-sm mt-3">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white text-center py-24 relative overflow-hidden"
      >
        {/* Floating Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.15 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white blur-3xl"
        ></motion.div>

        <h2 className="text-3xl md:text-5xl font-bold relative z-10">
          Ready to create your success story?
        </h2>
        <p className="mt-6 text-orange-100 max-w-xl mx-auto relative z-10">
          Let’s discuss how we can grow your brand with the right digital
          strategies.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex justify-center space-x-6 relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#ea580c" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-black border border-orange-500 text-white rounded-full px-7 py-3 hover:bg-orange-600 transition"
          >
            <span>Get In Touch</span>
            <FaArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-700 px-7 py-3 rounded-full font-semibold shadow-md"
          >
            Book a Call
          </motion.button>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Success;
