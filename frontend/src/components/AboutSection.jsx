import React from 'react';
import * as Icons from 'lucide-react';

const AboutSection = () => {
  const TargetIcon = Icons?.['Target'] || Icons.HelpCircle;
  const TrendingUpIcon = Icons?.['TrendingUp'] || Icons.HelpCircle;
  const UsersIcon = Icons?.['Users'] || Icons.HelpCircle;

  const stats = [
    { icon: TargetIcon, number: '500+', label: 'Projects Completed' },
    { icon: TrendingUpIcon, number: '98%', label: 'Client Satisfaction' },
    { icon: UsersIcon, number: '200+', label: 'Team Members' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About PremiumCo
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a leading digital agency specializing in creating exceptional online experiences. 
              Our team of experts combines creativity with cutting-edge technology to deliver results that exceed expectations.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience, we've helped businesses of all sizes transform their digital presence 
              and achieve their goals through innovative solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="mx-auto mb-2 text-blue-600" size={32} />
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TargetIcon size={48} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium">Your Success is Our Mission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;