"use client";
import { useState, memo, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Memoized project data to prevent recreation
const projectsData = [
  {
    id: 1,
    title: "Task Management System",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "A full-stack task management system where users can create, update, and track tasks efficiently.",
    details: [
      "Developed a responsive dashboard with drag-and-drop functionality.",
      "Implemented JWT-based authentication and role-based access control.",
      "Optimized MongoDB queries for better performance in large datasets.",
      "Integrated real-time notifications using WebSockets for task updates.",
      "Deployed on Vercel (Frontend) and Render (Backend, MongoDB Atlas)."
    ],
    image: "/task-manager2.png",
    category: "Full Stack",
    priority: "high"
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    techStack: "Node.js, WebSockets, MongoDB, React.js, Socket.io",
    description: "A real-time chat application facilitating instant messaging between users.",
    details: [
      "Built a real-time messaging platform using WebSockets (Socket.io).",
      "Designed a responsive UI using Tailwind CSS and React.js.",
      "Implemented a typing indicator and read receipts for a better user experience.",
      "Stored chat messages securely in MongoDB with encryption.",
      "Deployed using AWS EC2 for backend & Firebase Hosting for frontend."
    ],
    image: "/chat-app2.png",
    category: "Real-time",
    priority: "high"
  },
  {
    id: 3,
    title: "Attendance Tracker Application",
    techStack: "Node.js, MongoDB, Flutter, Firebase",
    description: "A location-based attendance tracking system for employees and students.",
    details: [
      "Developed APIs for attendance check-in/check-out based on geolocation.",
      "Implemented Firebase authentication for secure login.",
      "Designed an interactive dashboard for administrators to monitor attendance.",
      "Integrated Google Maps API for route tracking & visualization.",
      "Deployed backend on Google Cloud Functions and database on MongoDB Atlas."
    ],
    image: "/attendance-tracker.png",
    category: "Mobile",
    priority: "medium"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};

// Memoized project card component
const ProjectCard = memo(({ project, onSelect }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  }, [project, onSelect]);

  return (
    <motion.article 
      className="bg-slate-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col focus-within:ring-2 focus-within:ring-emerald-500/50"
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={project.image} 
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority={project.priority === 'high'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-emerald-400 mb-3 text-sm font-medium">{project.techStack}</p>
        <p className="text-slate-300 mb-4 leading-relaxed flex-grow line-clamp-3">{project.description}</p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.split(', ').slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
            >
              {tech.replace(/[()]/g, '')}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <motion.span 
            className="text-teal-400 hover:text-emerald-400 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Memoized modal component
const ProjectModal = memo(({ project, onClose }) => {
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div 
        className="bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative border border-emerald-500/30"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-slate-400 hover:text-emerald-400 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Modal Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image 
            src={project.image} 
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Modal Content */}
        <h2 id="modal-title" className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
        <p className="text-emerald-400 mb-3 text-sm font-medium">{project.techStack}</p>
        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

        {/* Details List */}
        <h3 className="text-lg font-semibold mb-3 text-emerald-400">Project Highlights:</h3>
        <ul className="list-none text-slate-300 mb-6 space-y-2" role="list">
          {project.details.map((detail, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <motion.button 
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            onClick={onClose}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectModal.displayName = 'ProjectModal';

// Memoized background component
const BackgroundElements = memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Memoized projects to prevent recreation
  const projects = useMemo(() => projectsData, []);

  const handleProjectSelect = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          id="projects-heading"
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onSelect={handleProjectSelect}
            />
          ))}
        </motion.div>

        {/* Modal Popup */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <ProjectModal 
              project={selectedProject}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>

        <BackgroundElements />
      </div>
    </section>
  );
}