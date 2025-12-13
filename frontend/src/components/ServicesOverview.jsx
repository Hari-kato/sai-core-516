import React from 'react';
import * as Icons from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: 'Code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design']
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: 'TrendingUp',
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = Icons?.[service.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <ServiceIcon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;