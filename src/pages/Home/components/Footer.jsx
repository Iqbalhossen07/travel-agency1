import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <span className="font-merriweather text-2xl font-bold tracking-tight">Wanderlust</span>
            </div>
            <p className="font-lora text-gray-400 leading-relaxed text-base">
              Creating unforgettable travel experiences with premium service and attention to detail. 
              Your journey starts here.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5">
              <SocialLink path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              <SocialLink path="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              <SocialLink path="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Tour Packages', 'Special Offers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-lora text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Contact Us</h3>
            <div className="space-y-4">
              <ContactItem 
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>}
                text="+1 (555) 123-4567"
              />
              <ContactItem 
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>}
                text="info@wanderlust.com"
              />
              <ContactItem 
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>}
                text="123 Travel Street, NY 10001"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Stay Updated</h3>
            <p className="font-lora text-gray-400 mb-6">Subscribe for travel tips and exclusive offers</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="mt-3 w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="font-lora text-gray-500 text-sm">
            © 2024 Wanderlust Travels. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="font-lora text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="font-lora text-gray-500 hover:text-white text-sm transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ path }) => (
  <a href="#" className="p-3 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-primary transition-all duration-300">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={path}/>
    </svg>
  </a>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start space-x-4 group">
    <div className="mt-1 p-2 bg-gray-900 rounded-md group-hover:bg-primary transition-colors">
      <svg className="h-4 w-4 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <span className="font-lora text-gray-400 group-hover:text-gray-200 transition-colors py-1">{text}</span>
  </div>
);

export default Footer;