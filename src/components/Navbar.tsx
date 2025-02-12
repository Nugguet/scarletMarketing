import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import Logo from './Logo';

const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Logo className="flex-shrink-0 flex items-center" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600">{t('nav.home')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600">{t('nav.about')}</Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600">{t('nav.services')}</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-red-600">{t('nav.portfolio')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">{t('nav.contact')}</Link>
            
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <Globe className="w-5 h-5 mr-1" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 w-full text-left"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-red-600">{t('nav.home')}</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-red-600">{t('nav.about')}</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-red-600">{t('nav.services')}</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-red-600">{t('nav.portfolio')}</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">{t('nav.contact')}</Link>
            
            <div className="border-t border-gray-200 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}