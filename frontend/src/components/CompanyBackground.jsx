import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const CompanyBackground = () => {
  const sectionRef = useRef(null);
  
  const BuildingIcon = Icons?.['Building'] || Icons.HelpCircle;
  const CalendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;
  const GlobeIcon = Icons?.['Globe'] || Icons.HelpCircle;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, PremiumCo started as a small team of passionate developers with a vision 
              to transform the digital landscape. What began in a modest office has grown into a leading 
              digital agency serving clients worldwide.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey has been marked by continuous innovation, dedication to quality, and an 
              unwavering commitment to our clients' success. We've had the privilege of working with 
              startups, Fortune 500 companies, and everything in between.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <BuildingIcon className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-gray-800">2015</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <CalendarIcon className="mx-auto mb-2 text-purple-600" size={32} />
                <div className="text-2xl font-bold text-gray-800">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <GlobeIcon className="mx-auto mb-2 text-green-600" size={32} />
                <div className="text-2xl font-bold text-gray-800">25+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BuildingIcon size={64} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium">Building the Future Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackground;