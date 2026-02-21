import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryHero from './components/GalleryHero';

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "mountains",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    title: "Hiking in the mountains",
    span: "lg:col-span-2" // বড় ইমেজ
  },
  {
    id: 2,
    category: "beaches",
    image: "https://images.unsplash.com/photo-1559305255-9b8c67da6675?fm=jpg&q=60&w=3000",
    title: "Tropical beach",
    span: "col-span-1"
  },
  {
    id: 3,
    category: "cities",
    image: "https://images.unsplash.com/photo-1504723433512-1f76737fa834?fm=jpg&q=60&w=3000",
    title: "Cityscape",
    span: "col-span-1"
  },
  {
    id: 4,
    category: "nature",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    title: "Forest waterfall",
    span: "col-span-1"
  },
  {
    id: 5,
    category: "nature",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
    title: "Misty forest",
    span: "lg:col-span-2" // বড় ইমেজ
  },
  {
    id: 6,
    category: "beaches",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
    title: "Sunset over ocean",
    span: "col-span-1"
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "mountains", "beaches", "cities", "nature"];

  const filteredItems = filter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <main className="bg-white min-h-screen">
      <GalleryHero />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ফিল্টার বাটন সেকশন */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* গ্যালারি গ্রিড */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`gallery-item relative group overflow-hidden rounded-xl shadow-md h-72 ${item.span}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* হোভার ইফেক্ট (ঐচ্ছিক কিন্তু সুন্দর লাগে) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-merriweather font-bold text-lg border-b-2 border-primary pb-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </main>
  );
};

export default Gallery;