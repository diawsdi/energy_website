import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaSatellite, FaBrain, FaChartLine } from 'react-icons/fa';

const HowInvoltWorks: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-electric-blue/10 to-sky-blue/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-solar-yellow/10 to-vibrant-green/10"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
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
            <FaPlay className="w-3 h-3" />
            <span>See It In Action</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-gray to-electric-blue bg-clip-text text-transparent">
            How InvoltAI Works
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience our AI-powered platform in action. Watch how we transform satellite data into actionable insights for energy access planning.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Video wrapper with enhanced styling */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-sky-blue to-vibrant-green rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Main video container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video responsive wrapper */}
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/e7f253f772844152b54b84f01206a3a3?sid=bdf85ff0-725f-4d3f-9a1f-3f39c1859831" 
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%' 
                  }}
                />
              </div>
              
              {/* Video overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights below video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: <FaSatellite className="w-6 h-6" />,
              title: "Satellite Intelligence",
              description: "Real-time processing of satellite imagery and remote sensing data",
              color: "bg-electric-blue"
            },
            {
              icon: <FaBrain className="w-6 h-6" />,
              title: "AI-Powered Analysis",
              description: "Advanced machine learning models predict energy access patterns",
              color: "bg-sky-blue"
            },
            {
              icon: <FaChartLine className="w-6 h-6" />,
              title: "Actionable Insights",
              description: "Transform complex data into clear, decision-ready visualizations",
              color: "bg-vibrant-green"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowInvoltWorks;