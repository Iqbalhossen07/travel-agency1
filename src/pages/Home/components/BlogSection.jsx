import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    category: "Destinations",
    categoryColor: "bg-primary",
    date: "August 21, 2025",
    title: "A Backpacker's Guide to The Dolomites, Italy",
    description: "Discover the breathtaking beauty of the Italian Dolomites. This guide covers the best hiking trails, hidden lakes, and budget-friendly stays.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jane Doe",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 2,
    category: "Food & Travel",
    categoryColor: "bg-orange-500",
    date: "August 19, 2025",
    title: "10 Must-Try Street Foods When Visiting Bangkok",
    description: "Bangkok is a paradise for food lovers. From Pad Thai to Mango Sticky Rice, here's a list of street foods you absolutely cannot miss.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 3,
    category: "Travel Tips",
    categoryColor: "bg-blue-500",
    date: "August 15, 2025",
    title: "How to Pack Light for a 2-Week Solo Adventure",
    description: "Packing light is an art. Learn how to fit everything you need for a two-week trip into a single carry-on, saving you time and money.",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Emily White",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
    }
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-merriweather text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Travel Stories & Tips
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-lora text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Get inspired by real travel experiences, expert tips, and insider knowledge from our community of adventurers.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-5 left-5 ${post.categoryColor} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm font-medium mb-3">{post.date}</p>
                <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="font-lora text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Author & Read More */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                    <span className="font-semibold text-sm text-gray-800">{post.author.name}</span>
                  </div>
                  <Link to={`/blog-details/${post.id}`}  className="text-primary font-bold text-sm hover:translate-x-1 transition-transform inline-flex items-center">
                    Read More 
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-16">
          <Link 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            to="/blog"
            className="inline-flex items-center px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg shadow-primary/10"
          >
            View All Stories
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;