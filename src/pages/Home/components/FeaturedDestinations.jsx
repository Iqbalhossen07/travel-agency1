import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    location: 'Greece',
    price: '$2,499',
    rating: '4.9',
    reviews: '2,847',
    duration: '7 days',
    groupSize: '2-12 people',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience the magic of Santorini with its iconic blue-domed churches, stunning sunsets, and crystal-clear waters.',
    tags: ['Sunset Views', 'Wine Tasting'],
    delay: '100'
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    location: 'Japan',
    price: '$3,299',
    rating: '4.8',
    reviews: '1,923',
    duration: '10 days',
    groupSize: '2-8 people',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Immerse yourself in ancient Japanese culture with temple visits, traditional tea ceremonies, and serene gardens.',
    tags: ['Temple Tours', 'Cherry Blossoms'],
    delay: '200'
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    location: 'Peru',
    price: '$1,899',
    rating: '4.9',
    reviews: '3,156',
    duration: '8 days',
    groupSize: '4-16 people',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Trek the legendary Inca Trail and discover the breathtaking ancient citadel of Machu Picchu.',
    tags: ['Inca Trail', 'Ancient Ruins'],
    delay: '300'
  },
  {
    id: 4,
    name: 'Safari, Kenya',
    location: 'Kenya',
    price: '$4,299',
    rating: '4.7',
    reviews: '1,654',
    duration: '12 days',
    groupSize: '2-10 people',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Witness the incredible wildlife of Kenya with game drives, cultural encounters, and luxury safari lodges.',
    tags: ['Big Five Safari', 'Masai Culture'],
    delay: '100'
  },
  {
    id: 5,
    name: 'Northern Lights, Iceland',
    location: 'Iceland',
    price: '$2,799',
    rating: '4.8',
    reviews: '2,341',
    duration: '6 days',
    groupSize: '2-14 people',
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Chase the magical Northern Lights while exploring Iceland\'s dramatic landscapes and geothermal wonders.',
    tags: ['Aurora Borealis', 'Blue Lagoon'],
    delay: '200'
  },
  {
    id: 6,
    name: 'Bali, Indonesia',
    location: 'Indonesia',
    price: '$1,699',
    rating: '4.6',
    reviews: '4,128',
    duration: '9 days',
    groupSize: '2-12 people',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Discover the spiritual heart of Indonesia with temple visits, rice terrace walks, and pristine beaches.',
    tags: ['Rice Terraces', 'Temple Tours'],
    delay: '300'
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl font-lora text-gray-600 max-w-3xl mx-auto">
            Discover our most popular destinations handpicked by travel experts for unforgettable experiences
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer" 
              data-aos="fade-up" 
              data-aos-delay={dest.delay}
            >
              {/* Image & Price Tag */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <svg className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-sm font-lora font-medium">{dest.rating}</span>
                </div>
                {/* primary color used here */}
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-lora font-medium shadow-md">
                  {dest.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-merriweather font-bold text-gray-900 mb-1 leading-tight">
                      {dest.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm font-lora">
                      <svg className="h-4 w-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {dest.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 font-lora text-sm mb-4 line-clamp-2">
                  {dest.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-lora">
                      {tag}
                    </span>
                  ))}
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-lora">+1 more</span>
                </div>

                {/* Tour Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 font-lora mb-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {dest.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                    {dest.groupSize}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-lora italic">
                    {dest.reviews} reviews
                  </div>
                  <Link to={`/tours/${dest.id}`} className="bg-primary hover:opacity-90 text-white px-5 py-2 rounded-lg text-sm font-lora font-medium transition-all duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to={'/tours'} className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center">
            View All Packages
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;