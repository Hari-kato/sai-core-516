import React, { useState } from 'react';
import * as Icons from 'lucide-react';

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: 'Web Development',
      description: 'We create stunning, high-performance websites that drive results. Our team specializes in modern web technologies and best practices.',
      detailedFeatures: [
        'Custom website design and development',
        'E-commerce solutions with payment integration',
        'Content management systems',
        'Progressive web applications',
        'Website maintenance and support'
      ],
      techStack: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      deliverables: ['Responsive Design', 'SEO Optimization', 'Performance Audit', 'Documentation']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      detailedFeatures: [
        'iOS and Android app development',
        'Cross-platform solutions',
        'App store optimization',
        'Push notification systems',
        'In-app analytics'
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      deliverables: ['App Store Submission', 'User Testing', 'Performance Report', 'Source Code']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create memorable experiences.',
      detailedFeatures: [
        'User research and analysis',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design system creation'
      ],
      techStack: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle'],
      deliverables: ['Design Mockups', 'Interactive Prototype', 'Style Guide', 'Assets']
    }
  ];
  
  const CheckCircleIcon = Icons?.['CheckCircle'] || Icons.HelpCircle;
  const CodeIcon = Icons?.['Code'] || Icons.HelpCircle;
  const PackageIcon = Icons?.['Package'] || Icons.HelpCircle;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Service Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deeper into our core services and discover what we can do for you
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{services[activeService].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{services[activeService].description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <CheckCircleIcon className="mr-2 text-green-500" size={20} />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {services[activeService].detailedFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <CodeIcon className="mr-2 text-blue-500" size={20} />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <PackageIcon className="mr-2 text-purple-500" size={20} />
                  Deliverables
                </h4>
                <div className="space-y-2">
                  {services[activeService].deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;