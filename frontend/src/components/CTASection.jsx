import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const MailIcon = Icons?.['Mail'] || Icons.HelpCircle;
  const PhoneIcon = Icons?.['Phone'] || Icons.HelpCircle;

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life. Contact us today for a free consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
          >
            Get Started Today
          </Link>
          
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Schedule a Call
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
          <a href="mailto:hello@premiumco.com" className="flex items-center hover:text-white transition-colors">
            <MailIcon size={20} className="mr-2" />
            hello@premiumco.com
          </a>
          
          <a href="tel:+1234567890" className="flex items-center hover:text-white transition-colors">
            <PhoneIcon size={20} className="mr-2" />
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;