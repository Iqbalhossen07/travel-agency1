import React, { useState, useEffect } from 'react';

const LimitedOffers = () => {
  // Countdown state (কাল্পনিক টাইমার)
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // সিম্পল টাইমার ইফেক্ট
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return prev; // লজিক আরও বড় করা যায়, আপাতত স্ট্যাটিক রাখা হলো
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Limited Time Offers
          </h2>
          <p className="font-lora text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive deals and promotions for our valued travelers. Don't miss these incredible savings!
          </p>
        </div>

        {/* Mega Flash Sale Banner - Primary Color Theme */}
        <div className="bg-gradient-to-r from-primary to-teal-600 rounded-3xl p-8 mb-12 text-white text-center shadow-xl relative overflow-hidden" data-aos="zoom-in">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <svg className="h-10 w-10 text-yellow-300 mr-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <h3 className="font-merriweather text-3xl md:text-4xl font-bold tracking-wider">MEGA FLASH SALE</h3>
            </div>
            <p className="font-lora text-xl mb-8 opacity-90 text-white">Up to 50% off selected destinations</p>
            
            {/* Timer */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-8">
              <CountdownBox value={timeLeft.days} label="Days" />
              <CountdownBox value={timeLeft.hours} label="Hours" />
              <CountdownBox value={timeLeft.minutes} label="Mins" />
              <CountdownBox value={timeLeft.seconds} label="Secs" />
            </div>

            <button className="bg-white text-primary hover:bg-secondary transition-colors font-bold px-10 py-4 rounded-xl shadow-lg transform hover:scale-105 active:scale-95 duration-200">
              Shop Flash Deals Now
            </button>
          </div>
        </div>

        {/* Deals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <DealCard 
            image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80"
            tag="Flash Sale"
            tagBg="bg-red-500"
            timeLeft="18h 24m"
            discount="40% OFF"
            title="Maldives Paradise"
            rating="4.9"
            duration="7 Days"
            reviews="234"
            oldPrice="3,499"
            newPrice="2,099"
            aos="fade-up-right"
          />
          <DealCard 
            image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
            tag="Early Bird"
            tagBg="bg-blue-500"
            timeLeft="3d 12h"
            discount="30% OFF"
            title="European Grand Tour"
            rating="4.8"
            duration="14 Days"
            reviews="189"
            oldPrice="4,299"
            newPrice="3,009"
            aos="fade-up-left"
          />
        </div>

        {/* Promo Code Section - Using Dark Theme for contrast */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gray-900 rounded-2xl p-10 text-white shadow-2xl border-b-4 border-primary">
            <h3 className="font-merriweather text-3xl font-bold mb-4 italic">
              Have a Promo Code?
            </h3>
            <p className="font-lora text-lg mb-8 opacity-80 max-w-lg mx-auto">
              Enter your secret code below to unlock exclusive travel savings and extra bonuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Ex: WANDER2026" 
                className="flex-1 px-5 py-4 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/40">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-components for cleaner code
const CountdownBox = ({ value, label }) => (
  <div className="text-center">
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 min-w-[70px] md:min-w-[80px] border border-white/30">
      <div className="font-merriweather text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-90">{label}</div>
    </div>
  </div>
);

const DealCard = ({ image, tag, tagBg, timeLeft, discount, title, rating, duration, reviews, oldPrice, newPrice, aos }) => (
  <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group shadow-md" data-aos={aos}>
    <div className="relative">
      <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4">
        <span className={`${tagBg} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase`}>{tag}</span>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
        <svg className="h-4 w-4 text-primary mr-1 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 6v6l4 2" strokeWidth="2" />
        </svg>
        <span className="text-xs font-bold text-gray-800">{timeLeft}</span>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
          {discount}
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-merriweather text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex items-center bg-secondary px-2 py-1 rounded-lg">
          <svg className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span className="text-sm font-bold text-primary">{rating}</span>
        </div>
      </div>
      
      <div className="flex items-center text-gray-500 mb-6 text-sm font-lora">
        <span className="flex items-center mr-4">
          <svg className="h-4 w-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {duration}
        </span>
        <span className="flex items-center">
          <svg className="h-4 w-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          {reviews} reviews
        </span>
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-gray-400 line-through text-sm">${oldPrice}</span>
          <div className="flex items-baseline">
            <span className="font-merriweather text-3xl font-black text-primary">${newPrice}</span>
            <span className="text-gray-500 text-xs ml-1 font-lora">/ person</span>
          </div>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white p-3 rounded-xl transition-all shadow-md group-hover:rotate-12">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default LimitedOffers;