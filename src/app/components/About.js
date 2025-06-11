"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Who I Am */}
          <motion.div 
            className="md:w-1/2 bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Who I Am</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a <span className="font-semibold text-emerald-400">Junior Backend Developer</span> passionate about building scalable web applications using the <span className="font-semibold text-teal-400">MERN stack</span>. 
              I focus on <span className="text-emerald-400 font-medium">efficient backend solutions</span> and database optimization to enhance user experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing <span className="font-semibold text-teal-400">B.Tech at MIET Meerut</span>, I am always eager to learn new technologies and improve my skills.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="md:w-1/2 bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Education</h3>
            <div className="mb-6 border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-3 rounded-r-lg">
              <p className="font-semibold text-white">B.Tech in Computer Science</p>
              <p className="text-gray-300">Meerut Institute of Engineering and Technology</p>
              <p className="text-teal-400 text-sm font-medium">August 2021 - Present</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 bg-teal-500/5 py-3 rounded-r-lg">
              <p className="font-semibold text-white">12th Grade</p>
              <p className="text-gray-300">Scottish International School</p>
              <p className="text-teal-400 text-sm font-medium">April 2020 - March 2021</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}