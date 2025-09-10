// // components/Testimonials.js
// "use client";

// import React from "react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Jordan Lally",
//       role: "Digital Marketing Director",
//       image: "pexels-pavel-danilyuk-8112180.jpg",
//       text: `We saw real engagement growth after collaborating with VivaFox. They're experts at viral content!`,
//     },
//     {
//       name: "Kamilah Stevenson",
//       role: "Yoga Centre",
//       image: "/kamilah.png",
//       text: `VivaFox Digital helped us create viral videos that boosted our brand reach. Super creative team and fast delivery!`,
//     },
//     // Add more testimonials here
//   ];

//   return (
//     <section className="bg-black py-16 px-6">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           What Our Clients Say
//         </h2>
//         <p className="text-gray-400 mt-4 text-lg">
//           Hear from businesses who trusted VivaFox to boost their brand
//         </p>
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto space-y-16">
//         {testimonials.map((t, index) => (
//           <div
//             key={index}
//             className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
//               index % 2 !== 0 ? "md:flex-row-reverse md:grid-cols-3" : ""
//             }`}
//           >
//             {/* Image */}
//             <div className="flex justify-center md:justify-end">
//               <div className="relative group">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="rounded-2xl w-64 h-64 object-cover filter sepia transition-transform duration-500 group-hover:scale-105 shadow-lg ring-4 ring-orange-400"
//                 />
//                 <div className="absolute -top-4 -left-4 text-orange-400 text-6xl opacity-20 select-none">
//                   “
//                 </div>
//               </div>
//             </div>

//             {/* Divider Line */}
//             <div className="hidden md:block w-px bg-gray-700 h-64 mx-8"></div>

//             {/* Text */}
//             <div className="text-white space-y-4 max-w-xl">
//               <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
//                 {t.text}
//               </p>
//               <p className="text-orange-400 font-bold text-lg md:text-xl">
//                 {t.name}
//               </p>
//               <p className="text-gray-400 italic">{t.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// components/Testimonials.js
"use client";

import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ash Real Estate",
      role: "Realtor",
      image: "/ash.png", // replace with your image
      text: `Their short video content is always trendy and attention-grabbing. Great experience working with them!`,
    },
    {
      name: "Jordan Lally",
      role: "Digital Marketing Director",
      image: "pexels-pavel-danilyuk-8112180.jpg",
      text: `We saw real engagement growth after collaborating with VivaFox. They're experts at viral content!`,
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

        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#1a0d06] via-black to-[#1a0d06] p-6 rounded-2xl space-y-6 md:space-y-0 md:space-x-8"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={t.image}
                alt={t.name}
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="text-white max-w-2xl">
              <p className="text-lg md:text-xl leading-relaxed">"{t.text}"</p>
              <p className="text-orange-400 font-bold mt-4">{t.name}</p>
              <p className="text-gray-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
