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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-52">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg"/>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.techStack}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Project →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl" 
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              {/* Modal Image (Reduced height) */}
              <div className="relative w-full h-48 mb-3">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  layout="fill" 
                  objectFit="contain" 
                  className="rounded-lg"
                />
              </div>

              {/* Modal Content (More compact) */}
              <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-3">{selectedProject.techStack}</p>
              <p className="text-gray-700 mb-3">{selectedProject.description}</p>

              {/* Details List */}
              <h4 className="text-lg font-semibold mt-2">Project Highlights:</h4>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              {/* Close Button */}
              <div className="flex justify-end mt-4">
                <button 
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
