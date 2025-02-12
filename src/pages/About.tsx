import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.whoWeAre.title')}</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('about.whoWeAre.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.whoWeAre.description2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.mission.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.mission.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.vision.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.vision.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.values.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.values.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('about.services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('about.services.list', { returnObjects: true }).map((service: string, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}