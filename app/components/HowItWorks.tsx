import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaChartLine, FaLightbulb, FaCalculator, FaChartBar, FaArrowRight } from 'react-icons/fa';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  delay: number;
  color: string;
  lightColor: string;
  darkColor: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ 
  icon, 
  number, 
  title, 
  description, 
  delay, 
  color, 
  lightColor,
  darkColor,
  isLast = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center group"
    >
      <div className="relative">
        {/* Main icon circle with glow effect */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${color} flex items-center justify-center text-white mb-4 sm:mb-6 relative z-10 shadow-lg`}
          style={{ boxShadow: `0 0 20px ${lightColor}40` }}
        >
          <div className="absolute inset-0 rounded-full opacity-80 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="text-xl sm:text-2xl">{icon}</div>
          
          {/* Number badge */}
          <div className={`absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${darkColor} flex items-center justify-center text-sm sm:text-base font-bold text-white border-2 border-white`}>
            {number}
          </div>
        </motion.div>
        
        {/* Connection arrow to next step */}
        {!isLast && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '100%', opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            viewport={{ once: true }}
            className="absolute hidden md:block top-1/2 left-[calc(100%+8px)] h-1 bg-gradient-to-r from-white/40 to-white/5 transform -translate-y-1/2 z-0 rounded-full"
            style={{ width: 'calc(100% - 16px)' }}
          >
            <motion.div 
              animate={{ x: [0, 30, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 ${color} rounded-full flex items-center justify-center`}
            >
              <FaArrowRight className="text-white text-xs" />
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Content with animated underline */}
      <motion.div
        className="text-center px-2"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h3>
        <motion.div 
          className={`h-0.5 w-0 ${color} mx-auto mb-2 sm:mb-3`}
          whileInView={{ width: '30%' }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-center text-gray-300 text-xs sm:text-sm max-w-[160px] sm:max-w-[220px] mx-auto">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Select an Area",
      description: "Define or upload your areas of interest for analysis using our interactive map interface.",
      color: "bg-electric-blue",
      lightColor: "#0052CC",
      darkColor: "bg-[#0040a0]"
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Analyze Electricity Access",
      description: "Our AI automatically analyzes satellite imagery to identify areas that lack electricity access.",
      color: "bg-vibrant-green",
      lightColor: "#4CAF50",
      darkColor: "bg-[#3d8b40]"
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Generate Solutions",
      description: "Review algorithmically generated electrification solutions optimized for your specific context.",
      color: "bg-solar-yellow",
      lightColor: "#FFC107",
      darkColor: "bg-[#e6ac00]"
    },
    {
      icon: <FaCalculator size={24} />,
      title: "Financial Analysis",
      description: "Explore detailed cost projections and financing options for implementing your energy solution.",
      color: "bg-sky-blue",
      lightColor: "#00BCD4",
      darkColor: "bg-[#008fa1]"
    },
    {
      icon: <FaChartBar size={24} />,
      title: "Impact Assessment",
      description: "Quantify the economic, social, and environmental impact of your electrification project.",
      color: "bg-electric-blue",
      lightColor: "#0052CC",
      darkColor: "bg-[#0040a0]"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#050A15] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric-blue opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-solar-yellow opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-vibrant-green opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <div className="inline-block mb-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-solar-yellow to-vibrant-green opacity-50 blur-lg rounded-lg"></div>
              <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 z-10 py-1 px-3 tracking-tight leading-tight">
                How It Works
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-inter leading-relaxed tracking-wide">
            Our intuitive platform guides you through a comprehensive energy planning process in just five simple steps.
          </p>
        </motion.div>

        {/* Desktop Steps */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  icon={step.icon}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.1}
                  color={step.color}
                  lightColor={step.lightColor}
                  darkColor={step.darkColor}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden">
          <div className="relative space-y-12">
            {/* Mobile connector line */}
            <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-0.5 bg-gradient-to-b from-electric-blue via-solar-yellow to-vibrant-green opacity-30"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex-shrink-0 mr-4 sm:mr-6">
                  <div 
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${step.color} flex items-center justify-center text-white relative shadow-lg`} 
                    style={{ boxShadow: `0 0 20px ${step.lightColor}40` }}
                  >
                    <div className="text-xl sm:text-2xl">{step.icon}</div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${step.darkColor} flex items-center justify-center text-sm sm:text-base font-bold text-white border-2 border-white`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{step.title}</h3>
                  <div className={`h-0.5 w-12 sm:w-16 ${step.color} mb-2 sm:mb-3`}></div>
                  <p className="text-sm sm:text-base text-gray-300 pr-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-blue to-sky-blue text-white rounded-lg font-medium text-base sm:text-lg hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 group w-full max-w-xs sm:w-auto">
            See It In Action
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 