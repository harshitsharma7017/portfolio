"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Task Management System",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "A full-stack task management system where users can create, update, and track tasks efficiently.",
    details: [
      "Developed a responsive dashboard with drag-and-drop functionality.",
      "Implemented JWT-based authentication and role-based access control.",
      "Optimized MongoDB queries for better performance in large datasets.",
      "Integrated real-time notifications using WebSockets for task updates.",
      "Deployed on **Vercel (Frontend)** and **Render (Backend, MongoDB Atlas)**."
    ],
    image: "/task-manager2.png",
  },
  {
    title: "Real-time Chat Application",
    techStack: "Node.js, WebSockets, MongoDB, React.js, Socket.io",
    description: "A real-time chat application facilitating instant messaging between users.",
    details: [
      "Built a real-time messaging platform using WebSockets (Socket.io).",
      "Designed a responsive UI using Tailwind CSS and React.js.",
      "Implemented a typing indicator and read receipts for a better user experience.",
      "Stored chat messages securely in MongoDB with encryption.",
      "Deployed using **AWS EC2** for backend & **Firebase Hosting** for frontend."
    ],
    image: "/chat-app2.png",
  },
  {
    title: "Attendance Tracker Application",
    techStack: "Node.js, MongoDB, Flutter, Firebase",
    description: "A location-based attendance tracking system for employees and students.",
    details: [
      "Developed APIs for attendance check-in/check-out based on geolocation.",
      "Implemented Firebase authentication for secure login.",
      "Designed an interactive dashboard for administrators to monitor attendance.",
      "Integrated **Google Maps API** for route tracking & visualization.",
      "Deployed backend on **Google Cloud Functions** and database on **MongoDB Atlas**."
    ],
    image: "/attendance-tracker.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-teal-400 mb-4 text-sm font-medium">{project.techStack}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex justify-end">
                  <button className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300 flex items-center group">
                    View Project
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Popup */}
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative border border-emerald-500/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-400 text-2xl transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-500/10" 
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-xl"
                />
              </div>

              {/* Modal Content */}
              <h3 className="text-2xl font-semibold mb-3 text-white">{selectedProject.title}</h3>
              <p className="text-teal-400 mb-4 font-medium">{selectedProject.techStack}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

              {/* Details List */}
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Project Highlights:</h4>
              <ul className="list-none space-y-3 mb-6">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-lg leading-none">✓</span>
                    <span className="text-gray-300 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Close Button */}
              <div className="flex justify-end">
                <motion.button 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}