import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Overlapping Images */}
          <div className="relative h-[500px]" data-aos="fade-right">
            {/* Top Left Image */}
            <div className="group absolute w-3/4 h-3/4 top-0 left-0 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Travelers jumping with joy" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>
            
            {/* Bottom Right Image */}
            <div className="group absolute w-2/3 h-2/3 bottom-0 right-0 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Woman in a boat" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>
            
            {/* Middle Small Image */}
            <div className="group absolute w-1/3 top-1/2 left-1/4 rounded-xl shadow-xl overflow-hidden border-4 border-white transform -translate-y-1/2">
              <img 
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Traveler view" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>

            {/* Floating Happy Travelers Badge */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer 1" />
                <img className="w-8 h-8 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer 2" />
                <img className="w-8 h-8 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer 3" />
              </div>
              <p className="font-lora text-[10px] leading-tight font-semibold text-gray-700 pr-2">
                50k+ Happy<br />Travelers
              </p>
            </div>

            {/* Floating Icon */}
            <div className="absolute top-10 right-14 transform -translate-y-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </div>
          </div>

          {/* Right Side: Content */}
          <div data-aos="fade-left">
            <p className="font-lora text-primary font-semibold mb-2">About Our Company</p>
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              We Strive to Offer the Best Travel Experience
            </h2>
            <p className="font-lora text-gray-600 leading-relaxed mb-8 text-base">
              At Wanderlust Travels, our passion is crafting unforgettable journeys that go beyond the ordinary. We believe that travel should be seamless, inspiring, and deeply personal.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureItem 
                title="Tailor-Made Itineraries" 
                desc="Customized trips designed around your interests."
              />
              <FeatureItem 
                title="Expert Local Guides" 
                desc="Passionate guides who bring destinations to life."
              />
              <FeatureItem 
                title="24/7 Support" 
                desc="Peace of mind with our round-the-clock assistance."
              />
              <FeatureItem 
                title="Best Price Guarantee" 
                desc="Premium experiences at competitive prices."
              />
            </div>

            <Link to={'/about'} className="mt-10 bg-primary hover:bg-primary/90 text-white font-lora font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30 inline-flex items-center group">
              Discover More
              <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Feature Component
const FeatureItem = ({ title, desc }) => (
  <div className="flex items-start space-x-3 group">
    <div className="mt-1">
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div>
      <h4 className="font-merriweather font-bold text-gray-800 text-sm">{title}</h4>
      <p className="font-lora text-xs text-gray-600 mt-1 leading-snug">{desc}</p>
    </div>
  </div>
);

export default AboutSection;