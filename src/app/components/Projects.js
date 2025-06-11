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
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col"
              onClick={() => setSelectedProject(project)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-emerald-400 mb-3 text-sm font-medium">{project.techStack}</p>
                <p className="text-slate-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex justify-end">
                  <motion.button 
                    className="text-teal-400 hover:text-emerald-400 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Popup */}
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl max-w-lg w-full p-5 relative border border-emerald-500/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-slate-400 hover:text-emerald-400 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700/50 transition-all duration-200" 
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-36 mb-3 rounded-lg overflow-hidden">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  layout="fill" 
                  objectFit="contain" 
                  className="rounded-lg"
                />
              </div>

              {/* Modal Content */}
              <h3 className="text-xl font-bold mb-2 text-white">{selectedProject.title}</h3>
              <p className="text-emerald-400 mb-3 text-sm font-medium">{selectedProject.techStack}</p>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{selectedProject.description}</p>

              {/* Details List */}
              <h4 className="text-base font-semibold mb-2 text-emerald-400">Project Highlights:</h4>
              <ul className="list-none text-slate-300 mb-4 space-y-1">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Close Button */}
              <div className="flex justify-end mt-4">
                <motion.button 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-sm"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}