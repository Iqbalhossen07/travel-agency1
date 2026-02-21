import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Navbar from '../../../components/Navbar';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    { id: 1, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070", alt: "Mountain" },
    { id: 2, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070", alt: "Lake" },
    { id: 3, img: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070", alt: "Ruins" },
    { id: 4, img: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1965", alt: "Scooter" }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      
      {/* Hero Background Slider with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000} // স্লাইড পরিবর্তনের গতি
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src={slide.img} 
                alt={slide.alt} 
                className="w-full h-full object-cover animate-ken-burns" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Header/Navbar */}
      {/* <Navbar /> */}

      {/* Hero Content - Pixel Perfect Spacing */}
      <div className="relative z-10 flex-grow flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
        <div data-aos="fade-up">
          <h1 className="font-merriweather text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Your Next <span className="text-primary">Adventure</span> Awaits
          </h1>
          <p className="mt-6 font-lora text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Explore the world's most beautiful destinations with our expertly crafted tour packages. We are here to make every moment unforgettable.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a href="/tours" className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Explore Tours
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/about" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 font-bold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;