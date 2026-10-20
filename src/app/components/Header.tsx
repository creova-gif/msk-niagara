import { useLocation } from 'react-router';
import { Link } from './LocalizedLink';
import { LogoLink } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { stripLangPrefix } from '../utils/i18nPath';
import { ChevronDown, Menu, X, ArrowRight, Users, BookOpen, Building2, Lightbulb, Globe, Handshake, Heart, Calendar, Camera } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const dropdownItems = {
  about: [
    {
      name: 'Partnership',
      nameEn: 'Partnership',
      nameFr: 'Partenariat',
      href: '/about/partnership',
      desc: 'Our academic & community network',
      descFr: 'Notre réseau académique et communautaire',
      icon: Building2,
    },
    {
      name: 'Research Hubs',
      nameEn: 'Research Hubs',
      nameFr: 'Pôles de recherche',
      href: '/about/hubs',
      desc: '3 hubs across the Niagara region',
      descFr: '3 pôles à travers la région de Niagara',
      icon: Lightbulb,
    },
    {
      name: 'Team Members',
      nameEn: 'Team Members',
      nameFr: 'Membres de l\'équipe',
      href: '/about/members',
      desc: 'Researchers, students & partners',
      descFr: 'Chercheurs, étudiants et partenaires',
      icon: Users,
    },
  ],
  research: [
    {
      name: 'Projects',
      nameEn: 'Projects',
      nameFr: 'Projets',
      href: '/research/projects',
      desc: 'Active research initiatives',
      descFr: 'Initiatives de recherche actives',
      icon: BookOpen,
    },
    {
      name: 'Knowledge',
      nameEn: 'Knowledge Dissemination',
      nameFr: 'Diffusion des savoirs',
      href: '/research/knowledge',
      desc: 'Publications & findings',
      descFr: 'Publications et résultats',
      icon: Lightbulb,
    },
  ],
  engage: [
    {
      name: 'Partners',
      nameEn: 'Partners',
      nameFr: 'Partenaires',
      href: '/partners',
      desc: 'Our coalition of organizations',
      descFr: 'Notre coalition d\'organisations',
      icon: Handshake,
    },
    {
      name: 'Community',
      nameEn: 'Community',
      nameFr: 'Communauté',
      href: '/community',
      desc: 'Health & community partners',
      descFr: 'Partenaires communautaires et de santé',
      icon: Heart,
    },
    {
      name: 'Timeline',
      nameEn: 'Timeline & Events',
      nameFr: 'Chronologie et événements',
      href: '/timeline',
      desc: 'Milestones & upcoming events',
      descFr: 'Jalons et événements à venir',
      icon: Calendar,
    },
    {
      name: 'Media',
      nameEn: 'Media',
      nameFr: 'Médias',
      href: '/media',
      desc: 'Photos, video & annual reports',
      descFr: 'Photos, vidéos et rapports annuels',
      icon: Camera,
    },
  ],
};

type DropdownKey = keyof typeof dropdownItems;

/** Top-level dropdown triggers, in nav order. `match` decides the active state. */
const NAV_GROUPS: {
  key: DropdownKey;
  labelEn: string;
  labelFr: string;
  match: string[];
  width: string;
}[] = [
  { key: 'about', labelEn: 'About', labelFr: 'À propos', match: ['/about'], width: 'w-72' },
  { key: 'research', labelEn: 'Research', labelFr: 'Recherche', match: ['/research'], width: 'w-64' },
  { key: 'engage', labelEn: 'Engage', labelFr: 'Participer', match: ['/partners', '/community', '/timeline', '/media'], width: 'w-72' },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'fr' : 'en');

  const openDropdown = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const stayOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

  // Active-nav-state checks compare against the bare (language-stripped)
  // path — a French visitor on /fr/about/hubs should still see "About"
  // highlighted, the same as an English visitor on /about/hubs.
  const barePath = stripLangPrefix(location.pathname);

  const isActive = (href: string) =>
    href === '/' ? barePath === '/' : barePath.startsWith(href);

  const triggerClass = (active: boolean) =>
    `relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? 'bg-teal-50 text-teal-700'
        : 'text-ink/75 hover:bg-stone-50 hover:text-ink'
    }`;

  return (
    // Floating pill navigation (Figma page 09 — Component Library). The
    // wrapper is a transparent sticky strip; only the pill itself is painted.
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label={language === 'en' ? 'Main navigation' : 'Navigation principale'}
        className={`mx-auto max-w-7xl rounded-[28px] border border-stone-100 bg-paper/95 px-3 backdrop-blur-xl transition-shadow duration-300 sm:px-5 lg:rounded-full ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4">

          {/* ── LOGO ── */}
          <LogoLink size={32} className="pl-2" />

          {/* ── DESKTOP NAV ── */}
          <div className="hidden items-center gap-1 lg:flex">

            {/* Home */}
            <Link to="/" className={triggerClass(isActive('/'))}>
              {t('nav.home')}
            </Link>

            {NAV_GROUPS.map((group) => {
              const groupActive = group.match.some((p) => barePath.startsWith(p));
              const label = language === 'en' ? group.labelEn : group.labelFr;
              return (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => openDropdown(group.key)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={triggerClass(groupActive)}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === group.key}
                  >
                    {label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === group.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === group.key && (
                    <div
                      className={`absolute left-0 top-full pt-4 ${group.width}`}
                      onMouseEnter={stayOpen}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="animate-fade-in-down overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-2xl">
                        <div className="h-[3px] bg-teal-600" />
                        <div className="eyebrow px-4 pb-1 pt-3">{label}</div>
                        <div className="p-2 pt-1">
                          {dropdownItems[group.key].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-paper"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 transition-colors group-hover/item:bg-teal-100">
                                  <Icon className="h-4 w-4 text-teal-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-ink transition-colors group-hover/item:text-teal-600">
                                    {language === 'en' ? item.nameEn : item.nameFr}
                                  </div>
                                  <div className="mt-0.5 text-xs text-stone-400">
                                    {language === 'en' ? item.desc : item.descFr}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT ACTIONS ── */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 transition-colors duration-200 hover:bg-stone-50 hover:text-ink"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              {language.toUpperCase()}
            </button>

            <div className="h-5 w-px bg-stone-100" />

            {/* CTA — Support Us */}
            <Link
              to="/donate"
              className="group inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-700 hover:shadow-[0_4px_16px_rgba(11,79,92,0.35)]"
            >
              {language === 'en' ? 'Support Us' : 'Nous Soutenir'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ── MOBILE CONTROLS ── */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full p-2 text-xs font-bold uppercase tracking-wider text-stone-500 transition-colors duration-200 hover:bg-stone-50"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-ink transition-colors duration-200 hover:bg-stone-50"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileMenuOpen && (
          <div className="animate-fade-in-down pb-3 lg:hidden">
            <div className="mt-1 space-y-0.5 rounded-2xl border border-stone-100 bg-white p-2">
              <Link
                to="/"
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                  isActive('/') ? 'bg-teal-600 text-white' : 'text-stone-500 hover:bg-paper hover:text-ink'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
                {isActive('/') && <ArrowRight className="h-4 w-4 opacity-70" />}
              </Link>

              {NAV_GROUPS.map((group) => (
                <div key={group.key} className="pt-3">
                  <div className="eyebrow px-4 pb-1">
                    {language === 'en' ? group.labelEn : group.labelFr}
                  </div>
                  {dropdownItems[group.key].map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                        isActive(item.href)
                          ? 'bg-teal-600 text-white'
                          : 'text-stone-500 hover:bg-paper hover:text-ink'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {language === 'en' ? item.nameEn : item.nameFr}
                      {isActive(item.href) && <ArrowRight className="h-4 w-4 opacity-70" />}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="px-2 pb-1 pt-3">
                <Link
                  to="/donate"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'Support Us' : 'Nous Soutenir'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
