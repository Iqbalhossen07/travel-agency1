import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './pages/Home/components/Footer';
import About from './pages/About/About';
import Tours from './pages/Tours/Tours';
import TourDetails from './pages/TourDetails/TourDetails';
import Gallery from './pages/Gallery/Gallery';
import Team from './pages/Team/Team';
import Destinations from './pages/Destinations/Destination';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar সব পেজেই থাকবে তাই Routes এর বাইরে */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        {/* ডাইনামিক আইডি রাউট */}
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer সব পেজেই থাকবে তাই Routes এর বাইরে */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;