// src/components/Contact.jsx

import React from 'react';
// This component can remain a Server Component as it has no state or client-side interaction (unless you add a form later)

// Replace these placeholders with your actual URLs
const socialLinks = [
  { 
    name: "GitHub", 
    icon: "fab fa-github", // Assuming you use a FontAwesome-like library or similar icons
    url: "https://github.com/Siddharth-vishwakarma-lab",
    handle: "Siddharth-vishwakarma-lab"
  },
  { 
    name: "LinkedIn", 
    icon: "fab fa-linkedin", 
    url: "https://www.linkedin.com/in/siddharth-vishwakarma-7472b0336/",
    handle: "siddharth-vishwakarma-7472b0336"
  },
  {  
    name: "Instagram", 
    icon: "fab fa-instagram", 
    url: "https://www.instagram.com/_siddharth.vishwakarma/",
    handle: "_siddharth.vishwakarma"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Get <span className="text-teal-400">In Touch</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I&#39;m currently seeking new opportunities and challenges. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
        </p>

        {/* Primary Contact Method (Email Button) */}
        <a 
          href="mailto:vsid34746@gmail.com" // CHANGE THIS TO YOUR EMAIL
          className="inline-block px-10 py-4 text-xl font-semibold text-gray-900 bg-teal-400 rounded-lg shadow-xl 
                     hover:bg-teal-300 transition-colors duration-300 transform hover:scale-105"
        >
          vsid34746@gmail.com
        </a>

        {/* Social Links / Channels */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-3xl font-semibold mb-8 text-teal-400">
            Connect With Me
          </h3>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
              >
                {/* Icon Placeholder (If you use a proper icon library like Font Awesome, this will display) */}
                <div className="text-4xl text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
                  {/* Fallback text if no icon library is used */}
                  {link.name === "GitHub" && "🐙"} 
                  {link.name === "LinkedIn" && "💼"} 
                  {link.name === "Instagram" && "📸"} 
                </div>
                
                <p className="mt-3 text-lg font-medium text-gray-200 group-hover:text-teal-400 transition-colors duration-300">
                  {link.name}
                </p>
                <span className="text-sm text-gray-500">{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;