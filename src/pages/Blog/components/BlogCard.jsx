import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4">
          <span className={`${post.categoryColor || 'bg-primary/90'} text-white px-3 py-1 rounded-full text-xs font-bold font-lora`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col">
        <p className="font-lora text-sm text-gray-500 mb-2">{post.date}</p>
        <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-3 flex-grow">
          <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="font-lora text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Footer Section */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={post.authorImage} 
              alt={post.authorName} 
              className="w-10 h-10 rounded-full object-cover" 
            />
            <div>
              <p className="font-lora font-semibold text-sm text-gray-800">{post.authorName}</p>
            </div>
          </div>
          <Link 
            to={`/blog-details/${post.id}`} 
            className="font-lora text-sm font-semibold text-primary hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;