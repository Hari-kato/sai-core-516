import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const VisionMission = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  
  const EyeIcon = Icons?.['Eye'] || Icons.HelpCircle;
  const TargetIcon = Icons?.['Target'] || Icons.HelpCircle;

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

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div
            ref={visionRef}
            className="bg-white rounded-xl p-8 shadow-lg opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <EyeIcon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              To be the leading digital transformation partner, empowering businesses worldwide 
              through innovative technology solutions that create lasting impact.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We envision a world where technology seamlessly integrates with business to drive 
              growth, efficiency, and success for organizations of all sizes.
            </p>
          </div>
          
          <div
            ref={missionRef}
            className="bg-white rounded-xl p-8 shadow-lg opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <TargetIcon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              To deliver exceptional digital solutions that transform businesses and create value 
              for our clients, employees, and communities.
            </p>
            
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Provide innovative and reliable technology solutions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Foster long-term partnerships with clients
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Cultivate a culture of continuous learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;