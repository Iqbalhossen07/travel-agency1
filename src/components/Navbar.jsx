import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // মেনু আইটেমগুলোর লিস্ট
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Destination', path: '/destination' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Active এবং Normal স্টাইল সেট করার ফাংশন
  const navLinkStyles = ({ isActive }) => {
    return `text-sm font-medium transition-colors pb-1 border-b-2 ${
      isActive 
        ? 'text-primary border-primary' // Active হলে এই স্টাইল
        : 'text-white border-transparent hover:text-primary hover:border-primary' // না হলে এই স্টাইল
    }`;
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              style={{ width: '150px', filter: 'brightness(0) invert(1)' }} 
              src="/logo.png" 
              alt="Logo" 
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                className={navLinkStyles}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-bold px-7 py-3 rounded-md transition-all">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-xl border-t border-gray-100 animate-fadeIn">
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMobileMenuOpen(false)} // মেনুতে ক্লিক করলে ড্রপডাউন বন্ধ হবে
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md font-medium ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact" className="block w-full text-center bg-primary text-white py-3 rounded-md mt-4 shadow-lg shadow-primary/20">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;