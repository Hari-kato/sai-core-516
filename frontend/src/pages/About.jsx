import React from 'react';
import Header from '../components/Header';
import CompanyBackground from '../components/CompanyBackground';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import ExperienceTimeline from '../components/ExperienceTimeline';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <CompanyBackground />
        <VisionMission />
        <CoreValues />
        <ExperienceTimeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;