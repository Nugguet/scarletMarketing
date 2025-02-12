import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Search, Users, Globe, X } from 'lucide-react';

interface PortfolioCase {
  icon: React.ReactNode;
  title: string;
  client: string;
  description: string;
  results: string;
  image: string;
  details: {
    challenge: string;
    solution: string;
    implementation: string;
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
    gallery: string[];
  };
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedCase, setSelectedCase] = useState<PortfolioCase | null>(null);

  const cases: PortfolioCase[] = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('portfolio.cases.traffic.title'),
      client: t('portfolio.cases.traffic.client'),
      description: t('portfolio.cases.traffic.description'),
      results: t('portfolio.cases.traffic.results'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      details: {
        challenge: t('portfolio.cases.traffic.challenge'),
        solution: t('portfolio.cases.traffic.solution'),
        implementation: t('portfolio.cases.traffic.implementation'),
        testimonial: {
          text: t('portfolio.cases.traffic.testimonial.text'),
          author: t('portfolio.cases.traffic.testimonial.author'),
          position: t('portfolio.cases.traffic.testimonial.position')
        },
        gallery: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: t('portfolio.cases.seo.title'),
      client: t('portfolio.cases.seo.client'),
      description: t('portfolio.cases.seo.description'),
      results: t('portfolio.cases.seo.results'),
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80",
      details: {
        challenge: t('portfolio.cases.seo.challenge'),
        solution: t('portfolio.cases.seo.solution'),
        implementation: t('portfolio.cases.seo.implementation'),
        testimonial: {
          text: t('portfolio.cases.seo.testimonial.text'),
          author: t('portfolio.cases.seo.testimonial.author'),
          position: t('portfolio.cases.seo.testimonial.position')
        },
        gallery: [
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('portfolio.cases.social.title'),
      client: t('portfolio.cases.social.client'),
      description: t('portfolio.cases.social.description'),
      results: t('portfolio.cases.social.results'),
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      details: {
        challenge: t('portfolio.cases.social.challenge'),
        solution: t('portfolio.cases.social.solution'),
        implementation: t('portfolio.cases.social.implementation'),
        testimonial: {
          text: t('portfolio.cases.social.testimonial.text'),
          author: t('portfolio.cases.social.testimonial.author'),
          position: t('portfolio.cases.social.testimonial.position')
        },
        gallery: [
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('portfolio.cases.web.title'),
      client: t('portfolio.cases.web.client'),
      description: t('portfolio.cases.web.description'),
      results: t('portfolio.cases.web.results'),
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
      details: {
        challenge: t('portfolio.cases.web.challenge'),
        solution: t('portfolio.cases.web.solution'),
        implementation: t('portfolio.cases.web.implementation'),
        testimonial: {
          text: t('portfolio.cases.web.testimonial.text'),
          author: t('portfolio.cases.web.testimonial.author'),
          position: t('portfolio.cases.web.testimonial.position')
        },
        gallery: [
          "https://images.unsplash.com/photo-1547658718-1cdaa0852790?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1547658721-3592fa2cce2c?auto=format&fit=crop&q=80"
        ]
      }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('portfolio.title')}</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedCase(case_)}
            >
              <div className="relative h-48">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full">
                  {case_.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                <p className="text-gray-600 mb-4">{t('portfolio.modal.client')}: {case_.client}</p>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">{t('portfolio.modal.results')}:</p>
                  <p className="text-gray-600">{case_.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCase.client}</h2>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.challenge')}</h3>
                    <p className="text-gray-600">{selectedCase.details.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.solution')}</h3>
                    <p className="text-gray-600">{selectedCase.details.solution}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.implementation')}</h3>
                    <p className="text-gray-600">{selectedCase.details.implementation}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.results')}</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600">{selectedCase.results}</p>
                    </div>
                  </div>

                  {selectedCase.details.testimonial && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.testimonial')}</h3>
                      <blockquote className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-600 italic mb-4">"{selectedCase.details.testimonial.text}"</p>
                        <footer>
                          <p className="font-semibold text-gray-900">{selectedCase.details.testimonial.author}</p>
                          <p className="text-gray-600">{selectedCase.details.testimonial.position}</p>
                        </footer>
                      </blockquote>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t('portfolio.modal.gallery')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedCase.details.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedCase.client} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('portfolio.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('portfolio.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            {t('portfolio.cta.button')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}