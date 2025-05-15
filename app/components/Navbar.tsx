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
        isScrolled ? 'bg-[#050A15] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-white">
            InvoltAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#why-us" className="font-medium text-white hover:text-solar-yellow transition-colors">
            Why InvoltAI
          </Link>
          <Link href="/#solutions" className="font-medium text-white hover:text-solar-yellow transition-colors">
            Solutions
          </Link>
          <Link href="/#technology" className="font-medium text-white hover:text-solar-yellow transition-colors">
            Technology
          </Link>
          <Link href="/#use-cases" className="font-medium text-white hover:text-solar-yellow transition-colors">
            Use Cases
          </Link>
          <Link href="https://form.typeform.com/to/KvtLbmEe" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden">
            <span className="absolute -inset-[3px] bg-gradient-to-r from-solar-yellow via-vibrant-green to-electric-blue opacity-70 blur-sm rounded-lg group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
            <span className="absolute inset-0 bg-[#050A15] rounded-lg border border-white/10 group-hover:border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,82,204,0.4)] transition-all duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-vibrant-green/10 to-solar-yellow/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></span>
            <span className="relative flex items-center justify-center gap-2 px-6 py-2.5 text-white font-medium z-10">
              <svg className="w-4 h-4 text-solar-yellow group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="inline-block transform group-hover:translate-y-[-1px] transition-all duration-300 font-semibold tracking-wide">Request Demo</span>
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2"
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
        <div className="md:hidden bg-[#050A15] absolute w-full shadow-md py-4">
          <div className="container flex flex-col space-y-4">
            <Link 
              href="/#why-us" 
              className="font-medium text-white hover:text-solar-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why InvoltAI
            </Link>
            <Link 
              href="/#solutions" 
              className="font-medium text-white hover:text-solar-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/#technology" 
              className="font-medium text-white hover:text-solar-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              href="/#use-cases" 
              className="font-medium text-white hover:text-solar-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              href="https://form.typeform.com/to/KvtLbmEe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute -inset-[3px] bg-gradient-to-r from-solar-yellow via-vibrant-green to-electric-blue opacity-70 blur-sm rounded-lg group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
              <span className="absolute inset-0 bg-[#050A15] rounded-lg border border-white/10 group-hover:border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,82,204,0.4)] transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-vibrant-green/10 to-solar-yellow/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></span>
              <span className="relative flex items-center justify-center gap-2 px-6 py-2.5 text-white font-medium z-10">
                <svg className="w-4 h-4 text-solar-yellow group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="inline-block transform group-hover:translate-y-[-1px] transition-all duration-300 font-semibold tracking-wide">Request Demo</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 