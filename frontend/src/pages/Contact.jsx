import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import GoogleMap from '../components/GoogleMap';
import WhatsAppChat from '../components/WhatsAppChat';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <ContactForm />
        <ContactDetails />
        <GoogleMap />
        <WhatsAppChat />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;