import React from 'react'
import Hero from './components/Hero'
import FeaturedDestinations from './components/FeaturedDestinations'
import AboutSection from './components/AboutSection'
import TravelGallery from './components/TravelGallery'
import LimitedOffers from './components/LimitedOffers'
import ExpertGuides from './components/ExpertGuides'
import StatsSection from './components/StatsSection'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

function Home() {
  return (
   <div>
      <Hero />
      <FeaturedDestinations />
      <AboutSection />
      <TravelGallery />
      <LimitedOffers />
      <ExpertGuides />
      <StatsSection />
      <Destinations />
      <Testimonials />
      <BlogSection />
    </div>
  )
}

export default Home