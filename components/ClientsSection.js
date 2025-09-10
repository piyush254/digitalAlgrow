"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ash Real Estate",
      role: "Realtor",
      image: "/pexels-pavel-danilyuk-8112180.jpg", // replace with your image
      text: "Their short video content is always trendy and attention-grabbing. Great experience working with them!",
    },
    {
      name: "Jordan Lally",
      role: "Digital Marketing Director",
      image: "/pexels-pavel-danilyuk-8112180.jpg",
      text: "We saw real engagement growth after collaborating with VivaFox. They're experts at viral content!",
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Hear from businesses who trusted VivaFox to boost their brand
          </p>
        </div>

        {/* Testimonials */}
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#1a0d06] via-black to-[#1a0d06] p-6 rounded-2xl space-y-6 md:space-y-0 md:space-x-8"
          >
            {/* Image */}
            <div className="flex-shrink-0 relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="text-white max-w-2xl">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <p className="text-orange-400 font-bold mt-4">{t.name}</p>
              <p className="text-gray-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
