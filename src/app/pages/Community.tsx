/**
 * Community partners directory
 *
 * Built to the Figma "community-partners" mockup (Brand Identity System,
 * page 16): photographic hero, "Find Organizations" filter card, organization
 * cards with a rotating brand-accent bar, and the Partner With Us band.
 */

import { useMemo, useState } from 'react';
import { ExternalLink, Mail, MapPin, Search, Tag, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Container } from '../components/brand';
import { sanitizeEmail, sanitizeSearchQuery, sanitizeUrl } from '../utils/security';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { communityPartnersQuery, type CommunityPartner } from '../../lib/sanity/queries/communityPartner';
import { urlForImage } from '../../lib/sanity/image';

/** Card accent bars cycle through the hub colours + water, as in the mockup. */
const ACCENT_BARS = ['bg-ochre-500', 'bg-sage-500', 'bg-terra-500', 'bg-water'];

export function Community() {
  const { language } = useLanguage();
  const en = language === 'en';

  usePageMeta(
    en ? 'Community | MSK Niagara' : 'Communauté | MSK Niagara',
    en
      ? 'Community organizations and health partners across the Niagara region working alongside MSK Niagara.'
      : 'Organismes communautaires et partenaires de santé de la région de Niagara collaborant avec MSK Niagara.'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: rawOrganizations } = useSanityQuery<CommunityPartner[]>(communityPartnersQuery);
  const organizations = useMemo(
    () =>
      (rawOrganizations ?? []).map((org) => ({
        id: org._id,
        name: org.name.en,
        nameFr: org.name.fr,
        description: org.description?.en ?? '',
        descriptionFr: org.description?.fr ?? '',
        services: (org.services ?? []).map((s) => s.en),
        servicesFr: (org.services ?? []).map((s) => s.fr),
        website: org.website ?? '',
        contact: org.contact ?? '',
        category: org.category ?? '',
        location: org.location ?? '',
        logo: urlForImage(org.logo)?.width(300).url(),
      })),
    [rawOrganizations]
  );

  const categories = [
    { value: 'all', label: en ? 'All Sectors' : 'Tous les secteurs' },
    { value: 'health', label: en ? 'Health Services' : 'Services de santé' },
    { value: 'newcomer-services', label: en ? 'Newcomer Services' : 'Services aux nouveaux arrivants' },
    { value: 'youth', label: en ? 'Youth Services' : 'Services aux jeunes' },
    { value: 'social-services', label: en ? 'Social Services' : 'Services sociaux' },
    { value: 'education', label: en ? 'Education' : 'Éducation' },
    { value: 'research', label: en ? 'Research' : 'Recherche' },
    { value: 'government', label: en ? 'Government' : 'Gouvernement' },
    { value: 'international', label: en ? 'International' : 'International' },
    { value: 'community', label: en ? 'Community' : 'Communauté' },
  ];

  const filtered = organizations.filter((org) => {
    const matchesCategory = selectedCategory === 'all' || org.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      q === '' ||
      (en ? org.name : org.nameFr).toLowerCase().includes(q) ||
      (en ? org.description : org.descriptionFr).toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const hasFilters = selectedCategory !== 'all' || searchTerm !== '';
  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="bg-paper">
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-teal-600 py-20 md:py-24">
        <img
          src="/community/community-voice-speaking.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-700/90 via-teal-600/70 to-teal-600/30" aria-hidden="true" />
        <Container>
          {organizations.length > 0 && (
            <span className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              {organizations.length} {en ? 'Community Organizations' : 'Organisations communautaires'}
            </span>
          )}
          <h1 className="!text-white">{en ? 'Our Partners' : 'Nos partenaires'}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed !text-white/85">
            {en
              ? 'Connecting with local health clinics, public libraries, immigration networks, and social services across Niagara to synthesize robust research foundations.'
              : 'Nous collaborons avec des cliniques de santé locales, des bibliothèques publiques, des réseaux d’immigration et des services sociaux de Niagara pour bâtir des assises de recherche solides.'}
          </p>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        {/* ── FILTERS ── */}
        <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="!text-[1.5rem]">{en ? 'Find Organizations' : 'Trouver des organisations'}</h2>
              <p className="!mb-0 mt-1 text-sm">
                {en
                  ? `Showing ${filtered.length} of ${organizations.length} community partners`
                  : `Affichage de ${filtered.length} sur ${organizations.length} partenaires communautaires`}
              </p>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
              >
                <X className="h-4 w-4" />
                {en ? 'Clear All' : 'Tout effacer'}
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_280px]">
            <div className="relative">
              <label htmlFor="community-search" className="sr-only">
                {en ? 'Search Organizations' : 'Rechercher des organisations'}
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" aria-hidden="true" />
              <input
                id="community-search"
                type="text"
                placeholder={en ? 'Search by name or keyword…' : 'Rechercher par nom ou mot-clé…'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(sanitizeSearchQuery(e.target.value))}
                className="h-12 w-full rounded-xl border border-stone-200 bg-white pl-11 pr-10 text-sm text-ink placeholder:text-stone-400 hover:border-teal-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-stone-50 text-stone-500 hover:bg-stone-100"
                  aria-label={en ? 'Clear search' : 'Effacer la recherche'}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger
                aria-label={en ? 'Category' : 'Catégorie'}
                className="h-12 w-full rounded-xl border border-stone-200 bg-white text-sm font-medium text-ink hover:border-teal-300"
              >
                <SelectValue placeholder={en ? 'Category: All Sectors' : 'Catégorie : tous les secteurs'} />
              </SelectTrigger>
              <SelectContent className="rounded-xl border border-stone-100 bg-white shadow-xl">
                {categories.map((c) => (
                  <SelectItem key={c.value} value={c.value} className="cursor-pointer py-2.5 text-sm">
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasFilters && (
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {en ? 'Active Filters' : 'Filtres actifs'}
              </span>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 hover:bg-teal-100"
                >
                  <Tag className="h-3 w-3" />
                  {categories.find((c) => c.value === selectedCategory)?.label}
                  <X className="h-3 w-3" />
                </button>
              )}
              {searchTerm !== '' && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 hover:bg-teal-100"
                >
                  “{searchTerm}”
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── ORGANIZATIONS ── */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filtered.map((org, i) => {
              const website = org.website ? sanitizeUrl(org.website) : '';
              const services = en ? org.services : org.servicesFr;
              return (
                <article key={org.id} className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <div className={`h-1 ${ACCENT_BARS[i % ACCENT_BARS.length]}`} aria-hidden="true" />
                  <div className="p-7">
                    {org.logo && (
                      <div className="mb-5 flex min-h-[96px] items-center justify-center rounded-xl border border-stone-100 bg-white p-4">
                        <img src={org.logo} alt={`${en ? org.name : org.nameFr} logo`} className="max-h-16 max-w-full object-contain" />
                      </div>
                    )}
                    {org.category && (
                      <span className="mb-3 inline-flex rounded-md bg-stone-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                        {categories.find((c) => c.value === org.category)?.label ?? org.category}
                      </span>
                    )}
                    <h3 className="mb-1">{en ? org.name : org.nameFr}</h3>
                    {org.location && (
                      <p className="!mb-3 flex items-center gap-1.5 text-xs">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {org.location}
                      </p>
                    )}
                    <p className="line-clamp-3 text-sm leading-relaxed">{en ? org.description : org.descriptionFr}</p>

                    {services.length > 0 && (
                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {services.slice(0, 4).map((s, k) => (
                          <span key={k} className="rounded-md bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 border-t border-stone-100 pt-5">
                      {website && website !== '#' && (
                        <a
                          href={website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary !min-h-0 !px-5 !py-2 text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {en ? 'Visit Website' : 'Site web'}
                        </a>
                      )}
                      {org.contact && (
                        <a
                          href={`mailto:${sanitizeEmail(org.contact)}`}
                          className="btn !min-h-0 border border-stone-200 !px-5 !py-2 text-sm text-ink hover:bg-stone-50"
                        >
                          <Mail className="h-4 w-4" />
                          {en ? 'Contact' : 'Contacter'}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="mb-3">{en ? 'No organizations found' : 'Aucune organisation trouvée'}</h3>
            <p className="mx-auto mb-6 max-w-md">
              {en
                ? 'Try adjusting your search or filter to find what you’re looking for.'
                : 'Essayez d’ajuster votre recherche ou votre filtre pour trouver ce que vous cherchez.'}
            </p>
            <button onClick={clearFilters} className="btn btn-primary">
              {en ? 'Clear Filters' : 'Effacer les filtres'}
            </button>
          </div>
        )}
      </Container>

      {/* ── PARTNER CTA ── */}
      <section className="bg-teal-600 py-20 text-center md:py-24">
        <Container>
          <h2 className="!text-white">{en ? 'Partner With Us' : 'Devenez partenaire'}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg !text-white/85">
            {en
              ? 'Let’s build community pathways to structural equity together. If your organization is based in Niagara and centers newcomers, racialized, or marginalized families, let’s explore co-designing our next inquiry project.'
              : 'Bâtissons ensemble des parcours communautaires vers l’équité structurelle. Si votre organisation est établie à Niagara et place au centre les familles nouvellement arrivées, racisées ou marginalisées, explorons la co-conception de notre prochain projet de recherche.'}
          </p>
          <a href="mailto:contact@msk-niagara.ca" className="btn mt-8 bg-white text-teal-700 hover:bg-paper">
            <Mail className="h-4 w-4" />
            {en ? 'Get in Touch' : 'Contactez-nous'}
          </a>
        </Container>
      </section>
    </div>
  );
}
