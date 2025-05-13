import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSatellite, FaBrain, FaLightbulb } from 'react-icons/fa';

const Transformation: React.FC = () => {
  return (
    <section className="py-24 bg-[#060B18]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/40 to-transparent mix-blend-overlay z-10"></div>
              {/* Image as a background div with proper containment */}
              <div 
                className="w-full h-[500px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(/images/ruralenergy.png)' }}
                aria-label="Rural energy transformation"
              ></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050A15] to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-vibrant-green/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-electric-blue/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-vibrant-green blur-sm opacity-50 rounded-lg"></div>
                <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 z-10 py-1 px-2">
                  Transforming Lives Through Technology
                </h2>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg">
              Our technology sits at the heart of energy decisions, revolutionizing how communities gain access to reliable power. By combining cutting-edge remote sensing with sophisticated AI algorithms, we're changing lives across the globe.
            </p>

            <div className="space-y-6 pt-4">
              {[
                {
                  icon: <FaSatellite className="text-solar-yellow" size={24} />,
                  title: "Satellite-Powered Insights",
                  description: "We analyze satellite imagery to identify electrification status and energy needs with unprecedented precision."
                },
                {
                  icon: <FaBrain className="text-electric-blue" size={24} />,
                  title: "AI-Driven Decision Making",
                  description: "Our AI algorithms process complex geospatial data to recommend optimal energy solutions for each unique context."
                },
                {
                  icon: <FaLightbulb className="text-vibrant-green" size={24} />,
                  title: "Life-Changing Impact",
                  description: "Communities gain access to reliable electricity, powering education, healthcare, and economic opportunities."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-2 rounded-lg bg-[#0c1528] shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
