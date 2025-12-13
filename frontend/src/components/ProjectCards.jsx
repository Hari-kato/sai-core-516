import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const ProjectCards = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      tech: ['React', 'Node.js', 'MongoDB'],
      client: 'TechStore Inc.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'Comprehensive fitness tracking app with personalized workouts',
      tech: ['React Native', 'Firebase', 'Redux'],
      client: 'FitLife Pro',
      year: '2024'
    },
    {
      id: 3,
      title: 'Real Estate Portal',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Property listing platform with virtual tour capabilities',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      client: 'DreamHome Realty',
      year: '2023'
    },
    {
      id: 4,
      title: 'Banking Dashboard',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      description: 'Modern banking interface with advanced analytics',
      tech: ['Figma', 'Sketch', 'Principle'],
      client: 'SecureBank',
      year: '2023'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      description: 'On-demand food delivery with real-time tracking',
      tech: ['Flutter', 'Google Maps', 'Stripe'],
      client: 'QuickEats',
      year: '2024'
    },
    {
      id: 6,
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      description: 'Complete brand identity for a tech startup',
      tech: ['Illustrator', 'Photoshop', 'After Effects'],
      client: 'InnovateTech',
      year: '2023'
    }
  ]);
  
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const ExternalLinkIcon = Icons?.['ExternalLink'] || Icons.HelpCircle;
  const GithubIcon = Icons?.['Github'] || Icons.HelpCircle;
  const EyeIcon = Icons?.['Eye'] || Icons.HelpCircle;

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <ProjectFilters onFilterChange={handleFilterChange} />
      
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-4">
                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <EyeIcon size={20} className="text-gray-800" />
                        </button>
                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <ExternalLinkIcon size={20} className="text-gray-800" />
                        </button>
                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <GithubIcon size={20} className="text-gray-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Client: {project.client}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCards;