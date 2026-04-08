import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Users, Award } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

// Import logos
const sshrcLogo = '/c9c77bb67634af21353fb8f536aed3347c90330c.png';
const brockLogo = '/6a2d35fb10f25faa07b97ffff38a76f184734ae4.png';
const uoftOiseLogo = '/7b98ee478f466c3dd71a0410d27d1cae36bc7b2a.png';
const brockESRCLogo = '/4825dd65e7c70d72bc4874a4e49e5ed0e76764db.png';
const niagaraRegionLogo = '/b80316cbb5ce9244931d871f5cd787d687cfdafb.png';
const yorkUniversityLogo = '/c04bb3e0b2c20a914be2fc34dabdbd667e3f6fd3.png';
const universityAtBuffaloLogo = '/1e02762e71863f48fceb1cc3277e8ecd07e53156.png';

export function Partnership() {
  const { t, language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const partners = [
    {
      name: 'University of Toronto - OISE',
      nameFr: 'Université de Toronto - OISE',
      type: 'Academic Partner',
      typeFr: 'Partenaire académique',
      url: 'https://www.oise.utoronto.ca/',
      logo: uoftOiseLogo,
    },
    {
      name: 'Brock University - ESRC',
      nameFr: 'Université Brock - CERS',
      type: 'Academic Partner',
      typeFr: 'Partenaire académique',
      url: 'https://www.brocku.ca/esrc/',
      logo: brockESRCLogo,
    },
    {
      name: 'Social Justice Research Institute (SJRI)',
      nameFr: 'Institut de recherche sur la justice sociale (IRJS)',
      type: 'Academic Partner',
      typeFr: 'Partenaire académique',
      url: 'https://www.brocku.ca/social-justice-research-institute/',
      logo: brockLogo,
      fullName: 'Social Justice Research Institute (SJRI)',
      fullNameFr: 'Institut de recherche sur la justice sociale (IRJS)',
    },
    {
      name: 'Niagara Region',
      nameFr: 'Région de Niagara',
      type: 'Community Partner',
      typeFr: 'Partenaire communautaire',
      url: 'https://www.niagararegion.ca/',
      logo: niagaraRegionLogo,
    },
    {
      name: 'York University',
      nameFr: 'Université York',
      type: 'Academic Partner',
      typeFr: 'Partenaire académique',
      url: 'https://www.yorku.ca/',
      logo: yorkUniversityLogo,
    },
    {
      name: 'University at Buffalo',
      nameFr: 'Université de Buffalo',
      type: 'Academic Partner',
      typeFr: 'Partenaire académique',
      url: 'https://www.buffalo.edu/',
      logo: universityAtBuffaloLogo,
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section — clean split with diagonal edge */}
      <div className="relative overflow-hidden bg-[#8B0000]">
        {/* Dot-grid brand motif */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        {/* Diagonal cut bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
                {language === 'en' ? 'MSK Niagara' : 'MSK Niagara'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 tracking-tight leading-[1.05]"
              style={{ fontFamily: 'var(--font-heading)' }}>
              {t('nav.partnership')}
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {language === 'en'
                ? 'Academic institutions, community organizations, and funding partners — united to advance knowledge for a just Niagara.'
                : 'Institutions académiques, organisations communautaires et partenaires financiers — unis pour faire avancer les connaissances pour un Niagara juste.'}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-20">{/* Partner Logos Carousel */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <h2 className="text-4xl mb-8 text-center text-[#0A0A0A]">
              {language === 'en' ? 'Our Partners' : 'Nos partenaires'}
            </h2>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group h-full"
                      >
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#8B0000]/10 hover:border-[#8B0000] h-full flex flex-col items-center justify-center min-h-[320px]">
                          {/* Logo */}
                          <div className="w-full h-48 flex items-center justify-center mb-6">
                            <img 
                              src={partner.logo} 
                              alt={`${language === 'en' ? partner.name : (partner.nameFr || partner.name)} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          
                          {/* Partner Name */}
                          <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-2 text-center group-hover:text-[#8B0000] transition-colors">
                            {language === 'en' ? partner.name : (partner.nameFr || partner.name)}
                          </h3>
                          
                          {/* Full Name (for SJRI or other partners with full names) */}
                          {partner.fullName && (
                            <p className="text-sm text-[#0A0A0A]/60 mb-3 text-center px-4">
                              {language === 'en' ? partner.fullName : partner.fullNameFr}
                            </p>
                          )}
                          
                          {/* Type Badge */}
                          <div className="inline-block px-4 py-2 bg-[#8B0000] text-white rounded-full text-sm font-medium">
                            {language === 'en' ? partner.type : partner.typeFr}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#8B0000]/20 hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-300 flex items-center justify-center z-10"
                aria-label="Previous partner"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#8B0000]/20 hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-300 flex items-center justify-center z-10"
                aria-label="Next partner"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-[#8B0000] w-8' 
                      : 'bg-[#8B0000]/30 hover:bg-[#8B0000]/50'
                  }`}
                  aria-label={`Go to partner ${index + 1}`}
                />
              ))}
            </div>

            {/* All Partners Link */}
            <div className="mt-8 text-center">
              <p className="text-[#0A0A0A]/60 text-sm">
                {language === 'en' 
                  ? 'For more information about community partners, visit our '
                  : 'Pour plus d\'informations sur les partenaires communautaires, visitez notre '}
                <a href="/community" className="text-[#8B0000] hover:text-[#6B0000] underline font-medium">
                  {language === 'en' ? 'Community page' : 'page Communauté'}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#0A0A0A]">
                <Users className="w-6 h-6 text-[#8B0000]" />
                {language === 'en' ? 'Partnership Overview' : 'Aperçu du partenariat'}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <div className="space-y-4">
                <p className="text-[#0A0A0A]/80 break-words">
                  {language === 'en' 
                    ? 'The MSK Research Partnership is a collaborative initiative bringing together leading researchers, academic institutions, and community organizations dedicated to advancing the understanding of community health challenges. Our partnership was formed in response to the growing need for comprehensive, community-engaged research that addresses the complex challenges faced by diverse populations in the Niagara region.'
                    : 'Le partenariat de recherche MSK est une initiative collaborative réunissant des chercheurs de premier plan, des institutions académiques et des organisations communautaires dédiées à l\'avancement de la compréhension des défis de santé communautaire. Notre partenariat a été formé en réponse au besoin croissant de recherche communautaire complète qui répond aux défis complexes auxquels sont confrontées diverses populations dans la région de Niagara.'}
                </p>
                <p className="text-[#0A0A0A]/80 break-words">
                  {language === 'en'
                    ? 'Through our collaborative approach, we combine expertise from multiple disciplines, integrate community perspectives, and leverage resources across institutions to conduct meaningful research that translates into real-world impact.'
                    : 'Grâce à notre approche collaborative, nous combinons l\'expertise de plusieurs disciplines, intégrons les perspectives communautaires et exploitons les ressources des institutions pour mener des recherches significatives qui se traduisent par un impact réel.'}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Objectives */}
        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#0A0A0A]">
                <Target className="w-6 h-6 text-[#8B0000]" />
                {language === 'en' ? 'Research Objectives' : 'Objectifs de recherche'}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border border-[#8B0000]/20">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Advance Knowledge' : 'Faire progresser les connaissances'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 break-words">
                    {language === 'en'
                      ? 'Generate new insights into community health challenges through rigorous, interdisciplinary research methodologies.'
                      : 'Générer de nouvelles perspectives sur les défis de santé communautaire grâce à des méthodologies de recherche rigoureuses et interdisciplinaires.'}
                  </p>
                </div>
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border border-[#8B0000]/20">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Community Engagement' : 'Engagement communautaire'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 break-words">
                    {language === 'en'
                      ? 'Work directly with community partners to ensure research addresses real-world needs and priorities.'
                      : 'Travailler directement avec les partenaires communautaires pour garantir que la recherche répond aux besoins et priorités du monde réel.'}
                  </p>
                </div>
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border border-[#8B0000]/20">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Knowledge Translation' : 'Transfert de connaissances'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 break-words">
                    {language === 'en'
                      ? 'Transform research findings into accessible resources and practical tools for healthcare providers and communities.'
                      : 'Transformer les résultats de recherche en ressources accessibles et outils pratiques pour les prestataires de soins de santé et les communautés.'}
                  </p>
                </div>
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border border-[#8B0000]/20">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Capacity Building' : 'Renforcement des capacités'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 break-words">
                    {language === 'en'
                      ? 'Develop skills and resources within communities to sustain health promotion efforts beyond research projects.'
                      : 'Développer les compétences et les ressources au sein des communautés pour soutenir les efforts de promotion de la santé au-delà des projets de recherche.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governance Structure */}
        <section>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#0A0A0A]">
                <Award className="w-6 h-6 text-[#8B0000]" />
                {language === 'en' ? 'Governance Structure' : 'Structure de gouvernance'}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <div className="space-y-6">
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000]">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Implementation Council' : 'Conseil de mise en œuvre'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 mb-4 break-words">
                    {language === 'en'
                      ? 'The Implementation Council provides day-to-day oversight for the partnership, ensuring alignment with our mission and objectives. Comprising 10 members including co-directors, hub representatives, and student representatives, the IC makes all important decisions by consensus. Community input occurs through community representation on the Implementation Council and community-based members within Research Hubs.'
                      : 'Le Conseil de mise en œuvre assure la supervision quotidienne du partenariat, garantissant l\'alignement avec notre mission et nos objectifs. Composé de 10 membres incluant les codirecteurs, les représentants des pôles et les représentants étudiants, le CM prend toutes les décisions importantes par consensus. La contribution communautaire se fait par la représentation communautaire au Conseil de mise en œuvre et les membres communautaires au sein des pôles de recherche.'}
                  </p>
                </div>
                
                <div className="p-6 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000]">
                  <h3 className="text-xl mb-3 text-[#0A0A0A]">
                    {language === 'en' ? 'Research Hub Leaders / Co-Leaders' : 'Responsables / Co-responsables des pôles de recherche'}
                  </h3>
                  <p className="text-[#0A0A0A]/70 mb-4 break-words">
                    {language === 'en'
                      ? 'Each research hub is led or co-led by experienced university and/or community-based researchers who coordinate hub activities, facilitate collaboration, and ensure research quality across all projects.'
                      : 'Chaque pôle de recherche est dirigé ou codirigé par des chercheurs universitaires et/ou communautaires expérimentés qui coordonnent les activités du pôle, facilitent la collaboration et assurent la qualité de la recherche dans tous les projets.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}