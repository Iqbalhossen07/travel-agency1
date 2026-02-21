import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  const infoData = [
    {
      id: 1,
      title: "Our Office",
      detail: "Narsingdi, Dhaka, Bangladesh",
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      link: "#",
      delay: 0.1
    },
    {
      id: 2,
      title: "Email Us",
      detail: "info@wanderlust.com",
      icon: <FaEnvelope className="w-8 h-8" />,
      link: "mailto:info@wanderlust.com",
      delay: 0.2
    },
    {
      id: 3,
      title: "Call Us",
      detail: "+880 1234-567890",
      icon: <FaPhoneAlt className="w-8 h-8" />,
      link: "tel:+8801234567890",
      delay: 0.3
    },
    {
      id: 4,
      title: "Office Hours",
      detail: "Mon - Fri: 9am to 6pm",
      icon: <FaClock className="w-8 h-8" />,
      link: "#",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 text-center group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              {/* Icon Container */}
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              {item.link !== "#" ? (
                <a 
                  href={item.link} 
                  className="font-lora text-gray-600 hover:text-primary transition-colors break-words"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="font-lora text-gray-600">
                  {item.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;