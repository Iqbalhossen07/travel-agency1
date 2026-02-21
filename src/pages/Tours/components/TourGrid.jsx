import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaRegClock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ১. ট্যুর কার্ড কম্পোনেন্ট (আলাদা করে ডিফাইন করা ভালো)
const TourCard = ({ tour }) => (
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
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1 shadow-sm">
        <FaStar className="h-3.5 w-3.5 text-yellow-500" />
        <span className="text-sm font-bold text-gray-800">{tour.rating}</span>
      </div>
      <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
        ${tour.price.toLocaleString()}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6">
      <h3 className="text-xl font-merriweather font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
        {tour.title}
      </h3>
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <FaMapMarkerAlt className="h-3.5 w-3.5 mr-1 text-primary" />
        {tour.location}
      </div>
      
      <p className="text-gray-600 font-lora text-sm mb-4 line-clamp-2 leading-relaxed">
        {tour.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {tour.tags?.map(tag => (
          <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-50 pt-4 mb-5">
        <div className="flex items-center"><FaRegClock className="mr-1.5" /> {tour.duration}</div>
        <div className="flex items-center"><FaUsers className="mr-1.5" /> {tour.groupSize}</div>
      </div>
      
      {/* অ্যাকশন বাটন এখন লিঙ্কের ভেতর */}
      <Link 
        to={`/tours/${tour.id}`}
        onClick={() => console.log("Navigating to ID:", tour.id)}
        className="block w-full"
      >
        <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 shadow-md shadow-primary/20">
          View Details
        </button>
      </Link>
    </div>
  </motion.div>
);

// ২. মেইন গ্রিড কম্পোনেন্ট
const TourGrid = () => {
  const TOURS_DATA = [
    {
      id: 1,
      title: "Santorini, Greece",
      location: "Greece",
      price: 2499,
      rating: 4.9,
      reviews: "2,847",
      duration: "7 days",
      groupSize: "2-12 people",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Experience the magic of Santorini with its iconic blue-domed churches and stunning sunsets.",
      tags: ["Sunset Views", "Wine Tasting"]
    },
    {
      id: 2,
      title: "Kyoto, Japan",
      location: "Japan",
      price: 3299,
      rating: 4.8,
      reviews: "1,923",
      duration: "10 days",
      groupSize: "2-8 people",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Immerse yourself in ancient Japanese culture with temple visits and serene gardens.",
      tags: ["Temple Tours", "Cherry Blossoms"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS_DATA.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
           <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">1</button>
           <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">2</button>
           <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">3</button>
        </div>
      </div>
    </section>
  );
};

export default TourGrid;