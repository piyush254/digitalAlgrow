import React from "react";

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-center overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0d06] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,87,34,0.4)_0%,_transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
          Explode your <br />
          online <span className="text-orange-400">Presence</span> <br />
          with <span className="text-orange-500">Content</span> <br />
          <span className="text-orange-300">That Works</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          We help brands grow faster with data-driven strategies and creative campaigns
          that deliver measurable results.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-orange-400 text-orange-400 font-semibold hover:bg-orange-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
