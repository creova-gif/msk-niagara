/**
 * Home Page
 *
 * Built to the Figma "msk-homepage" mockup (Brand Identity System, page 16).
 *
 * Sections:
 * 1. Hero              — eyebrow, serif headline, lede, two CTAs, partnership photo
 * 2. About             — partnership summary + four numbered goals
 * 3. Governance        — Implementation Council composition
 * 4. Research Hubs     — three hub cards (Ochre / Sage / Terracotta)
 * 5. Network band      — live counts from the CMS (teal band)
 * 6. Featured projects — CMS-driven
 * 7. Community partners— CMS-driven
 * 8. Publications      — CMS-driven
 * 9. Events            — CMS-driven
 * 10. Co-Directors     — CMS-driven
 * 11. Get involved     — role-based entry points (ink band)
 *
 * CMS-driven sections render only when Sanity returns content, so the page
 * never shows empty shells or invented placeholder copy.
 *
 * Fully bilingual (EN/FR); land acknowledgment lives in the global footer.
 */

import { useMemo } from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from '../components/LocalizedLink';
import { usePageMeta } from '../hooks/usePageMeta';
import { Container, HUB_STYLE, SectionHeading, hubKeyFor, type HubKey } from '../components/brand';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { pickLocale } from '../../lib/sanity/locale';
import { urlForImage } from '../../lib/sanity/image';
import { coDirectorsQuery, type TeamMember } from '../../lib/sanity/queries/teamMember';
import { siteStatsQuery, type SiteStats } from '../../lib/sanity/queries/siteStats';
import { researchProjectsQuery, type ResearchProject } from '../../lib/sanity/queries/researchProject';
import { partnersNetworkQuery, type CommunityPartner } from '../../lib/sanity/queries/communityPartner';
import { publicationsQuery, type Publication } from '../../lib/sanity/queries/publication';
import { timelineEventsQuery, type TimelineEvent } from '../../lib/sanity/queries/timelineEvent';

const STATUS_LABEL: Record<string, { en: string; fr: string }> = {
  active: { en: 'Ongoing', fr: 'En cours' },
  recruiting: { en: 'Recruiting', fr: 'Recrutement' },
  completed: { en: 'Completed', fr: 'Terminé' },
  planning: { en: 'Planning', fr: 'Planification' },
};

export function Home() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en
      ? 'MSK Niagara | Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara'
      : 'MSK Niagara | Mobiliser les savoirs marginalisés pour un Niagara juste et inclusif',
    en
      ? 'A transnational, university-community partnership at Brock University mobilizing knowledge for social justice in the Niagara region. Funded by SSHRC.'
      : "Un partenariat transnational université-communauté à l'Université Brock qui mobilise les savoirs pour la justice sociale dans la région de Niagara. Financé par le CRSH."
  );

  const { data: siteStats } = useSanityQuery<SiteStats>(siteStatsQuery);
  const { data: rawCoDirectors } = useSanityQuery<TeamMember[]>(coDirectorsQuery);
  const { data: projects } = useSanityQuery<ResearchProject[]>(researchProjectsQuery);
  const { data: partners } = useSanityQuery<CommunityPartner[]>(partnersNetworkQuery);
  const { data: publications } = useSanityQuery<Publication[]>(publicationsQuery);
  const { data: events } = useSanityQuery<TimelineEvent[]>(timelineEventsQuery);

  const coDirectors = useMemo(
    () =>
      (rawCoDirectors ?? []).map((m) => ({
        id: m._id,
        name: m.name,
        title: pickLocale(m.role, language),
        image: urlForImage(m.image)?.width(200).height(200).url(),
      })),
    [rawCoDirectors, language]
  );

  const featuredProjects = useMemo(() => (projects ?? []).slice(0, 3), [projects]);
  const featuredPartners = useMemo(() => (partners ?? []).slice(0, 8), [partners]);
  const latestPublications = useMemo(() => (publications ?? []).slice(0, 3), [publications]);
  const upcomingEvents = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    return (events ?? []).filter((e) => e.dateValue >= today).slice(0, 3);
  }, [events]);

  const formatDate = (iso: string) =>
    new Date(`${iso}T12:00:00`).toLocaleDateString(en ? 'en-CA' : 'fr-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const goals = en
    ? [
        'Provide a forum for African descendant and foreign-born persons in Niagara to share their experiences, knowledge and accomplishments',
        'Provide community organizations with insights and tools to develop culturally responsive services',
        'Contribute to scholarship',
        'Provide training and mentoring for student and community-based researchers',
      ]
    : [
        "Offrir aux personnes d'ascendance africaine et aux personnes nées à l'étranger de Niagara une tribune pour partager leurs expériences, leurs connaissances et leurs réalisations",
        'Fournir aux organismes communautaires des perspectives et des outils pour développer des services adaptés à différentes réalités culturelles',
        'Contribuer à la recherche',
        'Offrir de la formation et du mentorat aux étudiant.e.s et aux chercheur.e.s communautaires',
      ];
  const goalTile = ['bg-ochre-500', 'bg-sage-500', 'bg-teal-600', 'bg-terra-500'];

  const council = [
    {
      value: '2',
      accent: 'bg-teal-600',
      label: en ? 'Co-Directors' : 'Codirection',
      text: en
        ? 'Shared leadership guiding the partnership and its collaborative priorities.'
        : 'Une direction partagée qui oriente le partenariat et ses priorités collaboratives.',
    },
    {
      value: '6',
      accent: 'bg-ochre-500',
      label: en ? 'Hub Representatives' : 'Représentant.e.s des pôles',
      text: en
        ? '2 from each Hub: 1 community organization representative + 1 faculty member.'
        : '2 par pôle : 1 représentant.e d’un organisme communautaire + 1 membre du corps professoral.',
    },
    {
      value: '2',
      accent: 'bg-ochre-500',
      label: en ? 'At-Large Student Representatives' : 'Représentant.e.s étudiant.e.s',
      text: en
        ? 'Student voices from across the partnership, selected to ensure diverse perspectives.'
        : 'Des voix étudiantes de l’ensemble du partenariat, choisies pour assurer des perspectives diversifiées.',
    },
  ];

  const hubs: { key: HubKey; title: string; desc: string }[] = [
    {
      key: 'childhood',
      title: en ? 'Childhood & Growing Up' : 'Enfance et croissance',
      desc: en
        ? 'Exploring how children and youth from newcomer, racialized, and marginalized families experience growing up and navigating developmental spaces in Niagara.'
        : 'Explorer comment les enfants et les jeunes de familles nouvellement arrivées, racisées et marginalisées vivent leur croissance et leurs espaces de développement à Niagara.',
    },
    {
      key: 'health',
      title: en ? 'Health Literacy' : 'Littératie en santé',
      desc: en
        ? 'Investigating how communities navigate health information, services, and systems to co-design inclusive pathways to holistic well-being.'
        : 'Étudier comment les communautés s’orientent dans l’information, les services et les systèmes de santé afin de co-concevoir des parcours inclusifs vers le bien-être global.',
    },
    {
      key: 'identity',
      title: en ? 'Identity, Connections & Belonging' : 'Identité, liens et appartenance',
      desc: en
        ? 'Understanding identity, social connections, lived experiences of intersectionality, and belonging among diverse communities.'
        : 'Comprendre l’identité, les liens sociaux, les expériences vécues d’intersectionnalité et l’appartenance au sein de communautés diversifiées.',
    },
  ];

  const networkStats = [
    { value: siteStats?.communityPartners, label: en ? 'Community partners' : 'Partenaires communautaires', plus: true },
    { value: siteStats?.researchHubs, label: en ? 'Research hubs' : 'Pôles de recherche' },
    { value: siteStats?.researchProjects, label: en ? 'Research projects' : 'Projets de recherche' },
    { value: siteStats?.publications, label: en ? 'Publications & outputs' : 'Publications et productions', plus: true },
  ].filter((s) => typeof s.value === 'number' && s.value > 0);

  const involvement = [
    {
      title: en ? 'For Community Members' : 'Pour les membres de la communauté',
      text: en
        ? 'Share your lived experience, participate in dialogue circles, and help direct how research is conducted in your neighborhood.'
        : 'Partagez votre vécu, participez aux cercles de dialogue et aidez à orienter la façon dont la recherche est menée dans votre quartier.',
      cta: en ? 'View Active Studies' : 'Voir les études actives',
      to: '/research/projects',
    },
    {
      title: en ? 'For Researchers' : 'Pour les chercheur.e.s',
      text: en
        ? 'Collaborate on peer projects, access open-access publications, or mentor students studying structural intersectionality.'
        : 'Collaborez à des projets entre pairs, accédez aux publications en libre accès ou encadrez des étudiant.e.s en intersectionnalité structurelle.',
      cta: en ? 'Explore Open Science' : 'Explorer la science ouverte',
      to: '/research/knowledge',
    },
    {
      title: en ? 'For Organizations' : 'Pour les organisations',
      text: en
        ? 'Co-develop localized programs, consult our health literacy findings, or join the Implementation Council as a partner.'
        : 'Co-élaborez des programmes locaux, consultez nos résultats en littératie en santé ou joignez le Conseil de mise en œuvre à titre de partenaire.',
      cta: en ? 'Become a Partner' : 'Devenir partenaire',
      to: '/partners',
    },
  ];

  return (
    <div className="bg-paper">
      {/* ── 1. HERO ── */}
      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <div className="eyebrow eyebrow-ochre mb-6">
              {en ? 'SSHRC-funded partnership' : 'Partenariat financé par le CRSH'}
            </div>
            <h1 className="animate-fade-in-up">
              {en
                ? 'Mobilizing Knowledge for a Just & Inclusive Niagara'
                : 'Mobiliser les savoirs pour un Niagara juste et inclusif'}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              {en
                ? 'A major SSHRC-funded research partnership connecting Brock University with community organizations across the Niagara region, centering the knowledge of newcomer, racialized, and marginalized communities.'
                : 'Un important partenariat de recherche financé par le CRSH qui relie l’Université Brock à des organismes communautaires de la région de Niagara et place au centre les savoirs des communautés nouvellement arrivées, racisées et marginalisées.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about/members" className="btn btn-primary">
                {en ? 'Meet the Team' : 'Rencontrer l’équipe'}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/partners" className="btn btn-secondary">
                {en ? 'Our Partnerships' : 'Nos partenariats'}
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/community/researcher-networking-postgathering.jpg"
              alt={
                en
                  ? 'MSK researchers and community partners gathered after a partnership event'
                  : 'Chercheur.e.s MSK et partenaires communautaires réunis après un événement du partenariat'
              }
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </Container>
      </section>

      {/* ── 2. ABOUT THE PARTNERSHIP ── */}
      <section id="mission" className="pb-16 md:pb-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'About the partnership' : 'À propos du partenariat'}
            accent="ochre"
            title={
              en
                ? 'Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara'
                : 'Mobiliser les savoirs marginalisés pour un Niagara juste et inclusif'
            }
            lede={
              en
                ? 'A transnational, university-community partnership funded by the Social Sciences and Humanities Research Council (SSHRC). Our interdisciplinary team of faculty, students and community organizations is committed to fostering a more just and inclusive Niagara. Our work is informed by the principles of social justice and a desire to mobilize voices that have been marginalized from the dominant knowledge structures that maintain and enhance power in society.'
                : 'Un partenariat transnational université-communauté financé par le Conseil de recherches en sciences humaines (CRSH). Notre équipe interdisciplinaire de professeur.e.s, d’étudiant.e.s et d’organismes communautaires s’engage à bâtir un Niagara plus juste et inclusif. Nos travaux s’inspirent des principes de justice sociale et du désir de donner la parole aux personnes marginalisées par les structures de savoir dominantes qui maintiennent et renforcent leur pouvoir dans la société.'
            }
          />

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal, i) => (
              <li key={i} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${goalTile[i]}`}
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 !mb-0 text-sm leading-relaxed">{goal}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 flex items-center justify-center gap-4 text-center text-sm font-medium !text-ink">
            <span className="hidden h-px w-10 bg-stone-200 sm:block" aria-hidden="true" />
            {en
              ? 'Through community-based participatory research and knowledge mobilization conducted in English, French and Spanish'
              : 'Par la recherche participative communautaire et la mobilisation des connaissances menées en anglais, en français et en espagnol'}
            <span className="hidden h-px w-10 bg-stone-200 sm:block" aria-hidden="true" />
          </p>
        </Container>
      </section>

      {/* ── 3. GOVERNANCE ── */}
      <section className="border-y border-stone-100 bg-stone-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={en ? 'Governance structure' : 'Structure de gouvernance'}
            title={en ? 'The Implementation Council' : 'Le Conseil de mise en œuvre'}
            lede={
              en
                ? 'Even though we work from 3 distinct Hubs and 5 projects, the MSK initiative is governed by a unifying structure — the Implementation Council (IC) — in which each Hub and each project is valued in its interactions with other Hubs and projects.'
                : 'Bien que nous travaillions à partir de trois pôles et de cinq projets distincts, l’initiative MSK est régie par une structure unificatrice — le Conseil de mise en œuvre (CM) — au sein de laquelle chaque pôle et chaque projet est valorisé dans ses interactions avec les autres.'
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
              <div className="eyebrow">{en ? 'Total membership' : 'Total des membres'}</div>
              <div className="mt-3 text-5xl font-bold text-ink" style={{ fontFamily: 'var(--font-heading)' }}>10</div>
              <p className="mt-1 !mb-0 text-sm">{en ? 'Members' : 'Membres'}</p>
            </div>
            {council.map((c) => (
              <div key={c.label} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className={`h-5 w-1 rounded-full ${c.accent}`} aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">{c.label}</span>
                </div>
                <div className="mt-3 text-4xl font-bold text-ink" style={{ fontFamily: 'var(--font-heading)' }}>{c.value}</div>
                <p className="mt-2 !mb-0 text-sm">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <p className="flex items-center gap-3 rounded-xl border border-stone-100 bg-white px-5 py-4 text-sm !mb-0 shadow-sm">
              <span className="h-5 w-1 shrink-0 rounded-full bg-ochre-500" aria-hidden="true" />
              {en
                ? 'Hub and student representatives are chosen by Hub members, based on the principle of annual rotating membership so that all interested participants may serve if they wish.'
                : 'Les représentant.e.s des pôles et les représentant.e.s étudiant.e.s sont choisi.e.s par les membres des pôles, selon le principe d’une rotation annuelle permettant à toute personne intéressée de s’impliquer.'}
            </p>
            <p className="flex items-center gap-3 rounded-xl border border-stone-100 bg-white px-5 py-4 text-sm !mb-0 shadow-sm">
              <span className="h-5 w-1 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
              {en
                ? 'The IC is the body where important decisions regarding governance and administration are made by consensus.'
                : 'Le CM est l’instance où les décisions importantes concernant la gouvernance et l’administration sont prises par consensus.'}
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. RESEARCH HUBS ── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'Three pillars of inquiry' : 'Trois axes de recherche'}
            title={en ? 'Our Collaborative Research Hubs' : 'Nos pôles de recherche collaboratifs'}
            lede={
              en
                ? 'Addressing systemic inequities through community-led research divisions tailored to specific socio-cultural dynamics in the Niagara region.'
                : 'S’attaquer aux inégalités systémiques grâce à des pôles de recherche dirigés par la communauté et adaptés aux dynamiques socioculturelles propres à la région de Niagara.'
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hubs.map((hub) => {
              const s = HUB_STYLE[hub.key];
              return (
                <Link
                  key={hub.key}
                  to={s.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`h-1 ${s.solid}`} aria-hidden="true" />
                  <div className="flex flex-1 flex-col p-7">
                    <span className={`mb-5 inline-flex w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${s.chip}`}>
                      {en ? 'Hub' : 'Pôle'} {s.number}
                    </span>
                    <h3 className="mb-3">{hub.title}</h3>
                    <p className="!mb-0 text-sm leading-relaxed">{hub.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 border-t border-stone-100 px-7 py-4 text-sm font-semibold text-teal-700">
                    {en ? 'Explore Hub' : 'Explorer le pôle'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. NETWORK BAND ── */}
      {networkStats.length > 0 && (
        <section className="bg-teal-600 py-16 md:py-20">
          <Container>
            <SectionHeading
              onDark
              eyebrow={en ? 'Niagara-wide network' : 'Réseau à l’échelle de Niagara'}
              title={en ? 'Connecting Research, Community & Knowledge' : 'Relier recherche, communauté et savoirs'}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {networkStats.map((s, i) => (
                <div key={s.label} className="rounded-2xl bg-ink p-6">
                  <div className="text-sm text-white/60">{String(i + 1).padStart(2, '0')}</div>
                  <div className="mt-4 text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(s.value).padStart(2, '0')}
                    {s.plus ? '+' : ''}
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 6. FEATURED PROJECTS ── */}
      {featuredProjects.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={en ? 'Active partnerships' : 'Partenariats actifs'}
                title={en ? 'Featured Research Projects' : 'Projets de recherche en vedette'}
                lede={
                  en
                    ? 'A look at our ongoing inquiry projects addressing key systemic issues in the Niagara peninsula.'
                    : 'Un aperçu de nos projets de recherche en cours portant sur des enjeux systémiques de la péninsule du Niagara.'
                }
              />
              <Link to="/research/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600">
                {en ? 'All projects' : 'Tous les projets'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredProjects.map((p) => {
                const key = hubKeyFor(p.hub?.slug);
                const hubStyle = key ? HUB_STYLE[key] : null;
                const status = p.status ? STATUS_LABEL[p.status] : undefined;
                return (
                  <Link
                    key={p._id}
                    to="/research/projects"
                    className="group flex flex-col rounded-2xl border border-stone-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      {hubStyle ? (
                        <span className={`rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${hubStyle.chip}`}>
                          {pickLocale(p.hub?.name, language)}
                        </span>
                      ) : (
                        <span />
                      )}
                      {status && (
                        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-stone-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
                          {en ? status.en : status.fr}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-3">{pickLocale(p.title, language)}</h3>
                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed">
                      {pickLocale(p.tldr ?? p.description, language)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                      {en ? 'Read Project Details' : 'Lire les détails du projet'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── 7. COMMUNITY PARTNERS ── */}
      {featuredPartners.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={en ? 'Institutional ecosystem' : 'Écosystème institutionnel'}
                title={en ? 'Our Community Partners' : 'Nos partenaires communautaires'}
              />
              <Link to="/partners" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600">
                {en ? 'View All Partners' : 'Voir tous les partenaires'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredPartners.map((p) => (
                <li
                  key={p._id}
                  className="flex min-h-[88px] items-center rounded-xl border border-stone-100 bg-white px-6 py-5 text-sm font-semibold text-stone-500"
                >
                  {pickLocale(p.name, language)}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── 8. PUBLICATIONS ── */}
      {latestPublications.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow={en ? 'Knowledge transfer' : 'Transfert des connaissances'}
              title={en ? 'Latest Publications & Policy Briefs' : 'Dernières publications et notes de politique'}
              lede={
                en
                  ? 'Access downloadable reports, academic journal preprints, and actionable policy recommendations.'
                  : 'Accédez à des rapports téléchargeables, à des prépublications universitaires et à des recommandations de politique concrètes.'
              }
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {latestPublications.map((pub) => {
                const key = hubKeyFor(pub.hub?.slug);
                const dot = key ? HUB_STYLE[key].solid : 'bg-teal-600';
                return (
                  <article key={pub._id} className="flex flex-col rounded-2xl border border-stone-100 bg-white p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        {pickLocale(pub.type, language) || (en ? 'Publication' : 'Publication')}
                      </span>
                      <span className={`h-1.5 w-5 rounded-full ${dot}`} aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 !text-[1.125rem] !leading-snug">{pickLocale(pub.title, language)}</h3>
                    <p className="flex-1 text-sm">{pickLocale(pub.authors, language)}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-ink">
                      {pickLocale(pub.date, language) || pub.year}
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={en ? 'Download publication' : 'Télécharger la publication'}
                          className="text-teal-700 hover:text-teal-600"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── 9. EVENTS ── */}
      {upcomingEvents.length > 0 && (
        <section className="border-t border-stone-100 py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={en ? 'Current activity' : 'Activité en cours'}
                title={en ? 'Upcoming Events' : 'Événements à venir'}
              />
              <Link to="/timeline" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600">
                {en ? 'Timeline & Events' : 'Chronologie et événements'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {upcomingEvents.map((ev) => (
                <div key={ev._id} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                  <div className="text-sm font-medium text-water">
                    {formatDate(ev.dateValue)}
                    {ev.time ? ` • ${ev.time}` : ''}
                  </div>
                  <h3 className="mt-3 !text-[1.25rem] !leading-snug">{pickLocale(ev.title, language)}</h3>
                  {ev.location && (
                    <p className="mt-4 !mb-0 flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 shrink-0 text-stone-300" />
                      {pickLocale(ev.location, language)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 10. CO-DIRECTORS ── */}
      {coDirectors.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <SectionHeading
              align="center"
              eyebrow={en ? 'Leadership' : 'Direction'}
              title={en ? 'Co-Directors' : 'Codirection'}
            />
            <ul className="mt-10 flex flex-wrap justify-center gap-6">
              {coDirectors.map((d) => (
                <li key={d.id} className="flex w-72 flex-col items-center rounded-2xl border border-stone-100 bg-paper p-8 text-center">
                  <Avatar className="h-24 w-24">
                    {d.image && <AvatarImage src={d.image} alt={d.name} />}
                    <AvatarFallback className="bg-teal-600 text-lg font-semibold text-white">
                      {d.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-5 !text-[1.25rem]">{d.name}</h3>
                  <p className="mt-1 !mb-0 text-sm">{d.title}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── 11. GET INVOLVED ── */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            onDark
            eyebrow={en ? 'Sustaining community-led growth' : 'Soutenir une croissance dirigée par la communauté'}
            title={en ? 'Get Involved with MSK' : 'Participez à MSK'}
            lede={
              en
                ? 'Our work is fundamentally relational. Explore how you can participate, contribute to research, or partner with us to drive a more just Niagara.'
                : 'Notre travail est fondamentalement relationnel. Découvrez comment participer, contribuer à la recherche ou vous associer à nous pour bâtir un Niagara plus juste.'
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {involvement.map((card) => (
              <div key={card.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="!text-white">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed !text-white/70">{card.text}</p>
                <Link
                  to={card.to}
                  className="btn mt-6 w-full bg-teal-600 text-white hover:bg-teal-500"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
