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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.div 
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            {/* Name Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </motion.div>

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex flex-col space-y-3 items-center">
            
            {/* Email */}
            <motion.a 
              href="mailto:harshit.sharma8532@gmail.com"
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              📧 harshit.sharma8532@gmail.com
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/harshit-sharma-462a762b5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              🔗 LinkedIn Profile
            </motion.a>

            {/* Location */}
            <motion.div 
              className="flex items-center space-x-3 text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              📍 Shamli, India
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
