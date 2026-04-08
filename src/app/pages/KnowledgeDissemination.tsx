import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FileText, Video, Presentation, Download, BookOpen, Users, TrendingUp, Globe, ExternalLink, Calendar, Tag, Search, Filter, Lightbulb, Share2, Eye, X } from 'lucide-react';
import { KnowledgeFlow } from '../components/HeroAnimations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useState } from 'react';

export function KnowledgeDissemination() {
  const { t, language } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const publications = [
    {
      title: 'Mobilizing Subjugated Knowledges: A Community-Based Approach',
      titleFr: 'Mobiliser les savoirs subjugués : Une approche communautaire',
      type: 'article',
      typeFr: 'Article',
      authors: 'Research Partnership Team',
      authorsFr: 'Équipe de partenariat de recherche',
      date: 'March 2025',
      dateFr: 'Mars 2025',
      hub: 'All Research Hubs',
      hubFr: 'Tous les pôles de recherche',
      abstract: 'A comprehensive overview of our community-engaged research methodology and its impact on creating inclusive spaces for newcomer and marginalized communities in Niagara.',
      abstractFr: 'Un aperçu complet de notre méthodologie de recherche communautaire et de son impact sur la création d\'espaces inclusifs pour les communautés nouvelles arrivantes et marginalisées à Niagara.',
      link: '#',
      color: '#8B0000',
      gradient: 'from-[#8B0000] to-[#A40000]',
    },
    {
      title: 'Childhood Experiences of Newcomer Families in Niagara',
      titleFr: 'Expériences d\'enfance des familles nouvelles arrivantes à Niagara',
      type: 'report',
      typeFr: 'Rapport',
      authors: 'Dr. Rebecca Raby & Team',
      authorsFr: 'Dre Rebecca Raby et équipe',
      date: 'February 2025',
      dateFr: 'Février 2025',
      hub: 'Childhood and Growing Up Hub',
      hubFr: 'Pôle Enfance et croissance',
      abstract: 'Research findings on housing, education, and leisure experiences of newcomer and racialized children in the Niagara region.',
      abstractFr: 'Résultats de recherche sur le logement, l\'éducation et les expériences de loisirs des enfants nouveaux arrivants et racialisés dans la région de Niagara.',
      link: '#',
      color: '#089EA5',
      gradient: 'from-[#089EA5] to-[#12647F]',
    },
    {
      title: 'Identity and Belonging: Afro-Descendant Communities',
      titleFr: 'Identité et appartenance : Communautés afro-descendantes',
      type: 'presentation',
      typeFr: 'Présentation',
      authors: 'Jean Ntakirutimana',
      authorsFr: 'Jean Ntakirutimana',
      date: 'January 2025',
      dateFr: 'Janvier 2025',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      abstract: 'Conference presentation exploring cultural identity, community connections, and social belonging among Afro-descendant communities in Niagara.',
      abstractFr: 'Présentation de conférence explorant l\'identité culturelle, les connexions communautaires et l\'appartenance sociale parmi les communautés afro-descendantes à Niagara.',
      link: '#',
      color: '#6635B1',
      gradient: 'from-[#6635B1] to-[#8B0000]',
    },
    {
      title: 'Migrant Farmworkers: Voices from the Fields',
      titleFr: 'Travailleurs agricoles migrants : Voix des champs',
      type: 'video',
      typeFr: 'Vidéo',
      authors: 'Community Partners & Research Team',
      authorsFr: 'Partenaires communautaires et équipe de recherche',
      date: 'December 2024',
      dateFr: 'Décembre 2024',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      abstract: 'Documentary series showcasing the experiences and stories of seasonal agricultural workers in Niagara through arts-based media.',
      abstractFr: 'Série documentaire présentant les expériences et les histoires des travailleurs agricoles saisonniers à Niagara à travers des médias artistiques.',
      link: '#',
      color: '#FFC956',
      gradient: 'from-[#FFC956] to-[#FF9A3C]',
    },
    {
      title: 'Health Literacy in Immigrant and Refugee Populations: A Policy Brief',
      titleFr: 'Littératie en santé dans les populations immigrantes et réfugiées : Note de politique',
      type: 'policy',
      typeFr: 'Politique',
      authors: 'Livianna Tossutti & Joanne Crawford',
      authorsFr: 'Livianna Tossutti et Joanne Crawford',
      date: 'November 2024',
      dateFr: 'Novembre 2024',
      hub: 'Health Literacy Hub',
      hubFr: 'Pôle Littératie en santé',
      abstract: 'Policy recommendations for improving health literacy and access to health information among newcomer and marginalized populations.',
      abstractFr: 'Recommandations politiques pour améliorer la littératie en santé et l\'accès à l\'information sur la santé parmi les populations nouvelles arrivantes et marginalisées.',
      link: '#',
      color: '#12647F',
      gradient: 'from-[#12647F] to-[#089EA5]',
    },
    {
      title: 'Community-Engaged Research Toolkit',
      titleFr: 'Boîte à outils de recherche communautaire',
      type: 'toolkit',
      typeFr: 'Boîte à outils',
      authors: 'All Research Hubs',
      authorsFr: 'Tous les pôles de recherche',
      date: 'October 2024',
      dateFr: 'Octobre 2024',
      hub: 'All Research Hubs',
      hubFr: 'Tous les pôles de recherche',
      abstract: 'Practical guide and resources for conducting community-engaged research with newcomer and marginalized communities.',
      abstractFr: 'Guide pratique et ressources pour mener des recherches communautaires avec les communautés nouvelles arrivantes et marginalisées.',
      link: '#',
      color: '#8B0000',
      gradient: 'from-[#8B0000] to-[#6B0000]',
    },
  ];

  const filteredPublications = publications.filter(pub => {
    if (filterType === 'all') return true;
    return pub.type === filterType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'video': return Video;
      case 'presentation': return Presentation;
      case 'report': return BookOpen;
      case 'policy': return FileText;
      case 'toolkit': return Lightbulb;
      default: return FileText;
    }
  };

  const stats = [
    {
      label: language === 'en' ? 'Publications' : 'Publications',
      value: '6',
      icon: BookOpen,
      color: '#089EA5'
    },
    {
      label: language === 'en' ? 'Research Areas' : 'Domaines de recherche',
      value: '3',
      icon: Tag,
      color: '#6635B1'
    },
    {
      label: language === 'en' ? 'Community Impact' : 'Impact communautaire',
      value: '24+',
      icon: Users,
      color: '#FFC956'
    },
    {
      label: language === 'en' ? 'Resources Shared' : 'Ressources partagées',
      value: '15+',
      icon: Share2,
      color: '#8B0000'
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#8B0000] overflow-hidden">
        {/* Dot-grid brand motif */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        {/* Floating knowledge words radiating outward */}
        <KnowledgeFlow />
        {/* Diagonal cut bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8"
            style={{ animation: 'fade-in-down 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
            <BookOpen className="w-3.5 h-3.5 text-white/70" />
            <span className="text-xs text-white/70 font-semibold tracking-[0.12em] uppercase">
              {language === 'en' ? 'Research Outputs & Resources' : 'Productions et ressources de recherche'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-5 font-extrabold tracking-tight leading-none"
            style={{ fontFamily: 'var(--font-heading)', animation: 'fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
            {t('nav.knowledge')}
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: 'fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.38s both' }}>
            {language === 'en'
              ? 'Explore our research publications, presentations, videos, and community resources sharing insights from our community-engaged research.'
              : 'Explorez nos publications de recherche, présentations, vidéos et ressources communautaires partageant les perspectives de notre recherche communautaire.'}
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 relative z-20 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B0000]/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A0A0A] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#0A0A0A]/60 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        
        {/* Filter Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border-2 border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#A40000] flex items-center justify-center shadow-lg">
                <Filter className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-1">
                  {language === 'en' ? 'Filter Resources' : 'Filtrer les ressources'}
                </h2>
                <p className="text-sm text-[#0A0A0A]/60">
                  {language === 'en' 
                    ? 'Discover publications, presentations, and knowledge translation materials'
                    : 'Découvrez les publications, présentations et matériaux de transfert de connaissances'}
                </p>
              </div>
              {filterType !== 'all' && (
                <button
                  onClick={() => setFilterType('all')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-white border-2 border-[#8B0000]/20 text-[#8B0000] hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'en' ? 'Clear' : 'Effacer'}</span>
                </button>
              )}
            </div>
            
            {/* Dropdown Filter */}
            <div className="max-w-md">
              <label className="block text-xs font-bold text-[#0A0A0A]/50 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#8B0000]" />
                  {language === 'en' ? 'Resource Type' : 'Type de ressource'}
                </span>
              </label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full h-14 text-base font-semibold border-2 border-gray-200 hover:border-[#8B0000]/50 focus:border-[#8B0000] bg-white rounded-xl shadow-sm transition-all duration-300">
                  <SelectValue placeholder={language === 'en' ? 'Select a type...' : 'Sélectionner un type...'} />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-200 rounded-xl shadow-2xl">
                  <SelectItem value="all" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0A0A0A]"></div>
                      {language === 'en' ? 'All Types' : 'Tous les types'}
                    </span>
                  </SelectItem>
                  <SelectItem value="article" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#089EA5]"></div>
                      <FileText className="w-4 h-4 text-[#089EA5]" />
                      {language === 'en' ? 'Articles' : 'Articles'}
                    </span>
                  </SelectItem>
                  <SelectItem value="report" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6635B1]"></div>
                      <BookOpen className="w-4 h-4 text-[#6635B1]" />
                      {language === 'en' ? 'Reports' : 'Rapports'}
                    </span>
                  </SelectItem>
                  <SelectItem value="presentation" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FFC956]"></div>
                      <Presentation className="w-4 h-4 text-[#FFC956]" />
                      {language === 'en' ? 'Presentations' : 'Présentations'}
                    </span>
                  </SelectItem>
                  <SelectItem value="video" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                      <Video className="w-4 h-4 text-[#8B0000]" />
                      {language === 'en' ? 'Videos' : 'Vidéos'}
                    </span>
                  </SelectItem>
                  <SelectItem value="policy" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#12647F]"></div>
                      <FileText className="w-4 h-4 text-[#12647F]" />
                      {language === 'en' ? 'Policy Briefs' : 'Notes politiques'}
                    </span>
                  </SelectItem>
                  <SelectItem value="toolkit" className="text-base font-semibold py-3 cursor-pointer hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
                      <Lightbulb className="w-4 h-4 text-[#8B0000]" />
                      {language === 'en' ? 'Toolkits' : 'Boîtes à outils'}
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filter Display */}
            {filterType !== 'all' && (
              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <p className="text-xs font-bold text-[#0A0A0A]/50 uppercase tracking-wider mb-3">
                  {language === 'en' ? 'Active Filter' : 'Filtre actif'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B0000]/10 border-2 border-[#8B0000]/30 text-[#8B0000] font-semibold">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">
                      {filterType === 'article' ? (language === 'en' ? 'Articles' : 'Articles') :
                       filterType === 'report' ? (language === 'en' ? 'Reports' : 'Rapports') :
                       filterType === 'presentation' ? (language === 'en' ? 'Presentations' : 'Présentations') :
                       filterType === 'video' ? (language === 'en' ? 'Videos' : 'Vidéos') :
                       filterType === 'policy' ? (language === 'en' ? 'Policy Briefs' : 'Notes politiques') :
                       filterType === 'toolkit' ? (language === 'en' ? 'Toolkits' : 'Boîtes à outils') : ''}
                    </span>
                    <button onClick={() => setFilterType('all')} className="hover:bg-[#8B0000] hover:text-white rounded-full p-0.5 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredPublications.map((pub, index) => {
            const IconComponent = getTypeIcon(pub.type);
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 border-2 ${
                  hoveredCard === index 
                    ? 'shadow-2xl scale-[1.02] border-white/0' 
                    : 'shadow-lg border-gray-100'
                }`}
              >
                {/* Gradient Border Effect */}
                {hoveredCard === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${pub.gradient} opacity-100 transition-opacity duration-500`}></div>
                )}
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                
                <div className="relative z-10 p-8">
                  {/* Icon & Type Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110 rotate-3' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      className="font-semibold text-xs px-3 py-1 border-2"
                      style={{ 
                        borderColor: pub.color,
                        backgroundColor: `${pub.color}15`,
                        color: pub.color
                      }}
                    >
                      {language === 'en' ? pub.type.charAt(0).toUpperCase() + pub.type.slice(1) : pub.typeFr}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-[#0A0A0A] mb-4 leading-tight transition-colors duration-300 ${
                    hoveredCard === index ? 'text-[#8B0000]' : ''
                  }`}>
                    {language === 'en' ? pub.title : pub.titleFr}
                  </h3>

                  {/* Metadata */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/70">
                      <Users className="w-4 h-4" style={{ color: pub.color }} />
                      <span className="font-medium">{language === 'en' ? pub.authors : pub.authorsFr}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/70">
                      <Calendar className="w-4 h-4" style={{ color: pub.color }} />
                      <span className="font-medium">{language === 'en' ? pub.date : pub.dateFr}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/70">
                      <Tag className="w-4 h-4" style={{ color: pub.color }} />
                      <span className="font-medium">{language === 'en' ? pub.hub : pub.hubFr}</span>
                    </div>
                  </div>

                  {/* Abstract */}
                  <p className="text-[#0A0A0A]/80 mb-6 leading-relaxed">
                    {language === 'en' ? pub.abstract : pub.abstractFr}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      disabled
                      className={`flex-1 bg-gray-300 text-gray-600 cursor-not-allowed font-semibold rounded-xl transition-all duration-300 border-0`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Coming Soon' : 'Prochainement'}
                    </Button>
                    <Button
                      disabled
                      variant="outline"
                      className="px-6 border-2 rounded-xl font-semibold bg-gray-100 text-gray-500 cursor-not-allowed border-gray-300"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results State */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-3xl">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B0000] to-[#A40000] flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Search className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#0A0A0A] mb-3">
              {language === 'en' ? 'No resources found' : 'Aucune ressource trouvée'}
            </h3>
            <p className="text-lg text-[#0A0A0A]/60 mb-8">
              {language === 'en' ? 'Try selecting a different resource type' : 'Essayez de sélectionner un autre type de ressource'}
            </p>
            <Button
              onClick={() => setFilterType('all')}
              className="bg-[#8B0000] hover:bg-[#A40000] text-white font-semibold px-8 py-6 rounded-xl"
            >
              {language === 'en' ? 'Show All Resources' : 'Afficher toutes les ressources'}
            </Button>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-24 mb-16 relative">
          {/* Background Blur Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] via-[#A40000] to-[#8B0000] rounded-[3rem] blur-3xl opacity-20"></div>
          
          <div className="relative bg-gradient-to-br from-[#8B0000] via-[#A40000] to-[#6B0000] rounded-[3rem] p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Newsletter Card with Glassmorphism */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/50">
                <div className="text-center mb-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 shadow-lg border border-white/40">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-lg">
                      {language === 'en' ? 'Stay Connected' : 'Restez connecté'}
                    </span>
                  </div>
                  
                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {language === 'en' 
                      ? 'Subscribe to Research Updates' 
                      : 'Abonnez-vous aux mises à jour'}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                    {language === 'en' 
                      ? 'Get the latest publications, events, and community resources delivered directly to your inbox. Join our community of researchers and partners.'
                      : 'Recevez les dernières publications, événements et ressources communautaires directement dans votre boîte de réception. Rejoignez notre communauté de chercheurs et partenaires.'}
                  </p>
                </div>

                {/* Email Signup Form */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-[#8B0000]/40 to-white/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative flex flex-col sm:flex-row gap-3 mb-4 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/30 shadow-2xl">
                      <div className="flex-1 relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 group-hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input 
                          type="email" 
                          placeholder={language === 'en' ? 'your.email@example.com' : 'votre.courriel@exemple.com'}
                          className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-white/60 focus:bg-white/20 transition-all duration-300 font-medium text-base"
                        />
                      </div>
                      <Button className="relative bg-gradient-to-r from-white via-gray-100 to-white text-[#8B0000] hover:from-gray-100 hover:via-white hover:to-gray-100 font-bold px-8 py-4 rounded-xl text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 whitespace-nowrap overflow-hidden group/btn">
                        <span className="relative z-10 flex items-center gap-2">
                          {language === 'en' ? 'Subscribe Now' : 'S\'abonner'}
                          <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/10 via-transparent to-[#8B0000]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      </Button>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    {language === 'en' 
                      ? '🔒 We respect your privacy. Unsubscribe anytime.' 
                      : '🔒 Nous respectons votre vie privée. Désabonnez-vous à tout moment.'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-white/80 text-sm font-medium">
                    {language === 'en' ? 'Or explore:' : 'Ou explorez:'}
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      variant="outline" 
                      className="group border-2 border-white/40 bg-white/5 text-white hover:bg-white hover:text-[#8B0000] font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:text-[#8B0000]" />
                      {language === 'en' ? 'View Publications' : 'Voir publications'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="group border-2 border-white/40 bg-white/5 text-white hover:bg-white hover:text-[#8B0000] font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Users className="w-4 h-4 mr-2 group-hover:text-[#8B0000]" />
                      {language === 'en' ? 'Contact Team' : 'Contacter l\'équipe'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="group border-2 border-white/40 bg-white/5 text-white hover:bg-white hover:text-[#8B0000] font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Calendar className="w-4 h-4 mr-2 group-hover:text-[#8B0000]" />
                      {language === 'en' ? 'Upcoming Events' : 'Événements'}
                    </Button>
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-white">56</div>
                      <div className="text-white/70 text-sm">
                        {language === 'en' ? 'Team Members' : 'Membres de l\'équipe'}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-white">12+</div>
                      <div className="text-white/70 text-sm">
                        {language === 'en' ? 'Community Partners' : 'Partenaires communautaires'}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-white">3</div>
                      <div className="text-white/70 text-sm">
                        {language === 'en' ? 'Research Hubs' : 'Pôles de recherche'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}