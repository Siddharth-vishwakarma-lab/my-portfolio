// src/components/Hero.jsx (Assuming you are using Tailwind CSS)

'use client';

import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden"
    >
      {/* Subtle Background Glow/Accent (The 'unique' part) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        {/* Bold, Modern Title with Accent Color */}
        <p className="text-xl md:text-2xl font-semibold mb-4 text-teal-400 tracking-widest uppercase">
          Hello, I&#39;m
        </p>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 leading-tight">
          Siddharth
        </h1>
        
        {/* Sleek Gradient Subtitle */}
        <h2 className="text-3xl md:text-4xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
          Full Stack Developer
        </h2>
        
        {/* Call to Action Button */}
        <button 
          className="mt-12 px-8 py-3 text-lg font-medium text-gray-900 bg-teal-400 rounded-lg shadow-lg hover:bg-teal-300 transition-colors duration-300 transform hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </button>
      </div>

      {/* Note: You'd need to define the 'animate-blob' and 'animation-delay-2000' in your CSS file for the unique background effect. */}
    </section>
  );
};

export default Hero;