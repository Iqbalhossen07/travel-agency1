import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaRegClock, FaUsers } from 'react-icons/fa'; //আইকনগুলোর জন্য
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1 shadow-sm">
          <FaStar className="h-3.5 w-3.5 text-yellow-500" />
          <span className="text-sm font-lora font-bold text-gray-800">{tour.rating}</span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-lora font-semibold shadow-lg">
          ${tour.price.toLocaleString()}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-merriweather font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {tour.title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm font-lora mt-1">
            <FaMapMarkerAlt className="h-3.5 w-3.5 mr-1 text-primary" />
            {tour.location}
          </div>
        </div>

        <p className="text-gray-600 font-lora text-sm mb-4 line-clamp-2 leading-relaxed">
          {tour.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tour.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Info Icons */}
        <div className="flex items-center justify-between text-sm text-gray-500 font-lora mb-6 border-t border-gray-50 pt-4">
          <div className="flex items-center">
            <FaRegClock className="h-4 w-4 mr-1.5 text-gray-400" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <FaUsers className="h-4 w-4 mr-1.5 text-gray-400" />
            {tour.groupSize}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-lora italic">
            {tour.reviews} reviews
          </span>
      
<Link 
  to={`/tours/${tour.id}`} 
  onClick={() => console.log("Clicked!")}
  className="relative z-10 inline-block bg-gray-900 hover:bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform active:scale-95 shadow-md"
>
  View Details
</Link>

        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;