import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Footer = () => {
  const TwitterIcon = Icons?.['Twitter'] || Icons.HelpCircle;
  const LinkedinIcon = Icons?.['Linkedin'] || Icons.HelpCircle;
  const GithubIcon = Icons?.['Github'] || Icons.HelpCircle;
  const InstagramIcon = Icons?.['Instagram'] || Icons.HelpCircle;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Marketing',
    'Consulting'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PremiumCo
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital reality. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <TwitterIcon className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <LinkedinIcon className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <GithubIcon className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <InstagramIcon className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Business Ave, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>Email: hello@premiumco.com</p>
              <p>Phone: +1 (234) 567-890</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PremiumCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;