import React, { useEffect } from 'react';
import ToursHero from './components/ToursHero';

import TourGrid from './components/TourGrid';
;

const Tours = () => {
  // পেজ লোড হলে একদম উপরে স্ক্রল হবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <ToursHero />

      <TourGrid />

    </main>
  );
};

export default Tours;