import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['about','experience', 'projects', 'skills', 'contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-2xl font-bold transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:scale-105 transform ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                darkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                darkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-4 space-y-4 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-lg shadow-lg`}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 capitalize transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;