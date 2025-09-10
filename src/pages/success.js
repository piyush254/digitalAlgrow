import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappWidget from "../../components/WhatsappWidget";

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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Client Success Stories
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-orange-100">
          We partner with ambitious brands to deliver measurable results. Here’s
          how we’ve helped our clients grow.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={study.image}
                alt={study.client}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {study.client}
                </h3>
                <p className="text-orange-500 font-bold mt-2">{study.result}</p>
                <p className="text-gray-400 text-sm mt-3">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to create your success story?
        </h2>
        <p className="mt-4 text-orange-100 max-w-xl mx-auto">
          Let’s discuss how we can grow your brand with the right digital
          strategies.
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

export default Success;
