/**
 * Partner Network page
 *
 * Built to the Figma "partner-network" mockup (Brand Identity System,
 * page 16): coalition hero, stat strip, "Circle of Care" model, the three
 * partner columns (Community / Academic / Funding) and the registry form.
 */

import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Landmark, Send, Users } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { Container, SectionHeading } from '../components/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { partnersNetworkQuery, type CommunityPartner } from '../../lib/sanity/queries/communityPartner';
import { urlForImage } from '../../lib/sanity/image';

const COLUMNS = [
  {
    key: 'community',
    icon: Users,
    tile: 'bg-teal-600',
    pill: 'bg-teal-600',
    dot: 'bg-teal-600',
    bar: 'bg-teal-600',
    titleEn: 'Community',
    titleFr: 'Communauté',
    unitEn: 'ORGS',
    unitFr: 'ORG.',
  },
  {
    key: 'academic',
    icon: BookOpen,
    tile: 'bg-sage-500',
    pill: 'bg-sage-500',
    dot: 'bg-sage-500',
    bar: 'bg-sage-500',
    titleEn: 'Academic',
    titleFr: 'Académique',
    unitEn: 'INST',
    unitFr: 'INST.',
  },
  {
    key: 'funding',
    icon: Landmark,
    tile: 'bg-terra-500',
    pill: 'bg-terra-500',
    dot: 'bg-terra-500',
    bar: 'bg-terra-500',
    titleEn: 'Funding',
    titleFr: 'Financement',
    unitEn: 'FUNDS',
    unitFr: 'BAILL.',
  },
] as const;

type ColumnKey = (typeof COLUMNS)[number]['key'];
type Partner = { name: string; url: string; logo: string | null };

export function Partners() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en ? 'Partner Network | MSK Niagara' : 'Réseau de partenaires | MSK Niagara',
    en
      ? 'Community organizers, academic researchers, and institutional funders working as equals in the MSK Niagara partner network.'
      : 'Organisateurs communautaires, chercheurs universitaires et bailleurs de fonds institutionnels collaborant à égalité au sein du réseau de partenaires MSK Niagara.'
  );
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const { data: rawPartners } = useSanityQuery<CommunityPartner[]>(partnersNetworkQuery);
  const partnersData = useMemo(() => {
    const buckets: Record<ColumnKey, Partner[]> = { community: [], academic: [], funding: [] };
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
  const pad = (n: number) => String(n).padStart(2, '0');

  const stats = [
    { value: '03', label: en ? 'Research Hubs' : 'Pôles de recherche', dot: 'bg-teal-500' },
    { value: pad(totalOrgs), label: en ? 'Partner Orgs' : 'Organisations', dot: 'bg-ochre-500' },
    { value: pad(partnersData.academic.length), label: en ? 'Institutions' : 'Institutions', dot: 'bg-terra-500' },
    { value: '01', label: en ? 'Shared Mission' : 'Mission commune', dot: 'bg-stone-300' },
  ];

  const circle = [
    {
      value: `${partnersData.community.length}+`,
      label: en ? 'Community Partners' : 'Partenaires communautaires',
      text: en
        ? 'Frontline service providers, grass-roots organizations, and regional clinics guiding our focus.'
        : 'Fournisseurs de services de première ligne, organismes de terrain et cliniques régionales qui orientent notre action.',
      bar: 'bg-teal-500',
    },
    {
      value: pad(partnersData.academic.length),
      label: en ? 'Academic Partners' : 'Partenaires académiques',
      text: en
        ? 'Universities and regional colleges lending methodological rigor and safeguarding data pools.'
        : 'Universités et collèges régionaux qui apportent la rigueur méthodologique et protègent les bases de données.',
      bar: 'bg-terra-500',
    },
    {
      value: pad(partnersData.funding.length),
      label: en ? 'Funding Partners' : 'Partenaires financiers',
      text: en
        ? 'Social Sciences and Humanities Research Council of Canada and local philanthropy structures.'
        : 'Conseil de recherches en sciences humaines du Canada et structures philanthropiques locales.',
      bar: 'bg-ochre-500',
    },
  ].filter((c) => c.value !== '0+' && c.value !== '00');

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

  const fieldCls =
    'h-11 w-full rounded-lg border border-stone-200 bg-white px-4 text-sm text-ink placeholder:text-stone-300 hover:border-teal-300';
  const labelCls = 'mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-ink';

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <header className="relative isolate overflow-hidden bg-teal-600 py-14 md:py-20">
        <img
          src="/community/researcher-greeting-attendees.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-700/90 via-teal-600/70 to-teal-600/40" aria-hidden="true" />
        <Container>
          <div className="mb-12 flex items-start justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            <span>MSK // {en ? 'Partner Network' : 'Réseau de partenaires'}</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre-400" aria-hidden="true" />
              {en ? 'Live Coalition' : 'Coalition active'}
            </span>
          </div>
          <h1 className="max-w-4xl !text-white">
            {en ? 'United for Justice and Inclusion' : 'Unis pour la justice et l’inclusion'}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed !text-white/85">
            {en
              ? 'A powerful coalition connecting academic researchers, community organizers, and localized regional institutions on a democratic platform where all partners work as equals.'
              : 'Une coalition puissante qui relie chercheur.e.s, organisateurs communautaires et institutions régionales sur une plateforme démocratique où tous les partenaires travaillent à égalité.'}
          </p>
        </Container>
      </header>

      {/* ── STAT STRIP ── */}
      <div className="border-b border-stone-100 bg-white">
        <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-5">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 text-sm font-semibold text-ink">
              <span className={`h-2 w-2 ${s.dot}`} aria-hidden="true" />
              <span>{s.value}</span>
              <span className="font-medium text-stone-500">{s.label}</span>
            </div>
          ))}
        </Container>
      </div>

      {/* ── CIRCLE OF CARE ── */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow={en ? 'Ecosystem philosophy' : 'Philosophie de l’écosystème'}
            accent="terra"
            title={en ? 'The Circle of Care' : 'Le cercle de bienveillance'}
            lede={
              en
                ? 'In our network, no partner sits above another. We recognize lived experience and grass-roots organizational wisdom as having equal weight and validity to academic inquiry. Together, we co-design, co-own, and co-publish our structural findings.'
                : 'Dans notre réseau, aucun partenaire n’est au-dessus d’un autre. Nous reconnaissons que le vécu et la sagesse organisationnelle de terrain ont le même poids et la même validité que la recherche universitaire. Ensemble, nous co-concevons, co-détenons et co-publions nos constats structurels.'
            }
          />
          {circle.length > 0 && (
            <div className="space-y-4">
              {circle.map((c) => (
                <div key={c.label} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                  <span className={`block h-1 w-6 rounded-full ${c.bar}`} aria-hidden="true" />
                  <div className="mt-4 text-4xl font-bold text-teal-600" style={{ fontFamily: 'var(--font-heading)' }}>
                    {c.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink">{c.label}</div>
                  <p className="!mb-0 mt-2 text-sm">{c.text}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── COALITION MAP ── */}
      <section className="border-y border-stone-100 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'Network registry' : 'Registre du réseau'}
            accent="ochre"
            title={en ? 'Our Coalition Map' : 'Notre carte de coalition'}
          />
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
            {COLUMNS.map((col) => {
              const Icon = col.icon;
              const list = partnersData[col.key];
              return (
                <div key={col.key} className="overflow-hidden rounded-2xl border border-stone-100 bg-paper">
                  <div className={`h-1 ${col.bar}`} aria-hidden="true" />
                  <div className="flex items-center gap-4 p-6">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${col.tile}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="!text-[1.375rem]">{en ? col.titleEn : col.titleFr}</h3>
                      <span className={`mt-1 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white ${col.pill}`}>
                        {list.length} {en ? col.unitEn : col.unitFr}
                      </span>
                    </div>
                  </div>
                  <ul className="px-6 pb-4">
                    {list.map((partner, i) => {
                      const isLink = partner.url && partner.url !== '#';
                      const inner = (
                        <span className="flex items-center gap-3 py-3 text-sm text-ink">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${col.dot}`} aria-hidden="true" />
                          {partner.logo ? (
                            <img src={partner.logo} alt={partner.name} className="h-6 max-w-[140px] object-contain" />
                          ) : (
                            <span className="flex-1 leading-snug">{partner.name}</span>
                          )}
                          {partner.logo && <span className="flex-1" />}
                          {isLink && <ArrowUpRight className="h-4 w-4 shrink-0 text-stone-300" aria-hidden="true" />}
                        </span>
                      );
                      return (
                        <li key={i} className="border-b border-stone-100 last:border-0">
                          {isLink ? (
                            <a
                              href={sanitizeUrl(partner.url)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block transition-colors hover:text-teal-700"
                            >
                              {inner}
                            </a>
                          ) : (
                            inner
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── JOIN THE COALITION ── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-3xl border border-stone-100 bg-white p-8 shadow-sm md:p-12">
            <h2>{en ? 'Partner With Us' : 'Devenez partenaire'}</h2>
            <p className="mt-3 max-w-2xl">
              {en
                ? 'Align your organization with regional Niagara equity initiatives. Submit the registry form below to join our supportive ecosystem.'
                : 'Associez votre organisation aux initiatives régionales d’équité de Niagara. Soumettez le formulaire ci-dessous pour joindre notre écosystème de soutien.'}
            </p>

            {formStatus === 'success' ? (
              <div className="mt-6 rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center">
                <h3 className="mb-2">{en ? 'Message Ready' : 'Message prêt'}</h3>
                <p className="!mb-0 text-sm">
                  {en
                    ? 'Your email app should have opened with the details filled in. Send it and our coordination team will reach out shortly.'
                    : 'Votre application de courriel devrait s’être ouverte avec les détails remplis. Envoyez le message et notre équipe de coordination communiquera avec vous sous peu.'}
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-5 text-sm font-semibold text-teal-700 hover:text-teal-600"
                >
                  {en ? 'Submit another' : 'Envoyer un autre'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
                <div>
                  <label htmlFor="orgName" className={labelCls}>{en ? 'Organization name' : 'Nom de l’organisation'}</label>
                  <input
                    id="orgName"
                    required
                    type="text"
                    name="orgName"
                    placeholder={en ? 'Enter your organization' : 'Entrez votre organisation'}
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className={labelCls}>{en ? 'Email address' : 'Courriel'}</label>
                  <input
                    id="contactEmail"
                    required
                    type="email"
                    name="contactEmail"
                    placeholder="name@organization.org"
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="role" className={labelCls}>{en ? 'Coalition role' : 'Rôle dans la coalition'}</label>
                  <select id="role" required name="role" defaultValue="" className={fieldCls}>
                    <option value="" disabled>{en ? 'I am a…' : 'Je suis…'}</option>
                    <option value="community">{en ? 'Community Partner' : 'Partenaire communautaire'}</option>
                    <option value="academic">{en ? 'Academic / Researcher' : 'Universitaire / Chercheur.e'}</option>
                    <option value="policy">{en ? 'Policy Maker' : 'Décideur.se politique'}</option>
                    <option value="funder">{en ? 'Potential Funder' : 'Bailleur de fonds potentiel'}</option>
                  </select>
                </div>
                <button type="submit" disabled={formStatus === 'submitting'} className="btn btn-primary h-11 !min-h-0">
                  {en ? 'Subscribe to the Movement' : 'Rejoindre le mouvement'}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
