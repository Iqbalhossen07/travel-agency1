import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2015",
    title: "The Dream Begins",
    desc: "Wanderlust Travels was founded by two passionate explorers with a shared dream of making authentic travel accessible to everyone.",
    side: "left"
  },
  {
    year: "2017",
    title: "First International Group Tour",
    desc: "We successfully organized our first group tour to the serene landscapes of Bali, creating unforgettable memories for 15 travelers.",
    side: "right"
  },
  {
    year: "2020",
    title: "10,000 Happy Travelers",
    desc: "Reached a major milestone, having served over 10,000 clients and expanded our destinations to cover 5 continents.",
    side: "left"
  },
  {
    year: "2025",
    title: "Award for Excellence",
    desc: "Recognized as the 'Best Boutique Travel Agency' for our commitment to sustainable tourism and customer satisfaction.",
    side: "right"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-merriweather text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Journey Through Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-lora text-lg text-gray-600 max-w-3xl mx-auto"
          >
            From a humble beginning to a world of adventures.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop Only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-5/12"
                >
                  <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-primary/30 transition-all duration-300 relative group">
                    <h3 className="font-merriweather text-xl font-bold text-primary mb-3">
                      {item.year} - {item.title}
                    </h3>
                    <p className="font-lora text-gray-600 leading-relaxed italic">
                      {item.desc}
                    </p>
                    
                    {/* Tiny Arrow (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 z-10 
                      ${item.side === 'left' ? '-right-2 border-r border-b' : '-left-2'}`}>
                    </div>
                  </div>
                </motion.div>

                {/* Central Circle Dot */}
                <div className="relative z-20 flex items-center justify-center w-10 h-10 bg-primary rounded-full border-4 border-white shadow-lg my-6 md:my-0">
                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;