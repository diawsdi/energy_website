import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaSearchLocation, FaLightbulb, FaChartLine, FaRegClock } from 'react-icons/fa';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  accentColor: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, index, accentColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="flex items-start gap-6 group py-6 pl-6 pr-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
        {/* Vertical line with animated dot */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100">
          <motion.div 
            className={`absolute w-4 h-4 -left-[7px] rounded-full ${accentColor}`}
            initial={{ top: '0%' }}
            whileInView={{ top: '50%' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          />
        </div>

        {/* Icon */}
        <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white ${accentColor} shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <FaBolt size={24} />,
      title: "Real-Time Energy Access Insights",
      description: "Instantly identify areas and populations lacking reliable energy access through cutting-edge AI and satellite data.",
      accentColor: "bg-electric-blue"
    },
    {
      icon: <FaSearchLocation size={24} />,
      title: "Remote & Accurate Demand Assessment",
      description: "Evaluate energy needs precisely—even in the most remote areas—without leaving your desk.",
      accentColor: "bg-solar-yellow"
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Optimized Energy Solutions",
      description: "Automatically generate optimal electrification solutions (grid extension, mini-grids, off grid) tailored for your community.",
      accentColor: "bg-vibrant-green"
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Transparent Financial Analysis",
      description: "Provide detailed cost-benefit analyses and investment clarity for every electrification scenario.",
      accentColor: "bg-sky-blue"
    },
    {
      icon: <FaRegClock size={24} />,
      title: "Real-Time Project Monitoring",
      description: "Monitor electrification projects seamlessly with real-time updates, alerts, and geospatial tracking.",
      accentColor: "bg-electric-blue"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-electric-blue opacity-5"></div>
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-solar-yellow opacity-5"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-vibrant-green opacity-5"></div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          {/* Left section - Title with decorative elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/3 relative"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-vibrant-green opacity-20 blur-lg rounded-lg"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-gray-900 z-10">
                Why<br />
                <span className="relative">
                  <span className="relative inline-block bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">InvoltAI</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-vibrant-green rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right section - Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              Our platform delivers unprecedented clarity and efficiency in energy access planning through cutting-edge AI and geospatial intelligence, making sustainable electrification possible for everyone.
            </p>
          </motion.div>
        </div>

        {/* Features list */}
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100"></div>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                accentColor={feature.accentColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 