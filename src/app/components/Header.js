"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["about", "experience", "projects", "skills", "contact"];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-slate-700/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="group font-bold text-2xl lg:text-3xl text-white cursor-pointer tracking-wide transition-all duration-300 hover:text-emerald-400"
            >
              <span className="relative">
                Portfolio
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </span>
            </ScrollLink>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative px-4 py-2 text-gray-300 font-medium text-sm lg:text-base transition-all duration-300 hover:text-emerald-400 cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-emerald-500 before:to-teal-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10"
                >
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  
                  {/* Enhanced underline effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </ScrollLink>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-slate-800/95 backdrop-blur-lg shadow-xl border-t border-slate-700/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((section, index) => (
                  <motion.div
                    key={section}
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <ScrollLink
                      to={section}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="relative block px-6 py-4 text-gray-300 font-medium text-lg transition-all duration-300 hover:text-emerald-400 cursor-pointer rounded-xl hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 border border-transparent hover:border-emerald-500/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                      
                      {/* Mobile item background effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
