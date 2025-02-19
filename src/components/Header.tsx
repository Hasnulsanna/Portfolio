
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience-education", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#experience-education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between md:justify-start h-16">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-extrabold tracking-wide whitespace-nowrap mr-auto">
  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
    Hasnul Sanna
  </span>
  <span className="text-gray-700 font-medium ml-2">| Code & Beyond</span>
</a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                activeLink === item.href
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md py-4 px-6 rounded-b-lg"
        >
          <div className="flex flex-col space-y-4 text-center">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  activeLink === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;