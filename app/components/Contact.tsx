import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaGlobe } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Request a demo or get in touch to learn how AuroraAI can accelerate your energy access goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-electric-blue rounded-xl text-white p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@aurora-ai.com" className="text-white text-opacity-90 hover:text-opacity-100">
                    info@aurora-ai.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-white text-opacity-90 hover:text-opacity-100">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-white text-opacity-90">
                    123 Energy Street, Innovation District<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-4">Global Reach</h4>
              <div className="flex items-center">
                <FaGlobe className="mr-2" />
                <p className="text-white text-opacity-90">
                  Serving clients across 30+ countries
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-electric-blue">Request a Demo</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-vibrant-green bg-opacity-10 border border-vibrant-green text-vibrant-green rounded-lg p-4 text-center"
                >
                  <h4 className="font-bold text-lg mb-2">Thank You!</h4>
                  <p>Your request has been submitted successfully. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-slate-gray">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-gray">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full pl-10 p-3"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block mb-2 font-medium text-slate-gray">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-gray">
                        <FaBuilding />
                      </div>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full pl-10 p-3"
                        placeholder="Your organization"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-slate-gray">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-gray">
                          <FaEnvelope />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full pl-10 p-3"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium text-slate-gray">
                        Phone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-gray">
                          <FaPhone />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full pl-10 p-3"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block mb-2 font-medium text-slate-gray">
                      I'm interested in <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full p-3"
                      required
                    >
                      <option value="" disabled>Select your interest</option>
                      <option value="demo">Product Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-slate-gray">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-slate-gray bg-opacity-5 border border-slate-gray border-opacity-20 text-slate-gray text-sm rounded-lg focus:ring-electric-blue focus:border-electric-blue block w-full p-3"
                      placeholder="Tell us about your energy access planning needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 