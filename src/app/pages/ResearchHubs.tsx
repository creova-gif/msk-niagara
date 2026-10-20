/**
 * Research Hubs landing page
 *
 * Built to the Figma "research-hubs-landing" mockup (Brand Identity System,
 * page 16): photographic hero, stat cards, three hub pillar cards, the
 * community-network band and the research-partner call to action.
 *
 * Hub accent colours come from the brand hub system (keyed on the CMS hub
 * slug) rather than the free-form colour field in Sanity, so every hub is
 * always Ochre / Sage / Terracotta as specified in the brand guide.
 */

import { useMemo } from 'react';
import { ArrowRight, Building2, GraduationCap, Heart, HeartPulse, Shield, UserPlus, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from '../components/LocalizedLink';
import { usePageMeta } from '../hooks/usePageMeta';
import { Container, HUB_STYLE, SectionHeading, hubKeyFor } from '../components/brand';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { researchHubsQuery, type ResearchHub } from '../../lib/sanity/queries/researchHub';
import { siteStatsQuery, type SiteStats } from '../../lib/sanity/queries/siteStats';
import { urlForImage } from '../../lib/sanity/image';

export function ResearchHubs() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en ? 'Research Hubs | MSK Niagara' : 'Pôles de recherche | MSK Niagara',
    en
      ? '3 research hubs across the Niagara region driving community-based participatory research within the MSK partnership.'
      : '3 pôles de recherche à travers la région de Niagara menant une recherche participative communautaire au sein du partenariat MSK.'
  );

  const { data: rawHubs } = useSanityQuery<ResearchHub[]>(researchHubsQuery);
  const { data: siteStats } = useSanityQuery<SiteStats>(siteStatsQuery);

  const hubs = useMemo(
    () =>
      (rawHubs ?? []).map((hub) => ({
        id: hub.slug,
        key: hubKeyFor(hub.slug),
        name: language === 'fr' ? hub.name.fr : hub.name.en,
        image: urlForImage(hub.coverImage)?.width(800).height(500).url(),
        description: language === 'fr' ? hub.description.fr : hub.description.en,
        members: hub.memberCount ?? 0,
        projects: hub.projectCount ?? 0,
        leader: hub.leaders?.join(en ? ' & ' : ' et ') ?? '',
      })),
    [rawHubs, language, en]
  );

  const stats = [
    {
      value: String(siteStats?.researchHubs ?? 3),
      label: en ? 'Research Hubs' : 'Pôles de recherche',
      sub: en ? 'Thematic pillars of systemic inquiry' : 'Axes thématiques d’enquête systémique',
    },
    {
      value: siteStats ? `${siteStats.teamMembers}+` : '',
      label: en ? 'Team Members' : 'Membres de l’équipe',
      sub: en ? 'Faculty, community partners & students' : 'Professeur.e.s, partenaires et étudiant.e.s',
    },
    {
      value: siteStats ? String(siteStats.researchProjects) : '',
      label: en ? 'Active Projects' : 'Projets actifs',
      sub: en ? 'Co-designed community initiatives' : 'Initiatives communautaires co-conçues',
    },
    {
      value: siteStats ? String(siteStats.communityPartners) : '',
      label: en ? 'Partner Organizations' : 'Organisations partenaires',
      sub: en ? 'Niagara-wide supportive ecosystem' : 'Écosystème de soutien à l’échelle de Niagara',
    },
  ].filter((s) => s.value !== '');

  const sectors = [
    { icon: HeartPulse, label: en ? 'Health Services' : 'Services de santé' },
    { icon: UserPlus, label: en ? 'Newcomer Services' : 'Services aux nouveaux arrivants' },
    { icon: GraduationCap, label: en ? 'Education & Libraries' : 'Éducation et bibliothèques' },
    { icon: Heart, label: en ? 'Social Services' : 'Services sociaux' },
    { icon: Users, label: en ? 'Youth Empowerment' : 'Autonomisation des jeunes' },
    { icon: Shield, label: en ? 'Government & Public Health' : 'Gouvernement et santé publique' },
  ];

  const network = [
    { value: String(siteStats?.communityPartners ?? 22), label: en ? 'Community Partners' : 'Partenaires communautaires' },
    { value: '10', label: en ? 'Service Categories' : 'Catégories de services' },
    { value: String(siteStats?.researchHubs ?? 3), label: en ? 'Research Hubs' : 'Pôles de recherche' },
    { value: '100%', label: en ? 'Community-Driven' : 'Axé sur la communauté' },
  ];

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-ink py-20 md:py-28">
        <img
          src="/community/health-literacy-symposium.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" aria-hidden="true" />
        <Container>
          <div className="eyebrow eyebrow-ochre mb-6 !text-white/80">
            {en ? 'Niagara research ecosystem' : 'Écosystème de recherche de Niagara'}
          </div>
          <h1 className="max-w-3xl !text-white">
            {en ? 'Our Collaborative Research Hubs' : 'Nos pôles de recherche collaboratifs'}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/80">
            {en
              ? 'Our research is organized into collaborative hubs, each focusing on specific aspects of community health, youth development, and social well-being in the Niagara region.'
              : 'Notre recherche est organisée en pôles collaboratifs, chacun axé sur des aspects précis de la santé communautaire, du développement des jeunes et du bien-être social dans la région de Niagara.'}
          </p>
        </Container>
      </section>

      {/* ── STATS ── */}
      {stats.length > 0 && (
        <section className="border-b border-stone-100 bg-white py-10">
          <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-stone-100 bg-paper p-6">
                <div className="text-4xl font-bold text-teal-600" style={{ fontFamily: 'var(--font-heading)' }}>
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-ink">{s.label}</div>
                <div className="mt-1 text-xs text-stone-500">{s.sub}</div>
              </div>
            ))}
          </Container>
        </section>
      )}

      {/* ── HUB PILLARS ── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'Systemic inquiry divisions' : 'Divisions d’enquête systémique'}
            title={en ? 'Active Pillars of Collaboration' : 'Piliers de collaboration actifs'}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hubs.map((hub) => {
              const s = hub.key ? HUB_STYLE[hub.key] : null;
              return (
                <Link
                  key={hub.id}
                  to={`/about/hubs/${hub.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {hub.image ? (
                    <img src={hub.image} alt="" className="h-48 w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-48 w-full bg-stone-50" aria-hidden="true" />
                  )}
                  <div className={`h-1 ${s?.solid ?? 'bg-teal-600'}`} aria-hidden="true" />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${s?.chip ?? 'bg-teal-50 text-teal-700'}`}>
                        <Users className="mr-1 inline h-3 w-3" />
                        {hub.members} {en ? 'Researchers' : 'Chercheur.e.s'}
                      </span>
                      <span className="rounded-md bg-stone-50 px-2.5 py-1 text-[11px] font-semibold text-stone-500">
                        {hub.projects} {en ? (hub.projects === 1 ? 'Project' : 'Projects') : hub.projects === 1 ? 'Projet' : 'Projets'}
                      </span>
                    </div>
                    <h3 className="mb-2">{hub.name}</h3>
                    {hub.leader && (
                      <p className="!mb-3 text-xs font-semibold text-ink">
                        {en ? 'Hub Leader' : 'Responsable du pôle'}: <span className="font-medium text-stone-500">{hub.leader}</span>
                      </p>
                    )}
                    <p className="line-clamp-4 flex-1 text-sm leading-relaxed">{hub.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                      {en ? 'View Hub Details' : 'Voir les détails du pôle'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── COMMUNITY NETWORK ── */}
      <section className="bg-teal-600 py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              onDark
              eyebrow={en ? 'Community partnerships' : 'Partenariats communautaires'}
              title={en ? 'A Relational, Democratic Network' : 'Un réseau relationnel et démocratique'}
              lede={
                en
                  ? 'Our research is co-led alongside Niagara organizations, ensuring academic inquiry translates directly into grass-roots advocacy and improved local policy.'
                  : 'Notre recherche est co-dirigée avec des organismes de Niagara afin que l’enquête universitaire se traduise directement en action de terrain et en politiques locales améliorées.'
              }
            />
            <Link to="/community" className="btn bg-ink text-white hover:bg-stone-600">
              {en ? 'Explore All Community Partners' : 'Découvrir tous les partenaires'}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {network.map((n) => (
              <div key={n.label} className="rounded-2xl bg-ink p-6">
                <div className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{n.value}</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">{n.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {en ? 'Active sectors & service categories' : 'Secteurs actifs et catégories de services'}
            </div>
            <ul className="mt-4 flex flex-wrap gap-3">
              {sectors.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white">
                  <Icon className="h-4 w-4 text-ochre-300" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── PARTNER CTA ── */}
      <section className="bg-ink py-20 md:py-24">
        <Container className="text-center">
          <Building2 className="mx-auto mb-6 h-8 w-8 text-ochre-400" aria-hidden="true" />
          <h2 className="!text-white">{en ? 'Become a Research Partner' : 'Devenez partenaire de recherche'}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg !text-white/75">
            {en
              ? 'Join a multi-sectoral initiative aiming to restructure how community knowledge is safeguarded and utilized. Let’s work together to co-create policy briefs, workshops, and supportive regional projects.'
              : 'Joignez une initiative multisectorielle qui vise à repenser la façon dont les savoirs communautaires sont protégés et utilisés. Travaillons ensemble à co-créer des notes de politique, des ateliers et des projets régionaux de soutien.'}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:contact@msk-niagara.ca" className="btn bg-teal-600 text-white hover:bg-teal-500">
              {en ? 'Contact Us' : 'Nous contacter'}
            </a>
            <Link to="/about/partnership" className="btn border-2 border-white/30 text-white hover:bg-white/10">
              {en ? 'Learn More' : 'En savoir plus'}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
