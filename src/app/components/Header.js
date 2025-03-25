"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ScrollLink to="home" smooth={true} duration={500} offset={-70} className="font-bold text-2xl cursor-pointer">
          Portfolio
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["about", "experience", "projects", "skills", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-600 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {["about", "experience", "projects", "skills", "contact"].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="block hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
