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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#050A15] to-[#0c1528] rounded-xl shadow-2xl overflow-hidden border border-white/5"
          >
            <div className="md:grid md:grid-cols-5">
              {/* Left content section */}
              <div className="p-8 md:p-10 md:col-span-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue opacity-10 filter blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-electric-blue to-electric-blue/60 flex items-center justify-center mb-6 text-white shadow-lg">
                    {solutions[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solutions[activeTab].description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-white">Key Features:</h4>
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
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <button className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-electric-blue to-sky-blue text-white rounded-lg font-medium hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 group">
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right visualization section */}
              <div className="md:col-span-3 relative flex items-center justify-center p-8 md:p-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#081427] to-[#050A15]"></div>
                
                {/* Interactive visualization based on the active tab */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="max-w-md mx-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative"
                    >
                      {activeTab === 0 && (
                        <div className="visualization-container">
                          <div className="geo-map-simulation">
                            {/* Stylized map with energy access points */}
                            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-[#0d1a2d] rounded-lg overflow-hidden shadow-xl">
                              {/* Map grid lines */}
                              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                              
                              {/* Map features */}
                              <div className="absolute top-1/4 left-1/3 right-0 h-1/3 bg-electric-blue opacity-5 rounded-full filter blur-md"></div>
                              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-solar-yellow opacity-5 rounded-full filter blur-md"></div>
                              
                              {/* Pulsing dots for energy access points */}
                              {[...Array(8)].map((_, i) => (
                                <motion.div 
                                  key={i}
                                  className={`absolute w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-vibrant-green' : i % 3 === 1 ? 'bg-solar-yellow' : 'bg-electric-blue'}`}
                                  style={{ 
                                    top: `${15 + Math.random() * 70}%`, 
                                    left: `${15 + Math.random() * 70}%`
                                  }}
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                  }}
                                />
                              ))}
                              
                              {/* Map legend */}
                              <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-sm p-3 rounded-lg">
                                <div className="flex items-center justify-between text-xs text-white">
                                  <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-vibrant-green rounded-full"></span>
                                    <span>Electrified</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-solar-yellow rounded-full"></span>
                                    <span>Partial Access</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-electric-blue rounded-full"></span>
                                    <span>No Access</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 1 && (
                        <div className="visualization-container">
                          <div className="demand-estimation-visual w-72 h-72 md:w-96 md:h-96 bg-[#0d1a2d] rounded-lg overflow-hidden shadow-xl relative p-8">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            {/* Population density visualization */}
                            <div className="relative h-full flex flex-col justify-between">
                              <div className="flex justify-between items-end">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div 
                                    key={i}
                                    className="w-12 rounded-t-md bg-gradient-to-t from-electric-blue to-sky-blue"
                                    style={{ height: `${(i+1) * 15 + Math.random() * 10}px` }}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(i+1) * 15 + Math.random() * 10}px` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                  />
                                ))}
                              </div>
                              
                              <div className="mt-6 space-y-4">
                                {[...Array(3)].map((_, i) => (
                                  <motion.div 
                                    key={i}
                                    className="h-4 bg-gradient-to-r from-solar-yellow to-vibrant-green rounded-md"
                                    style={{ width: `${30 + i * 25}%` }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${30 + i * 25}%` }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                                  />
                                ))}
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-white">245k</div>
                                  <div className="text-sm text-gray-400">Population</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-white">42 MW</div>
                                  <div className="text-sm text-gray-400">Peak Demand</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 2 && (
                        <div className="visualization-container">
                          <div className="electrification-planning-visual w-72 h-72 md:w-96 md:h-96 bg-[#0d1a2d] rounded-lg overflow-hidden shadow-xl relative">
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            {/* Center hexagon with connections */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative">
                                {/* Main power source */}
                                <motion.div 
                                  className="w-16 h-16 bg-electric-blue bg-opacity-20 rounded-lg flex items-center justify-center z-20 relative border border-electric-blue/30"
                                  animate={{ boxShadow: ['0 0 0 rgba(0,82,204,0.4)', '0 0 20px rgba(0,82,204,0.6)', '0 0 0 rgba(0,82,204,0.4)'] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  <FaBolt className="text-electric-blue text-2xl" />
                                </motion.div>
                                
                                {/* Connection lines and nodes */}
                                {[45, 90, 135, 180, 225, 270, 315, 360].map((angle, i) => {
                                  const radians = angle * Math.PI / 180;
                                  const length = 70 + (i % 3) * 15;
                                  const x = Math.cos(radians) * length;
                                  const y = Math.sin(radians) * length;
                                  const iconType = i % 4;
                                  const nodeColor = i % 3 === 0 ? 'bg-vibrant-green' : i % 3 === 1 ? 'bg-solar-yellow' : 'bg-sky-blue';
                                  const lineColor = i % 3 === 0 ? 'bg-vibrant-green/30' : i % 3 === 1 ? 'bg-solar-yellow/30' : 'bg-sky-blue/30';
                                  
                                  return (
                                    <React.Fragment key={i}>
                                      {/* Connection line */}
                                      <motion.div 
                                        className={`absolute top-1/2 left-1/2 h-0.5 ${lineColor} origin-left z-10`}
                                        style={{ 
                                          width: length,
                                          transform: `rotate(${angle}deg)`,
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: length }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                      />
                                      
                                      {/* Node at end of line */}
                                      <motion.div 
                                        className={`absolute w-8 h-8 ${nodeColor} rounded-lg flex items-center justify-center z-20 border border-white/20`}
                                        style={{ 
                                          left: `calc(50% + ${x}px - 16px)`,
                                          top: `calc(50% + ${y}px - 16px)`,
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                                      >
                                        {iconType === 0 && <FaSolarPanel className="text-white text-xs" />}
                                        {iconType === 1 && <FaLightbulb className="text-white text-xs" />}
                                        {iconType === 2 && <FaUsers className="text-white text-xs" />}
                                        {iconType === 3 && <FaProjectDiagram className="text-white text-xs" />}
                                      </motion.div>
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </div>
                            
                            <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-sm p-3 rounded-lg">
                              <div className="flex items-center justify-between text-xs text-white">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-vibrant-green rounded-full"></span>
                                  <span>Grid Extension</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-solar-yellow rounded-full"></span>
                                  <span>Mini-Grid</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-sky-blue rounded-full"></span>
                                  <span>Standalone</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 3 && (
                        <div className="visualization-container">
                          <div className="financial-analysis-visual w-72 h-72 md:w-96 md:h-96 bg-[#0d1a2d] rounded-lg overflow-hidden shadow-xl relative p-6">
                            <div className="h-full flex flex-col">
                              {/* Financial chart */}
                              <div className="flex-1 relative">
                                <div className="absolute inset-0 flex items-end justify-between px-2">
                                  {[...Array(12)].map((_, i) => {
                                    const height = 30 + Math.sin(i * 0.8) * 20 + i * 5;
                                    return (
                                      <motion.div 
                                        key={i}
                                        className="w-4 bg-gradient-to-t from-electric-blue to-sky-blue rounded-t-sm"
                                        style={{ height: 0 }}
                                        animate={{ height: `${height}%` }}
                                        transition={{ duration: 1, delay: 0.1 * i }}
                                      />
                                    );
                                  })}
                                  
                                  {/* ROI line */}
                                  <motion.div 
                                    className="absolute left-0 right-0 h-0.5 bg-solar-yellow"
                                    style={{ bottom: '60%' }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.3 }}
                                  />
                                </div>
                                
                                {/* Chart grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                  {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-full h-px bg-white/10" />
                                  ))}
                                </div>
                              </div>
                              
                              {/* KPI metrics */}
                              <div className="grid grid-cols-3 gap-2 mt-6">
                                <motion.div 
                                  className="p-3 bg-black/30 backdrop-blur-sm rounded-lg text-center"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 1.4 }}
                                >
                                  <div className="text-sm text-gray-400">ROI</div>
                                  <div className="text-lg font-bold text-solar-yellow">3.2 yrs</div>
                                </motion.div>
                                <motion.div 
                                  className="p-3 bg-black/30 backdrop-blur-sm rounded-lg text-center"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                  <div className="text-sm text-gray-400">LCOE</div>
                                  <div className="text-lg font-bold text-vibrant-green">$0.14</div>
                                </motion.div>
                                <motion.div 
                                  className="p-3 bg-black/30 backdrop-blur-sm rounded-lg text-center"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 1.6 }}
                                >
                                  <div className="text-sm text-gray-400">IRR</div>
                                  <div className="text-lg font-bold text-electric-blue">18%</div>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 4 && (
                        <div className="visualization-container">
                          <div className="project-dashboard-visual w-72 h-72 md:w-96 md:h-96 bg-[#0d1a2d] rounded-lg overflow-hidden shadow-xl relative p-2">
                            <div className="absolute inset-0 p-4 flex flex-col">
                              {/* Dashboard header */}
                              <motion.div 
                                className="flex justify-between items-center mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <div className="bg-electric-blue/20 px-3 py-1.5 rounded text-white text-sm font-medium">Project Dashboard</div>
                                <div className="text-vibrant-green text-sm font-medium">Live Updates</div>
                              </motion.div>
                              
                              {/* Dashboard metrics */}
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                {[
                                  { label: 'Progress', value: '78%', color: 'bg-vibrant-green' },
                                  { label: 'Connections', value: '1,456', color: 'bg-solar-yellow' },
                                  { label: 'Uptime', value: '99.8%', color: 'bg-electric-blue' },
                                  { label: 'Efficiency', value: '94%', color: 'bg-sky-blue' }
                                ].map((metric, i) => (
                                  <motion.div 
                                    key={i}
                                    className="bg-black/30 backdrop-blur-sm rounded-lg p-3 flex flex-col"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                  >
                                    <div className="text-gray-400 text-xs">{metric.label}</div>
                                    <div className="text-white text-xl font-bold">{metric.value}</div>
                                    <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                      <motion.div 
                                        className={`h-full ${metric.color}`}
                                        initial={{ width: '0%' }}
                                        animate={{ width: metric.value.replace('%', '') + '%' }}
                                        transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                              
                              {/* Activity stream */}
                              <div className="flex-1 bg-black/30 backdrop-blur-sm rounded-lg p-3 overflow-hidden">
                                <div className="text-white text-sm mb-2">Recent Activities</div>
                                <div className="space-y-2">
                                  {[
                                    'New connection established in Sector B',
                                    'Maintenance completed on mini-grid #23',
                                    'Power usage peak detected in northern region',
                                    'Weekly report generated successfully',
                                    'System efficiency improved by 2.3%'
                                  ].map((activity, i) => (
                                    <motion.div 
                                      key={i}
                                      className="text-xs py-2 px-3 rounded bg-white/5 text-gray-300 flex justify-between items-center"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                                    >
                                      <span>{activity}</span>
                                      <span className="text-gray-500 text-[10px]">3m ago</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
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