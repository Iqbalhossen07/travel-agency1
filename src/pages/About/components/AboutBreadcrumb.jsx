import React from 'react';
import { motion } from 'framer-motion';

const AboutBreadcrumb = () => {
  return (
    <section className="relative bg-gray-900 h-84 flex items-center justify-center overflow-hidden">
      {/* Background Image with Opacity */}
      <img 
        src="https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="absolute inset-0 w-full h-full object-cover opacity-40" 
        alt="World Map with travel items" 
      />
      
      {/* Content Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-merriweather text-4xl md:text-5xl font-bold mt-16">
          About Us
        </h1>
        
        <p className="font-lora text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-200">
          Find your next adventure from our curated list of world-class tours and destinations.
        </p>
  <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1 bg-primary mx-auto mt-6 rounded-full"
                ></motion.div>
        {/* Optional: Actual Breadcrumb links */}
        <div className="mt-6 flex justify-center items-center space-x-2 text-sm font-medium uppercase tracking-widest text-primary mb-2">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="text-gray-400">/</span>
          <span className="text-white">About Us</span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutBreadcrumb;