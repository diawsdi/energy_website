import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBolt, FaSatellite, FaGlobe, FaLightbulb, FaArrowDown } from 'react-icons/fa';

// 3D Gradient Blobs Animation
const GradientBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right blob - Solar yellow to vibrant green */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full"
        style={{
          top: '-150px',
          right: '-150px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 193, 7, 0.03) 0%, rgba(255, 193, 7, 0) 100%)',
          border: '2px solid transparent',
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(to right, rgba(255, 193, 7, 0.5), rgba(76, 175, 80, 0.5))',
          filter: 'blur(1px)',
          boxShadow: '0 0 80px 15px rgba(255, 193, 7, 0.15)',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />

      {/* Bottom left blob - Electric blue to sky blue */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          bottom: '-120px',
          left: '-120px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 82, 204, 0.03) 0%, rgba(0, 82, 204, 0) 100%)',
          border: '2px solid transparent',
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(to right, rgba(0, 82, 204, 0.5), rgba(0, 188, 212, 0.5))',
          filter: 'blur(1px)',
          boxShadow: '0 0 80px 15px rgba(0, 82, 204, 0.15)',
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />

      {/* Center blob - Green to yellow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: '40%',
          left: '60%',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(76, 175, 80, 0.03) 0%, rgba(76, 175, 80, 0) 100%)',
          border: '2px solid transparent',
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(to right, rgba(76, 175, 80, 0.4), rgba(0, 188, 212, 0.4))',
          filter: 'blur(1px)',
          boxShadow: '0 0 80px 15px rgba(76, 175, 80, 0.15)',
          transform: 'translateX(-50%)',
        }}
        animate={{
          rotate: 180,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />
    </div>
  );
};

// Particle effect for background
const Particles: React.FC = () => {
  const particles = Array.from({ length: 80 }).map((_, index) => ({
    id: index,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: index % 4 === 0 ? '#FFC107' : // Solar yellow
           index % 4 === 1 ? '#4CAF50' : // Vibrant green
           index % 4 === 2 ? '#00BCD4' : // Sky blue
           '#0052CC',      // Electric blue
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            opacity: particle.size / 15,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y + (Math.random() * 15 - 7.5)}%`, `${particle.y}%`],
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 15 - 7.5)}%`, `${particle.x}%`],
            opacity: [particle.size / 15, particle.size / 6, particle.size / 15],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated highlight circles
const HighlightCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solar yellow glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '30%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, rgba(255,193,7,0.05) 40%, rgba(255,193,7,0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 15,
        }}
      />

      {/* Electric blue glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          bottom: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(0,82,204,0.15) 0%, rgba(0,82,204,0.05) 40%, rgba(0,82,204,0) 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          delay: 2,
        }}
      />

      {/* Vibrant green accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '10%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(76,175,80,0.12) 0%, rgba(76,175,80,0.04) 50%, rgba(76,175,80,0) 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 12,
          delay: 5,
        }}
      />
    </div>
  );
};

// Animated icons
const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: FaBolt, top: "30%", left: "15%", delay: 0, color: "#FFC107" },  // Solar yellow
    { Icon: FaSatellite, top: "20%", left: "75%", delay: 1.2, color: "#0052CC" },  // Electric blue
    { Icon: FaGlobe, top: "70%", left: "80%", delay: 0.8, color: "#00BCD4" },  // Sky blue
    { Icon: FaLightbulb, top: "75%", left: "20%", delay: 1.5, color: "#4CAF50" },  // Vibrant green
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: icon.top, left: icon.left }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: icon.delay, duration: 1 }}
        >
          <motion.div
            animate={{ y: ["-15px", "15px", "-15px"] }}
            transition={{ repeat: Infinity, duration: 5 + index }}
            style={{ 
              color: icon.color,
              filter: `drop-shadow(0 0 8px ${icon.color})`,
            }}
          >
            <icon.Icon size={index % 2 === 0 ? 48 : 36} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Hero component
const Hero: React.FC = () => {
  const textControls = useAnimation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const highlightTexts = [
    "Real-time insights",
    "AI-driven analytics",
    "Geospatial intelligence",
  ];

  useEffect(() => {
    const cycleText = async () => {
      await textControls.start({ opacity: 0, y: 20 });
      setCurrentTextIndex((prev) => (prev + 1) % highlightTexts.length);
      await textControls.start({ opacity: 1, y: 0 });
    };

    const intervalId = setInterval(cycleText, 4000);
    return () => clearInterval(intervalId);
  }, [textControls]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Dark theme background with subtle grid pattern */}
      <div className="absolute inset-0 bg-[#050A15] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101f] to-[#050A15]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTJhNGUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wIDB2NmgtNnYtNmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>
      
      {/* Multi-layer background elements */}
      <GradientBlobs />
      <Particles />
      <HighlightCircles />
      <FloatingIcons />
      
      {/* Content container */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Enhanced title with animated elements */}
          <div className="relative mb-8 inline-block">
            <motion.div 
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-solar-yellow via-vibrant-green to-sky-blue blur-2xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <h1 className="relative font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-scale">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Smart <span className="text-solar-yellow drop-shadow-[0_0_25px_rgba(255,193,7,0.5)]">Energy Decisions</span>
              </motion.span>
              <br className="hidden xs:block" />
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block mt-2 md:mt-0"
              >
                with <span className="relative inline-block">
                  <span className="absolute -inset-1 rounded-lg bg-electric-blue blur-lg opacity-20"></span>
                  <span className="relative inline-block bg-gradient-to-r from-sky-blue to-electric-blue bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,82,204,0.5)]">AI</span>
                </span> and <span className="text-vibrant-green drop-shadow-[0_0_20px_rgba(76,175,80,0.5)]">Satellite Precision</span>
              </motion.span>
            </h1>
          </div>
          
          {/* Compact subtitle paragraph */}
          <motion.div 
            className="text-base sm:text-lg md:text-xl text-white opacity-95 mb-8 max-w-2xl mx-auto font-inter px-4 sm:px-0 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>One platform to align your energy ambitions and your execution. Intelligent energy access, planning and monitoring for fast, reliable and affordable electrification of Africa.</p>
          </motion.div>

         
          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="https://form.typeform.com/to/KvtLbmEe" target="_blank" rel="noopener noreferrer" className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-solar-yellow to-vibrant-green rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative w-full text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#050A15] border border-solar-yellow/30 text-white font-poppins font-medium tracking-wide">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-solar-yellow/10 to-vibrant-green/10 rounded-lg opacity-0 group-hover:opacity-100"></span>
                <span className="relative flex items-center justify-center">
                  <FaBolt className="mr-2 text-solar-yellow drop-shadow-[0_0_8px_rgba(255,193,7,0.7)]" />
                  Request a Demo
                </span>
              </button>
            </Link>
            <Link href="/#solutions" className="relative group overflow-hidden w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue to-sky-blue rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative w-full text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#050A15] border border-electric-blue/30 text-white font-poppins font-medium tracking-wide">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-electric-blue/10 to-sky-blue/10 rounded-lg opacity-0 group-hover:opacity-100"></span>
                <span className="relative flex items-center justify-center">
                  Explore Solutions
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Partner showcase section removed to create more vertical space */}
      </div>
      
      {/* Enhanced scroll indicator with dark theme */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-electric-blue bg-[#0a1528] backdrop-blur-lg rounded-full p-2 sm:p-3 border border-electric-blue/40 shadow-lg z-10"
        animate={{ 
          y: [0, 10, 0], 
          boxShadow: [
            "0 0 0 rgba(0, 82, 204, 0.2)",
            "0 0 20px rgba(0, 82, 204, 0.6)",
            "0 0 0 rgba(0, 82, 204, 0.2)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 82, 204, 0.8)" }}
      >
        <FaArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-electric-blue drop-shadow-[0_0_8px_rgba(0,82,204,0.7)]" />
      </motion.div>
    </section>
  );
};

export default Hero; 