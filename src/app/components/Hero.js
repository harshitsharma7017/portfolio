"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">Harshit Sharma</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-semibold">Junior Backend Developer</h2>
          <p className="text-lg mb-8 text-gray-200">
            I build scalable web applications using the MERN stack, focusing on efficient and optimized backend solutions.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <motion.a
              href="#projects"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-medium shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Profile Picture */}
        <div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image 
              src="/HarshitSh.jpeg" 
              alt="Harshit Sharma" 
              layout="fill" 
              objectFit="cover" 
              priority 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
