import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGlobe, FaSatellite, FaCloud } from 'react-icons/fa';

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const TechFeature: React.FC<TechFeatureProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl bg-white shadow-lg"
    >
      <div className="w-16 h-16 bg-electric-blue text-white rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-electric-blue">{title}</h3>
        <p className="text-slate-gray">{description}</p>
      </div>
    </motion.div>
  );
};

const Technology: React.FC = () => {
  const techFeatures = [
    {
      icon: <FaBrain size={32} />,
      title: "AI & Machine Learning",
      description: "Our advanced predictive models assess electrification status and accurately forecast demand using computer vision and deep learning algorithms."
    },
    {
      icon: <FaGlobe size={32} />,
      title: "Geospatial Intelligence",
      description: "Sophisticated mapping, spatial analytics, and automated insights based on satellite data to identify optimal locations for electrification."
    },
    {
      icon: <FaSatellite size={32} />,
      title: "Remote Sensing Integration",
      description: "Comprehensive coverage through multiple satellite data sources including Sentinel, VIIRS Nightlights, and Google Open Buildings."
    },
    {
      icon: <FaCloud size={32} />,
      title: "Cloud-based, Scalable Infrastructure",
      description: "Reliable, scalable, and secure infrastructure ensuring data sovereignty and high-performance analytics for any region of the world."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-electric-blue to-sky-blue text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Technology Advantage</h2>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Cutting-edge technologies powering accurate insights and reliable recommendations for energy access planning.
          </p>
        </motion.div>

        <div className="space-y-6">
          {techFeatures.map((feature, index) => (
            <TechFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <h3 className="text-white text-xl font-bold mb-4">Powered by Leading Technologies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['TensorFlow', 'PyTorch', 'Google Earth Engine', 'AWS', 'Azure'].map((tech, index) => (
                <div key={index} className="text-white font-semibold opacity-80">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology; 