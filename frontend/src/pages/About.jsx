import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Lightbulb, HardHat } from 'lucide-react';
import { aboutInfo, timeline } from '../mock';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const iconMap = {
    Shield,
    Clock,
    Lightbulb,
    HardHat
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the future, one project at a time, with integrity and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-orange-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 section-title">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutInfo.vision}
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 section-title">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutInfo.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones that define our legacy of excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg z-10" />
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Choose Sai Constructions?</h2>
            <p className="text-xl text-orange-50 max-w-3xl mx-auto">
              We combine decades of experience with modern innovation to deliver projects that stand the test of time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Proven Track Record', desc: '500+ successful projects completed' },
              { title: 'Expert Team', desc: '50+ certified professionals' },
              { title: 'Quality Assurance', desc: 'ISO certified processes' },
              { title: 'On-Time Delivery', desc: '95% projects delivered on schedule' },
              { title: 'Cost Effective', desc: 'Competitive pricing without compromise' },
              { title: 'Customer Support', desc: '24/7 dedicated support team' }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-orange-50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
