import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappWidget from "../../components/WhatsappWidget";

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-orange-100">
          Take a look at some of our successful projects where we transformed
          brands, scaled businesses, and delivered measurable results.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <span className="text-sm text-orange-500 font-medium">
                  {project.category}
                </span>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-gray-900 text-gray-300 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/featured-project.jpg"
            alt="Featured Case Study"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Study: Fashion Brand Scaling
            </h2>
            <p className="text-gray-400 mb-6">
              We partnered with a rising fashion brand to create viral social
              media campaigns and influencer collaborations that resulted in{" "}
              <span className="text-orange-500 font-semibold">
                3x revenue growth
              </span>{" "}
              within 6 months. Our strategic mix of organic and paid campaigns
              delivered long-term brand loyalty.
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              View Full Case Study
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s Create Success Stories Together
        </h2>
        <p className="mt-4 text-orange-100 max-w-xl mx-auto">
          We’ve helped brands scale with proven digital strategies. Yours could
          be the next success story!
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

export default Portfolio;
