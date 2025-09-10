"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      image: "/images/project1.jpg",
      title: "Fashion E-commerce Growth",
      category: "Social Media Marketing",
      description:
        "Scaled a fashion brand’s Instagram to 100k+ followers and boosted sales by 250% using influencer-driven campaigns.",
    },
    {
      image: "/images/project2.jpg",
      title: "Startup SaaS Launch",
      category: "Performance Marketing",
      description:
        "Executed Google Ads and LinkedIn campaigns that delivered 5x ROI during their first product launch.",
    },
    {
      image: "/images/project3.jpg",
      title: "Restaurant Chain Branding",
      category: "Branding & Design",
      description:
        "Designed a complete rebrand for a restaurant chain including logo, packaging, and digital presence.",
    },
    {
      image: "/images/project4.jpg",
      title: "Healthcare SEO Strategy",
      category: "SEO & Content",
      description:
        "Ranked top 3 on Google for 15+ healthcare-related keywords, driving consistent organic traffic.",
    },
    {
      image: "/images/project5.jpg",
      title: "Mobile App Marketing",
      category: "App Marketing",
      description:
        "Drove 50k+ app downloads in the first month through performance ads and influencer collaborations.",
    },
    {
      image: "/images/project6.jpg",
      title: "Corporate Brand Awareness",
      category: "Influencer Marketing",
      description:
        "Partnered with niche influencers to create buzz and improve brand credibility in the finance sector.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Animated Gradient */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-24 text-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/images/portfolio-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="mt-6 text-lg text-orange-100 leading-relaxed">
            Where creativity meets performance. Explore some of our finest
            digital success stories crafted for modern brands.
          </p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden border border-orange-500/30 shadow-lg shadow-orange-500/10"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>

              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={project.image}
                alt={project.title}
                className="relative w-full h-56 object-cover group-hover:opacity-90 transition"
              />

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition">
                  {project.title}
                </h3>
                <span className="block text-sm text-orange-500 font-medium mt-1">
                  {project.category}
                </span>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/40 rounded-2xl transition"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating Glow Orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Case Study Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center bg-black/60 backdrop-blur-xl rounded-2xl shadow-lg border border-orange-500/20 p-10">
          <motion.img
            src="/images/featured-project.jpg"
            alt="Featured Case Study"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Case Study: Scaling a Fashion Brand
            </h2>
            <p className="text-gray-300 mb-6">
              We partnered with a rising fashion label to design viral campaigns
              and influencer collaborations that achieved{" "}
              <span className="text-orange-400 font-semibold">300% growth</span>{" "}
              in 6 months. Our data-driven approach combined creativity with
              measurable impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-orange-600 to-pink-600 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              View Full Story
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-20 text-center text-white"
      >
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s Create Your Success Story
          </h2>
          <p className="mt-6 text-orange-100 text-lg leading-relaxed">
            Our team has scaled brands globally with powerful digital marketing
            strategies. Yours could be next.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black/70 backdrop-blur-md border border-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-orange-600/90 transition"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Portfolio;
