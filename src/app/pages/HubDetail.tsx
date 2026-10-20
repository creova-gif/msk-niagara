/**
 * Research Hub detail page
 *
 * Built to the Figma hub-detail mockups (hub-detail-childhood,
 * health-literacy-hub, identity-hub-detail — Brand Identity System, page 16).
 * One template, themed by hub: Ochre (Childhood), Sage (Health Literacy),
 * Terracotta (Identity, Connections & Belonging).
 */

import { useMemo } from 'react';
import { useParams } from 'react-router';
import { ArrowLeft, ArrowRight, BookOpen, Building2, GraduationCap, Mail, User } from 'lucide-react';
import { sanitizeEmail } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from '../components/LocalizedLink';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { RisingBubbles, HeartbeatLine, Constellation } from '../components/HeroAnimations';
import { Container, HUB_STYLE, SectionHeading, hubKeyFor } from '../components/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageLoader } from '../components/PageLoader';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { researchHubBySlugQuery, type ResearchHub } from '../../lib/sanity/queries/researchHub';
import { teamMembersByHubSlugQuery, type TeamMember } from '../../lib/sanity/queries/teamMember';
import { urlForImage } from '../../lib/sanity/image';
import { pickLocale } from '../../lib/sanity/locale';

export function HubDetail() {
  const { language } = useLanguage();
  const en = language === 'en';
  const { hubId } = useParams<{ hubId: string }>();

  const { data: rawHub, loading: hubLoading } = useSanityQuery<ResearchHub | null>(
    researchHubBySlugQuery,
    { slug: hubId ?? '' }
  );
  const { data: rawMembers, loading: membersLoading } = useSanityQuery<TeamMember[]>(
    teamMembersByHubSlugQuery,
    { slug: hubId ?? '' }
  );

  const hubKey = hubKeyFor(hubId);
  const style = hubKey ? HUB_STYLE[hubKey] : null;
  // Unknown hub slugs fall back to the core brand teal.
  const accent = {
    solid: style?.solid ?? 'bg-teal-600',
    chip: style?.chip ?? 'bg-teal-50 text-teal-700',
    btn: style?.btn ?? 'btn-primary',
    hex: style?.hex ?? '#0B4F5C',
    dot: style?.solid ?? 'bg-teal-600',
    textOnDark: style?.textOnDark ?? 'text-teal-200',
  };

  const hubName = rawHub ? pickLocale(rawHub.name, language) : '';
  const hubDescription = rawHub ? pickLocale(rawHub.description, language) : '';

  usePageMeta(
    rawHub ? `${hubName} | MSK Niagara` : 'Research Hubs | MSK Niagara',
    rawHub ? hubDescription.slice(0, 180) : undefined
  );

  const members = useMemo(
    () =>
      (rawMembers ?? []).map((m) => ({
        id: m._id,
        name: m.name,
        role: pickLocale(m.role, language),
        institution: pickLocale(m.institution, language),
        email: m.email,
        type: m.memberType,
        isHubLeader: m.isHubLeader,
        image: urlForImage(m.image)?.width(200).height(200).url(),
        bio: pickLocale(m.bio, language),
      })),
    [rawMembers, language]
  );

  if (hubLoading || membersLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  if (!rawHub) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>{en ? 'Hub not found' : 'Pôle introuvable'}</p>
      </div>
    );
  }

  const cover = urlForImage(rawHub.coverImage)?.width(1600).url();
  const objectives = rawHub.objectives.map((o) => pickLocale(o, language));
  const projects = (rawHub.highlightProjects ?? []).map((p) => ({
    title: pickLocale(p.title, language),
    description: pickLocale(p.description, language),
  }));
  const faculty = members.filter((m) => m.type === 'faculty');
  const students = members.filter((m) => m.type === 'student');
  const community = members.filter((m) => m.type === 'community');

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-ink py-16 md:py-24">
        {cover && (
          <img src={cover} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" aria-hidden="true" />
        <div className={`absolute inset-x-0 top-0 h-1.5 ${accent.solid}`} aria-hidden="true" />
        {/* Hub-specific thematic animation */}
        <div className="pointer-events-none absolute inset-0 -z-[5]" aria-hidden="true">
          {hubId === 'childhood' && <RisingBubbles color={accent.hex} />}
          {hubId === 'health' && <HeartbeatLine color={accent.hex} />}
          {hubId === 'identity' && <Constellation color={accent.hex} />}
        </div>

        <Container>
          <Link
            to="/about/hubs"
            className="mb-10 flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {en ? 'Back to Research Hubs' : 'Retour aux pôles de recherche'}
          </Link>

          <span className={`mb-5 inline-flex rounded-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ${accent.solid}`}>
            {en ? 'Research Hub' : 'Pôle de recherche'}
            {style ? ` ${style.number}` : ''}
          </span>
          <h1 className="max-w-4xl break-words !text-white">{hubName}</h1>
          <p className="mt-3 text-sm font-medium text-white/80">
            {members.length} {en ? 'Team Members' : 'Membres de l’équipe'}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed !text-white/85">{hubDescription}</p>
        </Container>
      </section>

      {/* ── OBJECTIVES ── */}
      {objectives.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <SectionHeading
              eyebrow={en ? 'Pillar objectives' : 'Objectifs du pôle'}
              accent={hubKey === 'childhood' ? 'ochre' : hubKey === 'health' ? 'sage' : hubKey === 'identity' ? 'terra' : 'teal'}
              title={en ? 'Research Objectives' : 'Objectifs de recherche'}
            />
            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {objectives.map((objective, i) => (
                <li key={i} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {en ? 'Objective' : 'Objectif'} {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`h-1 w-6 rounded-full ${accent.solid}`} aria-hidden="true" />
                  </div>
                  <p className="!mb-0 break-words text-lg leading-snug !text-ink" style={{ fontFamily: 'var(--font-heading)' }}>
                    {objective}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* ── PROJECTS ── */}
      {projects.length > 0 && (
        <section className="border-y border-stone-100 bg-stone-50 py-16 md:py-20">
          <Container>
            <SectionHeading
              eyebrow={en ? 'Active initiatives' : 'Initiatives en cours'}
              title={en ? 'Research Projects' : 'Projets de recherche'}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project, i) => (
                <article key={i} className="rounded-2xl border border-stone-100 bg-white p-7 shadow-sm">
                  <span className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg ${accent.chip}`}>
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="mb-3 break-words !text-[1.375rem]">{project.title}</h3>
                  <p className="break-words text-sm leading-relaxed">{project.description}</p>
                  <Link
                    to="/research/projects"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600"
                  >
                    {en ? 'View Project Details' : 'Voir les détails du projet'} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── TEAM ── */}
      {members.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <SectionHeading
              eyebrow={en ? 'Collaborative leadership' : 'Leadership collaboratif'}
              title={`${en ? 'Hub Team Members' : 'Membres de l’équipe du pôle'} (${members.length})`}
            />

            {faculty.length > 0 && (
              <div className="mt-10">
                <h3 className="mb-5 flex items-center gap-3 !text-[1.25rem]">
                  <GraduationCap className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  {en ? 'Faculty Researchers' : 'Professeur.e.s chercheur.e.s'}
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  {faculty.map((m) => (
                    <MemberCard key={m.id} member={m} en={en} dot={accent.dot} />
                  ))}
                </div>
              </div>
            )}

            {(students.length > 0 || community.length > 0) && (
              <div className="mt-12 grid gap-10 md:grid-cols-2">
                {students.length > 0 && (
                  <div>
                    <h3 className="mb-5 flex items-center gap-3 !text-[1.25rem]">
                      <User className="h-5 w-5 text-teal-600" aria-hidden="true" />
                      {en ? 'Student Researchers' : 'Étudiant.e.s chercheur.e.s'}
                    </h3>
                    <ul className="space-y-3">
                      {students.map((m) => (
                        <li key={m.id} className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white px-4 py-3">
                          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                          <div>
                            <div className="text-sm font-semibold text-ink">{m.name}</div>
                            <div className="text-xs text-stone-400">{[m.role, m.institution].filter(Boolean).join(' • ')}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {community.length > 0 && (
                  <div>
                    <h3 className="mb-5 flex items-center gap-3 !text-[1.25rem]">
                      <Building2 className="h-5 w-5 text-teal-600" aria-hidden="true" />
                      {en ? 'Community Partners' : 'Partenaires communautaires'}
                    </h3>
                    <ul className="space-y-3">
                      {community.map((m) => (
                        <li key={m.id} className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white px-4 py-3">
                          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                          <div>
                            <div className="text-sm font-semibold text-ink">{m.name}</div>
                            <div className="text-xs text-stone-400">{m.role || m.institution}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-ink py-20 md:py-24">
        <Container className="text-center">
          <div className={`eyebrow mb-4 ${accent.textOnDark} !text-white/70`}>
            {en ? 'Collaborative inquiry' : 'Recherche collaborative'}
          </div>
          <h2 className="!text-white">{en ? 'Get Involved with This Hub' : 'Participez à ce pôle'}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg !text-white/75">
            {en
              ? `Our work is fundamentally relational. Explore how community members, researchers, and organizations can join our ${hubName} division.`
              : `Notre travail est fondamentalement relationnel. Découvrez comment les membres de la communauté, les chercheur.e.s et les organisations peuvent se joindre à notre pôle ${hubName}.`}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/community" className={`btn ${accent.btn}`}>
              {en ? 'Partner With Us' : 'Devenez partenaire'}
            </Link>
            <Link to="/research/projects" className="btn border-2 border-white/30 text-white hover:bg-white/10">
              {en ? 'View All Projects' : 'Voir tous les projets'}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

interface MemberCardData {
  id: string;
  name: string;
  role: string;
  institution: string;
  email?: string;
  isHubLeader?: boolean;
  image?: string;
  bio: string;
}

function MemberCard({ member, en, dot }: { member: MemberCardData; en: boolean; dot: string }) {
  return (
    <div className="h-full rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14 shrink-0">
          {member.image && <AvatarImage src={member.image} alt={member.name} />}
          <AvatarFallback className="bg-teal-600 text-base font-semibold text-white">
            {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h4 className="break-words !font-[family-name:var(--font-heading)] !text-[1.25rem] !font-semibold leading-tight">
            {member.name}
          </h4>
          <p className="!mb-0 mt-1 break-words text-sm font-medium text-teal-700">{member.role}</p>
          {member.isHubLeader && (
            <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
              <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
              {en ? 'Hub Leader' : 'Responsable du pôle'}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-stone-400">
        {member.institution && (
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{member.institution}</span>
          </div>
        )}
        {member.email && (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={`mailto:${sanitizeEmail(member.email)}`} className="truncate text-teal-700 hover:underline">
              {member.email}
            </a>
          </div>
        )}
      </div>

      {member.bio && <p className="mt-4 line-clamp-4 break-words text-sm leading-relaxed">{member.bio}</p>}
    </div>
  );
}
