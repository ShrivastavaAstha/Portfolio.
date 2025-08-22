import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typingText, setTypingText] = useState('');
  const roles = ['Full-Stack Developer', 'AI Enthusiast', 'UI/UX Designer', 'MERN Stack Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 150;
    const pause = 1500;

    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setTypingText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setTypingText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800'
          : 'bg-gradient-to-br from-blue-50 via-white to-emerald-50'
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
            darkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-pulse delay-1000 ${
            darkMode ? 'bg-emerald-500' : 'bg-emerald-400'
          }`}
        ></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 rounded-full bg-white/20 animate-bounce-slower"></div>
      </div>

      <div className="container mx-auto px-6 py-40 text-center relative z-10">
        <div className="animate-fade-in">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 relative ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="block">Hello, I'm</span>
            <span
              className={`bg-gradient-to-r animate-gradient ${
                darkMode ? 'from-blue-400 to-emerald-400' : 'from-blue-600 to-emerald-600'
              } bg-clip-text text-transparent animate-pulse-slow`}
            >
              Astha
            </span>
          </h1>

          {/* Typing effect text */}
          <p
            className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {typingText}
            <span className={`inline-block w-1 h-6 bg-emerald-500 ml-1 animate-blink ${darkMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-center relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 rounded-full transition-all"></span>
            </a>

            <a
              href="#contact"
              className={`border-2 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all text-center relative overflow-hidden group ${
                darkMode
                  ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 rounded-full transition-all"></span>
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-6 mb-16">
            {[{
              href: "https://github.com/ShrivastavaAstha",
              icon: <Github size={24} />
            }, {
              href: "https://www.linkedin.com/in/astha-61b27a257/",
              icon: <Linkedin size={24} />
            }, {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=astha2333@gmail.com",
              icon: <Mail size={24} />,
              extraProps: { onClick: (e: any) => setTimeout(() => { window.location.href = "mailto:astha2333@gmail.com"; }, 500) }
            }].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                {...social.extraProps}
                className={`p-3 rounded-full transition-all hover:scale-110 relative overflow-hidden group ${
                  darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="relative z-10">{social.icon}</span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 rounded-full transition-all"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Down */}
        <button
          onClick={scrollToNext}
          className={`animate-bounce ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          } hover:scale-110 transition-transform`}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
