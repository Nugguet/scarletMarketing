import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BarChart2, Globe2, Lightbulb, Target, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  projects: Array<{
    name: string;
    description: string;
    image: string;
  }>;
}

export default function Home() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t('services.branding'),
      description: t('home.services.branding.description'),
      projects: t('home.services.branding.projects', { returnObjects: true })
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: t('services.digital'),
      description: t('home.services.digital.description'),
      projects: t('home.services.digital.projects', { returnObjects: true })
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('services.social'),
      description: t('home.services.social.description'),
      projects: t('home.services.social.projects', { returnObjects: true })
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: t('services.content'),
      description: t('home.services.content.description'),
      projects: t('home.services.content.projects', { returnObjects: true })
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors duration-300"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="text-red-600 mr-4">{selectedService.icon}</div>
                    <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-600 mb-8">{selectedService.description}</p>

                <h4 className="text-xl font-semibold mb-4">{t('portfolio.modal.gallery')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedService.projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="font-semibold mb-2">{project.name}</h5>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}