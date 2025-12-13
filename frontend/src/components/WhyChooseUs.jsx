import React from 'react';
import * as Icons from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'Zap',
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality.'
    },
    {
      icon: 'Award',
      title: 'Expert Team',
      description: 'Our team consists of industry experts with years of experience.'
    },
    {
      icon: 'Heart',
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in everything we do.'
    },
    {
      icon: 'Shield',
      title: 'Secure & Reliable',
      description: 'We build secure and reliable solutions that scale.'
    },
    {
      icon: 'DollarSign',
      title: 'Competitive Pricing',
      description: 'High-quality services at competitive and transparent prices.'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose PremiumCo?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to excellence and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const ReasonIcon = Icons?.[reason.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <ReasonIcon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;