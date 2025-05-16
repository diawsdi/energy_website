import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkedAlt, FaUsers, FaSolarPanel, FaCalculator, FaProjectDiagram, FaLightbulb, FaBolt, FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      icon: <FaMapMarkedAlt size={24} />,
      title: "Energy Access Identification",
      description: "AI-driven detection of electrification status per building/community using satellite imagery and machine learning algorithms.",
      features: [
        "Building-level electrification detection",
        "Community electricity access mapping",
        "Historical trend analysis",
        "Change detection"
      ],
      image: "/images/platform/energy_access.png"
    },
    {
      icon: <FaUsers size={24} />,
      title: "Remote Demand Estimation",
      description: "Dynamic population and demand profiling leveraging satellite imagery and demographic analytics for accurate energy needs assessment.",
      features: [
        "Population density mapping",
        "Socioeconomic profiling",
        "Energy consumption forecasting",
        "Demand growth modeling"
      ],
      image: "/images/platform/solution-demand.png"
    },
    {
      icon: <FaSolarPanel size={24} />,
      title: "Intelligent Electrification Planning",
      description: "Decision-support tool clearly recommending grid extension, mini-grid, or standalone renewable solutions based on multiple parameters.",
      features: [
        "Grid extension feasibility",
        "Mini-grid site identification",
        "Renewable suitability analysis",
        "Hybrid system optimization"
      ],
      image: "/images/platform/solution-planning.jpg"
    },
    {
      icon: <FaCalculator size={24} />,
      title: "Financial Modeling & Analysis",
      description: "Built-in economic analysis module clearly demonstrating costs, ROI, and funding pathways for electrification projects.",
      features: [
        "Capital expenditure modeling",
        "Operational cost forecasting",
        "Return on investment calculation",
        "Risk assessment"
      ],
      image: "/images/platform/solution-finance.jpg"
    },
    {
      icon: <FaProjectDiagram size={24} />,
      title: "Real-Time Project Execution Dashboard",
      description: "Continuous monitoring and verification of ongoing electrification projects with real-time updates and alerts.",
      features: [
        "Project timeline tracking",
        "Budget monitoring",
        "Resource utilization analytics",
        "Impact assessment"
      ],
      image: "/images/platform/solution-dashboard.jpg"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-[#050A15] mb-4 tracking-scale">Our Solutions</h2>
          <div className="h-1 w-20 bg-vibrant-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter tracking-scale leading-relaxed">
            A comprehensive suite of tools for every stage of the electrification planning and monitoring process.
          </p>
        </div>
        
        {/* Solution tabs */}
        <div className="flex flex-row flex-nowrap overflow-x-auto justify-center mb-10 pb-2 gap-2 md:flex-wrap md:overflow-visible">
          {solutions.map((solution, index) => (
            <button
              key={index}
              className={`flex items-center px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300 font-inter font-medium tracking-scale ${
                activeTab === index 
                ? 'bg-gradient-to-r from-electric-blue to-sky-blue text-white shadow-lg' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2">{solution.icon}</span>
              <span className="hidden sm:inline">{solution.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="md:grid md:grid-cols-5">
              {/* Left content section */}
              <div className="p-8 md:p-10 md:col-span-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue opacity-5 filter blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-electric-blue to-electric-blue/60 flex items-center justify-center mb-6 text-white shadow-lg">
                    {solutions[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 font-inter tracking-scale">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter tracking-scale leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-gray-800 font-inter tracking-scale">Key Features:</h4>
                    <ul className="space-y-3.5">
                      {solutions[activeTab].features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="mr-3 mt-0.5 text-vibrant-green shrink-0">
                            <FaCheckCircle className="w-5 h-5" />
                          </div>
                          <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-inter tracking-scale">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a 
                      href="https://form.typeform.com/to/KvtLbmEe"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-electric-blue to-sky-blue text-white rounded-lg font-inter font-medium tracking-scale hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 group"
                    >
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right visualization section */}
              <div className="md:col-span-3 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50"></div>
                
                {/* Interactive visualization based on the active tab */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative"
                    >
                      {activeTab === 0 && (
                        <div className="visualization-container w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
                          <div className="w-full h-full p-4 rounded-lg overflow-hidden flex items-start justify-center" style={{ paddingTop: "20px" }}>
                            <img 
                              src="/images/platform/energy_access.png" 
                              alt="Energy Access Identification Platform" 
                              className="w-full h-auto object-contain rounded-lg shadow-xl" 
                              style={{ maxHeight: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 1 && (
                        <div className="visualization-container w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
                          <div className="w-full h-full p-4 rounded-lg overflow-hidden flex items-start justify-center" style={{ paddingTop: "20px" }}>
                            <img 
                              src="/images/platform/solution-demand.png" 
                              alt="Remote Demand Estimation Platform" 
                              className="w-full h-auto object-contain rounded-lg shadow-xl" 
                              style={{ maxHeight: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 2 && (
                        <div className="visualization-container w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
                          <div className="w-full h-full p-4 rounded-lg overflow-hidden flex items-start justify-center" style={{ paddingTop: "20px" }}>
                            <img 
                              src="/images/platform/solution-planning.jpg" 
                              alt="Intelligent Electrification Planning Platform" 
                              className="w-full h-auto object-contain rounded-lg shadow-xl" 
                              style={{ maxHeight: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 3 && (
                        <div className="visualization-container w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
                          <div className="w-full h-full p-4 rounded-lg overflow-hidden flex items-start justify-center" style={{ paddingTop: "20px" }}>
                            <img 
                              src="/images/platform/solution-finance.jpg" 
                              alt="Financial Modeling & Analysis Platform" 
                              className="w-full h-auto object-contain rounded-lg shadow-xl" 
                              style={{ maxHeight: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 4 && (
                        <div className="visualization-container w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
                          <div className="w-full h-full p-4 rounded-lg overflow-hidden flex items-start justify-center" style={{ paddingTop: "20px" }}>
                            <img 
                              src="/images/platform/solution-dashboard.jpg" 
                              alt="Real-Time Project Execution Dashboard" 
                              className="w-full h-auto object-contain rounded-lg shadow-xl" 
                              style={{ maxHeight: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Solutions;
