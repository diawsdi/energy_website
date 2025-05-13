import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-electric-blue mb-4">Contact Us</h2>
          <div className="h-1 w-24 bg-electric-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Get in touch with us to learn more about our services and how we can help you achieve your energy access goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100"
        >
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-5 flex-shrink-0">
                <FaMapMarkerAlt className="text-electric-blue" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Address</h4>
                <p className="text-slate-gray text-lg">
                  Dakar, Mermoz Sacre Coeur
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-5 flex-shrink-0">
                <FaPhone className="text-electric-blue" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Telephone</h4>
                <a 
                  href="tel:+221771060900" 
                  className="text-slate-gray text-lg hover:text-electric-blue transition-colors"
                >
                  +221 77 106 09 00
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-10 flex items-center justify-center mr-5 flex-shrink-0">
                <FaEnvelope className="text-electric-blue" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Email</h4>
                <a 
                  href="mailto:mouhammadieng@gmail.com" 
                  className="text-slate-gray text-lg hover:text-electric-blue transition-colors"
                >
                  mouhammadieng@gmail.com
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