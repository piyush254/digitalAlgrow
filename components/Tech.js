import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
  { name: "JavaScript", image: "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png" },
  { name: "HTML5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "Tailwind CSS", image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: "Python", image: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Appwrite", image: "https://avatars.githubusercontent.com/u/52372568?s=280&v=4" },
  { name: "Firebase", image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: "Node.js", image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Flutter", image: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },

  // New additions
  { name: "Docker", image: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
  // { name: "Apache Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Apache_Kafka_logo.svg" },
  // { name: "Zookeeper", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Apache_ZooKeeper_logo.svg" },
  { name: "AWS", image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Jenkins", image: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg" },
];

const Technologies = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-6 md:px-16 font-code overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),transparent_70%)] pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Technologies We Use
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col items-center justify-center bg-zinc-900/70 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-white font-medium text-center">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
