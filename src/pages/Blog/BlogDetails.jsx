import React from 'react';
import { motion } from 'framer-motion';
import BlogHero from './components/BlogHero';
import BlogSidebar from './components/BlogSidebar';

const BlogDetails = () => {
  return (
    <main className="bg-white">
      {/* Reuse BlogHero with Dynamic Title if needed */}
      <BlogHero />

      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <article>
                {/* Header Section */}
                <header className="mb-8">
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="font-lora text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
                  >
                    Travel Tips
                  </motion.p>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-merriweather text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6"
                  >
                    The Ultimate Guide to Sustainable Travel
                  </motion.h1>
                  
                  <div className="flex items-center space-x-4 mt-4 p-4 bg-gray-50 rounded-2xl inline-flex">
                    <img 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100" 
                      alt="Jane Doe" 
                    />
                    <div>
                      <p className="font-lora font-bold text-neutral-900">Jane Doe</p>
                      <p className="font-lora text-xs text-neutral-500">Published on August 21, 2025</p>
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-3xl overflow-hidden shadow-2xl mb-12 h-[300px] md:h-[500px]"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200" 
                    alt="Sustainable Travel Guide" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </motion.div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none font-lora text-neutral-700 leading-relaxed space-y-6">
                  <p className="text-xl leading-relaxed text-neutral-800">
                    Traveling is one of life's greatest pleasures, but it's crucial to be mindful of our impact on the planet. Sustainable travel isn't about sacrificing comfort; it's about making conscious choices.
                  </p>
                  
                  <h2 className="font-merriweather text-2xl font-bold text-neutral-900 mt-8">1. Pack Light and Smart</h2>
                  <p>Every kilogram counts when you're flying. Lighter luggage means less fuel consumption. Opt for a reusable water bottle to avoid single-use plastics.</p>
                  
                  <h2 className="font-merriweather text-2xl font-bold text-neutral-900 mt-8">2. Choose Eco-Friendly Accommodations</h2>
                  <p>Look for hotels and lodges that have green certifications. Staying in locally-owned guesthouses is also a fantastic way to directly support the community.</p>
                  
                  <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-2xl text-neutral-900 bg-primary/5 rounded-r-2xl my-10 font-merriweather">
                    "Take only memories, leave only footprints." <br/>
                    <span className="text-sm font-bold not-italic text-primary">— Chief Seattle</span>
                  </blockquote>
                  
                  <h2 className="font-merriweather text-2xl font-bold text-neutral-900 mt-8">3. Respect Local Culture</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Offset your carbon emissions.</li>
                    <li>Eat at local restaurants.</li>
                    <li>Buy souvenirs from local artisans.</li>
                    <li>Use public transportation when possible.</li>
                  </ul>

                  <p className="pt-8 border-t border-gray-100">
                    By making these small changes, we can all contribute to a more sustainable future for travel.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <BlogSidebar />

          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;