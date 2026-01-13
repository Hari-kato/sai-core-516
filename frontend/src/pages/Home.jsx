import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, HardHat, Home as HomeIcon, Building2, Layers, Wrench, Palette, ClipboardCheck } from 'lucide-react';
// import Hero3D from '../components/Hero3D';
import { companyInfo, stats, services, projects } from '../mock';
import Hero3D from '../components/Hero3D';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const iconMap = {
    CheckCircle2,
    Award,
    Users,
    HardHat,
    Home: HomeIcon,
    Building2,
    Layers,
    Wrench,
    Palette,
    ClipboardCheck
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* <Hero3D /> */}
          <Hero3D />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {companyInfo.tagline}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium construction services delivering world-class projects with unmatched quality and precision for over 25 years.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-2xl hover:shadow-orange-500/50 btn-glow group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 section-title">
                About Sai Constructions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 years of excellence in construction, we have established ourselves as a trusted name in the industry. Our commitment to quality, innovation, and customer satisfaction has enabled us to deliver over 500 successful projects.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From residential complexes to commercial buildings and large-scale infrastructure projects, we bring expertise, reliability, and a proven track record to every project we undertake.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our commitment to excellence through completed projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Let's discuss how we can bring your vision to life with our expertise and dedication.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
