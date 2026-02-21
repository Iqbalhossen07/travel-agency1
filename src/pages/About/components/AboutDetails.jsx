import React from 'react';
import { motion } from 'framer-motion';

const AboutDetails = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid Section */}
          <div className="relative h-[550px] md:h-[600px]">
            {/* Main Large Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group absolute w-3/4 h-3/4 top-0 left-0 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <img src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?auto=format&fit=crop&w=800&q=80" alt="Joyful Travelers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group absolute w-2/3 h-2/3 bottom-0 right-0 rounded-3xl shadow-2xl overflow-hidden border-8 border-white z-20"
            >
              <img src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=800&q=80" alt="Beautiful Lake View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>

            {/* Small Floating Center Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group absolute w-1/3 aspect-square top-1/2 left-1/4 -translate-y-1/2 rounded-2xl shadow-xl overflow-hidden border-4 border-white z-30 hidden sm:block"
            >
              <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" alt="Traveler View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>

            {/* Stats Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-10 left-0 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center space-x-3 z-40 border border-gray-100"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full object-cover border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" />
                ))}
              </div>
              <div>
                <p className="font-merriweather text-xs font-bold text-gray-900 leading-tight">50k+ Happy</p>
                <p className="font-lora text-[10px] text-gray-500 font-medium">Travelers Worldwide</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-lora text-primary font-bold uppercase tracking-widest mb-4"
            >
              About Our Company
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-merriweather text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8"
            >
              We Strive to Offer the Best Travel Experience
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-lora text-gray-600 text-lg leading-relaxed mb-10"
            >
              At Wanderlust Travels, our passion is crafting unforgettable journeys that go beyond the ordinary. We believe that travel should be seamless, inspiring, and deeply personal.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <FeatureItem title="Tailor-Made Itineraries" desc="Customized trips designed for you." />
              <FeatureItem title="Expert Local Guides" desc="Passionate guides who know the lore." />
              <FeatureItem title="24/7 Support" desc="Round-the-clock assistance anywhere." />
              <FeatureItem title="Best Price Guarantee" desc="Premium trips at competitive rates." />
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all inline-flex items-center self-start"
            >
              Discover More
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper Component for Features
const FeatureItem = ({ title, desc }) => (
  <div className="flex items-start space-x-4 group">
    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary transition-colors duration-300">
      <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div>
      <h4 className="font-merriweather font-bold text-gray-900 mb-1">{title}</h4>
      <p className="font-lora text-sm text-gray-500 leading-snug">{desc}</p>
    </div>
  </div>
);

export default AboutDetails;