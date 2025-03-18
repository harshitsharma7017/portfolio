"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.div 
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex flex-col space-y-3 items-center">
            
            {/* Email */}
            <motion.a 
              href="mailto:harshit.sharma8532@gmail.com"
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>harshit.sharma8532@gmail.com</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/harshit-sharma-462a762b5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16.5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm6-11a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-9zm6 5a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4z"></path>
              </svg>
              <span>linkedin.com/in/harshit-sharma-462a762b5</span>
            </motion.a>

            {/* Location */}
            <motion.div 
              className="flex items-center space-x-3 text-gray-700"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Shamli, India</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
