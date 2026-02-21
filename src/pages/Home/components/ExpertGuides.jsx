import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ExpertGuides = () => {
  const guides = [
    {
      name: "Jenny Wilson",
      role: "European Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Jacob Jones",
      role: "Asian Adventure Expert",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Jane Cooper",
      role: "Safari & Wildlife Guide",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Guy Hawkins",
      role: "Americas & Hiking Pro",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Sarah Miller",
      role: "Cultural Tours Lead",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-cyan-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="font-lora text-primary font-bold tracking-widest uppercase text-sm mb-3">Meet with Guide</p>
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-gray-900">
            Meet With Our Expert Guides
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <div data-aos="zoom-in-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {guides.map((guide, index) => (
              <SwiperSlide key={index} className="pt-16">
                <div className="bg-white text-center rounded-3xl shadow-xl shadow-cyan-900/5 p-8 border border-gray-50 relative group hover:border-primary/30 transition-all duration-300">
                  
                  {/* Avatar */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                      <img 
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl relative z-10" 
                        src={guide.image} 
                        alt={guide.name} 
                      />
                    </div>
                  </div>

                  <h3 className="font-merriweather text-xl font-bold mt-14 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {guide.name}
                  </h3>
                  <p className="font-lora text-sm text-gray-500 mb-6 font-medium uppercase tracking-tighter">
                    {guide.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <SocialIcon href="#" type="fb" />
                    <SocialIcon href="#" type="tw" />
                    <SocialIcon href="#" type="insta" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex justify-center gap-2 mt-4"></div>
        </div>

        {/* "View All Member" Button - Moved Outside Swiper */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to={'/team'} className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center">
            View All Members
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx="true">{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #008080;
          opacity: 0.2;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 6px;
          opacity: 1;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
};

// Social Icon Component - Cleaned Up
const SocialIcon = ({ href, type }) => {
  const icons = {
    fb: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />,
    tw: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />,
    insta: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.148 2 12.315 2zm-1.002 6.363a4.743 4.743 0 100 9.487 4.743 4.743 0 000-9.487zm0 1.44a3.302 3.302 0 100 6.605 3.302 3.302 0 000-6.605z" clipRule="evenodd" />
  };

  return (
    <a href={href} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icons[type]}</svg>
    </a>
  );
};

export default ExpertGuides;