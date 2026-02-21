import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-lora text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="mt-2 block w-full px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="font-lora text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="mt-2 block w-full px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-lora text-sm font-semibold text-gray-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="mt-2 block w-full px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="font-lora text-sm font-semibold text-gray-700 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..."
                  className="mt-2 block w-full px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 tracking-wide"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[450px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116666.216398492!2d90.63851080838618!3d23.966952402179835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37542fb643198075%3A0xc3f60a631626097!2sNarsingdi!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;