import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DataDriven: React.FC = () => {
  return (
    <section className="py-20 bg-[#050A15] relative overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A15] via-[#071528] to-[#050A15] opacity-80"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTJhNGUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wIDB2Nmg2LXY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container relative z-10">
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-vibrant-green to-solar-yellow opacity-50 blur-lg rounded-lg"></div>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-white tracking-scale z-10 py-1 px-3">
              Powerful Analytics with a Purpose
            </h2>
          </div>
          <div className="h-1 w-24 bg-electric-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-inter tracking-scale leading-relaxed">
            Make informed decisions with comprehensive data visualizations that transform complex energy data into actionable insights.
          </p>
        </motion.div>
        
        {/* Analytics visualization images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* First analytics visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-sky-blue opacity-70 blur-md rounded-xl"></div>
            <div className="relative bg-[#071528] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[0.99] transition-all duration-300">
              <div className="p-4 lg:p-6">
                <h3 className="text-xl lg:text-2xl font-inter font-semibold text-white mb-2">Electrification Confidence Analytics</h3>
                <p className="text-gray-300 text-sm lg:text-base mb-4">
                  Visualize annual energy statistics by administrative level and highlight areas with &gt; 90% electrification confidence to guide targeted grid planning.
                </p>
              </div>
              <div className="relative w-full aspect-[16/9] rounded-b-xl overflow-hidden">
                <Image 
                  src="/images/data_driven/1.png" 
                  alt="Demand Forecast Analytics Dashboard" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          {/* Second analytics visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-solar-yellow to-vibrant-green opacity-70 blur-md rounded-xl"></div>
            <div className="relative bg-[#071528] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[0.99] transition-all duration-300">
              <div className="p-4 lg:p-6">
                <h3 className="text-xl lg:text-2xl font-inter font-semibold text-white mb-2">Building-Level Access Mapping</h3>
                <p className="text-gray-300 text-sm lg:text-base mb-4">
                  Reveal energy access gaps by rendering building footprints and monitor electrification progress across both urban and rural areas.
                </p>
              </div>
              <div className="relative w-full aspect-[16/9] rounded-b-xl overflow-hidden">
                <Image 
                  src="/images/data_driven/2.png" 
                  alt="Geospatial Energy Mapping Dashboard" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* No metrics section */}
      </div>
    </section>
  );
};

export default DataDriven;
