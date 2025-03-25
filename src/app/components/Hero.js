/* eslint-disable react/no-unescaped-entities */

"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // State for floating particles that follow the mouse
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
      {/* Floating Particles */}
      <motion.div 
        className="absolute w-12 h-12 bg-white/20 rounded-full blur-lg"
        style={{ top: mouseY - 20, left: mouseX - 20 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-8 h-8 bg-yellow-400/30 rounded-full blur-xl"
        style={{ top: mouseY - 50, left: mouseX - 50 }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.6, 0.1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">Harshit Sharma</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Junior Backend Developer
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            I build scalable web applications using the MERN stack, focusing on efficient and optimized backend solutions.
          </motion.p>

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

        {/* Right Side - 3D Floating Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-72 h-96 md:w-96 md:h-[28rem] rounded-xl overflow-hidden shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            onMouseMove={(event) => {
              const { clientX, clientY, currentTarget } = event;
              const { left, top, width, height } = currentTarget.getBoundingClientRect();
              const xValue = ((clientX - left) / width) * 100 - 50;
              const yValue = ((clientY - top) / height) * 100 - 50;
              x.set(xValue);
              y.set(yValue);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <motion.div 
              className="absolute inset-0"
              style={{ rotateX, rotateY }}
            >
              <Image 
                src="/HarshitSh.jpeg" 
                alt="Harshit Sharma" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-xl"
                priority 
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
