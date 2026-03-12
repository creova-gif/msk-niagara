/**
 * Header Component
 * 
 * Main navigation header for the MSK Niagara website.
 * Features:
 * - Responsive design (desktop & mobile)
 * - Bilingual language toggle (EN/FR)
 * - Dropdown menus for About and Research sections
 * - Sticky header with scroll effects
 * - Mobile hamburger menu
 * - Automatic scroll-to-top on navigation
 * 
 * Primary color: #8B0000 (Dark Red)
 * 
 * @author MSK Development Team
 * @version 2.0
 */

import { Link, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * Handle scroll effect
   * Adds shadow to header when user scrolls down
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  /**
   * Navigation Menu Structure
   * Includes main menu items and dropdown submenus
   */
  const navigation = [
    { name: t('nav.home'), href: '/' },
    {
      name: t('nav.about'),
      href: '#',
      submenu: [
        { name: t('nav.partnership'), href: '/about/partnership' },
        { name: t('nav.hubs'), href: '/about/hubs' },
        { name: t('nav.members'), href: '/about/members' },
      ],
    },
    {
      name: t('nav.research'),
      href: '#',
      submenu: [
        { name: t('nav.projects'), href: '/research/projects' },
        { name: t('nav.knowledge'), href: '/research/knowledge' },
      ],
    },
    { name: t('nav.community'), href: '/community' },
    { name: t('nav.timeline'), href: '/timeline' },
    { name: language === 'en' ? 'Media' : 'Médias', href: '/media' },
    { name: language === 'en' ? 'Help' : 'Aide', href: '/help' },
  ];

  /**
   * Toggle between English and French
   */
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#0A0A0A] transition-all duration-300 ${
      scrolled ? 'shadow-2xl border-b-2 border-dark-red/30' : 'border-b border-gray-800'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between px-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group" >
              <div className="w-12 h-12 rounded-xl bg-[#8B0000] flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-[#8B0000]/30 transform group-hover:scale-105 transition-all duration-300">
                MSK
              </div>
              <span className="hidden sm:block text-white font-semibold text-lg group-hover:opacity-90 transition-opacity">
                {t('home.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group/nav">
                {item.submenu ? (
                  <>
                    <button className="inline-flex items-center gap-1 px-4 py-2 text-white hover:bg-white/10 transition-all duration-200 font-medium rounded-lg">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/nav:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-64 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        {item.submenu.map((subitem, idx) => (
                          <Link
                            key={subitem.href}
                            to={subitem.href}
                            className="block px-5 py-3 text-[#0A0A0A] hover:bg-gray-50 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-[#8B0000] hover:text-[#8B0000]"
                            style={{ animationDelay: `${idx * 50}ms` }}
                            onClick={handleNavClick}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.href 
                        ? 'text-[#0A0A0A] bg-white shadow-md' 
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Toggle Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 ml-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105 group"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2.5 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-700 mt-2 animate-fade-in-up bg-primary">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <div className="px-4 py-2.5 font-semibold text-white">{item.name}</div>
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          to={subitem.href}
                          className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition-all duration-200 text-white font-medium border-l-2 border-transparent hover:border-dark-red"
                          onClick={handleNavClick}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-white text-primary'
                        : 'hover:bg-white/10 text-white'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}