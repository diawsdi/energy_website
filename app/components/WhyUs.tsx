import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaSearchLocation, FaLightbulb, FaChartLine, FaRegClock } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card hover:border-electric-blue hover:border group"
    >
      <div className="w-14 h-14 rounded-lg bg-electric-blue bg-opacity-10 flex items-center justify-center mb-4 text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-electric-blue">{title}</h3>
      <p className="text-slate-gray">{description}</p>
    </motion.div>
  );
};

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <FaBolt size={28} />,
      title: "Real-Time Energy Access Insights",
      description: "Instantly identify areas and populations lacking reliable energy access through cutting-edge AI and satellite data."
    },
    {
      icon: <FaSearchLocation size={28} />,
      title: "Remote & Accurate Demand Assessment",
      description: "Evaluate energy needs precisely—even in the most remote areas—without leaving your desk."
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Optimized Energy Solutions",
      description: "Automatically generate optimal electrification solutions (grid extension, mini-grids, renewables) tailored for your community."
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Transparent Financial Analysis",
      description: "Provide detailed cost-benefit analyses and investment clarity for every electrification scenario."
    },
    {
      icon: <FaRegClock size={28} />,
      title: "Real-Time Project Monitoring",
      description: "Monitor electrification projects seamlessly with real-time updates, alerts, and geospatial tracking."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-gray bg-opacity-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why AuroraAI?</h2>
          <p className="section-subtitle">
            Our platform delivers unprecedented clarity and efficiency in energy access planning through cutting-edge AI and geospatial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 