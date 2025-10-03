// src/components/Projects.jsx

import React from 'react';

const projectsData = [
  { 
    title: "E-commerce Platform", 
    description: "A full-featured e-commerce site built with MERN stack.", 
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  { 
    title: "AI Chatbot Interface", 
    description: "Sleek and responsive UI for a Generative AI model.", 
    tags: ["Next.js", "Tailwind CSS", "OpenAI API"],
    link: "#"
  },
  { 
    title: "Decentralized Finance App", 
    description: "A smart contract application deployed on the Polygon network.", 
    tags: ["Solidity", "Web3.js", "React"],
    link: "#"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Upcoming <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <a 
              key={index}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02] border border-gray-700 hover:border-teal-400"
            >
              <h3 className="text-2xl font-bold mb-3 text-teal-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium bg-teal-900/50 text-teal-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;