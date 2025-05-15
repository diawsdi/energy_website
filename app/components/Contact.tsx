import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCalendar } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-electric-blue mb-2 sm:mb-4 tracking-tight leading-tight">Contact Us</h2>
          <div className="h-1 w-16 sm:w-24 bg-electric-blue mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-slate-gray text-base sm:text-lg max-w-2xl mx-auto font-inter leading-relaxed tracking-wide">
            Get in touch with us to learn more about our services and how we can help you achieve your energy access goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 border border-gray-100"
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-3 sm:mr-5 flex-shrink-0">
                <FaEnvelope className="text-electric-blue" size={16} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-montserrat font-semibold text-gray-800 mb-0.5 sm:mb-1 tracking-tight">Email</h4>
                <a 
                  href="mailto:contact@involtlabs.com" 
                  className="text-slate-gray text-base sm:text-lg font-inter hover:text-electric-blue transition-colors break-words"
                >
                  contact@involtlabs.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-3 sm:mr-5 flex-shrink-0">
                <FaCalendar className="text-electric-blue" size={16} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-montserrat font-semibold text-gray-800 mb-0.5 sm:mb-1 tracking-tight">Schedule a Meeting</h4>
                <a 
                  href="https://cal.com/heymouhammad/30min-business-meeting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2.5 bg-gradient-to-r from-electric-blue to-vibrant-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Book a 30-min Call
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;