// src/components/About.tsx

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          About <span className="text-teal-400">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* 1. Primary Text Content Column (2/3 width on desktop) */}
          <div className="lg:w-2/3">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I&#39;m <strong className="text-teal-400">Siddharth</strong>, an enthusiastic **Full Stack Developer** focused on building functional, scalable, and modern web applications. This portfolio is my very first project, marking the start of my journey into professional development. My current expertise lies primarily in the **MERN stack** and modern utility frameworks like **Tailwind CSS**.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am driven by a passion for **continuous learning** and a desire to contribute innovative solutions. I approach every challenge with dedication, focusing on writing clean, readable code and ensuring an optimal user experience. I am actively seeking my first role where I can apply my skills and grow within a professional team.
            </p>
            
            {/* NEW: Current Focus/Call to Action Area */}
            <div className="mt-8 p-6 bg-gray-800 rounded-lg border-l-4 border-teal-400 shadow-xl">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Current Focus</h3>
                <p className="text-gray-300">
                    I&#39;m currently honing my skills in **Next.js** for server-side rendering and **TypeScript** for robust application development. See my full list of technologies in the <a href="#skills" className="text-cyan-400 font-medium hover:underline transition-colors">Skills section</a>.
                </p>
            </div>
          </div>
          
          {/* 2. Core Philosophy/Commitment Column (1/3 width on desktop) - UNCHANGED */}
          <div className="lg:w-1/3 w-full p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              My Development Commitment
            </h3>

            <div className="space-y-6">
              {[
                { title: "Continuous Learner 📚", text: "Always exploring new technologies and best practices to improve my craft." },
                { title: "Problem Solver 💡", text: "Dedicated to tackling complex challenges and delivering robust, simple solutions." },
                { title: "User-Centric Design 💻", text: "Prioritizing the end-user experience for intuitive and accessible interfaces." },
              ].map((item, index) => (
                <div key={index} className="flex flex-col p-3 border-l-4 border-teal-400 bg-gray-700/50">
                  <span className="text-lg font-bold text-teal-300 mb-1">
                    {item.title}
                  </span>
                  <span className="text-sm text-gray-400">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Simple Call to Action */}
            <div className="mt-8 text-center">
                <a 
                    href="#contact"
                    className="inline-block text-teal-400 font-semibold hover:text-cyan-400 transition-colors"
                >
                    Ready to build? Let&#39;s connect →
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;