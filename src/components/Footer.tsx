// src/components/Footer.jsx

'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Siddharth. All Rights Reserved.
        </p>
        
        {/* Design/Tech Credit */}
        <p className="text-sm">
          Built with <span className="text-teal-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>
        </p>

        {/* Quick Back to Top Link */}
        <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-teal-400 text-sm mt-4 md:mt-0 hover:text-cyan-400 transition-colors"
        >
            Back to Top
        </a>

      </div>
    </footer>
  );
};

export default Footer;