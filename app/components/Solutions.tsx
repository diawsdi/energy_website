import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaUsers, FaSolarPanel, FaCalculator, FaProjectDiagram } from 'react-icons/fa';

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
      image: "/images/solution-map.jpg"
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
      image: "/images/solution-demand.jpg"
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
      image: "/images/solution-planning.jpg"
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
      image: "/images/solution-finance.jpg"
    },
    {
      icon: <FaProjectDiagram size={24} />,
      title: "Real-Time Project Execution Dashboard",
      description: "Continuous monitoring and verification of ongoing electrification projects with real-time updates and alerts.",
      features: [
        "Construction progress tracking",
        "Connection rate monitoring",
        "Resource utilization analytics",
        "Impact assessment"
      ],
      image: "/images/solution-dashboard.jpg"
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools for every stage of the electrification planning and monitoring process.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {solutions.map((solution, index) => (
            <button
              key={index}
              className={`px-4 py-3 rounded-lg flex items-center transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-electric-blue text-white shadow-lg' 
                  : 'bg-slate-gray bg-opacity-5 hover:bg-opacity-10'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2">{solution.icon}</span>
              <span className="hidden md:inline font-medium">{solution.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="md:grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="w-16 h-16 rounded-lg bg-electric-blue bg-opacity-10 flex items-center justify-center mb-6 text-electric-blue">
                {solutions[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">
                {solutions[activeTab].title}
              </h3>
              <p className="text-slate-gray mb-6">
                {solutions[activeTab].description}
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="space-y-2">
                  {solutions[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-vibrant-green">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="bg-slate-gray h-64 md:h-auto bg-opacity-20 flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-electric-blue bg-opacity-20 rounded-full flex items-center justify-center text-electric-blue">
                  {solutions[activeTab].icon}
                </div>
                <p className="mt-4 font-medium text-slate-gray">Solution visualization placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 