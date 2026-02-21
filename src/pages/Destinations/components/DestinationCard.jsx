import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const DestinationCard = ({ item }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative group h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
  >
    {/* Image */}
    <img 
      src={item.image} 
      alt={item.name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="flex items-center text-primary mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <span className="font-lora font-medium uppercase tracking-widest text-xs text-white/80">{item.country}</span>
      </div>
      
      <h3 className="font-merriweather text-3xl font-bold text-white mb-2">{item.name}</h3>
      
      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-gray-300 text-sm font-lora">{item.tourCount} Tours Available</p>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
          <FaArrowRight />
        </div>
      </div>
    </div>

    {/* Badge */}
    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs font-bold">
      Top Rated
    </div>
  </motion.div>
);

export default DestinationCard;