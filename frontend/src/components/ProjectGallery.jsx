import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const ProjectGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const galleryImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop'
  ];
  
  const ChevronLeftIcon = Icons?.['ChevronLeft'] || Icons.HelpCircle;
  const ChevronRightIcon = Icons?.['ChevronRight'] || Icons.HelpCircle;
  const CameraIcon = Icons?.['Camera'] || Icons.HelpCircle;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="relative h-96 md:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
        <div className="px-6">
          <div className="flex items-center justify-center mb-4">
            <CameraIcon size={32} className="mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">Our Projects</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Showcasing our latest work and creative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevImage}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              onClick={nextImage}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;