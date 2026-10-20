/**
 * Team Members page
 *
 * Structure follows the Figma "team-members" mockup (Brand Identity System,
 * page 16): hero with photo mosaic + stats, hub filter pills, Faculty /
 * Graduate Students / Community Co-Leaders groups, summary strip.
 *
 * NOTE: that mockup still carries the legacy red/black palette; here its
 * layout is implemented with the brand tokens (teal, ink, hub accents).
 */

import { useMemo, useState } from 'react';
import { Building2, GraduationCap, Mail, Target, User } from 'lucide-react';
import { sanitizeEmail } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Container, HUB_STYLE, hubKeyFor } from '../components/brand';
import { PageLoader } from '../components/PageLoader';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { pickLocale } from '../../lib/sanity/locale';
import { teamMembersQuery, type TeamMember } from '../../lib/sanity/queries/teamMember';
import { siteStatsQuery, type SiteStats } from '../../lib/sanity/queries/siteStats';
import { urlForImage } from '../../lib/sanity/image';

interface MemberView {
  id: string;
  name: string;
  role: string;
  hubSlug: string;
  hubName: string;
  institution: string;
  email?: string;
  type: string;
  isCoDirector?: boolean;
  isHubLeader?: boolean;
  isProjectLeader?: boolean;
  projectLeaderTitle?: string;
  image?: string;
  bio: string;
}

const MOSAIC = [
  { src: '/community/bilateral-conversation-yellow-glasses.jpg', alt: 'Community participant and researcher in discussion at an MSK event' },
  { src: '/community/researcher-presenting-brocku.jpg', alt: 'Researcher presenting findings to a community audience at Brock University' },
  { src: '/community/researcher-networking-postgathering.jpg', alt: 'Researcher in conversation with attendees after an event' },
  { src: '/community/researcher-greeting-attendees.jpg', alt: 'Researcher welcoming event attendees' },
];

export function MemberBios() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en ? 'Team Members | MSK Niagara' : 'Membres de l’équipe | MSK Niagara',
    en
      ? 'Meet the researchers, students, and community partners driving the MSK Niagara research partnership.'
      : 'Rencontrez les chercheurs, étudiants et partenaires communautaires qui animent le partenariat de recherche MSK Niagara.'
  );
  const [selectedHub, setSelectedHub] = useState<string>('All');

  const { data: rawMembers, loading } = useSanityQuery<TeamMember[]>(teamMembersQuery);
  const { data: siteStats } = useSanityQuery<SiteStats>(siteStatsQuery);

  const members: MemberView[] = useMemo(
    () =>
      (rawMembers ?? []).map((m) => ({
        id: m._id,
        name: m.name,
        role: pickLocale(m.role, language),
        hubSlug: m.hub?.slug ?? '',
        hubName: pickLocale(m.hub?.name, language),
        institution: pickLocale(m.institution, language),
        email: m.email,
        type: m.memberType ?? '',
        isCoDirector: m.isCoDirector,
        isHubLeader: m.isHubLeader,
        isProjectLeader: m.isProjectLeader,
        projectLeaderTitle: pickLocale(m.projectLeaderTitle, language),
        image: urlForImage(m.image)?.width(400).url(),
        bio: pickLocale(m.bio, language),
      })),
    [rawMembers, language]
  );

  // Filter pills are built from the hubs that actually have members.
  const hubOptions = useMemo(() => {
    const seen = new Map<string, string>();
    for (const m of members) if (m.hubName && !seen.has(m.hubName)) seen.set(m.hubName, m.hubName);
    return ['All', ...seen.keys()];
  }, [members]);

  const filtered = selectedHub === 'All' ? members : members.filter((m) => m.hubName === selectedHub);
  const groups = {
    faculty: filtered.filter((m) => m.type === 'faculty'),
    student: filtered.filter((m) => m.type === 'student'),
    community: filtered.filter((m) => m.type === 'community'),
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper">
        <PageLoader />
      </div>
    );
  }

  const mosaicStats = [
    { value: String(siteStats?.teamMembers ?? members.length), label: en ? 'Team Members' : 'Membres' },
    { value: String(siteStats?.researchHubs ?? 3), label: en ? 'Research Hubs' : 'Pôles' },
    { value: siteStats ? `${siteStats.institutions}+` : '', label: en ? 'Institutions' : 'Institutions' },
    { value: String(siteStats?.communityPartners ?? ''), label: en ? 'Community Partners' : 'Partenaires' },
  ];

  const sections = [
    {
      key: 'faculty' as const,
      icon: GraduationCap,
      title: en ? 'Faculty Researchers' : 'Professeur.e.s chercheur.e.s',
      list: groups.faculty,
    },
    {
      key: 'student' as const,
      icon: User,
      title: en ? 'Graduate Students & Research Assistants' : 'Étudiant.e.s diplômé.e.s et assistant.e.s de recherche',
      list: groups.student,
    },
    {
      key: 'community' as const,
      icon: Building2,
      title: en ? 'Community Co-Leaders' : 'Co-responsables communautaires',
      list: groups.community,
    },
  ];

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="bg-ink py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow eyebrow-ochre mb-6 !text-white/80">{en ? 'Our people' : 'Notre équipe'}</div>
            <h1 className="!text-white">
              {en ? (
                <>
                  The People <span className="text-ochre-400">Behind</span> the Research
                </>
              ) : (
                <>
                  L’équipe <span className="text-ochre-400">derrière</span> la recherche
                </>
              )}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed !text-white/75">
              {en
                ? 'Our multidisciplinary team brings together dedicated university faculty researchers, passionate graduate students, and trusted community co-leaders across Niagara to co-create knowledge for systemic change.'
                : 'Notre équipe multidisciplinaire réunit des professeur.e.s chercheur.e.s, des étudiant.e.s diplômé.e.s passionné.e.s et des co-responsables communautaires de confiance de toute la région de Niagara pour co-créer des savoirs au service du changement systémique.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {MOSAIC.map((photo, i) => (
              <div key={photo.src} className="relative h-44 overflow-hidden rounded-2xl">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" aria-hidden="true" />
                {mosaicStats[i]?.value && (
                  <div className="absolute bottom-3 left-3">
                    <div className="text-2xl font-bold leading-none text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      {mosaicStats[i].value}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-white/80">{mosaicStats[i].label}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── HUB FILTER ── */}
      <div className="border-b border-stone-100 bg-white">
        <Container className="py-5">
          <Tabs value={selectedHub} onValueChange={setSelectedHub}>
            <div className="-mx-1 overflow-x-auto px-1 scrollbar-hide">
              <TabsList
                aria-label={en ? 'Filter by hub' : 'Filtrer par pôle'}
                className="inline-flex h-auto min-w-min gap-2 bg-transparent p-0"
              >
                {hubOptions.map((hub) => (
                  <TabsTrigger
                    key={hub}
                    value={hub}
                    className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-stone-50 data-[state=active]:border-teal-600 data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    {hub === 'All' ? (en ? 'All Members' : 'Tous les membres') : hub}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </Container>
      </div>

      {/* ── MEMBER GROUPS ── */}
      <Container className="py-14 md:py-20">
        {sections.map(
          ({ key, icon: Icon, title, list }) =>
            list.length > 0 && (
              <section key={key} className="mb-14 last:mb-0">
                <h2 className="mb-6 flex items-center gap-3 !text-[1.625rem]">
                  <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  {title}
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {list.map((m, i) => (
                    <MemberCard key={m.id} member={m} en={en} index={i} />
                  ))}
                </div>
              </section>
            )
        )}

        {/* Summary strip */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { icon: GraduationCap, value: groups.faculty.length, label: en ? 'Faculty Researchers' : 'Professeur.e.s chercheur.e.s' },
            { icon: User, value: groups.student.length, label: en ? 'Graduate Students' : 'Étudiant.e.s diplômé.e.s' },
            { icon: Building2, value: groups.community.length, label: en ? 'Community Partners' : 'Partenaires communautaires' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="text-2xl font-bold text-ink" style={{ fontFamily: 'var(--font-heading)' }}>{value}</div>
                <div className="text-xs text-stone-500">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function MemberCard({ member, en, index }: { member: MemberView; en: boolean; index: number }) {
  const hubKey = hubKeyFor(member.hubSlug);
  const accent = hubKey ? HUB_STYLE[hubKey].solid : 'bg-teal-600';
  const roles = member.role ? member.role.split(',').map((r) => r.trim()).filter(Boolean) : [];
  const canContact = member.email && (member.isHubLeader || member.isCoDirector);

  return (
    <article
      className="animate-fade-in-up flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
    >
      <div className={`h-1 ${accent}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14 shrink-0">
            {member.image && <AvatarImage src={member.image} alt={member.name} />}
            <AvatarFallback className="bg-teal-600 text-base font-semibold text-white">
              {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="break-words !text-[1.25rem] leading-tight">{member.name}</h3>
            {roles[0] && <p className="!mb-0 mt-1 text-sm font-semibold text-teal-700">{roles[0]}</p>}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {roles.slice(1).map((r) => (
            <span key={r} className="rounded-md bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-500">{r}</span>
          ))}
          {member.hubName && (
            <span className="rounded-md bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-500">{member.hubName}</span>
          )}
          {member.isProjectLeader && member.projectLeaderTitle && (
            <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
              <Target className="h-3 w-3" aria-hidden="true" />
              {member.projectLeaderTitle}
            </span>
          )}
        </div>

        {member.institution && (
          <p className="!mb-0 mt-4 flex items-center gap-2 text-xs">
            <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {member.institution}
          </p>
        )}

        {member.bio && <p className="mt-4 flex-1 select-text break-words text-sm leading-relaxed">{member.bio}</p>}

        {canContact && (
          <a
            href={`mailto:${sanitizeEmail(member.email!)}`}
            className="btn btn-primary mt-2 w-fit !min-h-0 !px-5 !py-2 text-sm"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {member.isCoDirector ? (en ? 'Contact' : 'Contacter') : en ? 'Contact Hub Leader' : 'Contacter le responsable'}
          </a>
        )}
      </div>
    </article>
  );
}
