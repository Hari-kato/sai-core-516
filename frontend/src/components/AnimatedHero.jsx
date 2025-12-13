import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  
  const SparklesIcon = Icons?.['Sparkles'] || Icons.HelpCircle;
  const ArrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;
  const PlayIcon = Icons?.['Play'] || Icons.HelpCircle;

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width * 20,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 8}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animation: `float ${2 + i * 0.5}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>
      
      <div className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="flex items-center justify-center mb-6 animate-bounce">
          <SparklesIcon className="mr-3" size={32} />
          <span className="text-lg font-semibold">Welcome to PremiumCo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Transform Your Vision
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
          We create stunning digital experiences that captivate audiences and drive results. 
          Let's build something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Get Started
            <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
            <PlayIcon className="mr-2" size={20} />
            Watch Demo
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm text-gray-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm text-gray-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm text-gray-200">Team Members</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default AnimatedHero;