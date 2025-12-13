import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const WhatsAppChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const MessageCircleIcon = Icons?.['MessageCircle'] || Icons.HelpCircle;
  const XIcon = Icons?.['X'] || Icons.HelpCircle;
  const SendIcon = Icons?.['Send'] || Icons.HelpCircle;
  const PhoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const VideoIcon = Icons?.['Video'] || Icons.HelpCircle;

  const phoneNumber = '+1234567890';
  const defaultMessage = 'Hello, I would like to know more about your services.';

  useEffect(() => {
    setMessage(defaultMessage);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className="fixed z-50 cursor-move"
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
      >
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircleIcon size={32} />
        </button>
      </div>
      
      {/* Chat Window */}
      {isChatOpen && (
        <div
          className="fixed z-50 bg-white rounded-xl shadow-2xl w-80 max-w-sm"
          style={{
            left: Math.min(position.x, window.innerWidth - 320),
            top: position.y - 400,
            bottom: 'auto'
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircleIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">PremiumCo Support</h3>
                  <p className="text-green-100 text-sm">Typically replies within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <XIcon size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <MessageCircleIcon size={16} className="text-green-600" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-700">
                  Hello! 👋 How can we help you today? Feel free to ask any questions about our services.
                </p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>
            
            <div className="flex items-start justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">{message}</p>
                <p className="text-xs text-blue-100 mt-1">Just now</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2 mb-3">
              <button
                onClick={() => setMessage('I need help with web development')}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                Web Development
              </button>
              <button
                onClick={() => setMessage('Tell me about mobile app development')}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                Mobile Apps
              </button>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                onClick={handleWhatsAppClick}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <SendIcon size={18} />
              </button>
            </div>
            
            <div className="flex space-x-2 mt-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <PhoneIcon size={18} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <VideoIcon size={18} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Icons?.Paperclip || Icons.HelpCircle} size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;