import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TeamCard = ({ member }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
  >
    <div className="relative h-80 overflow-hidden">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      {/* Social Icons Overlay */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
          <motion.a 
            key={index}
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
    <div className="p-6 text-center">
      <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="font-lora text-primary font-medium text-sm uppercase tracking-widest">{member.role}</p>
    </div>
  </motion.div>
);

export default TeamCard;