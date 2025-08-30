import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaBolt, FaChartLine, FaBrain, FaTools, FaMapMarkedAlt, FaBuilding, FaMobile, FaTasks } from 'react-icons/fa';

interface ModuleData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  features: {
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
}

const ProductModules: React.FC = () => {
  const [activeModule, setActiveModule] = useState('access');

  const modules: ModuleData[] = [
    {
      id: 'access',
      title: 'Real-time Energy Access Monitoring',
      description: 'Monitor electrification status in real-time across administrative divisions and building levels',
      icon: <FaBolt className="w-6 h-6" />,
      color: 'electric-blue',
      gradient: 'from-electric-blue to-sky-blue',
      features: [
        {
          title: 'Administrative Division Monitoring',
          description: 'Track electrification status by regions, departments, communes, and villages with high confidence rates',
          image: '/images/solution/energy_acccess/access_gadm.png',
          alt: 'Administrative division electrification monitoring'
        },
        {
          title: 'Building-Level Access Detection',
          description: 'Individual building analysis showing precise energy access status with satellite imagery overlay',
          image: '/images/solution/energy_acccess/building_access.png',
          alt: 'Building-level energy access detection'
        }
      ]
    },
    {
      id: 'demand',
      title: 'Energy Demand Evaluation',
      description: 'AI-powered demand forecasting and consumption analysis for strategic energy planning',
      icon: <FaChartLine className="w-6 h-6" />,
      color: 'solar-yellow',
      gradient: 'from-solar-yellow to-vibrant-green',
      features: [
        {
          title: 'Regional Demand Analysis',
          description: 'Monthly and yearly consumption estimates across administrative divisions with detailed GWh projections',
          image: '/images/data_driven/nationaldemand.png',
          alt: 'National demand analysis by administrative divisions'
        },
        {
          title: 'AI-Powered Demand Forecasting',
          description: 'Advanced AI assistant providing 5-10 year demand forecasts with growth rate analysis and strategic recommendations',
          image: '/images/solution/demand_evaluation/demand_forecast.png',
          alt: 'AI-powered demand forecasting interface'
        }
      ]
    },
    {
      id: 'feasibility',
      title: 'Intelligent Feasibility Studies',
      description: 'Comprehensive AI-driven feasibility analysis combining geospatial, socioeconomic, and technical data',
      icon: <FaBrain className="w-6 h-6" />,
      color: 'vibrant-green',
      gradient: 'from-vibrant-green to-sky-blue',
      features: [
        {
          title: 'Grid Distance & Infrastructure Analysis',
          description: 'Detailed grid connectivity analysis showing distances, infrastructure requirements, and connection feasibility',
          image: '/images/solution/Feasibility_study/grid_analysis.png',
          alt: 'Grid infrastructure and distance analysis'
        },
        {
          title: 'Renewable Energy Potential Assessment',
          description: 'Comprehensive renewable resource evaluation including solar irradiation, land use analysis, and seasonal variations',
          image: '/images/solution/Feasibility_study/renewable_anlysis.png',
          alt: 'Renewable energy potential analysis'
        },
        {
          title: 'AI-Recommended Electrification Strategy',
          description: 'Intelligent recommendations for optimal electrification approach based on technical, financial, and policy analysis',
          image: '/images/solution/Feasibility_study/best_electrfication_option.png',
          alt: 'AI-recommended electrification strategy'
        }
      ]
    },
    {
      id: 'monitoring',
      title: 'Project Implementation Monitoring',
      description: 'Complete project lifecycle management with task creation and field agent mobile coordination',
      icon: <FaTools className="w-6 h-6" />,
      color: 'sky-blue',
      gradient: 'from-sky-blue to-electric-blue',
      features: [
        {
          title: 'Task & Project Planning',
          description: 'Comprehensive project step creation with work group assignments, scheduling, and meeting requirements',
          image: '/images/solution/suivi_travaux/plan.png',
          alt: 'Project task creation and planning interface'
        },
        {
          title: 'Mobile Field Agent Dashboard',
          description: 'Dedicated mobile app for field agents with project tracking, task logging, and progress monitoring',
          image: '/images/solution/suivi_travaux/agent_mobile.png',
          alt: 'Mobile field agent dashboard application'
        }
      ]
    }
  ];

  const activeModuleData = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <section id="modules" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-electric-blue/5 to-transparent"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-solar-yellow/5 to-transparent"
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-electric-blue/10 text-electric-blue px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <FaMapMarkedAlt className="w-3 h-3" />
            <span>Complete Platform Modules</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-gray to-electric-blue bg-clip-text text-transparent">
            Powerful Analytics with Purpose
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Four integrated modules that transform satellite data and AI insights into actionable electrification strategies, from initial access assessment to project completion.
          </p>
        </motion.div>

        {/* Module Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {modules.map((module, index) => (
            <motion.button
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveModule(module.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeModule === module.id
                  ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg scale-105`
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              {module.icon}
              <span className="hidden sm:inline">{module.title}</span>
              <span className="sm:hidden">{module.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Module Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Module Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${activeModuleData.gradient} text-white shadow-xl mb-6`}
              >
                {activeModuleData.icon}
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                {activeModuleData.title}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {activeModuleData.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-12">
              {activeModuleData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeModuleData.gradient} text-white text-sm font-medium`}>
                      <FaBuilding className="w-4 h-4" />
                      <span>Real-time Data</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${activeModuleData.gradient} rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Mobile images (agent_mobile.png) get special treatment */}
                        {feature.image.includes('agent_mobile') ? (
                          <div className="flex justify-center bg-gray-50 py-8">
                            <div className="relative w-64 sm:w-80 lg:w-96">
                              <Image
                                src={feature.image}
                                alt={feature.alt}
                                width={400}
                                height={800}
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video sm:aspect-[4/3] lg:aspect-video relative">
                            <Image
                              src={feature.image}
                              alt={feature.alt}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-electric-blue/10 to-vibrant-green/10 px-8 py-6 rounded-2xl">
            <div className="flex items-center -space-x-2">
              {[FaBolt, FaChartLine, FaBrain, FaTools].map((Icon, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${
                    ['bg-electric-blue', 'bg-solar-yellow', 'bg-vibrant-green', 'bg-sky-blue'][index]
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-lg">
                Complete Electrification Lifecycle
              </p>
              <p className="text-gray-600 text-sm">
                From analysis to implementation in one integrated platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductModules;