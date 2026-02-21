import React from 'react';
import { motion } from 'framer-motion';

const GalleryHero = () => (
  <section className="relative h-84 flex items-center justify-center bg-gray-900">
    <img 
      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1500&q=80" 
      className="absolute inset-0 w-full h-full object-cover opacity-40" 
      alt="Gallery Banner"
    />
    <div className="relative z-10 text-center text-white">
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-merriweather text-4xl md:text-5xl font-bold"
      >
        Our Memories
      </motion.h1>
      <p className="font-lora mt-2 text-gray-200">Exploring the world through our lenses</p>
        <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-primary mx-auto mt-6 rounded-full"
                      ></motion.div>
        <div className="mt-6 flex justify-center items-center space-x-2 text-sm font-medium uppercase tracking-widest text-primary mb-2">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="text-gray-400">/</span>
          <span className="text-white">Gallery</span>
        </div>
    </div>
  </section>
);

export default GalleryHero;