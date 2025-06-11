"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Node.js", category: "backend", logo: "/logos/nodejs.png" },
    { name: "Express.js", category: "backend", logo: "/logos/express.png" },
    { name: "MongoDB", category: "database", logo: "/logos/mongodb.png" },
    { name: "React.js", category: "frontend", logo: "/logos/react.png" },
    { name: "JavaScript", category: "language", logo: "/logos/javascript.png" },
    { name: "TypeScript", category: "language", logo: "/logos/typescript.png" },
    { name: "HTML", category: "frontend", logo: "/logos/html5.png" },
    { name: "CSS", category: "frontend", logo: "/logos/css3.png" },
    { name: "Git", category: "tool", logo: "/logos/git.png" },
    { name: "GitHub", category: "tool", logo: "/logos/github.png" },
    { name: "Python", category: "language", logo: "/logos/python.png" },
    { name: "C", category: "language", logo: "/logos/c.png" },
    { name: "Fastify", category: "backend", logo: "/logos/fastify.png" },
    { name: "Solidity", category: "blockchain", logo: "/logos/solidity.png" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-slate-800/50 backdrop-blur-lg px-6 py-6 rounded-2xl shadow-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-emerald-500/10 group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain filter drop-shadow-lg"
                />
              </div>
              <span className="font-medium text-gray-300 group-hover:text-emerald-400 transition-colors duration-300 text-center">
                {skill.name}
              </span>
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}