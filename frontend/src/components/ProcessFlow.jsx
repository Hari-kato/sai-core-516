import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const ProcessFlow = () => {
  const sectionRef = useRef(null);
  
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We analyze your requirements and understand your business goals.',
      icon: 'Search',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Planning',
      description: 'We create a detailed project roadmap and technical specifications.',
      icon: 'FileText',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Design',
      description: 'Our designers create wireframes and visual designs for approval.',
      icon: 'Palette',
      color: 'from-green-500 to-teal-500'
    },
    {
      number: 4,
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient code.',
      icon: 'Code',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: 5,
      title: 'Testing',
      description: 'We thoroughly test the solution to ensure quality and performance.',
      icon: 'Bug',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: 6,
      title: 'Launch',
      description: 'We deploy the solution and provide ongoing support and maintenance.',
      icon: 'Rocket',
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

  const ArrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;

  return (
    <section ref={sectionRef} className="py-20 px-6 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to deliver exceptional results every time
          </p>
        </div>
        
        <div className="relative">
          {steps.map((step, index) => {
            const StepIcon = Icons?.[step.icon] || Icons.HelpCircle;
            
            return (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div
                  className="flex-1 flex items-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <StepIcon size={32} />
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mr-3`}>
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block mx-8">
                    <ArrowRightIcon className="text-gray-400" size={32} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Let's work together to bring your vision to life. Our proven process ensures success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>Proven Methodology</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>Transparent Communication</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;