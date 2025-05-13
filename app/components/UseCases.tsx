import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCity, FaBolt, FaHandsHelping, FaChartLine, FaUsers, FaLightbulb, FaGlobe, FaRegChartBar, FaClock, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
  accentColor: string;
  impactStats: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
  visualElements: {
    type: 'metric' | 'chart' | 'icon';
    value: string | React.ReactNode;
    label?: string;
    color?: string;
  }[];
}

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases: UseCase[] = [
    {
      icon: <FaCity size={28} />,
      title: "Government & Public Sector",
      description: "Planning nationwide rural electrification initiatives, optimizing infrastructure investments, and monitoring project implementations for maximum impact.",
      benefits: [
        "80% faster identification of unelectrified communities",
        "30% cost reduction in electrification planning",
        "Evidence-based investment prioritization",
        "Transparent progress tracking for stakeholders"
      ],
      color: "bg-electric-blue",
      accentColor: "text-electric-blue",
      impactStats: [
        { icon: <FaUsers />, value: "1.2M", label: "People Connected" },
        { icon: <FaLightbulb />, value: "415", label: "Communities Electrified" },
        { icon: <FaRegChartBar />, value: "$42M", label: "Budget Optimized" }
      ],
      visualElements: [
        { type: 'chart', value: "85%", label: "Planning Efficiency", color: "bg-electric-blue" },
        { type: 'icon', value: <FaGlobe className="text-white text-4xl" />, label: "Global Impact" },
        { type: 'metric', value: "3.4x", label: "ROI Increase", color: "bg-vibrant-green" }
      ]
    },
    {
      icon: <FaBolt size={28} />,
      title: "Energy Utilities & Developers",
      description: "Rapidly identifying potential mini-grid and off-grid opportunities for commercial scale-up, with detailed financial analysis and implementation planning.",
      benefits: [
        "Identify viable mini-grid locations in minutes, not months",
        "Accurate demand forecasting for project sizing",
        "Detailed ROI calculations for each site",
        "Reduced project development costs"
      ],
      color: "bg-vibrant-green",
      accentColor: "text-vibrant-green", 
      impactStats: [
        { icon: <FaLightbulb />, value: "243", label: "Mini-Grids Deployed" },
        { icon: <FaRegChartBar />, value: "68%", label: "Faster Development" },
        { icon: <FaClock />, value: "5.2", label: "Months to Deployment" }
      ],
      visualElements: [
        { type: 'chart', value: "92%", label: "Demand Forecast Accuracy", color: "bg-vibrant-green" },
        { type: 'metric', value: "12x", label: "Time Savings", color: "bg-electric-blue" },
        { type: 'icon', value: <FaBolt className="text-white text-4xl" />, label: "Power Distribution" }
      ]
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "NGOs & International Agencies",
      description: "Ensuring sustainable energy interventions with clear, measurable impacts and efficient resource allocation across multiple regions.",
      benefits: [
        "Evidence-based program design",
        "Accurate baseline and impact measurement",
        "Cross-regional comparison of interventions",
        "Enhanced donor reporting capabilities"
      ],
      color: "bg-solar-yellow",
      accentColor: "text-solar-yellow",
      impactStats: [
        { icon: <FaGlobe />, value: "36", label: "Countries Supported" },
        { icon: <FaUsers />, value: "3.8M", label: "Beneficiaries" },
        { icon: <FaRegChartBar />, value: "$118M", label: "Funding Optimized" }
      ],
      visualElements: [
        { type: 'icon', value: <FaGlobe className="text-white text-4xl" />, label: "Global Reach" },
        { type: 'chart', value: "74%", label: "Program Efficiency", color: "bg-solar-yellow" },
        { type: 'metric', value: "4.1x", label: "Impact Multiplier", color: "bg-electric-blue" }
      ]
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Investors & Financiers",
      description: "Providing detailed financial insights and clear ROI for electrification investments, reducing risk and increasing confidence in energy access ventures.",
      benefits: [
        "Data-driven due diligence for investments",
        "Portfolio-wide risk assessment",
        "Transparent project monitoring",
        "Early identification of implementation challenges"
      ],
      color: "bg-sky-blue",
      accentColor: "text-sky-blue",
      impactStats: [
        { icon: <FaRegChartBar />, value: "$285M", label: "Capital Deployed" },
        { icon: <FaChartLine />, value: "22%", label: "Average ROI" },
        { icon: <FaLightbulb />, value: "842", label: "Projects Funded" }
      ],
      visualElements: [
        { type: 'chart', value: "89%", label: "Risk Reduction", color: "bg-sky-blue" },
        { type: 'metric', value: "1.8yr", label: "Average Payback", color: "bg-vibrant-green" },
        { type: 'icon', value: <FaChartLine className="text-white text-4xl" />, label: "Growth Trajectory" }
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-[#050A15] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
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
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block mb-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-vibrant-green to-solar-yellow opacity-50 blur-lg rounded-lg"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 z-10 py-1 px-3">
                Use Cases
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how organizations around the world are leveraging our platform to accelerate energy access goals.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar pb-2 justify-start sm:justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-10">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              className={`px-3 sm:px-5 py-2 sm:py-3 rounded-lg flex-shrink-0 flex items-center transition-all duration-300 ${
                activeTab === index 
                  ? `${useCase.color} text-white shadow-lg` 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="sm:mr-2">{useCase.icon}</span>
              <span className="ml-2 sm:ml-0 truncate max-w-24 sm:max-w-none text-sm sm:text-base">{useCase.title}</span>
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
            className="bg-gradient-to-br from-[#0c1528] to-[#050A15] rounded-xl shadow-xl overflow-hidden border border-white/5"
          >
            <div className="p-5 sm:p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg ${useCases[activeTab].color} flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 text-white shadow-lg`}>
                  {useCases[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {useCases[activeTab].title}
                  </h3>
                  <div className={`h-1 w-16 sm:w-20 ${useCases[activeTab].color} mt-2 rounded-full`}></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-3xl">
                {useCases[activeTab].description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left: Benefits */}
                <div className="lg:col-span-5">
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-5 text-white flex items-center">
                    <span className={`inline-block w-1.5 sm:w-2 h-6 sm:h-8 ${useCases[activeTab].color} mr-2 sm:mr-3 rounded-full`}></span>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-4">
                    {useCases[activeTab].benefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className={`mr-2 sm:mr-3 mt-0.5 ${useCases[activeTab].accentColor} flex-shrink-0`}>
                          <FaCheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                        </div>
                        <span className="text-sm sm:text-base md:text-lg text-gray-200">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Right: Impact Visualization */}
                <div className="lg:col-span-7 mt-6 sm:mt-8 lg:mt-0">
                  {/* Impact Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-5 mb-4 sm:mb-6 md:mb-8">
                    {useCases[activeTab].impactStats.map((stat, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="bg-black/30 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 text-center"
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 ${useCases[activeTab].color} rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3`}>
                          <span className="text-xs sm:text-sm md:text-base">{stat.icon}</span>
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xxs sm:text-xs md:text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Visual Elements */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5">
                    {useCases[activeTab].visualElements.map((element, index) => {
                      if (element.type === 'chart') {
                        return (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            className="bg-black/20 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center"
                          >
                            <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-2 md:mb-3">
                              <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-white/10"></div>
                              <div 
                                className={`absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 ${element.color}`}
                                style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - parseInt(element.value as string)}%)` }}
                              ></div>
                              <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-xl font-bold text-white">
                                {element.value}
                              </div>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 text-center">{element.label}</div>
                          </motion.div>
                        );
                      } else if (element.type === 'metric') {
                        return (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            className="bg-black/20 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center"
                          >
                            <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${element.color?.replace('bg-', 'text-')}`}>
                              {element.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300">{element.label}</div>
                          </motion.div>
                        );
                      } else {
                        return (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            className="bg-black/20 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center"
                          >
                            <div className="mb-1 sm:mb-2 md:mb-3 transform scale-75 sm:scale-90 md:scale-100">
                              {element.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 text-center">{element.label}</div>
                          </motion.div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0c1528] to-[#081427] text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg">
                  View Full Case Study
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases; 