import { sanitizeUrl } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight, BookOpen, Users, Landmark, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { NetworkNodes } from '../components/HeroAnimations';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { partnersNetworkQuery, type CommunityPartner } from '../../lib/sanity/queries/communityPartner';
import { urlForImage } from '../../lib/sanity/image';

const MONO = 'var(--font-mono)';

const COLUMNS = [
  {
    key: 'community',
    code: 'C',
    color: '#3993A4',
    glow: '#6AB3C1',
    icon: Users,
    titleEn: 'Community Partners',
    titleFr: 'Partenaires Communautaires',
    blurbEn: 'Grassroots organizations rooted in lived experience.',
    blurbFr: 'Organisations ancrées dans l’expérience vécue.',
  },
  {
    key: 'academic',
    code: 'A',
    color: '#0B4F5C',
    glow: '#6AB3C1',
    icon: BookOpen,
    titleEn: 'Academic Partners',
    titleFr: 'Partenaires Académiques',
    blurbEn: 'Researchers and institutions advancing the evidence.',
    blurbFr: 'Chercheurs et institutions qui font avancer la preuve.',
  },
  {
    key: 'funding',
    code: 'F',
    color: '#4E8064',
    glow: '#E1B449',
    icon: Landmark,
    titleEn: 'Funding Partners',
    titleFr: 'Partenaires Financiers',
    blurbEn: 'Funders investing in systemic, lasting change.',
    blurbFr: 'Bailleurs qui investissent dans un changement durable.',
  },
] as const;

type Partner = { name: string; url: string; logo: string | null };

function Marker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span className="text-[#6AB3C1] text-sm font-semibold tracking-[0.18em]" style={{ fontFamily: MONO }}>
        {index}
      </span>
      <span className="h-px w-10 bg-[#33333D]" />
      <span className="text-[11px] tracking-[0.34em] uppercase text-[#69736F]" style={{ fontFamily: MONO }}>
        {label}
      </span>
    </div>
  );
}

export function Partners() {
  const { language } = useLanguage();
  usePageMeta(
    language === 'en' ? 'Partner Network | MSK Niagara' : 'Réseau de partenaires | MSK Niagara',
    language === 'en'
      ? 'Community organizers, academic researchers, and institutional funders working as equals in the MSK Niagara partner network.'
      : 'Organisateurs communautaires, chercheurs universitaires et bailleurs de fonds institutionnels collaborant à égalité au sein du réseau de partenaires MSK Niagara.'
  );
  const en = language === 'en';
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const { data: rawPartners } = useSanityQuery<CommunityPartner[]>(partnersNetworkQuery);
  const partnersData: Record<string, Partner[]> = useMemo(() => {
    const buckets: Record<string, Partner[]> = { community: [], academic: [], funding: [] };
    for (const p of rawPartners ?? []) {
      const entry: Partner = {
        name: en ? p.name.en : p.name.fr,
        url: p.website ?? '#',
        logo: urlForImage(p.logo)?.width(240).url() ?? null,
      };
      if (p.category === 'funder') buckets.funding.push(entry);
      else if (p.category === 'research') buckets.academic.push(entry);
      else buckets.community.push(entry);
    }
    return buckets;
  }, [rawPartners, en]);

  const totalOrgs = COLUMNS.reduce((n, c) => n + partnersData[c.key].length, 0);
  const academicCount = partnersData.academic.length;

  const stats = [
    { value: '03', label: en ? 'Research Hubs' : 'Pôles de recherche', color: '#A85645' },
    { value: String(totalOrgs).padStart(2, '0'), label: en ? 'Partner Orgs' : 'Organisations', color: '#6AB3C1' },
    { value: String(academicCount).padStart(2, '0'), label: en ? 'Institutions' : 'Institutions', color: '#E1B449' },
    { value: '01', label: en ? 'Shared Mission' : 'Mission commune', color: '#6AB3C1' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget as HTMLFormElement;
    const orgName = (form.elements.namedItem('orgName') as HTMLInputElement)?.value || '';
    const contactEmail = (form.elements.namedItem('contactEmail') as HTMLInputElement)?.value || '';
    const role = (form.elements.namedItem('role') as HTMLSelectElement)?.value || '';
    const subject = encodeURIComponent(`Partner Network Inquiry — ${orgName}`);
    const body = encodeURIComponent(
      `Hello MSK Partnership Office,\n\nOur organization would like to join the MSK Niagara partner network.\n\nOrganization: ${orgName}\nContact email: ${contactEmail}\nRole: ${role}\n\nPlease let us know the next steps.\n\nThank you.`
    );
    window.location.href = `mailto:contact@msk-niagara.ca?subject=${subject}&body=${body}`;
    setFormStatus('success');
  };

  const inputCls =
    'w-full bg-[#0E202A] border border-[#21404E] rounded-lg px-4 py-3 text-white placeholder-[#525C58] focus:outline-none focus:border-[#4E8064] focus:ring-1 focus:ring-[#4E8064] transition-all text-sm';

  return (
    <div className="min-h-screen bg-[#0E202A] text-[#E1E4E0]">
      {/* ── MASTHEAD HERO ── */}
      <header className="relative overflow-hidden bg-[#0B4F5C]">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <NetworkNodes />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-[#0E202A]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-36 md:pt-16 md:pb-44">
          {/* dispatch top bar */}
          <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5 mb-12">
            <div className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.22em]" style={{ fontFamily: MONO }}>
              MSK <span className="text-white/40">//</span> {en ? 'PARTNER NETWORK' : 'RÉSEAU DE PARTENAIRES'}
            </div>
            <div className="text-right text-[10px] leading-relaxed text-white/90 tracking-[0.18em]" style={{ fontFamily: MONO }}>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6AB3C1] animate-pulse" />
                {en ? 'LIVE COALITION' : 'COALITION ACTIVE'}
              </span>
              <br />
              {en ? 'NIAGARA REGION · ON, CA' : 'RÉGION DE NIAGARA · ON, CA'}
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-white/90 text-[11px] font-semibold tracking-[0.28em] uppercase mb-6" style={{ fontFamily: MONO }}>
            <span className="w-6 h-px bg-white/40" />
            {en ? 'Our Network' : 'Notre Réseau'}
          </span>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.03] tracking-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {en ? 'United for Justice and Inclusion' : 'Unis pour la justice et l’inclusion'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {en
              ? 'Community organizers, academic researchers, and institutional funders working as equals — a circle of care for the Niagara region.'
              : 'Organisateurs communautaires, chercheurs et bailleurs de fonds, à parts égales — un cercle de bienveillance pour la région de Niagara.'}
          </p>
        </div>
      </header>

      {/* ── DATA STRIP ── */}
      <div className="border-y border-[#1D3A47] bg-[#162F3B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch divide-x divide-[#1D3A47] overflow-x-auto">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3 py-5 pr-8 pl-0 first:pl-0 sm:pl-8 shrink-0">
                <span className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: MONO, color: s.color }}>
                  {s.value}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#69736F]" style={{ fontFamily: MONO }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 01 · OUR MODEL ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Marker index="01" label={en ? 'Our Model' : 'Notre Modèle'} />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {en ? 'The Circle of Care' : 'Le Cercle de Bienveillance'}
            </h2>
            <p className="text-[#9AA29D] leading-relaxed">
              {en
                ? 'No partner sits above another. Community knowledge, academic rigour, and sustained funding overlap to drive systemic change — and where all three meet is where the work truly lives.'
                : 'Aucun partenaire n’est au-dessus d’un autre. Savoirs communautaires, rigueur académique et financement durable se rejoignent au cœur du changement.'}
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {COLUMNS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.key}
                  className="relative bg-[#162F3B] border border-[#1D3A47] rounded-xl p-5 overflow-hidden transition-colors hover:border-[#3A3A45]"
                >
                  <div className="absolute top-0 left-0 h-full w-[3px]" style={{ backgroundColor: c.color }} />
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${c.color}1F` }}>
                      <Icon className="w-5 h-5" style={{ color: c.glow }} />
                    </div>
                    <span className="text-xs tracking-[0.2em]" style={{ fontFamily: MONO, color: '#9AA29D' }}>
                      {c.code}-00
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                    {en ? c.titleEn : c.titleFr}
                  </h3>
                  <p className="text-xs text-[#69736F] leading-relaxed">
                    {en ? c.blurbEn : c.blurbFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 02 · THE NETWORK ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <Marker index="02" label={en ? 'The Network' : 'Le Réseau'} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {COLUMNS.map((col) => {
            const Icon = col.icon;
            const list = partnersData[col.key];
            return (
              <div key={col.key} className="bg-[#162F3B] border border-[#1D3A47] rounded-2xl overflow-hidden">
                {/* category header */}
                <div className="flex items-center gap-3 p-5 border-b border-[#1D3A47]">
                  <div className="p-2.5 rounded-xl shrink-0" style={{ backgroundColor: `${col.color}1F` }}>
                    <Icon className="w-5 h-5" style={{ color: col.glow }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-white leading-tight truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                      {en ? col.titleEn : col.titleFr}
                    </h3>
                    <p className="text-[11px] text-[#69736F] mt-0.5 truncate">
                      {en ? col.blurbEn : col.blurbFr}
                    </p>
                  </div>
                  <span className="text-xs tracking-[0.1em] shrink-0" style={{ fontFamily: MONO, color: col.glow }}>
                    [{String(list.length).padStart(2, '0')}]
                  </span>
                </div>

                {/* roster */}
                <ul className="divide-y divide-[#212129]">
                  {list.map((partner, i) => {
                    const isLink = partner.url && partner.url !== '#';
                    const idx = `${col.code}-${String(i + 1).padStart(2, '0')}`;
                    const inner = (
                      <div className="flex items-center gap-3 px-5 py-4">
                        <span className="text-[10px] tracking-[0.1em] shrink-0 w-9" style={{ fontFamily: MONO, color: '#9AA29D' }}>
                          {idx}
                        </span>
                        {partner.logo ? (
                          <span className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center shrink-0">
                            <img src={partner.logo} alt={partner.name} className="h-6 object-contain max-w-[120px]" />
                          </span>
                        ) : (
                          <span className="font-medium text-[#C7CCC7] text-sm leading-snug flex-1">{partner.name}</span>
                        )}
                        {partner.logo && <span className="flex-1" />}
                        {isLink && (
                          <ArrowUpRight
                            className="w-4 h-4 shrink-0 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-focus-within/item:-translate-y-0.5 group-focus-within/item:translate-x-0.5"
                            style={{ color: col.glow }}
                          />
                        )}
                      </div>
                    );
                    return isLink ? (
                      <li
                        key={i}
                        className="group/item transition-colors hover:bg-[color-mix(in_srgb,var(--g)_9%,transparent)] focus-within:bg-[color-mix(in_srgb,var(--g)_9%,transparent)]"
                        style={{ ['--g' as string]: col.glow }}
                      >
                        <a href={sanitizeUrl(partner.url)} target="_blank" rel="noopener noreferrer" className="block">
                          {inner}
                        </a>
                      </li>
                    ) : (
                      <li key={i}>{inner}</li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 03 · JOIN THE COALITION ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <Marker index="03" label={en ? 'Join the Coalition' : 'Rejoindre la Coalition'} />
        <div className="relative bg-[#132A35] border border-[#1D3A47] rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0B4F5C]/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#3993A4]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {en ? 'Partner With Us' : 'Devenez Partenaire'}
              </h2>
              <p className="text-[#9AA29D] text-sm leading-relaxed mb-8 max-w-md">
                {en
                  ? 'Community organization, research institution, or funder — if you believe in evidence-based, culturally-sensitive change in Niagara, we want to hear from you.'
                  : 'Organisation communautaire, institution de recherche ou bailleur de fonds — si vous croyez au changement fondé sur des données probantes, contactez-nous.'}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0B4F5C] border-2 border-[#132A35] flex items-center justify-center"><BookOpen className="w-4 h-4 text-white" /></div>
                  <div className="w-9 h-9 rounded-full bg-[#3993A4] border-2 border-[#132A35] flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
                  <div className="w-9 h-9 rounded-full bg-[#4E8064] border-2 border-[#132A35] flex items-center justify-center"><Landmark className="w-4 h-4 text-white" /></div>
                </div>
                <span className="text-[#69736F] text-xs tracking-[0.12em]" style={{ fontFamily: MONO }}>
                  {en ? `JOIN ${totalOrgs}+ ORGANIZATIONS` : `${totalOrgs}+ ORGANISATIONS`}
                </span>
              </div>
            </div>

            <div className="w-full">
              {formStatus === 'success' ? (
                <div className="bg-[#0E202A] border border-[#21404E] rounded-2xl p-8 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-[#3993A4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#6AB3C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{en ? 'Message Sent' : 'Message Envoyé'}</h3>
                  <p className="text-sm text-[#69736F]">
                    {en ? 'Thank you. Our coordination team will reach out shortly.' : 'Merci. Notre équipe vous contactera sous peu.'}
                  </p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm text-[#E1B449] hover:text-white transition-colors">
                    {en ? 'Submit another' : 'Envoyer un autre'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#0E202A] border border-[#21404E] p-6 rounded-2xl space-y-3.5">
                  <input
                    required
                    type="text"
                    name="orgName"
                    aria-label={en ? 'Organization name' : 'Nom de l’organisation'}
                    placeholder={en ? 'Organization name' : 'Nom de l’organisation'}
                    className={inputCls}
                  />
                  <input
                    required
                    type="email"
                    name="contactEmail"
                    aria-label={en ? 'Contact email' : 'Courriel'}
                    placeholder={en ? 'Contact email' : 'Courriel'}
                    className={inputCls}
                  />
                  <select
                    required
                    name="role"
                    defaultValue=""
                    aria-label={en ? 'Partnership type' : 'Type de partenariat'}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="" disabled>{en ? 'I am a…' : 'Je suis…'}</option>
                    <option value="community">{en ? 'Community Member' : 'Membre de la communauté'}</option>
                    <option value="academic">{en ? 'Academic / Researcher' : 'Universitaire / Chercheur'}</option>
                    <option value="policy">{en ? 'Policy Maker' : 'Décideur politique'}</option>
                    <option value="funder">{en ? 'Potential Funder' : 'Bailleur potentiel'}</option>
                  </select>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#0B4F5C] hover:bg-[#177485] text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{en ? 'Subscribe to the Movement' : 'Rejoindre le Mouvement'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISPATCH FOOTER META ── */}
      <div className="border-t border-[#1D3A47]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.2em] text-[#9AA29D]" style={{ fontFamily: MONO }}>
          <span>MSK NIAGARA · {en ? 'PARTNER NETWORK' : 'RÉSEAU DE PARTENAIRES'}</span>
          <span>{en ? 'COMMUNITY · ACADEMIC · FUNDING' : 'COMMUNAUTÉ · ACADÉMIQUE · FINANCEMENT'}</span>
        </div>
      </div>
    </div>
  );
}
