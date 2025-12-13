import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const CoreValues = () => {
  const sectionRef = useRef(null);
  
  const values = [
    {
      icon: 'Star',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards and exceeding expectations.'
    },
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with clients to achieve shared goals.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'We embrace creativity and innovation to deliver cutting-edge solutions.'
    },
    {
      icon: 'Shield',
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    },
    {
      icon: 'Heart',
      title: 'Passion',
      description: 'We are passionate about technology and committed to making a difference.'
    },
    {
      icon: 'TrendingUp',
      title: 'Growth',
      description: 'We continuously learn and evolve to stay ahead in the digital landscape.'
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
            Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our values guide everything we do and shape our company culture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const ValueIcon = Icons?.[value.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <ValueIcon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;