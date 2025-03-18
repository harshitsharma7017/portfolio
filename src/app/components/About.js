"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Who I Am */}
          <motion.div 
            className="md:w-1/2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Who I Am</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I am a <span className="font-semibold">Junior Backend Developer</span> passionate about building scalable web applications using the <span className="font-semibold">MERN stack</span>. 
              I focus on <span className="text-blue-600 font-medium">efficient backend solutions</span> and database optimization to enhance user experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently pursuing <span className="font-semibold">B.Tech at MIET Meerut</span>, I am always eager to learn new technologies and improve my skills.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="md:w-1/2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">B.Tech in Computer Science</p>
              <p className="text-gray-700">Meerut Institute of Engineering and Technology</p>
              <p className="text-gray-600 text-sm">August 2021 - Present</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">12th Grade</p>
              <p className="text-gray-700">Scottish International School</p>
              <p className="text-gray-600 text-sm">April 2020 - March 2021</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
