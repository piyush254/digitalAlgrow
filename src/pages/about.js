import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappWidget from "../../components/WhatsappWidget";

function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Digital Algrow</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-orange-100">
          We are a results-driven digital marketing company helping brands grow
          with creative strategies, technology, and innovation.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-black text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-400 leading-relaxed">
              Digital Algrow started with a vision: to help businesses of all
              sizes grow online with meaningful strategies that actually work.
              From small startups to established brands, we’ve delivered
              measurable results by combining creativity, data, and innovation.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Our mission is to be more than just a marketing agency — we’re
              your growth partner, committed to building long-term success for
              your brand.
            </p>
          </div>
          <div>
            <img
              src="pexels-divinetechygirl-1181438 (1).jpg"
              alt="Our Team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-400">
              To empower businesses with creative digital strategies that
              deliver measurable growth and impact.
            </p>
          </div>
          <div className="p-6 bg-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-400">
              To be the trusted growth partner for brands worldwide, creating
              innovative solutions that shape the digital future.
            </p>
          </div>
          <div className="p-6 bg-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              Our Values
            </h3>
            <p className="text-gray-400">
              Integrity, creativity, innovation, and transparency guide
              everything we do to ensure long-lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Vivek Sharma", role: "Founder & CEO", img: "/team/ceo.jpg" },
              { name: "Aarav Sharma", role: "Marketing Head", img: "/team/marketing.jpg" },
              { name: "Sneha Patel", role: "Creative Director", img: "/team/creative.jpg" },
              { name: "Rahul Verma", role: "Tech Lead", img: "/team/tech.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-6 hover:shadow-2xl transition"
              >
                <img
                  src="pexels-divinetechygirl-1181438 (1).jpg"
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-600"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s grow your brand together
        </h2>
        <p className="mt-4 text-orange-100 max-w-xl mx-auto">
          We’re passionate about helping brands thrive in the digital world.
          Partner with us and take your business to the next level.
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

export default About;
