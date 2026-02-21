import React from 'react';
import TeamCard from './components/TeamCard';
import TeamHero from './components/TeamHero';

const TEAM_DATA = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Travel Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Tour Guide Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop"
  }
];

const Team = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Simple Header */}
   <TeamHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_DATA.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-primary/5 text-center">
        <h2 className="font-merriweather text-3xl font-bold mb-6">Want to Join Our Team?</h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all">
          View Openings
        </button>
      </section>
    </main>
  );
};

export default Team;