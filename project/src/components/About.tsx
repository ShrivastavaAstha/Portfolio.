import React from 'react';
import { Download } from 'lucide-react';
import pic from "./pic.jpg";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <>
    <section 
      id="about" 
      className={`py-20 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </h2>s

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I’m a passionate <span className="font-semibold text-emerald-500">Full-Stack Developer </span> 
               with a strong foundation in building modern, scalable, and user-friendly web applications. 
              I specialize in the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) 
              and enjoy creating products that combine <span className="italic">beautiful UI</span>, seamless functionality, 
              and secure backend systems.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              With hands-on experience in projects like an <span className="font-medium">AI-Powered Collaboration Platform</span>, 
              <span className="font-medium"> Healthcare Management System</span>, and a 
              <span className="font-medium"> Movie Discovery Platform</span>, I’ve worked across diverse domains—implementing 
              <span className="text-emerald-500"> real-time features</span>, AI integrations, authentication systems, and dashboards. 
              Beyond coding, I thrive on problem-solving, continuous learning, and turning ideas into impactful digital solutions.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Outside of development, I enjoy exploring new technologies, contributing to open-source, and sharing knowledge 
              with the developer community.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <a href="/Astha-Resume.pdf"  download="Astha-Resume.pdf" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 justify-center sm:justify-start">
                <Download size={20} />
                 Download Resume
               </a>
             <button
  onClick={() => {
    const section = document.getElementById("skills"); // change to "projects" / "experience" etc.
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className={`border-2 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all ${
    darkMode
      ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
  }`}
>
  Learn More
</button>

            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div
              className={`w-80 h-96 rounded-2xl shadow-2xl overflow-hidden relative group ${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              <img
                src={pic}
                alt="Professional headshot"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative elements */}
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl blur-xl ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-500 to-emerald-500'
                  : 'bg-gradient-to-br from-blue-400 to-emerald-400'
              } opacity-70`}
            ></div>
            <div
              className={`absolute -top-6 -left-6 w-16 h-16 rounded-full blur-lg ${
                darkMode
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                  : 'bg-gradient-to-br from-amber-300 to-orange-400'
              } opacity-80`}
            ></div>
          </div>
        </div>
      </div>

      {/* Subtle background gradient overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? 'bg-gradient-to-tr from-gray-900 via-gray-800/40 to-gray-900'
            : 'bg-gradient-to-tr from-white via-gray-50 to-white'
        }`}
      ></div>
    </section>


    </>
  );
};

export default About;
