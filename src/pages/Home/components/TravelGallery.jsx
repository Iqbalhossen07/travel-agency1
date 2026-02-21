import React from 'react';
// Swiper React components এবং styles ইমপোর্ট করছি
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const galleryData = [
  {
    id: 1,
    title: 'Sajek Valley, Bangladesh',
    image: 'https://images.unsplash.com/photo-1448518184296-a22facb4446f?fm=jpg&q=60&w=3000'
  },
  {
    id: 2,
    title: 'Eiffel Tower, France',
    image: 'https://images.unsplash.com/photo-1510796858853-ba1a25c4e269?fm=jpg&q=60&w=3000'
  },
  {
    id: 3,
    title: 'Saint Martin, Bangladesh',
    image: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?fm=jpg&q=60&w=3000'
  },
  {
    id: 4,
    title: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1502090154121-caf9968dcd04?fm=jpg&q=60&w=3000'
  },
  {
    id: 5,
    title: 'Swiss Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1559305255-9b8c67da6675?fm=jpg&q=60&w=3000'
  }
];

const TravelGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Travel Gallery
          </h2>
          <p className="font-lora text-xl text-gray-600 max-w-3xl mx-auto">
            Some extraordinary moments captured by our travelers, which will inspire you to explore.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-slider !pb-12"
          >
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
               <Link to={'/gallery'}>

                <div className="group relative rounded-2xl overflow-hidden h-96 cursor-grab active:cursor-grabbing">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-merriweather text-xl md:text-2xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
               </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TravelGallery;