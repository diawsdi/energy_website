import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-sky-blue opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 20 + 10,
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Powering Tomorrow, <span className="text-solar-yellow">Today</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto">
            Real-time electrification planning leveraging AI, Remote Sensing, and Geospatial Intelligence to sustainably illuminate communities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/#contact" className="btn btn-primary text-lg">
              Request a Demo
            </Link>
            <Link href="/#solutions" className="btn bg-white text-electric-blue hover:bg-opacity-90 text-lg">
              Explore Solutions
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 sm:p-6 inline-block">
            <p className="text-white font-medium mb-2">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Placeholder for partner logos */}
              {['Energy Ministry', 'Global Power Co', 'UN Energy', 'World Bank'].map((partner, index) => (
                <div key={index} className="text-white font-bold opacity-80">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 