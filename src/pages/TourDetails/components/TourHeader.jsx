import React from 'react';
import { motion } from 'framer-motion';

const TourHeader = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative bg-gray-900 h-84 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src={bgImage || "https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?fm=jpg&q=60&w=3000"} 
          className="w-full h-full object-cover opacity-50" 
          alt="Tour Banner"
        />
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
   

          <h1 className="font-merriweather text-4xl md:text-6xl font-bold mb-6 mt-8">
            {title || "Tour Details"}
          </h1>
          
          <p className="font-lora text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {subtitle || "Find your next adventure from our curated list of world-class tours and destinations."}
          </p>

          {/* Breadcrumb Style Line */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm font-medium">
            <span className="text-gray-400 hover:text-primary cursor-pointer transition-colors">Home</span>
            <span className="text-gray-600">/</span>
            <span className="text-primary">{title || "Details"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourHeader;