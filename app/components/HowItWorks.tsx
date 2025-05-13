import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaChartLine, FaLightbulb, FaCalculator, FaChartBar } from 'react-icons/fa';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-electric-blue flex items-center justify-center text-white mb-4 relative">
        {icon}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-slate-gray">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-electric-blue text-center">{title}</h3>
      <p className="text-center text-slate-gray">{description}</p>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Select an Area",
      description: "Define or upload your areas of interest for analysis using our interactive map interface."
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Analyze Energy Status & Demand",
      description: "Instantly visualize electrification gaps and comprehensive demand analytics across your selected region."
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Generate Optimal Solutions",
      description: "Our AI automatically suggests the best electrification methods tailored to local conditions and requirements."
    },
    {
      icon: <FaCalculator size={24} />,
      title: "Evaluate Financial Details",
      description: "Review precise costs, ROI projections, and various funding scenarios for informed decision-making."
    },
    {
      icon: <FaChartBar size={24} />,
      title: "Monitor Implementation",
      description: "Track progress, verify outcomes, and adjust strategies with real-time project monitoring capabilities."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our intuitive platform guides you through a comprehensive energy planning process in just five simple steps.
          </p>
        </motion.div>

        {/* Desktop Steps */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-electric-blue bg-opacity-20"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  icon={step.icon}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden">
          <div className="relative space-y-12">
            {/* Connection Line */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-electric-blue bg-opacity-20"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <Step
                    icon={step.icon}
                    number={index + 1}
                    title=""
                    description=""
                    delay={index * 0.1}
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2 text-electric-blue">{step.title}</h3>
                  <p className="text-slate-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            See It In Action
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 