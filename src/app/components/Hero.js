"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

export default function Hero() {
  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Optimized mouse tracking with throttling
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing animation state
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, I'm Harshit Sharma";

  // Throttled mouse move handler
  const handleMouseMove = useCallback((event) => {
    // Throttle mouse updates to 60fps max
    requestAnimationFrame(() => {
      setMousePos({ x: event.clientX, y: event.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Optimized typing effect
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const deleteStartDelay = 1000;

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), deleteStartDelay);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTimeout(() => {}, 500);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, isDeleting, fullText]);

  // Memoized particle positions to reduce calculations
  const particlePositions = useMemo(() => ({
    particle1: { top: mousePos.y - 20, left: mousePos.x - 20 },
    particle2: { top: mousePos.y - 50, left: mousePos.x - 50 }
  }), [mousePos.x, mousePos.y]);

  // Optimized 3D card mouse handler
  const handle3DMouseMove = useCallback((event) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xValue = ((clientX - left) / width) * 100 - 50;
    const yValue = ((clientY - top) / height) * 100 - 50;
    
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      x.set(xValue);
      y.set(yValue);
    });
  }, [x, y]);

  const handle3DMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Static Background Elements - Removed expensive animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Optimized Floating Particles - Reduced to single particle */}
      <motion.div 
        className="absolute w-12 h-12 bg-emerald-400/20 rounded-full blur-lg pointer-events-none"
        style={particlePositions.particle1}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Greeting Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              {displayedText}
              <span className="animate-pulse text-emerald-400">|</span>
            </span>
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I build scalable web applications using the MERN stack, focusing on efficient and optimized backend solutions that deliver exceptional user experiences.
          </motion.p>

          {/* Enhanced Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ScrollLink>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white hover:bg-emerald-500/10 rounded-full font-semibold shadow-lg transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <span>Contact Me</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </ScrollLink>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 justify-center lg:justify-start mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/harshitsharma7017"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/harshit-sharma-462a762b5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Optimized 3D Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Simplified decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-teal-500/20 rounded-full blur-lg"></div>
          
          <motion.div
            className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            onMouseMove={handle3DMouseMove}
            onMouseLeave={handle3DMouseLeave}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
            
            <motion.div 
              className="relative w-full h-full rounded-2xl overflow-hidden border border-emerald-500/20"
              style={{ rotateX, rotateY }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
              <Image 
                src="/HarshitSh.jpeg" 
                alt="Harshit Sharma" 
                fill
                className="object-cover rounded-2xl"
                priority 
                quality={85}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 400px"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}