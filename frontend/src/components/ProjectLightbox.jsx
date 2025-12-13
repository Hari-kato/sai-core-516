import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const ProjectLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const lightboxImages = [
    {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      title: 'Health & Fitness App',
      description: 'Comprehensive fitness tracking app with personalized workouts'
    },
    {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
      title: 'Real Estate Portal',
      description: 'Property listing platform with virtual tour capabilities'
    }
  ];
  
  const XIcon = Icons?.['X'] || Icons.HelpCircle;
  const ChevronLeftIcon = Icons?.['ChevronLeft'] || Icons.HelpCircle;
  const ChevronRightIcon = Icons?.['ChevronRight'] || Icons.HelpCircle;
  const DownloadIcon = Icons?.['Download'] || Icons.HelpCircle;
  const ShareIcon = Icons?.['Share2'] || Icons.HelpCircle;

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        .lightbox-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .lightbox-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <XIcon size={24} className="text-white" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeftIcon size={24} className="text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRightIcon size={24} className="text-white" />
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={lightboxImages[currentImage].src}
                  alt={lightboxImages[currentImage].title}
                  className="w-full h-96 md:h-[600px] object-cover"
                />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-center space-x-2">
                    {lightboxImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImage ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{lightboxImages[currentImage].title}</h3>
                <p className="text-gray-600 mb-4">{lightboxImages[currentImage].description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <DownloadIcon size={18} className="mr-2" />
                      Download
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                      <ShareIcon size={18} className="mr-2" />
                      Share
                    </button>
                  </div>
                  
                  <span className="text-sm text-gray-500">
                    {currentImage + 1} / {lightboxImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectLightbox;