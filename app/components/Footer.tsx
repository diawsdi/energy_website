import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-gray text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="font-montserrat font-bold text-2xl text-solar-yellow">
                AuroraAI
              </span>
            </Link>
            <p className="text-white text-opacity-80 mt-4">
              Intelligent Energy Access Planning & Monitoring leveraging AI, Remote Sensing, and Geospatial Intelligence to sustainably illuminate communities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-solar-yellow transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-solar-yellow transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-solar-yellow transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-solar-yellow transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#why-us" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Why AuroraAI
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-solar-yellow transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-white text-opacity-80 mb-4">
              Subscribe to our newsletter for the latest updates on energy access planning.
            </p>
            <form className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="text-slate-gray" />
                </div>
                <input
                  type="email"
                  className="bg-white text-slate-gray rounded-l-lg py-3 pl-10 pr-3 w-full focus:outline-none"
                  placeholder="Your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-solar-yellow text-slate-gray px-4 rounded-r-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 my-8" />
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-60 text-sm">
            &copy; {currentYear} AuroraAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 