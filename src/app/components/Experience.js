"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div 
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title & Date */}
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Junior Backend Developer</h3>
            <p className="text-gray-500">August 2024 - Present</p>
          </div>

          {/* Company Name */}
          <p className="text-lg font-medium text-gray-900 mb-2">Dehix</p>

          {/* Company Description */}
          <p className="text-gray-600 mb-4">
            Dehix specializes in web application development, focusing on scalable solutions and modern technologies.
          </p>

          {/* Responsibilities List */}
          <ul className="list-none space-y-3">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Developed and optimized <span className="font-medium text-blue-600">RESTful APIs</span> using <span className="font-medium text-blue-600">Node.js</span> and <span className="font-medium text-blue-600">Express.js</span>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Integrated <span className="font-medium text-blue-600">MongoDB</span> for efficient data storage and retrieval.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Designed and implemented <span className="font-medium text-blue-600">JWT-based authentication</span> and role-based access control.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Collaborated with frontend developers to ensure seamless API integration with <span className="font-medium text-blue-600">React.js</span>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Implemented background job processing using <span className="font-medium text-blue-600">BullMQ</span> for handling async tasks efficiently.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Optimized database queries, improving API response times by <span className="font-medium text-blue-600">30%</span>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">✔</span>
              <span>Monitored and debugged application performance using <span className="font-medium text-blue-600">Postman</span>, <span className="font-medium text-blue-600">Jest</span>, and <span className="font-medium text-blue-600">New Relic</span>.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
