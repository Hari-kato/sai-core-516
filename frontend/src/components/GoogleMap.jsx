import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const sectionRef = useRef(null);
  
  const MapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;
  const NavigationIcon = Icons?.['Navigation'] || Icons.HelpCircle;
  const ExternalLinkIcon = Icons?.['ExternalLink'] || Icons.HelpCircle;

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

  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=123+Business+Avenue,+New+York,+NY+10001', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office for a face-to-face consultation. We'd love to meet you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative h-96 lg:h-full min-h-96">
                <iframe
                  ref={mapRef}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.0036936845943!3d40.71277597933058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c4b0d05%3A0x8c6e6c7d4c4c4c4c!2s123%20Business%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PremiumCo Location"
                  className="absolute inset-0"
                />
                
                <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="text-red-500 mr-2" size={20} />
                    <span className="font-semibold text-gray-800">Our Location</span>
                  </div>
                  <p className="text-sm text-gray-600">123 Business Avenue</p>
                  <p className="text-sm text-gray-600">New York, NY 10001</p>
                </div>
                
                <button
                  onClick={handleGetDirections}
                  className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center shadow-lg"
                >
                  <NavigationIcon size={18} className="mr-2" />
                  Get Directions
                  <ExternalLinkIcon size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icons?.Phone || Icons.HelpCircle} className="text-blue-500 mr-3" size={18} />
                  <span className="text-gray-600">+1 (234) 567-890</span>
                </div>
                <div className="flex items-center">
                  <Icons?.Mail || Icons.HelpCircle} className="text-blue-500 mr-3" size={18} />
                  <span className="text-gray-600">hello@premiumco.com</span>
                </div>
                <div className="flex items-center">
                  <Icons?.MapPin || Icons.HelpCircle} className="text-blue-500 mr-3" size={18} />
                  <span className="text-gray-600">123 Business Ave, NY 10001</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Our team is ready to assist you with any questions or concerns.
              </p>
              <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;