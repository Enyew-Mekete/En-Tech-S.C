
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg h-[70px]' : 'bg-primary h-[95px]'}`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* LOCAL LOGO PATH */}
          <img 
            src="./images/brand/logo.png" 
            alt="En-Tech Logo" 
            className={`transition-all duration-300 object-contain ${scrolled ? 'h-[50px]' : 'h-[70px]'}`} 
            onError={(e) => { (e.target as HTMLImageElement).src = './images/brand/logo.png' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-white hover:text-accent text-xl font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScI-1EzJXdA6fpWSxJC_-F3vakmez3i1mQOvASi9v4V1jrZMw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent text-xl font-medium transition-colors"
              >
                Order Now
              </a>
            </li>
          </ul>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-accent text-2xl transition-colors p-2"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-xl p-2"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-cyan-100 dark:bg-gray-800 text-primary dark:text-accent rounded-lg p-2 w-[45px] h-[45px] flex items-center justify-center"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-[100%] left-0 w-full bg-primary dark:bg-primaryDark transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <ul className="flex flex-col items-center py-6 space-y-4 border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <Link to={link.path} className="text-white text-lg block py-2">{link.name}</Link>
            </li>
          ))}
          <li className="w-full text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScI-1EzJXdA6fpWSxJC_-F3vakmez3i1mQOvASi9v4V1jrZMw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg block py-2"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
