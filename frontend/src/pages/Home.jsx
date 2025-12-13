import React from 'react';
import Header from '../components/Header';
import AnimatedHero from '../components/AnimatedHero';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <AnimatedHero />
        <AboutSection />
        <ServicesOverview />
        <FeaturedProjects />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;