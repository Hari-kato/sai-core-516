import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const ProjectFilters = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid' },
    { id: 'web', label: 'Web Development', icon: 'Code' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' },
    { id: 'design', label: 'UI/UX Design', icon: 'Palette' },
    { id: 'branding', label: 'Branding', icon: 'Tag' }
  ];
  
  const GridIcon = Icons?.['Grid'] || Icons.HelpCircle;

  const handleFilterClick = (filterId) => {
    if (filterId !== activeFilter) {
      setIsAnimating(true);
      setActiveFilter(filterId);
      
      setTimeout(() => {
        setIsAnimating(false);
        if (onFilterChange) {
          onFilterChange(filterId);
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const filters = document.querySelector('.project-filters');
      if (filters) {
        const rect = filters.getBoundingClientRect();
        if (rect.top <= 0) {
          filters.classList.add('sticky', 'top-0', 'z-40', 'shadow-lg');
        } else {
          filters.classList.remove('sticky', 'top-0', 'z-40', 'shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 px-6 bg-white project-filters transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center text-gray-600 mr-4">
            <GridIcon size={20} className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          
          {filters.map((filter) => {
            const FilterIcon = Icons?.[filter.icon] || Icons.HelpCircle;
            
            return (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FilterIcon size={18} className="mr-2" />
                {filter.label}
              </button>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Showing results for: <span className="font-semibold text-blue-600">{filters.find(f => f.id === activeFilter)?.label}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;