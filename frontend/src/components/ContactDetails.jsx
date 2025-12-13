import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const ContactDetails = () => {
  const sectionRef = useRef(null);
  
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Visit Us',
      details: ['123 Business Avenue', 'Suite 100', 'New York, NY 10001'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: ['hello@premiumco.com', 'support@premiumco.com'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  const socialLinks = [
    { icon: 'Twitter', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: 'Linkedin', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: 'Github', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: 'Instagram', label: 'Instagram', color: 'hover:bg-pink-500' }
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
    <section ref={sectionRef} className="py-20 px-6 bg-gray-50 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Information
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach us. We're here to help and answer any questions you might have.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const InfoIcon = Icons?.[info.icon] || Icons.HelpCircle;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4`}>
                  <InfoIcon size={32} className="text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{info.title}</h3>
                
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Follow Us</h3>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => {
              const SocialIcon = Icons?.[social.icon] || Icons.HelpCircle;
              
              return (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  title={social.label}
                >
                  <SocialIcon size={20} className="text-gray-700" />
                </button>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Prefer instant messaging?</p>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center mx-auto">
              {Icons?.MessageCircle ? <Icons.MessageCircle size={20} className="mr-2" /> : <Icons.HelpCircle size={20} className="mr-2" />}
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;