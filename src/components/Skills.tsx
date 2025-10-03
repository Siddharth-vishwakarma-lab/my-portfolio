// src/components/Skills.jsx

'use client';

import React, { useState } from 'react';

// Define types
type Skill = {
  name: string;
  icon: string;
};

type SkillsData = {
  [key: string]: Skill[];
};

// Organized skill data for the categorized view
const skillsData: SkillsData = {
  'Frontend': [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🚀' },
    { name: 'JavaScript (ES6+)', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5 & CSS3', icon: '🌐' },
    { name: 'Redux/Zustand', icon: '🔄' },
  ],
  'Backend & Database': [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '💨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Authentication (JWT)', icon: '🔑' },
  ],
  'Tools & DevOps': [
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'AWS (S3, EC2)', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Vercel/Netlify', icon: '📤' },
    { name: 'Jest/React Testing Library', icon: '🧪' },
    { name: 'Figma', icon: '📐' },
  ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          My <span className="text-teal-400">Skills</span>
        </h2>

        {/* Category Tabs (Requires 'use client' on this component for useState) */}
        <div className="flex justify-center mb-10 border-b border-gray-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                py-3 px-6 text-lg font-medium transition-all duration-300 ease-in-out
                ${activeCategory === category 
                  ? 'text-teal-400 border-b-2 border-teal-400' 
                  : 'text-gray-400 hover:text-white hover:border-gray-500'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData[activeCategory].map((skill: Skill, index: number) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 
                         flex flex-col items-center text-center transition-all duration-300 
                         hover:bg-gray-700 hover:shadow-2xl hover:scale-[1.03]"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;