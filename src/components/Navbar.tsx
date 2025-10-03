// src/components/Navbar.jsx

'use client'; // <-- Needs 'use client' for state (isOpen) and interaction (click handler)

import React, { useState } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id.substring(1)); // Remove the '#'
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Name - Left Side */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }}
              className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 hover:opacity-90 transition-opacity"
            >
              Sid&#39;s Lab
            </a>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleScrollTo(item.href); }}
                  className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon (Hamburger/Close) */}
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Collapsible */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleScrollTo(item.href); }}
              className="block text-gray-300 hover:bg-gray-800 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;