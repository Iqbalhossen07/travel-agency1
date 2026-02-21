import AboutBreadcrumb from './components/AboutBreadcrumb';
import AboutDetails from './components/AboutDetails';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import React, { useEffect } from 'react';
// অন্য কম্পোনেন্টগুলো এখানে আসবে...

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // পেজ লোড হওয়ার সাথে সাথে একদম উপরে নিয়ে যাবে
  }, []);
  return (
    <main>
      <AboutBreadcrumb />
      <AboutDetails />
      <TeamSection />
      <TimelineSection />
     
    </main>
  );
};

export default About;