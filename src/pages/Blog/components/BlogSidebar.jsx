import React from 'react';
import { FaSearch } from 'react-icons/fa';

const BlogSidebar = () => {
  return (
    <aside className="lg:col-span-1 space-y-8">
      {/* Search Widget */}
      <div className="bg-neutral-100 p-6 rounded-2xl">
        <h3 className="font-merriweather font-bold text-xl mb-4 text-neutral-900">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search blog..." 
            className="w-full border-neutral-200 rounded-lg py-2 pl-4 pr-10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500 hover:text-primary transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-neutral-100 p-6 rounded-2xl">
        <h3 className="font-merriweather font-bold text-xl mb-4 text-neutral-900">Categories</h3>
        <ul className="space-y-3 font-lora">
          {[
            { name: "Destinations", count: 8 },
            { name: "Travel Tips", count: 12 },
            { name: "Food & Travel", count: 5 }
          ].map((cat, index) => (
            <li key={index}>
              <a href="#" className="flex justify-between text-neutral-700 hover:text-primary transition-colors group">
                <span>{cat.name}</span> 
                <span className="text-neutral-400 group-hover:text-primary">({cat.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;