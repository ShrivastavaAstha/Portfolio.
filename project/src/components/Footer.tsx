import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Astha
            </h3>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Full-Stack Developer passionate about creating beautiful, 
              functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ShrivastavaAstha" className={`p-2 rounded-full transition-all hover:scale-110 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/astha-61b27a257/" className={`p-2 rounded-full transition-all hover:scale-110 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}>
                <Linkedin size={20} />
              </a>
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=astha2333@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    // fallback to mailto in case Gmail link doesn't work
    setTimeout(() => {
      window.location.href = "mailto:astha2333@gmail.com";
    }, 500);
  }}
  className={`p-2 rounded-full transition-all hover:scale-110 ${
    darkMode 
      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }`}
>
  <Mail size={20} />
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className={`transition-colors ${
                      darkMode 
                        ? 'text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                astha2333@gmail.com
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                +91 9852403024
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Chapra Bihar
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t pt-8 mt-8 text-center ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Made with <Heart size={16} className="text-red-500" /> by Astha © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;