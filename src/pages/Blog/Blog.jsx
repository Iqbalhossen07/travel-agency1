import React from 'react';
import BlogHero from './components/BlogHero';
import BlogCard from './components/BlogCard';

const BLOG_POSTS = [
  {
    id: 1,
    category: "Destinations",
    categoryColor: "bg-primary/90",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    date: "August 21, 2025",
    title: "A Backpacker's Guide to The Dolomites, Italy",
    description: "Discover the breathtaking beauty of the Italian Dolomites. This guide covers the best hiking trails, hidden lakes, and budget-friendly stays.",
    authorName: "Jane Doe",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100"
  },
  {
    id: 2,
    category: "Food & Travel",
    categoryColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
    date: "August 19, 2025",
    title: "10 Must-Try Street Foods When Visiting Bangkok",
    description: "Bangkok is a paradise for food lovers. From Pad Thai to Mango Sticky Rice, here's a list of street foods you absolutely cannot miss on your next trip.",
    authorName: "John Smith",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 3,
    category: "Travel Tips",
    categoryColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800",
    date: "August 15, 2025",
    title: "How to Pack Light for a 2-Week Solo Adventure",
    description: "Packing light is an art. Learn how to fit everything you need for a two-week trip into a single carry-on, saving you time and money.",
    authorName: "Emily White",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100"
  }
];

const Blog = () => {
  return (
    <main className="bg-gray-50">
      <BlogHero />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel Stories & Tips
            </h2>
            <p className="font-lora text-xl text-gray-600 max-w-3xl mx-auto">
              Get inspired by real travel experiences, expert tips, and insider knowledge from our community of adventurers.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;