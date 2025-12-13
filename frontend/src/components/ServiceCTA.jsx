import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  const PhoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const MailIcon = Icons?.['Mail'] || Icons.HelpCircle;
  const CalendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something Amazing Together
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Ready to transform your business with our digital solutions? Get in touch with our experts today.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <PhoneIcon className="mx-auto mb-4 text-white" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <a href="tel:+1234567890" className="text-blue-100 hover:text-white transition-colors">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <MailIcon className="mx-auto mb-4 text-white" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <a href="mailto:hello@premiumco.com" className="text-blue-100 hover:text-white transition-colors">
              hello@premiumco.com
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <CalendarIcon className="mx-auto mb-4 text-white" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Schedule Call</h3>
            <button className="text-blue-100 hover:text-white transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
          >
            Get Free Quote
          </Link>
          
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Download Portfolio
          </button>
        </div>
        
        <div className="mt-8 text-blue-100">
          <p className="mb-2">Trusted by 500+ companies worldwide</p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>✓ Free Consultation</span>
            <span>✓ No Hidden Costs</span>
            <span>✓ 30-Day Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;