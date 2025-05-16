import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGlobe, FaSatellite, FaCloud, FaMicrochip, FaDatabase, FaRobot, FaNetworkWired, FaCogs } from 'react-icons/fa';

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const TechFeature: React.FC<TechFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  color, 
  index, 
  isActive, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group cursor-pointer ${isActive ? 'z-10' : ''}`}
      onClick={onClick}
    >
      <div 
        className={`
          px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center gap-2 sm:gap-4
          ${isActive 
            ? `bg-gradient-to-br from-[#0c1528] to-[#050A15] border border-${color}/30 shadow-xl` 
            : 'bg-white/5 hover:bg-white/10'}
        `}
      >
        <div className={`
          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0
          ${isActive 
            ? `${color} text-white` 
            : `bg-black/20 text-${color}`}
          transition-all duration-300
        `}>
          <span className="text-base sm:text-lg md:text-xl">{icon}</span>
        </div>

        <div className="flex-1">
          <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-200'}`}>
            {title}
          </h3>
          {isActive && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-300 text-xs sm:text-sm"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface TechDetailProps {
  selectedIndex: number;
  techFeatures: any[];
}

const TechDetail: React.FC<TechDetailProps> = ({ selectedIndex, techFeatures }) => {
  const feature = techFeatures[selectedIndex];
  
  return (
    <motion.div
      key={selectedIndex}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden h-full"
    >
      <div className="relative h-full">
        {/* Background with patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081427] to-[#050A15] overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: `radial-gradient(circle at 20px 20px, ${feature.bgAccent} 2px, transparent 0)`, 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          
          {/* Accent glow */}
          <div className={`absolute -top-20 -right-20 w-64 h-64 ${feature.bgAccent} opacity-20 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-20 -left-20 w-64 h-64 ${feature.bgAccent} opacity-10 rounded-full blur-3xl`}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl ${feature.bgColor} flex items-center justify-center shadow-lg`}>
                <span className="text-lg sm:text-xl md:text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {feature.description}
            </p>
            
            {/* Tech stack */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <h4 className="text-lg sm:text-xl font-semibold text-white/90">Key Technologies</h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {feature.technologies.map((tech: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 bg-white/5 rounded-lg p-2.5 sm:p-3.5 hover:bg-white/10 transition duration-300 min-h-[60px]"
                  >
                    <span className={`text-${feature.accent} text-sm sm:text-base mt-0.5 shrink-0`}>{tech.icon}</span>
                    <span className="text-white text-xs sm:text-sm font-medium leading-tight break-words">​{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom stats - only shown when stats are available */}
          {feature.stats && feature.stats.length > 0 && (
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                {feature.stats.map((stat: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                    className="text-center px-1 py-2 sm:py-0"
                  >
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold text-${feature.accent}`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Technology: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const techFeatures = [
    {
      icon: <FaBrain size={32} />,
      title: "AI & Machine Learning",
      description: "Our AI models estimate electricity access and forecast demand at the building level with high precision, using a probabilistic learning approach. By combining nighttime light intensity, high-resolution satellite imagery, building footprints, internet performance, and land use patterns, the system identifies underserved communities and quantifies energy needs. The models generate both access likelihood and monthly consumption estimates, enabling targeted, cost-effective electrification planning even in data-scarce environments.",
      color: "bg-electric-blue",
      accent: "electric-blue",
      bgColor: "bg-electric-blue",
      bgAccent: "rgba(0,82,204,0.5)",
      technologies: [
        { name: "Bayesian Neural Networks", icon: <FaBrain size={16} /> },
        { name: "Multimodal Data Fusion", icon: <FaNetworkWired size={16} /> },
        { name: "Remote Sensing Feature Extraction", icon: <FaSatellite size={16} /> },
        { name: "Probabilistic Demand Modeling", icon: <FaDatabase size={16} /> },
        { name: "Geospatial Deep Learning", icon: <FaGlobe size={16} /> },
        { name: "Noise-Tolerant Training", icon: <FaCogs size={16} /> },
      ],
      stats: [
        { value: "90%", label: "Accuracy" },
        { value: "5TB+", label: "Training Data" },
        { value: "12M", label: "Structures Analyzed" },
        { value: "43", label: "AI Models" }
      ]
    },
    {
      icon: <FaGlobe size={32} />,
      title: "Geospatial Intelligence",
      description: "Our platform leverages Google Earth Engine for rapid satellite imagery preprocessing and analysis at global scale. We store and query large-scale geospatial data in BigQuery, enabling real-time analytical dashboards and reporting. This combination provides unprecedented speed and scalability for energy access mapping and planning.",
      color: "bg-vibrant-green",
      accent: "vibrant-green",
      bgColor: "bg-vibrant-green",
      bgAccent: "rgba(76,175,80,0.5)",
      technologies: [
        { name: "Google Earth Engine", icon: <FaGlobe size={16} /> },
        { name: "BigQuery", icon: <FaDatabase size={16} /> },
        { name: "Geospatial Analytics", icon: <FaGlobe size={16} /> },
        { name: "Real-time Dashboards", icon: <FaNetworkWired size={16} /> },
        { name: "Satellite Preprocessing", icon: <FaSatellite size={16} /> },
        { name: "Global-scale Processing", icon: <FaCloud size={16} /> },
      ],
      stats: []
    },
    {
      icon: <FaSatellite size={32} />,
      title: "Remote Sensing Integration",
      description: "We aggregate critical data from Sentinel-2, VIIRS Nighttime Lights, Google Open Buildings, Microsoft Building Footprints, and high-resolution satellite imagery. Our system calculates building density, integrates land use/land cover analysis, and correlates with Ookla Speedtest data to provide rich socioeconomic context for energy demand and access modeling.",
      color: "bg-solar-yellow",
      accent: "solar-yellow",
      bgColor: "bg-solar-yellow",
      bgAccent: "rgba(255,193,7,0.5)",
      technologies: [
        { name: "Sentinel-2", icon: <FaSatellite size={16} /> },
        { name: "VIIRS Nighttime Lights", icon: <FaSatellite size={16} /> },
        { name: "Google Open Buildings", icon: <FaDatabase size={16} /> },
        { name: "Microsoft Footprints", icon: <FaDatabase size={16} /> },
        { name: "Land Use Classification", icon: <FaGlobe size={16} /> },
        { name: "Building Density Analysis", icon: <FaCogs size={16} /> },
      ],
      stats: [
        { value: "3-5m", label: "Resolution" },
        { value: "6", label: "Satellite Sources" },
        { value: "Weekly", label: "Update Frequency" },
        { value: "93%", label: "Cloud Penetration" }
      ]
    },
    {
      icon: <FaCloud size={32} />,
      title: "Cloud-based Infrastructure",
      description: "We leverage Vertex AI to train, host, and deploy our VOLTRA and VOLTIMA models for real-time inference via scalable endpoints. Dataflow powers our real-time stream processing pipeline, ingesting and transforming data for continuous updates. This architecture ensures immediate insights, seamless model deployment, and real-time dashboard visualization with unparalleled scalability.",
      color: "bg-sky-blue",
      accent: "sky-blue",
      bgColor: "bg-sky-blue",
      bgAccent: "rgba(0,188,212,0.5)",
      technologies: [
        { name: "Vertex AI", icon: <FaBrain size={16} /> },
        { name: "Dataflow", icon: <FaNetworkWired size={16} /> },
        { name: "BigQuery", icon: <FaDatabase size={16} /> },
        { name: "Earth Engine", icon: <FaGlobe size={16} /> },
        { name: "Real-time Inference", icon: <FaCogs size={16} /> },
        { name: "Stream Processing", icon: <FaCloud size={16} /> },
      ],
      stats: [
        { value: "99.99%", label: "Uptime" },
        { value: "< 150ms", label: "Response Time" },
        { value: "3.4 PB", label: "Data Processed" },
        { value: "7", label: "Regions" }
      ]
    }
  ];

  return (
    <section id="technology" className="py-16 sm:py-20 md:py-24 bg-[#050A15] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric-blue opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-solar-yellow opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-vibrant-green opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-vibrant-green to-solar-yellow opacity-50 blur-lg rounded-lg"></div>
              <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 z-10 py-1 px-3 tracking-scale leading-tight">
                Our Technology Advantage
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed tracking-wide">
            Cutting-edge technologies powering accurate insights and reliable recommendations for energy access planning across the globe.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Left side - Tech selector */}
          <div className="lg:col-span-2 space-y-2 sm:space-y-4 mb-4 sm:mb-6 lg:mb-0">
            <div className="grid grid-cols-3 sm:hidden gap-2 mb-4 sm:mb-6">
              {techFeatures.map((feature, index) => (
                <button
                  key={`mobile-tab-${index}`}
                  className={`px-2 py-2 rounded-lg flex items-center justify-center transition-all duration-300 ${selectedIndex === index ? `${feature.color} text-white shadow-lg` : 'bg-white/5 text-white hover:bg-white/10'}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <span className="text-lg">{feature.icon}</span>
                </button>
              ))}
            </div>
            
            <div className="hidden sm:block">
              {techFeatures.map((feature, index) => (
                <TechFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  index={index}
                  isActive={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Tech details */}
          <div className="lg:col-span-3 h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
            <TechDetail 
              selectedIndex={selectedIndex}
              techFeatures={techFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 