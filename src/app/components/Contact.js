"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.div 
          className="max-w-xl mx-auto bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-emerald-500/20"
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
              <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-white placeholder-slate-400"
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
              <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-white placeholder-slate-400"
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
              <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-white placeholder-slate-400 resize-none"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                Send Message
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
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
          <h3 className="text-xl font-semibold mb-6 text-emerald-400">Connect With Me</h3>
          <div className="flex flex-col space-y-4 items-center">
            
            {/* Email */}
            <motion.a 
              href="mailto:harshit.sharma8532@gmail.com"
              className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>harshit.sharma8532@gmail.com</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/harshit-sharma-462a762b5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </div>
              <span>LinkedIn Profile</span>
            </motion.a>

            {/* Location */}
            <motion.div 
              className="flex items-center space-x-3 text-slate-400 group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Shamli, India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
