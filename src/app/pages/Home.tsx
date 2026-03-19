/**
 * Home Page Component
 * 
 * Main landing page for the MSK Niagara Research Partnership website.
 * 
 * Sections:
 * 1. Hero Banner - Eye-catching introduction with animated elements
 * 2. Land Acknowledgment - Recognition of Indigenous territories
 * 3. Main Introduction - Project overview and objectives
 * 4. Research Objectives - 4 key goals with icons
 * 5. Research Hubs Overview - Summaries of 3 main hubs
 * 6. Governance Structure - Implementation Council details
 * 7. Co-Directors Section - Leadership profiles
 * 8. Quick Links - Cards to Research Hubs, Projects, and Community
 * 9. Call to Action - Partnership invitation
 * 
 * Features:
 * - Fully bilingual (English/French)
 * - Responsive design with mobile optimizations
 * - Smooth animations (fade-in, slide-in)
 * - External links to SSHRC and community pages
 * - Accessible with semantic HTML and ARIA labels
 * 
 * Color Scheme: Black, White & Dark Red (#8B0000)
 * 
 * @author MSK Development Team
 * @version 2.0
 */

import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
import { ArrowRight, Users, BookOpen, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

// Import co-director profile images
const jeanNtakirutimanaImg = '/a4bced4acbd5814bb109a187b7f1325cde395ea7.png';
const livianaTossuttiImg = '/438f2f96ee4c30da348ebf5afdbb45ab22a5947b.png';

export function Home() {
  const { language } = useLanguage();

  /**
   * Co-Directors Data
   * Leadership profiles displayed on the home page
   */
  const coDirectors = [
    {
      name: 'Dr. Livianna Tossutti',
      titleEn: 'Professor and Co-Director, Brock University',
      titleFr: 'Professeure et Codirectrice, Université Brock',
      image: livianaTossuttiImg,
    },
    {
      name: 'Dr. Jean Ntakirutimana',
      titleEn: 'Professor and Co-Director, Brock University',
      titleFr: 'Professeur et Codirecteur, Université Brock',
      image: jeanNtakirutimanaImg,
    },
  ];

  return (
    <div>
      {/* Hero Banner - Enhanced with Dark Red Background */}
      <section className="relative bg-[#8B0000] text-white py-20 md:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Black accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A0A0A]/0 via-[#0A0A0A] to-[#0A0A0A]/0"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 font-bold animate-fade-in-up leading-tight text-white">
            {language === 'en' 
              ? 'Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara'
              : 'Mobiliser les savoirs marginalisés pour un Niagara juste et inclusif'}
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto animate-fade-in-up animate-delay-200 leading-relaxed text-white/95">
            {language === 'en'
              ? 'A transnational, university-community partnership committed to fostering social justice'
              : 'Un partenariat transnational université-communauté engagé à bâtir la justice sociale'}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link 
              to="/about/partnership"
              className="group px-8 py-4 bg-[#0A0A0A] text-white rounded-full font-semibold hover:bg-[#1A1A1A] hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {language === 'en' ? 'Learn More' : 'En savoir plus'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/research/projects"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#8B0000] transform hover:scale-105 transition-all duration-300"
            >
              {language === 'en' ? 'View Projects' : 'Voir les projets'}
            </Link>
          </div>
        </div>
      </section>

      {/* Land Acknowledgment Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg border-l-4 border-[#8B0000]">
            <h2 className="text-2xl font-bold text-[#8B0000] mb-4">
              {language === 'en' ? 'Land Acknowledgment' : 'Reconnaissance territoriale'}
            </h2>
            <p className="text-[#0A0A0A]/80 leading-relaxed">
              {language === 'en' 
                ? 'Brock University is situated on the traditional territory of the Haudenosaunee and Anishinaabe peoples, many of whom continue to live and work here today. This territory is covered by the Upper Canada Treaties and is within the land protected by the Dish with One Spoon Wampum Agreement. We acknowledge the enduring presence and deep traditional knowledge, laws, and resources of Indigenous peoples, and are grateful to have the opportunity to work in this territory.'
                : 'L\'Université Brock est située sur le territoire traditionnel des peuples Haudenosaunee et Anishinaabe, dont beaucoup continuent de vivre et de travailler ici aujourd\'hui. Ce territoire est couvert par les traités du Haut-Canada et se trouve sur le territoire protégé par l\'accord de wampum du plat à une cuillère. Nous reconnaissons la présence durable et les connaissances traditionnelles profondes, les lois et les ressources des peuples autochtones, et nous sommes reconnaissants d\'avoir l\'occasion de travailler sur ce territoire.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Introduction Section - Enhanced */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {language === 'en' ? (
              <>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up">
                  <strong className="text-[#8B0000] text-xl">Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara</strong> is a transnational, university-community partnership funded by the{' '}
                  <a 
                    href="https://www.sshrc-crsh.gc.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#8B0000] hover:text-[#A40000] underline inline-flex items-center gap-1 font-semibold transition-colors"
                  >
                    Social Sciences and Humanities Research Council
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  . Our interdisciplinary team of faculty, students and{' '}
                  <Link to="/community" className="text-[#8B0000] hover:text-[#A40000] underline font-semibold transition-colors">
                    community organizations
                  </Link>
                  {' '}is committed to fostering a more just and inclusive Niagara. Our work is informed by the principles of social justice and a desire to mobilize voices that have been marginalized from the dominant knowledge structures that maintain and enhance power in society.
                </p>

                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
                  Through community-based participatory research and knowledge mobilization conducted in <strong className="text-[#8B0000]">English, French and Spanish</strong>, we will:
                </p>

                <div className="space-y-4 mb-12">
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-100 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Provide a forum for African descendant and foreign-born persons in the Regional Municipality of Niagara to share their experiences, knowledge and accomplishments with the non-profit, academic, government and para-public sectors;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-200 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Provide community organizations with insights and tools to develop culturally responsive services;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-300 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Contribute to scholarship;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-400 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Provide training and mentoring for student and community-based researchers.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#0A0A0A] mb-6 mt-12 animate-fade-in-up">Our Research Hubs</h2>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-100">
                  Our work is organized into three research Hubs that focus on areas critical to well-being:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-100">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Childhood and Growing Up Hub
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Will listen to and respond to newcomer children with respect to their experiences in housing, sport/recreation and schooling.
                    </p>
                  </div>

                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-200">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Health Literacy Hub
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Will promote health literacy in immigrant and refugee populations.
                    </p>
                  </div>

                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-300">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Identity, Connections and Belonging Hub
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Hosts three distinct projects which will foster a sense of belonging amongst three populations: Afro-descendants, sexual and gender diverse young adult newcomers, and seasonal agricultural workers.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#0A0A0A] mb-6 mt-12 animate-fade-in-up">Governance Structure</h2>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-100">
                  Even though we are working from 3 distinct Hubs and 5 projects, the MSK initiative is governed by a unifying structure—<strong>the Implementation Council (IC)</strong>—in which each Hub and each project is valued in its interactions with other Hubs/projects. The IC is the body where important decisions regarding governance and administration are made by consensus.
                </p>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-200">
                  The IC comprises 10 members: the 2 Co-Directors, 6 Hub representatives (2 from each Hub: 1 community organization representative + 1 faculty member) and 2 at-large student representatives. Hub and student representatives are chosen by Hub members, based on the principle of annual rotating membership so that all interested participants may serve if they wish.
                </p>

                <div className="p-6 bg-[#8B0000]/5 rounded-lg my-12 border border-[#8B0000]/20 animate-fade-in-up animate-delay-300">
                  <p className="text-lg text-[#0A0A0A] leading-relaxed mb-4">
                    <strong>We invite you to learn more about the unique and exciting work unfolding in our Hubs.</strong>
                  </p>
                  <p className="text-[#0A0A0A]/80">
                    While our activities are Niagara-focussed, we hope that all small and mid-sized centres can draw on our work as part of their efforts to build more just and inclusive communities.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up">
                  <strong className="text-[#8B0000] text-xl">Mobiliser les savoirs marginalisés pour un Niagara juste et inclusif</strong> est un partenariat transnational université-communauté financé par le{' '}
                  <a 
                    href="https://www.sshrc-crsh.gc.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#8B0000] hover:text-[#A40000] underline inline-flex items-center gap-1 font-semibold transition-colors"
                  >
                    Conseil de recherches en sciences humaines (CRSH)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  . Notre équipe interdisciplinaire, composée de professeur.e.s, d'étudiant.e.s et{' '}
                  <Link to="/community" className="text-[#8B0000] hover:text-[#A40000] underline font-semibold transition-colors">
                    d'organismes communautaires
                  </Link>
                  , s'engage à bâtir un Niagara plus juste et inclusif. Nos travaux s'inspirent des principes de justice sociale et du désir de donner la parole aux personnes marginalisées par les structures de savoir dominantes qui maintiennent et renforcent leur pouvoir dans la société.
                </p>

                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
                  Par le biais de recherches participatives communautaires et de la mobilisation des connaissances menées en <strong className="text-[#8B0000]">anglais, en français et en espagnol</strong>, nous visons à :
                </p>

                <div className="space-y-4 mb-12">
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-100 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Offrir aux personnes d'ascendance africaine et aux personnes nées à l'étranger résidant dans la municipalité régionale de Niagara, une tribune pour partager leurs expériences, leurs connaissances et leurs réalisations, avec les secteurs sans but lucratif, avec le milieu académique, ainsi qu'avec les secteurs gouvernementaux et parapublics;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-200 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Fournir aux organismes communautaires des perspectives et des outils pour développer des services adaptés à différentes réalités culturelles;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-300 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Contribuer à la recherche;
                    </p>
                  </div>
                  <div className="flex gap-4 p-4 bg-[#8B0000]/5 rounded-xl animate-slide-in-left animate-delay-400 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-7 h-7 text-[#8B0000] flex-shrink-0 mt-1" />
                    <p className="text-[#0A0A0A]/90 leading-relaxed">
                      Offrir de la formation et du mentorat aux étudiant.e.s et aux chercheur.e.s communautaires.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#0A0A0A] mb-6 mt-12 animate-fade-in-up">Nos pôles de recherche</h2>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-100">
                  Nos travaux s'articulent autour de trois pôles de recherche axés sur des domaines essentiels au bien-être :
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-100">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Pôle Enfance et développement
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Écoutera et répondra aux besoins des enfants nouvellement arrivés concernant leur logement, leurs activités sportives et récréatives et leur scolarité.
                    </p>
                  </div>

                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-200">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Pôle Littératie en santé
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Promouvra la littératie en santé auprès des populations immigrantes et réfugiées.
                    </p>
                  </div>

                  <div className="p-5 bg-[#8B0000]/5 rounded-lg border-l-4 border-[#8B0000] animate-fade-in-up animate-delay-300">
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      <Link to="/about/hubs" className="hover:text-[#8B0000] transition-colors">
                        Pôle Identité, relations et appartenance
                      </Link>
                    </h3>
                    <p className="text-[#0A0A0A]/80">
                      Héberge trois projets distincts visant à favoriser un sentiment d'appartenance chez trois groupes de populations : les personnes afro-descendantes, les jeunes adultes nouvellement arrivé.e.s et ayant une identité de genre et une orientation sexuelle diverses, et le personnel agricole saisonnier.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#0A0A0A] mb-6 mt-12 animate-fade-in-up">Structure de gouvernance</h2>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-100">
                  Bien que nous travaillions à partir de trois pôles et de cinq projets distincts, l'initiative MSK est régie par une structure unificatrice : <strong>le Conseil de mise en œuvre (CM)</strong>. Au sein de ce Conseil, chaque pôle et chaque projet est valorisé dans ses interactions avec les autres pôles et projets. Le CM est l'instance où les décisions importantes concernant la gouvernance et l'administration sont prises par consensus.
                </p>
                <p className="text-lg text-[#0A0A0A]/90 leading-relaxed mb-6 animate-fade-in-up animate-delay-200">
                  Le CM est composé de dix membres : les deux membres de la codirection, six représentant.e.s des pôles (deux par pôle : 1 représentant.e d'un organisme communautaire + 1 membre du corps professoral) et 2 représentant.e.s étudiant.e.s. Les représentant.e.s des pôles et les représentant.e.s étudiant.e.s sont choisi.e.s par les membres des pôles, selon le principe d'une rotation annuelle des membres, permettant ainsi à toute personne intéressée de s'impliquer.
                </p>

                <div className="p-6 bg-[#8B0000]/5 rounded-lg my-12 border border-[#8B0000]/20 animate-fade-in-up animate-delay-300">
                  <p className="text-lg text-[#0A0A0A] leading-relaxed mb-4">
                    <strong>Nous vous invitons à découvrir le travail unique et stimulant qui se déroule au sein de nos Pôles.</strong>
                  </p>
                  <p className="text-[#0A0A0A]/80">
                    Bien que nos activités soient axées sur la région de Niagara, nous espérons que toutes les régions de petite et moyenne envergure pourront s'inspirer de notre travail dans le cadre de leurs efforts pour bâtir des communautés plus justes et inclusives.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Co-Directors Section */}
      <section className="py-16 bg-[#8B0000]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white mb-8 text-center">
            {language === 'en' ? 'Co-Directors' : 'La Codirection'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coDirectors.map((director, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <Avatar className="mx-auto mb-4 w-24 h-24 rounded-full bg-[#8B0000]">
                    <AvatarImage src={director.image} alt={`${director.name}'s profile`} />
                    <AvatarFallback className="text-white text-3xl font-semibold">
                      {director.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl text-[#0A0A0A]">{director.name}</CardTitle>
                  <CardDescription className="text-base text-[#8B0000] font-medium mt-2">
                    {language === 'en' ? director.titleEn : director.titleFr}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#0A0A0A] mb-8 text-center">
            {language === 'en' ? 'Explore Our Work' : 'Explorez nos travaux'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/about/hubs">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-[#8B0000]">
                <CardHeader>
                  <div className="mb-4">
                    <Users className="w-10 h-10 text-[#8B0000]" />
                  </div>
                  <CardTitle className="text-[#0A0A0A]">
                    {language === 'en' ? 'Research Hubs' : 'Pôles de recherche'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#0A0A0A]/70">
                    {language === 'en' 
                      ? 'Discover our three research hubs and their unique focus areas'
                      : 'Découvrez nos trois pôles de recherche et leurs domaines d\'expertise'}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/research/projects">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-[#8B0000]">
                <CardHeader>
                  <div className="mb-4">
                    <BookOpen className="w-10 h-10 text-[#8B0000]" />
                  </div>
                  <CardTitle className="text-[#0A0A0A]">
                    {language === 'en' ? 'Research Projects' : 'Projets de recherche'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#0A0A0A]/70">
                    {language === 'en'
                      ? 'Explore our current research projects and community partnerships'
                      : 'Explorez nos projets de recherche actuels et nos partenariats communautaires'}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/community">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-[#8B0000]">
                <CardHeader>
                  <div className="mb-4">
                    <Calendar className="w-10 h-10 text-[#8B0000]" />
                  </div>
                  <CardTitle className="text-[#0A0A0A]">
                    {language === 'en' ? 'Community Partners' : 'Partenaires communautaires'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#0A0A0A]/70">
                    {language === 'en'
                      ? 'Meet our community partners and learn how to collaborate with us'
                      : 'Rencontrez nos partenaires communautaires et apprenez comment collaborer avec nous'}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-semibold text-white">
            {language === 'en' ? 'Join Our Partnership' : 'Rejoignez notre partenariat'}
          </h2>
          <p className="text-xl mb-8 opacity-95 text-[rgb(255,255,255)]">
            {language === 'en' 
              ? 'Become part of our collaborative effort to build a more just and inclusive community'
              : 'Devenez membre de notre effort collaboratif pour bâtir une communauté plus juste et inclusive'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about/hubs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#8B0000] rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              {language === 'en' ? 'Learn More' : 'En savoir plus'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              {language === 'en' ? 'Partner With Us' : 'Devenez partenaire'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}