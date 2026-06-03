import { sanitizeUrl } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight, BookOpen, Users, Landmark, Send } from 'lucide-react';
import { useState } from 'react';
import { NetworkNodes } from '../components/HeroAnimations';

// Partner logos (shared with Partnership.tsx)
const sshrcLogo = '/c9c77bb67634af21353fb8f536aed3347c90330c.png';
const brockLogo = '/6a2d35fb10f25faa07b97ffff38a76f184734ae4.png';
const uoftOiseLogo = '/7b98ee478f466c3dd71a0410d27d1cae36bc7b2a.png';
const brockESRCLogo = '/4825dd65e7c70d72bc4874a4e49e5ed0e76764db.png';
const niagaraRegionLogo = '/b80316cbb5ce9244931d871f5cd787d687cfdafb.png';
const yorkUniversityLogo = '/c04bb3e0b2c20a914be2fc34dabdbd667e3f6fd3.png';
const universityAtBuffaloLogo = '/1e02762e71863f48fceb1cc3277e8ecd07e53156.png';

const COLUMNS = [
  {
    key: 'community',
    color: '#089EA5',
    icon: Users,
    titleEn: 'Community Partners',
    titleFr: 'Partenaires Communautaires',
    blurbEn: 'Grassroots organizations rooted in lived experience.',
    blurbFr: 'Organisations ancrées dans l’expérience vécue.',
  },
  {
    key: 'academic',
    color: '#8B0000',
    icon: BookOpen,
    titleEn: 'Academic Partners',
    titleFr: 'Partenaires Académiques',
    blurbEn: 'Researchers and institutions advancing the evidence.',
    blurbFr: 'Chercheurs et institutions qui font avancer la preuve.',
  },
  {
    key: 'funding',
    color: '#C97B2E',
    icon: Landmark,
    titleEn: 'Funding Partners',
    titleFr: 'Partenaires Financiers',
    blurbEn: 'Funders investing in systemic, lasting change.',
    blurbFr: 'Bailleurs qui investissent dans un changement durable.',
  },
] as const;

type Partner = { name: string; url: string; logo: string | null };

export function Partners() {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const partnersData: Record<string, Partner[]> = {
    community: [
      { name: 'Niagara Region', url: 'https://www.niagararegion.ca/', logo: niagaraRegionLogo },
      { name: 'Black Community Organization', url: '#', logo: null },
      { name: 'Migrant Worker Support Center', url: '#', logo: null },
    ],
    academic: [
      { name: 'Brock University – ESRC', url: 'https://www.brocku.ca/esrc/', logo: brockESRCLogo },
      { name: 'University of Toronto – OISE', url: 'https://www.oise.utoronto.ca/', logo: uoftOiseLogo },
      { name: 'Social Justice Research Institute', url: 'https://www.brocku.ca/social-justice-research-institute/', logo: brockLogo },
      { name: 'York University', url: 'https://www.yorku.ca/', logo: yorkUniversityLogo },
      { name: 'University at Buffalo', url: 'https://www.buffalo.edu/', logo: universityAtBuffaloLogo },
    ],
    funding: [
      { name: 'Social Sciences and Humanities Research Council (SSHRC)', url: 'https://www.sshrc-crsh.gc.ca/', logo: sshrcLogo },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#8B0000]">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <NetworkNodes />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-[#FAFAFA]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 pb-36 text-center">
          <span className="inline-flex items-center gap-2 text-white/70 text-[11px] font-semibold tracking-[0.28em] uppercase mb-6">
            <span className="w-6 h-px bg-white/40" />
            {language === 'en' ? 'Our Network' : 'Notre Réseau'}
            <span className="w-6 h-px bg-white/40" />
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {language === 'en' ? 'United for Justice and Inclusion' : 'Unis pour la justice et l’inclusion'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Community organizers, academic researchers, and institutional funders working as equals — a circle of care for the Niagara region.'
              : 'Organisateurs communautaires, chercheurs et bailleurs de fonds, à parts égales — un cercle de bienveillance pour la région de Niagara.'}
          </p>
        </div>
      </div>

      {/* ── CIRCLE OF CARE ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:-mt-8 relative z-20 mb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-3xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] border border-gray-100 p-8 md:p-12 lg:p-16">
          {/* Copy */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-[#8B0000]" />
              <span className="text-[#8B0000] text-xs font-bold tracking-[0.2em] uppercase">
                {language === 'en' ? 'Our Model' : 'Notre Modèle'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {language === 'en' ? 'The Circle of Care' : 'Le Cercle de Bienveillance'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              {language === 'en'
                ? 'No partner sits above another. Community knowledge, academic rigour, and sustained funding overlap to drive systemic change — and where all three meet is where the work truly lives.'
                : 'Aucun partenaire n’est au-dessus d’un autre. Savoirs communautaires, rigueur académique et financement durable se rejoignent au cœur du changement.'}
            </p>
            <ul className="space-y-3">
              {COLUMNS.map((c) => (
                <li key={c.key} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                  <span className="text-sm font-medium text-gray-700">
                    {language === 'en' ? c.titleEn : c.titleFr}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Venn */}
          <div className="relative mx-auto w-full max-w-[420px] aspect-square">
            <div className="absolute inset-0" style={{ filter: 'saturate(1.05)' }}>
              {/* Community — bottom right */}
              <div
                className="absolute rounded-full mix-blend-multiply animate-fade-in-up"
                style={{ width: '62%', height: '62%', bottom: '4%', right: '4%', backgroundColor: '#089EA5', opacity: 0.78 }}
              />
              {/* Academic — bottom left */}
              <div
                className="absolute rounded-full mix-blend-multiply animate-fade-in-up"
                style={{ width: '62%', height: '62%', bottom: '4%', left: '4%', backgroundColor: '#8B0000', opacity: 0.78, animationDelay: '0.1s' }}
              />
              {/* Funding — top center */}
              <div
                className="absolute rounded-full mix-blend-multiply animate-fade-in-up"
                style={{ width: '62%', height: '62%', top: '4%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C97B2E', opacity: 0.82, animationDelay: '0.2s' }}
              />

              {/* Labels */}
              <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center text-white">
                <Landmark className="w-5 h-5 mx-auto mb-1 drop-shadow" />
                <span className="text-[11px] font-bold tracking-wide drop-shadow">
                  {language === 'en' ? 'Funding' : 'Financiers'}
                </span>
              </div>
              <div className="absolute bottom-[14%] left-[10%] text-center text-white">
                <BookOpen className="w-5 h-5 mx-auto mb-1 drop-shadow" />
                <span className="text-[11px] font-bold tracking-wide drop-shadow">
                  {language === 'en' ? 'Academic' : 'Académiques'}
                </span>
              </div>
              <div className="absolute bottom-[14%] right-[10%] text-center text-white">
                <Users className="w-5 h-5 mx-auto mb-1 drop-shadow" />
                <span className="text-[11px] font-bold tracking-wide drop-shadow">
                  {language === 'en' ? 'Community' : 'Communauté'}
                </span>
              </div>

              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white rounded-full w-[78px] h-[78px] flex flex-col items-center justify-center shadow-lg border border-black/5 text-center">
                  <span className="font-extrabold text-[#0A0A0A] text-[13px] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>MSK</span>
                  <span className="text-[8.5px] font-semibold tracking-[0.12em] uppercase text-gray-500 mt-1">Niagara</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNERS DIRECTORY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {COLUMNS.map((col) => {
            const Icon = col.icon;
            const list = partnersData[col.key];
            return (
              <div
                key={col.key}
                className="group/col bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 hover:shadow-[0_18px_50px_-25px_rgba(0,0,0,0.3)] hover:-translate-y-1"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: col.color }} />
                <div className="p-7">
                  <div className="flex items-start gap-3 mb-1">
                    <div className="p-2.5 rounded-xl shrink-0" style={{ backgroundColor: `${col.color}14` }}>
                      <Icon className="w-5 h-5" style={{ color: col.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        {language === 'en' ? col.titleEn : col.titleFr}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {language === 'en' ? col.blurbEn : col.blurbFr}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {list.map((partner, i) => {
                      const isLink = partner.url && partner.url !== '#';
                      const inner = (
                        <div
                          className="p-3.5 rounded-xl border border-gray-100 transition-all flex items-center justify-between gap-3 group/item hover:border-transparent"
                          style={{ ['--hover' as string]: col.color }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${col.color}0D`; e.currentTarget.style.borderColor = `${col.color}40`; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.borderColor = ''; }}
                        >
                          {partner.logo ? (
                            <img src={partner.logo} alt={partner.name} className="h-8 object-contain max-w-[140px]" />
                          ) : (
                            <span className="font-semibold text-gray-700 text-sm leading-snug">{partner.name}</span>
                          )}
                          {isLink && (
                            <ArrowUpRight className="w-4 h-4 text-gray-300 shrink-0 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" style={{ color: undefined }} />
                          )}
                        </div>
                      );
                      return isLink ? (
                        <a key={i} href={sanitizeUrl(partner.url)} target="_blank" rel="noopener noreferrer" className="block">
                          {inner}
                        </a>
                      ) : (
                        <div key={i}>{inner}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── PARTNER WITH US ── */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#8B0000]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#089EA5]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#C97B2E] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                  {language === 'en' ? 'Join the Network' : 'Rejoignez le Réseau'}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {language === 'en' ? 'Partner With Us' : 'Devenez Partenaire'}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                  {language === 'en'
                    ? 'Community organization, research institution, or funder — if you believe in evidence-based, culturally-sensitive change in Niagara, we want to hear from you.'
                    : 'Organisation communautaire, institution de recherche ou bailleur de fonds — si vous croyez au changement fondé sur des données probantes, contactez-nous.'}
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex -space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#8B0000] border-2 border-[#0A0A0A] flex items-center justify-center"><BookOpen className="w-4 h-4 text-white" /></div>
                    <div className="w-9 h-9 rounded-full bg-[#089EA5] border-2 border-[#0A0A0A] flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
                    <div className="w-9 h-9 rounded-full bg-[#C97B2E] border-2 border-[#0A0A0A] flex items-center justify-center"><Landmark className="w-4 h-4 text-white" /></div>
                  </div>
                  <span className="text-white/50 text-xs font-medium">
                    {language === 'en' ? 'Join 10+ organizations' : 'Plus de 10 organisations'}
                  </span>
                </div>
              </div>

              <div className="flex-1 w-full">
                {formStatus === 'success' ? (
                  <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-[#089EA5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#089EA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'en' ? 'Message Sent' : 'Message Envoyé'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {language === 'en' ? 'Thank you. Our coordination team will reach out shortly.' : 'Merci. Notre équipe vous contactera sous peu.'}
                    </p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm text-[#C97B2E] hover:text-white transition-colors">
                      {language === 'en' ? 'Submit another' : 'Envoyer un autre'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 rounded-2xl space-y-3.5">
                    <input
                      required
                      type="text"
                      aria-label={language === 'en' ? 'Organization name' : 'Nom de l’organisation'}
                      placeholder={language === 'en' ? 'Organization name' : 'Nom de l’organisation'}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C97B2E] focus:ring-1 focus:ring-[#C97B2E] transition-all text-sm"
                    />
                    <input
                      required
                      type="email"
                      aria-label={language === 'en' ? 'Contact email' : 'Courriel'}
                      placeholder={language === 'en' ? 'Contact email' : 'Courriel'}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C97B2E] focus:ring-1 focus:ring-[#C97B2E] transition-all text-sm"
                    />
                    <select
                      required
                      defaultValue=""
                      aria-label={language === 'en' ? 'Partnership type' : 'Type de partenariat'}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C97B2E] focus:ring-1 focus:ring-[#C97B2E] transition-all text-sm appearance-none"
                    >
                      <option value="" disabled>
                        {language === 'en' ? 'I am a…' : 'Je suis…'}
                      </option>
                      <option value="community">{language === 'en' ? 'Community Member' : 'Membre de la communauté'}</option>
                      <option value="academic">{language === 'en' ? 'Academic / Researcher' : 'Universitaire / Chercheur'}</option>
                      <option value="policy">{language === 'en' ? 'Policy Maker' : 'Décideur politique'}</option>
                      <option value="funder">{language === 'en' ? 'Potential Funder' : 'Bailleur potentiel'}</option>
                    </select>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-[#8B0000] hover:bg-[#A31515] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{language === 'en' ? 'Subscribe to the Movement' : 'Rejoindre le Mouvement'}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
