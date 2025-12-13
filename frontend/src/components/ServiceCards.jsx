import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const ServiceCards = () => {
  const sectionRef = useRef(null);
  
  const services = [
    {
      icon: 'Code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'App Store Optimization', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto Scaling'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'Shield',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring'],
      color: 'from-gray-500 to-slate-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = Icons?.[service.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ServiceIcon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center group-hover:text-gray-700 transition-colors">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className={`w-full py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;