import React from 'react'
import TourHeader from './components/TourHeader';
import TourDetailsBody from './components/TourDetailsBody';

const TourDetails = () => {
  return (
    <main>
      <TourHeader 
        subtitle="Experience the magic of Santorini with its iconic blue-domed churches and stunning sunsets."
        bgImage="https://plus.unsplash.com/premium_photo-1701202021101-8e1cb3f3ca8d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TourDetailsBody />
    </main>
  );
};

export default TourDetails