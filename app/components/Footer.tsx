import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050A15] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric-blue blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-solar-yellow blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-vibrant-green blur-3xl"></div>
      </div>
      
      {/* Main footer content */}
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-vibrant-green to-solar-yellow opacity-50 blur rounded-lg"></div>
                <span className="relative font-inter font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 z-10 py-1 px-1 tracking-scale">
                  InvoltAI
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Intelligent energy access, planning and monitoring platform – leveraging AI, remote sensing and geospatial intelligence – for a fast, reliable and affordable electrification of Africa.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-electric-blue hover:text-white transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-electric-blue hover:text-white transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-electric-blue hover:text-white transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-electric-blue hover:text-white transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-2">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-2 h-6 bg-vibrant-green mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#why-us" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-vibrant-green mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Why InvoltAI
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-vibrant-green mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-vibrant-green mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-vibrant-green mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-vibrant-green mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="mt-2">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-2 h-6 bg-solar-yellow mr-3 rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-solar-yellow mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-solar-yellow mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-solar-yellow mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-solar-yellow mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-0 group-hover:h-2 bg-solar-yellow mr-0 group-hover:mr-2 rounded-full transition-all duration-300"></span>
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-2 h-6 bg-electric-blue mr-3 rounded-full"></span>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-5">
              Subscribe to our newsletter for the latest updates on energy access planning.
            </p>
            <form className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  className="bg-[#0c1528] border border-gray-700 text-gray-300 rounded-l-lg py-3 pl-10 pr-3 w-full focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="Your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-electric-blue text-white px-4 rounded-r-lg font-medium hover:bg-opacity-90 transition-colors flex items-center"
              >
                <span>Subscribe</span>
                <FaArrowRight className="ml-2" size={14} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white border-opacity-10">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} InvoltAI. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;