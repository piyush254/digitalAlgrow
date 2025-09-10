import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappWidget from "../../components/WhatsappWidget";
import { FaBullhorn, FaChartLine, FaPaintBrush, FaSearch, FaUsers, FaMobileAlt } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaBullhorn className="text-orange-500 text-4xl mb-4" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence on Instagram, Facebook, LinkedIn, and more with tailored campaigns that drive engagement and conversions.",
    },
    {
      icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
      title: "Performance Marketing",
      description:
        "ROI-driven paid ad campaigns on Google, Meta, and other platforms to maximize leads and sales with measurable results.",
    },
    {
      icon: <FaSearch className="text-orange-500 text-4xl mb-4" />,
      title: "SEO & Content Strategy",
      description:
        "Rank higher on search engines and attract organic traffic with data-backed SEO strategies and high-quality content.",
    },
    {
      icon: <FaPaintBrush className="text-orange-500 text-4xl mb-4" />,
      title: "Branding & Creative Design",
      description:
        "From logos to brand identity, we craft stunning visuals and designs that tell your story and connect with your audience.",
    },
    {
      icon: <FaUsers className="text-orange-500 text-4xl mb-4" />,
      title: "Influencer Marketing",
      description:
        "Leverage top influencers to amplify your message, boost brand credibility, and expand your audience reach.",
    },
    {
      icon: <FaMobileAlt className="text-orange-500 text-4xl mb-4" />,
      title: "Web & App Development",
      description:
        "Responsive, high-performing websites and mobile apps designed to engage users and support your business goals.",
    },
  ];

  const steps = [
    { step: "01", title: "Discovery", text: "Understanding your business, audience, and goals." },
    { step: "02", title: "Strategy", text: "Crafting a tailored digital marketing plan." },
    { step: "03", title: "Execution", text: "Launching creative campaigns across channels." },
    { step: "04", title: "Optimization", text: "Analyzing data and refining strategies for maximum impact." },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-orange-100">
          We provide end-to-end digital marketing services that help your brand
          stand out, attract customers, and achieve measurable growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 text-gray-300 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our Approach to Success
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-black border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <span className="text-orange-500 text-2xl font-bold">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to scale your brand with our services?
        </h2>
        <p className="mt-4 text-orange-100 max-w-xl mx-auto">
          Let’s work together to create campaigns that deliver real results and
          long-term growth for your business.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-black border border-orange-500 text-white rounded-full px-6 py-3 hover:bg-orange-600 transition">
            <span>Get In Touch</span>
          </button>
          <button className="bg-gradient-to-r from-orange-600 to-orange-800 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Book a Call
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
