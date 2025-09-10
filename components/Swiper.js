// pages/index.js
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Home() {
  const images = [
    "pexels-pixabay-4158.jpg",
    "pexels-rpnickson-3082341.jpg",
    "pexels-pixabay-60504.jpg",
    "pexels-pixabay-4158.jpg",
    "pexels-pixabay-4158.jpg",
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0d06] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,87,34,0.4)_0%,_transparent_70%)] animate-pulse"></div>
      </div>

      {/* Slider Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-12">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={40}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 220,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className="transition-transform duration-700 ease-in-out"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-700 ease-in-out cursor-pointer"
            >
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200 transition-all duration-700">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Orange Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-orange-400/20 mix-blend-screen pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
