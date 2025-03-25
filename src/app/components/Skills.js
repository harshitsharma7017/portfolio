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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
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
              className="flex flex-col items-center bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-14 h-14">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 font-medium text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
