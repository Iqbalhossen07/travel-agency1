import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaChevronDown } from 'react-icons/fa';

const TourDetailsBody = () => {
  // গ্যালারির জন্য স্টেট
  const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1640964488903-9b85450f1b76?fm=jpg&q=60&w=3000");
  // অ্যাকর্ডিয়নের জন্য স্টেট
  const [activeDay, setActiveDay] = useState(1);

  const thumbnails = [
    "https://images.unsplash.com/photo-1640964488906-d20d66a97a2b?fm=jpg&q=60&w=3000",
    "https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?fm=jpg&q=60&w=3000",
    "https://images.unsplash.com/photo-1640964488906-d20d66a97a2b?fm=jpg&q=60&w=3000",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  ];

  const itineraryData = [
    { day: 1, title: "Arrival in Zurich", desc: "Arrive at Zurich Airport (ZRH), where our representative will greet you. Transfer to your hotel and enjoy a welcome dinner." },
    { day: 2, title: "Lucerne & Mount Pilatus", desc: "Explore the charming city of Lucerne, followed by a trip up Mount Pilatus on the world's steepest cogwheel railway." },
    { day: 3, title: "Adventure in Interlaken", desc: "Journey to Interlaken, the adventure capital. Choose from optional activities like paragliding or hiking." },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Gallery, Overview, Itinerary */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Image Gallery Section */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img 
                src={mainImage} 
                className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-lg object-cover mb-4 transition-all duration-500"
                alt="Main"
              />
              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    className={`cursor-pointer rounded-lg hover:opacity-80 transition-all border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setMainImage(img)}
                    alt={`Thumb ${idx}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* 2. Overview */}
            <div>
              <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4 border-l-4 border-primary pl-4">Tour Overview</h2>
              <p className="font-lora text-gray-600 leading-relaxed text-lg">
                Embark on a breathtaking 10-day journey through the heart of the Swiss Alps. This tour is designed for adventure lovers and nature enthusiasts...
              </p>
            </div>

            {/* 3. Itinerary (Accordion) */}
            <div>
              <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-4">
                {itineraryData.map((item) => (
                  <div key={item.day} className="border rounded-xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                      className="w-full text-left p-5 flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-merriweather font-bold text-lg text-gray-800">Day {item.day}: {item.title}</span>
                      <FaChevronDown className={`transition-transform duration-300 ${activeDay === item.day ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDay === item.day && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-5"
                        >
                          <p className="font-lora text-gray-600 pt-2 border-t border-gray-100">{item.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. What's Included */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-lora">
                    <FaCheckCircle className="text-green-500 mr-3 shrink-0" /> 9 nights accommodation
                  </li>
                  <li className="flex items-center text-gray-700 font-lora">
                    <FaCheckCircle className="text-green-500 mr-3 shrink-0" /> Expert local guide
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-500 font-lora">
                  <li className="flex items-center italic">
                    <FaTimesCircle className="text-red-400 mr-3 shrink-0" /> International airfare
                  </li>
                  <li className="flex items-center italic">
                    <FaTimesCircle className="text-red-400 mr-3 shrink-0" /> Travel insurance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 ring-1 ring-gray-900/5">
              <h3 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">Book This Tour</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                  <input type="date" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                  <input type="number" defaultValue="2" min="1" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div className="py-4 border-y border-gray-50 my-6">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-500 font-lora">Total Amount</span>
                    <span className="text-3xl font-bold text-primary font-merriweather">$5,998</span>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95">
                  Confirm Booking
                </button>
                <p className="text-center text-sm text-gray-500 font-lora">No hidden fees. Safe payment.</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetailsBody;