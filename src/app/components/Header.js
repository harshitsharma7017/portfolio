'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-2xl cursor-pointer">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about">
            <span className="hover:text-blue-600 cursor-pointer">About</span>
          </Link>
          <Link href="#experience">
            <span className="hover:text-blue-600 cursor-pointer">Experience</span>
          </Link>
          <Link href="#projects">
            <span className="hover:text-blue-600 cursor-pointer">Projects</span>
          </Link>
          <Link href="#skills">
            <span className="hover:text-blue-600 cursor-pointer">Skills</span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-blue-600 cursor-pointer">Contact</span>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link href="#about">
              <span className="block hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</span>
            </Link>
            <Link href="#experience">
              <span className="block hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Experience</span>
            </Link>
            <Link href="#projects">
              <span className="block hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Projects</span>
            </Link>
            <Link href="#skills">
              <span className="block hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Skills</span>
            </Link>
            <Link href="#contact">
              <span className="block hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
