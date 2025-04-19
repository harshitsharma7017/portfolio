"use client";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div 
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Junior Backend Developer</h3>
            <p className="text-gray-500">August 2024 - Present</p>
          </div>

          <p className="text-lg font-medium text-gray-900 mb-2">Dehix</p>

          <p className="text-gray-600 mb-4">
            Dehix specializes in web application development, focusing on scalable solutions and modern technologies.
          </p>

          <ul className="list-none space-y-3">
            {[
              "Developed and optimized RESTful APIs using Node.js and Express.js.",
              "Integrated MongoDB for efficient data storage and retrieval.",
              "Designed and implemented JWT-based authentication and role-based access control.",
              "Collaborated with frontend developers to ensure seamless API integration with React.js.",
              "Implemented background job processing using BullMQ for handling async tasks efficiently.",
              "Optimized database queries, improving API response times by 30%.",
              "Monitored and debugged application performance using Postman, Jest, and New Relic."
            ].map((task, index) => (
              <motion.li 
                key={index} 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-blue-500">✔</span>
                <span className="text-gray-700">{task}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* GitHub Contributions Graph */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-4">
            GitHub Contributions
          </h3>
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar 
              username="harshitsharma7017" 
              blockSize={15}
              blockMargin={5}
              colorScheme="light" 
              fontSize={14}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
