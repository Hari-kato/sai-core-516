import React from 'react';
import Header from '../components/Header';
import ServiceCards from '../components/ServiceCards';
import ServiceDetails from '../components/ServiceDetails';
import ProcessFlow from '../components/ProcessFlow';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <ServiceCards />
        <ServiceDetails />
        <ProcessFlow />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;