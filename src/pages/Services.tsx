import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, BarChart2, Users, Globe2, PenTool, Mail } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t('services.items.traffic.title'),
      description: t('services.items.traffic.description'),
      features: t('services.items.traffic.features', { returnObjects: true })
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: t('services.items.seo.title'),
      description: t('services.items.seo.description'),
      features: t('services.items.seo.features', { returnObjects: true })
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description'),
      features: t('services.items.social.features', { returnObjects: true })
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: t('services.items.web.title'),
      description: t('services.items.web.description'),
      features: t('services.items.web.features', { returnObjects: true })
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: t('services.items.copy.title'),
      description: t('services.items.copy.description'),
      features: t('services.items.copy.features', { returnObjects: true })
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: t('services.items.email.title'),
      description: t('services.items.email.description'),
      features: t('services.items.email.features', { returnObjects: true })
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-red-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('services.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            {t('services.cta.button')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}