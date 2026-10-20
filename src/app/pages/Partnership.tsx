/**
 * Partnership (About MSK) page
 *
 * Built to the Figma "about-msk" mockup (Brand Identity System, page 16):
 * photographic hero, approach + goals, hubs, governance, co-directors,
 * partners and institutional sponsors. The mockup's sample milestone
 * timeline is not carried over — the real timeline lives on /timeline.
 */

import { useMemo } from 'react';
import { ArrowRight, ExternalLink, Users } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from '../components/LocalizedLink';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Container, HUB_STYLE, SectionHeading, type HubKey } from '../components/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { pickLocale } from '../../lib/sanity/locale';
import { partnershipFundersQuery, type CommunityPartner } from '../../lib/sanity/queries/communityPartner';
import { coDirectorsQuery, type TeamMember } from '../../lib/sanity/queries/teamMember';
import { urlForImage } from '../../lib/sanity/image';

export function Partnership() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en ? 'Partnership | MSK Niagara' : 'Partenariat | MSK Niagara',
    en
      ? 'Our academic & community network — how Brock University and Niagara community partners collaborate on the MSK research partnership.'
      : 'Notre réseau académique et communautaire — comment l’Université Brock et les partenaires communautaires du Niagara collaborent au partenariat de recherche MSK.'
  );

  const { data: rawPartners } = useSanityQuery<CommunityPartner[]>(partnershipFundersQuery);
  const { data: rawCoDirectors } = useSanityQuery<TeamMember[]>(coDirectorsQuery);

  const partners = useMemo(
    () =>
      (rawPartners ?? [])
        .filter((p) => p.category !== 'funder')
        .map((p) => ({
          id: p._id,
          name: pickLocale(p.name, language),
          type:
            p.category === 'research'
              ? en ? 'Academic Partner' : 'Partenaire académique'
              : en ? 'Community Partner' : 'Partenaire communautaire',
          url: p.website ?? '',
          logo: urlForImage(p.logo)?.width(240).url() ?? '',
        })),
    [rawPartners, language, en]
  );
  const funder = useMemo(() => {
    const f = (rawPartners ?? []).find((p) => p.category === 'funder');
    return f ? { name: pickLocale(f.name, language), logo: urlForImage(f.logo)?.width(200).url() } : null;
  }, [rawPartners, language]);

  const coDirectors = useMemo(
    () =>
      (rawCoDirectors ?? []).map((m) => ({
        id: m._id,
        name: m.name,
        role: pickLocale(m.role, language),
        institution: pickLocale(m.institution, language),
        bio: pickLocale(m.bio, language),
        image: urlForImage(m.image)?.width(240).height(240).url(),
      })),
    [rawCoDirectors, language]
  );

  const goals = en
    ? [
        'Provide a forum for African descendant and foreign-born persons in the Regional Municipality of Niagara to share their experiences, knowledge and accomplishments with non-profit, academic, government and para-public sectors.',
        'Provide community organizations with insights and tools to develop culturally responsive services.',
        'Contribute to scholarship.',
        'Provide training and mentoring for student and community-based researchers.',
      ]
    : [
        'Offrir un forum aux personnes d’ascendance africaine et nées à l’étranger dans la Municipalité régionale de Niagara pour partager leurs expériences, connaissances et réalisations avec les secteurs à but non lucratif, académique, gouvernemental et parapublic.',
        'Fournir aux organisations communautaires des outils pour développer des services culturellement adaptés.',
        'Contribuer au savoir académique.',
        'Offrir de la formation et du mentorat aux chercheurs étudiants et communautaires.',
      ];
  const goalTile = ['bg-ochre-500', 'bg-sage-500', 'bg-teal-600', 'bg-terra-500'];

  const hubs: { key: HubKey; title: string; desc: string }[] = [
    {
      key: 'childhood',
      title: en ? 'Childhood and Growing Up Hub' : 'Pôle Enfance et développement',
      desc: en
        ? 'Will listen to and respond to newcomer children with respect to their experiences in housing, sport/recreation and schooling.'
        : 'Écoute et répond aux enfants nouveaux arrivants concernant leur logement, sports et scolarité.',
    },
    {
      key: 'health',
      title: en ? 'Health Literacy Hub' : 'Pôle Littératie en santé',
      desc: en
        ? 'Will promote health literacy in immigrant and refugee populations through culturally responsive programs.'
        : 'Promeut la littératie en santé auprès des populations immigrantes et réfugiées.',
    },
    {
      key: 'identity',
      title: en ? 'Identity, Connections and Belonging Hub' : 'Pôle Identité, relations et appartenance',
      desc: en
        ? 'Hosts three distinct projects fostering belonging among Afro-descendants, gender-diverse newcomers, and seasonal agricultural workers.'
        : 'Héberge trois projets visant l’appartenance chez les Afro-descendants, les nouveaux arrivants de diverses identités de genre et les travailleurs agricoles saisonniers.',
    },
  ];

  const council = [
    { n: '10', label: en ? 'IC Members' : 'Membres du CM' },
    { n: '2', label: en ? 'Co-Directors' : 'Codirecteurs' },
    { n: '6', label: en ? 'Hub Representatives' : 'Représentants des pôles' },
    { n: '2', label: en ? 'Student Representatives' : 'Représentants étudiants' },
  ];

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-teal-600 py-20 md:py-28">
        <img
          src="/campus/st-catharines-birdseye.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-700/90 via-teal-600/70 to-teal-600/30" aria-hidden="true" />
        <Container>
          <div className="eyebrow eyebrow-ochre mb-6 !text-white/85">{en ? 'About MSK Niagara' : 'À propos de MSK Niagara'}</div>
          <h1 className="max-w-4xl !text-white">
            {en
              ? '“Mobilizing Subjugated Knowledges for a Just & Inclusive Niagara”'
              : '« Mobiliser les savoirs marginalisés pour un Niagara juste et inclusif »'}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/85">
            {en
              ? 'Academic institutions, community organizations, and funding partners — united to advance knowledge for a just Niagara.'
              : 'Institutions académiques, organisations communautaires et partenaires financiers — unis pour un Niagara juste.'}
          </p>
        </Container>
      </section>

      {/* ── APPROACH + GOALS ── */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm md:p-10">
            <div className="eyebrow eyebrow-ochre mb-4">{en ? 'Our approach' : 'Notre approche'}</div>
            <h2 className="!text-[1.75rem]">
              {en ? 'Democratic, Community-Engaged Research' : 'Une recherche démocratique et engagée auprès des communautés'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              {en
                ? 'MSK Niagara is a transnational, university-community partnership funded by the Social Sciences and Humanities Research Council (SSHRC). Our interdisciplinary team of faculty, students and community organizations is committed to fostering a more just and inclusive Niagara. Through community-based participatory research conducted in English, French and Spanish, we mobilize knowledge that challenges dominant power structures.'
                : 'MSK Niagara est un partenariat transnational université-communauté financé par le CRSH. Notre équipe interdisciplinaire mène des recherches participatives en anglais, français et espagnol pour mobiliser des connaissances qui défient les structures de pouvoir dominantes.'}
            </p>
          </div>

          <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm md:p-10">
            <div className="eyebrow mb-4">{en ? 'Through our research, we will' : 'Grâce à notre recherche, nous allons'}</div>
            <ol className="divide-y divide-stone-100">
              {goals.map((goal, i) => (
                <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white ${goalTile[i]}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="!mb-0 pt-0.5 text-sm leading-relaxed">{goal}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── HUBS ── */}
      <section className="border-y border-stone-100 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'Research hubs' : 'Pôles de recherche'}
            title={en ? 'Three Focused Hubs' : 'Trois pôles ciblés'}
            lede={
              en
                ? 'Our work is organized into three research hubs that focus on areas critical to community well-being.'
                : 'Notre travail est organisé en trois pôles de recherche axés sur des domaines essentiels au bien-être communautaire.'
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hubs.map((hub) => {
              const s = HUB_STYLE[hub.key];
              return (
                <Link
                  key={hub.key}
                  to={s.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`h-1 ${s.solid}`} aria-hidden="true" />
                  <div className="flex flex-1 flex-col p-7">
                    <span className={`mb-4 inline-flex w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${s.chip}`}>
                      {en ? 'Hub' : 'Pôle'} {s.number}
                    </span>
                    <h3 className="mb-3 !text-[1.375rem]">{hub.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed">{hub.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                      {en ? 'Explore Hub' : 'Explorer le pôle'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={en ? 'Structure' : 'Structure'}
            title={en ? 'Governance' : 'Gouvernance'}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {council.map((s) => (
              <div key={s.label} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                <span className="block h-1 w-5 rounded-full bg-teal-600" aria-hidden="true" />
                <div className="mt-4 text-4xl font-bold text-ink" style={{ fontFamily: 'var(--font-heading)' }}>{s.n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 !text-[1.25rem]">
                <Users className="h-5 w-5 text-teal-600" aria-hidden="true" />
                {en ? 'Implementation Council (IC)' : 'Conseil de mise en œuvre (CM)'}
              </h3>
              <p className="!mb-0 text-sm leading-relaxed">
                {en
                  ? 'Even though we work from 3 distinct Hubs and 5 projects, the MSK initiative is governed by the Implementation Council (IC) — a unifying body where each Hub and project is valued equally. The IC makes all important governance and administration decisions by consensus. Membership rotates annually so that all interested participants may serve.'
                  : 'Bien que nous travaillions à partir de 3 pôles distincts et 5 projets, l’initiative MSK est gouvernée par le Conseil de mise en œuvre (CM) — un organe unificateur où chaque pôle et projet est valorisé également. Le CM prend toutes les décisions importantes par consensus. La composition varie annuellement pour que tous les participants intéressés puissent siéger.'}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 !text-[1.25rem]">
                <Users className="h-5 w-5 text-teal-600" aria-hidden="true" />
                {en ? 'Hub Leaders & Co-Leaders' : 'Responsables et co-responsables des pôles'}
              </h3>
              <p className="!mb-0 text-sm leading-relaxed">
                {en
                  ? 'Each research hub is led or co-led by experienced university and/or community-based researchers who coordinate hub activities, facilitate collaboration, and ensure research quality. Hub and student representatives are chosen by Hub members based on the principle of annual rotating membership.'
                  : 'Chaque pôle de recherche est dirigé ou codirigé par des chercheurs universitaires et/ou communautaires expérimentés. Les représentants des pôles et des étudiants sont choisis par les membres du pôle selon le principe de rotation annuelle.'}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-teal-50 p-6 sm:flex-row sm:items-center">
            <p className="!mb-0 max-w-2xl text-sm !text-ink">
              {en
                ? 'We invite you to learn more about the unique and exciting work unfolding in our Hubs. While our activities are Niagara-focussed, we hope that all small and mid-sized centres can draw on our work.'
                : 'Nous vous invitons à en apprendre davantage sur le travail unique et passionnant qui se déroule dans nos pôles. Bien que nos activités soient axées sur Niagara, nous espérons que tous les petits et moyens centres pourront s’en inspirer.'}
            </p>
            <Link to="/about/hubs" className="btn btn-primary shrink-0">
              {en ? 'Explore Hubs' : 'Explorer les pôles'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CO-DIRECTORS ── */}
      {coDirectors.length > 0 && (
        <section className="border-y border-stone-100 bg-white py-16 md:py-24">
          <Container>
            <SectionHeading
              align="center"
              eyebrow={en ? 'Partnership leadership' : 'Direction du partenariat'}
              title={en ? 'Our Co-Directors' : 'Nos codirecteurs'}
              lede={
                en
                  ? 'Distinguished scholars whose collaborative vision anchors the MSK Niagara partnership across disciplines and communities.'
                  : 'Des chercheurs éminents dont la vision collaborative ancre le partenariat MSK Niagara à travers les disciplines et les communautés.'
              }
            />
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {coDirectors.map((d) => (
                <li key={d.id} className="flex flex-col items-center rounded-2xl border border-stone-100 bg-paper p-8 text-center">
                  <Avatar className="h-28 w-28">
                    {d.image && <AvatarImage src={d.image} alt={d.name} />}
                    <AvatarFallback className="bg-teal-600 text-xl font-semibold text-white">
                      {d.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-5 !text-[1.375rem]">{d.name}</h3>
                  {d.role && (
                    <p className="!mb-0 mt-1 text-xs font-semibold uppercase tracking-wider text-teal-700">{d.role}</p>
                  )}
                  {d.institution && <p className="!mb-0 mt-1 text-sm">{d.institution}</p>}
                  {d.bio && <p className="mt-4 !mb-0 line-clamp-5 text-sm leading-relaxed">{d.bio}</p>}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── PARTNERS ── */}
      {partners.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={en ? 'Network' : 'Réseau'}
                title={en ? 'Our Partners' : 'Nos partenaires'}
              />
              <Link to="/community" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600">
                {en ? 'All partners' : 'Tous les partenaires'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((p) => {
                const body = (
                  <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-stone-100 bg-white p-6 text-center transition-all duration-300 hover:border-teal-200 hover:shadow-md">
                    {p.logo && <img src={p.logo} alt="" className="max-h-14 max-w-[150px] object-contain" loading="lazy" />}
                    <div>
                      <p className="!mb-0 text-sm font-semibold leading-snug text-ink">{p.name}</p>
                      <p className="!mb-0 mt-1 text-[11px] font-medium uppercase tracking-wide text-stone-400">{p.type}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={p.id}>
                    {p.url ? (
                      <a href={sanitizeUrl(p.url)} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

      {/* ── FUNDER ── */}
      {funder && (
        <section className="border-t border-stone-100 bg-white py-12">
          <Container className="flex flex-col items-center text-center">
            <div className="eyebrow mb-4">{en ? 'Supported by' : 'Avec le soutien de'}</div>
            <a
              href="https://www.sshrc-crsh.gc.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-stone-100 bg-paper px-6 py-4 text-sm font-semibold text-ink hover:border-teal-200"
            >
              {funder.logo && <img src={funder.logo} alt="" className="h-7 object-contain" />}
              {funder.name}
              <ExternalLink className="h-3.5 w-3.5 text-stone-400" aria-hidden="true" />
            </a>
          </Container>
        </section>
      )}
    </div>
  );
}
