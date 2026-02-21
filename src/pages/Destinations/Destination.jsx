import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ডেস্টিনেশন ডেটা লিস্ট
const DESTINATIONS_DATA = [
  { id: 1, name: "Switzerland", tours: "10+", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800", delay: 0.1 },
  { id: 2, name: "Japan", tours: "8+", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800", delay: 0.2 },
  { id: 3, name: "Italy", tours: "15+", image: "https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?w=800", delay: 0.3 },
  { id: 4, name: "Peru", tours: "5+", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800", delay: 0.1 },
  { id: 5, name: "Greece", tours: "12+", image: "https://images.unsplash.com/photo-1640964488906-d20d66a97a2b?w=800", delay: 0.2 },
  { id: 6, name: "Thailand", tours: "9+", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800", delay: 0.3 },
];

const Destinations = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-84 flex items-center justify-center overflow-hidden">
        <img 
          src="https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Banner" 
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold">Explore Destinations</h1>
          <p className="font-lora text-gray-300 mt-2">Find your next adventure from our curated list of world-class tours and destinations.</p>
          <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-primary mx-auto mt-6 rounded-full"
                  ></motion.div>
          
                    <div className="mt-6 flex justify-center items-center space-x-2 text-sm font-medium uppercase tracking-widest text-primary mb-2">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span className="text-gray-400">/</span>
                    <span className="text-white"> Destination</span>
                  </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dest.delay }}
              >
                <Link 
                  to={`/destinations/${dest.name.toLowerCase()}`} 
                  className="block rounded-3xl overflow-hidden shadow-lg relative group h-96"
                >
                  {/* Image */}
                  <img 
                    src={dest.image} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    alt={dest.name} 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="font-merriweather text-3xl font-bold mb-2 transition-transform group-hover:-translate-y-1 duration-300">
                      {dest.name}
                    </h3>
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 inline-block rounded-full shadow-lg">
                      {dest.tours} Tours Available
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destinations;