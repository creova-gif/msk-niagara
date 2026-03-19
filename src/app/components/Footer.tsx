import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

// Import funder logos
const sshrcLogo = '/c9c77bb67634af21353fb8f536aed3347c90330c.png';
const brockLogo = '/6a2d35fb10f25faa07b97ffff38a76f184734ae4.png';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    // Scroll to top with multiple fallback methods
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallback for browsers that don't support smooth behavior
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer className="bg-[#0A0A0A] text-white mt-auto border-t-2 border-[#8B0000]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#8B0000] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                MSK
              </div>
              <h3 className="text-2xl font-bold text-white">{t('home.title')}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === 'en' 
                ? 'A transnational, university-community partnership committed to fostering social justice through collaborative research.'
                : 'Un partenariat transnational université-communauté engagé à bâtir la justice sociale par la recherche collaborative.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#8B0000]" />
                <div>
                  <div>Brock University</div>
                  <div>1812 Sir Isaac Brock Way</div>
                  <div>St. Catharines, ON L2S 3A1</div>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-[#8B0000]" />
                <span>contact@msk-niagara.ca</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-[#8B0000]" />
                <span>+1 (905) 688-5550</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links - About */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('nav.about')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about/partnership" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.partnership')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/hubs" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.hubs')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/members" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.members')}</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links - Research */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('nav.research')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/research/projects" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.projects')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/research/knowledge" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.knowledge')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.community')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/timeline" 
                  className="text-gray-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white">{t('nav.timeline')}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Land Acknowledgment */}
        <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
          <h4 className="text-lg font-bold mb-3 text-white">
            {language === 'en' ? 'Land Acknowledgment' : 'Reconnaissance territoriale'}
          </h4>
          <p className="text-gray-100 leading-relaxed text-sm">
            {language === 'en' 
              ? 'Brock University is situated on the traditional territory of the Haudenosaunee and Anishinaabe peoples, many of whom continue to live and work here today. This territory is covered by the Upper Canada Treaties and is within the land protected by the Dish with One Spoon Wampum Agreement. We acknowledge the enduring presence and deep traditional knowledge, laws, and resources of Indigenous peoples, and are grateful to have the opportunity to work in this territory.'
              : 'L\'Université Brock est située sur le territoire traditionnel des peuples Haudenosaunee et Anishinaabe, dont beaucoup continuent de vivre et de travailler ici aujourd\'hui. Ce territoire est couvert par les traités du Haut-Canada et se trouve sur le territoire protégé par l\'accord de wampum du plat à une cuillère. Nous reconnaissons la présence durable et les connaissances traditionnelles profondes, les lois et les ressources des peuples autochtones, et nous sommes reconnaissants d\'avoir l\'occasion de travailler sur ce territoire.'}
          </p>
        </div>
        
        {/* Funding Acknowledgment */}
        <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
          <h4 className="text-lg font-bold mb-3 text-white">
            {language === 'en' ? 'Funding Acknowledgment' : 'Reconnaissance du financement'}
          </h4>
          <p className="text-gray-100 leading-relaxed text-sm mb-4">
            {language === 'en' 
              ? 'Funded by the Social Sciences and Humanities Research Council of Canada (SSHRC) Partnership Grant, the John R. Evans Leaders Fund of the Canada Foundation for Innovation (CFI), the Social Justice Research Institute (SJRI), and supported by Brock University, including the Office of the Vice-President, Research, the Office of Research Services, and the Office of the Dean, Faculty of Health Sciences.'
              : 'Financé par la subvention de partenariat du Conseil de recherches en sciences humaines du Canada (CRSH), le Fonds des leaders John-R.-Evans de la Fondation canadienne pour l\'innovation (FCI), l\'Institut de recherche sur la justice sociale (IRJS), et soutenu par l\'Université Brock, y compris le Bureau du vice-recteur à la recherche, le Bureau des services de recherche et le Bureau du doyen de la Faculté des sciences de la santé.'}
          </p>
          
          {/* Funder Logos */}
          <div className="flex flex-wrap items-center gap-6 mt-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <img 
                src={sshrcLogo} 
                alt={language === 'en' ? 'SSHRC Logo' : 'Logo CRSH'} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <div className="flex items-center gap-2">
              <img 
                src={brockLogo} 
                alt={language === 'en' ? 'SJRI Logo' : 'Logo IRJS'} 
                className="h-16 w-auto object-contain" 
              />
              <span className="text-xs text-gray-300">
                {language === 'en' ? 'SJRI' : 'IRJS'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Unified Copyright & Privacy Section */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-sm px-10 py-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] hover:border-[#8B0000]/40 transition-all duration-500 w-full lg:w-auto group overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 via-[#8B0000]/0 to-[#8B0000]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8B0000]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B0000] via-[#A40000] to-[#6B0000] flex items-center justify-center text-white font-bold text-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    MSK
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#8B0000]/0 via-[#8B0000] to-[#8B0000]/0 rounded-full"></div>
                </div>
                
                {/* Divider */}
                <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  {/* Copyright */}
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">
                      &copy; {currentYear} {t('home.title')}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
                    </p>
                  </div>
                  
                  {/* Privacy Policy Link */}
                  <Link 
                    to="/privacy-policy" 
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors group/link"
                  >
                    <div className="w-2 h-2 bg-[#8B0000] rounded-full group-hover/link:scale-150 transition-transform"></div>
                    <span className="font-semibold text-sm border-b border-transparent group-hover/link:border-white transition-all">
                      {language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
                    </span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white rounded-2xl hover:from-[#A40000] hover:to-[#8B0000] transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl w-full lg:w-auto justify-center"
              aria-label="Scroll to top"
            >
              <span>{language === 'en' ? 'Back to Top' : 'Retour en haut'}</span>
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}