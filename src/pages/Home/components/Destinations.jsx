import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    country: "Maldives",
    title: "Azure Paradise",
    tours: "18 Tours",
    image: "https://images.unsplash.com/photo-1640964488903-9b85450f1b76?auto=format&fit=crop&w=1200&q=80",
    gridClass: "lg:col-span-2",
    animation: { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } }
  },
  {
    id: 2,
    country: "Indonesia",
    title: "Kelingking Beach",
    tours: "15 Tours",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    gridClass: "lg:row-span-2",
    animation: { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 } }
  },
  {
    id: 3,
    country: "Switzerland",
    title: "The Alps",
    tours: "22 Tours",
    image: "https://images.unsplash.com/photo-1640964488906-d20d66a97a2b?auto=format&fit=crop&w=800&q=80",
    gridClass: "",
    animation: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }
  },
  {
    id: 4,
    country: "Italy",
    title: "Amalfi Coast",
    tours: "32 Tours",
    image: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=800&q=80",
    gridClass: "",
    animation: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }
  }
];

const Destinations = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-merriweather text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Explore <span className="text-primary">Top Destinations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-lora text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our handpicked collection of the world's most breathtaking locations, each offering a unique and unforgettable adventure.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[750px]">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              initial={dest.animation.initial}
              whileInView={dest.animation.whileInView}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg ${dest.gridClass}`}
            >
              {/* Image with Zoom Effect */}
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
              
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {dest.tours}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <p className="font-lora text-sm mb-1 text-gray-300 tracking-widest uppercase">
                  {dest.country}
                </p>
                <h3 className="font-merriweather text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {dest.title}
                </h3>
                
                {/* Hidden Button that slides up on hover */}
                <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-500">
                   <button className="text-white flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                     View Details 
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;