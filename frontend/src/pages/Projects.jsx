import React from 'react';
import Header from '../components/Header';
import ProjectGallery from '../components/ProjectGallery';
import ProjectFilters from '../components/ProjectFilters';
import ProjectCards from '../components/ProjectCards';
import ProjectLightbox from '../components/ProjectLightbox';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <ProjectGallery />
        <ProjectFilters />
        <ProjectCards />
        <ProjectLightbox />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;