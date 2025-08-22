import React from 'react';


interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-extrabold text-center mb-16 relative ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Experience
      
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-blue-500 pl-8 space-y-12">
        {/* Single Experience */}
        <div
          className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'
          }`}
        >
          <h3 className="text-2xl font-semibold">Frontend Developer Intern</h3>
          <p className="text-sm font-medium text-emerald-500 mb-3">
            Trialshopy | December 2024 – January 2025
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-base leading-relaxed">
            <li>Developed and optimized responsive UI components using React.js and Tailwind CSS.</li>
            <li>Collaborated with the backend team to integrate REST APIs and improve performance.</li>
            <li>Enhanced user experience by implementing reusable components and subtle animations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
