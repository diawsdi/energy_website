import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-electric-blue">
            AuroraAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#why-us" className="font-medium hover:text-electric-blue transition-colors">
            Why AuroraAI
          </Link>
          <Link href="/#solutions" className="font-medium hover:text-electric-blue transition-colors">
            Solutions
          </Link>
          <Link href="/#technology" className="font-medium hover:text-electric-blue transition-colors">
            Technology
          </Link>
          <Link href="/#use-cases" className="font-medium hover:text-electric-blue transition-colors">
            Use Cases
          </Link>
          <Link href="/#contact" className="btn btn-primary">
            Request Demo
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-slate-gray p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md py-4">
          <div className="container flex flex-col space-y-4">
            <Link 
              href="/#why-us" 
              className="font-medium hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why AuroraAI
            </Link>
            <Link 
              href="/#solutions" 
              className="font-medium hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/#technology" 
              className="font-medium hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              href="/#use-cases" 
              className="font-medium hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              href="/#contact" 
              className="btn btn-primary self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 