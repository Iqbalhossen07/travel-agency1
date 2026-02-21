import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "European Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Jacob Jones",
    role: "Asian Adventure Expert",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Jane Cooper",
    role: "Safari & Wildlife Guide",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Guy Hawkins",
    role: "Americas & Hiking Pro",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-primary/5 via-cyan-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-lora text-primary font-bold tracking-widest uppercase mb-3">Meet The Team</p>
          <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-gray-900">
            Architects of Your Adventure
          </h2>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="pt-16">
                <div className="bg-white text-center rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100 relative group hover:border-primary/30 transition-all duration-300">
                  {/* Image Profile */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <img 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" 
                        src={member.image} 
                        alt={member.name} 
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-16">
                    <h3 className="font-merriweather text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="font-lora text-primary font-medium mb-6 uppercase text-xs tracking-wider italic">
                      {member.role}
                    </p>
                    
                    {/* Social Icons (Placeholder) */}
                    <div className="flex justify-center space-x-4">
                      {['facebook', 'twitter', 'instagram'].map((social) => (
                        <div key={social} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white cursor-pointer transition-all">
                           <i className={`fab fa-${social} text-sm`}></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #0ea5e9 !important; /* আপনার প্রাইমারি কালার দিন */
          width: 20px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;