import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sheldon Jackson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=200",
    quote: "MediCare Plus has been a true partner in my health journey. The entire team—from the front desk to the doctors—goes above and beyond.",
  },
  {
    id: 2,
    name: "Jason Doe",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "I've never experienced such compassionate care. Everyone at MediCare Plus made me feel like a priority. They explained everything in detail.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    quote: "The online appointment system is a game-changer! It's so easy to use, and I love getting reminders on my phone. Very convenient.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Accountant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Accessing my medical records through the portal is secure and straightforward. Peace of mind knowing information is organized.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  
  // যেহেতু ২টা করে দেখাবো, তাই টোটাল স্টেপ হবে (মোট সংখ্যা / ২)
  const totalSteps = Math.ceil(testimonials.length / 2);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1 >= totalSteps ? 0 : prev + 1));
  }, [totalSteps]);

  const prevStep = () => {
    setIndex((prev) => (prev <= 0 ? totalSteps - 1 : prev - 1));
  };

  // অটোমেটিক স্লাইডার (৫ সেকেন্ড পর পর)
  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Hear from our happy patients
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-merriweather">
            What Our Patients Are Saying
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative group max-w-6xl mx-auto">
          <div className="overflow-hidden px-2">
            <motion.div 
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* গ্রুপ করে কার্ডগুলো সাজানো */}
              {Array.from({ length: totalSteps }).map((_, stepIdx) => (
                <div key={stepIdx} className="w-full flex flex-shrink-0">
                  {/* প্রতিটি গ্রুপে ২টি কার্ড (মোবাইলে ১টা করার জন্য md: চাইল্ড ব্যবহার করা হয়েছে) */}
                  <div className="w-full md:w-1/2 px-4">
                    <Card data={testimonials[stepIdx * 2]} />
                  </div>
                  <div className="w-full md:w-1/2 px-4 hidden md:block">
                    {testimonials[stepIdx * 2 + 1] && (
                      <Card data={testimonials[stepIdx * 2 + 1]} />
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevStep} className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all z-10 hidden lg:flex items-center justify-center border border-slate-100">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextStep} className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all z-10 hidden lg:flex items-center justify-center border border-slate-100">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === i ? 'w-10 bg-primary' : 'w-2.5 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// আলাদা কার্ড কম্পোনেন্ট (কোড ক্লিন রাখার জন্য)
const Card = ({ data }) => (
  <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 p-8 h-full flex flex-col relative border border-slate-50 hover:border-primary/20 transition-colors">
    <span className="absolute top-6 right-8 text-7xl text-slate-100 font-serif pointer-events-none">"</span>
    <blockquote className="text-lg text-slate-600 leading-relaxed font-lora italic mb-8 flex-grow relative z-10">
      "{data.quote}"
    </blockquote>
    <div className="flex items-center pt-6 border-t border-slate-50">
      <img className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50" src={data.image} alt={data.name} />
      <div className="ml-4">
        <p className="font-bold text-slate-900">{data.name}</p>
        <p className="text-sm text-slate-500 font-medium">{data.role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;