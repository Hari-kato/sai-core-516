import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  
  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started with a small team of 3 developers in a garage.',
      icon: 'Rocket'
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 company.',
      icon: 'Award'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore.',
      icon: 'Globe'
    },
    {
      year: '2021',
      title: 'AI Innovation',
      description: 'Launched AI-powered solutions division.',
      icon: 'Brain'
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as top digital agency by industry peers.',
      icon: 'Crown'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate and expand globally.',
      icon: 'TrendingUp'
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

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={timelineRef} className="py-20 px-6 bg-gray-50 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of our growth and achievements over the years.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {timeline.map((item, index) => {
            const TimelineIcon = Icons?.[item.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="relative flex items-center mb-12 last:mb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <TimelineIcon className="text-blue-600 mr-3" size={24} />
                    <span className="text-lg font-bold text-blue-600">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;