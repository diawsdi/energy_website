import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaBolt, FaHandsHelping, FaChartLine } from 'react-icons/fa';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  quote?: {
    text: string;
    author: string;
    position: string;
  };
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
      quote: {
        text: "AuroraAI has transformed our national electrification planning, enabling data-driven decisions that have accelerated our rural energy access goals by years.",
        author: "Sarah Johnson",
        position: "Director of Energy Policy, Ministry of Energy"
      }
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
      quote: {
        text: "The platform's ability to quickly identify high-potential sites has doubled our mini-grid deployment rate while significantly reducing our development costs.",
        author: "Michael Chen",
        position: "Head of Business Development, PowerGrid Solutions"
      }
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
      quote: {
        text: "AuroraAI allows us to maximize our impact by targeting the communities most in need and measuring our results with unprecedented precision.",
        author: "Elena Martinez",
        position: "Program Director, Global Energy Access"
      }
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
      quote: {
        text: "The detailed analytics have transformed our investment approach, allowing us to back projects with higher confidence and monitor progress in real-time.",
        author: "Jonathan Taylor",
        position: "Managing Partner, Clean Energy Capital"
      }
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-gray bg-opacity-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Use Cases</h2>
          <p className="section-subtitle">
            See how organizations around the world are leveraging our platform to accelerate energy access goals.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              className={`px-5 py-3 rounded-lg flex items-center transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-electric-blue text-white shadow-lg' 
                  : 'bg-white shadow hover:shadow-md'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2">{useCase.icon}</span>
              <span className="hidden md:inline font-medium">{useCase.title}</span>
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
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-4 text-electric-blue">
                {useCases[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-electric-blue">
                {useCases[activeTab].title}
              </h3>
            </div>
            
            <p className="text-slate-gray mb-8 text-lg">
              {useCases[activeTab].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-electric-blue">Key Benefits</h4>
                <ul className="space-y-3">
                  {useCases[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-vibrant-green">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {useCases[activeTab].quote && (
                <div className="bg-slate-gray bg-opacity-5 p-6 rounded-lg relative">
                  <svg className="absolute text-electric-blue opacity-20 w-16 h-16 -top-4 -left-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-lg italic mb-4">{useCases[activeTab].quote.text}</p>
                    <div>
                      <p className="font-bold">{useCases[activeTab].quote.author}</p>
                      <p className="text-sm text-slate-gray">{useCases[activeTab].quote.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn btn-secondary">View Case Study</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases; 