import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Timeline() {
  const { t, language } = useLanguage();

  const timelineEvents = [
    {
      date: '2022',
      title: language === 'en' ? 'Initiative Formation' : 'Formation de l\'initiative',
      description: language === 'en' 
        ? 'Social Justice Research Institute, Brock University, formally initiates discussion amongst SJRI members to form a research partnership with community organizations in the Niagara region.'
        : 'L\'Institut de recherche sur la justice sociale de l\'Université Brock lance formellement une discussion entre les membres de l\'IRJS pour former un partenariat de recherche avec les organisations communautaires de la région de Niagara.',
      type: 'past',
      participants: language === 'en' ? 'SJRI Members, Community Organizations' : 'Membres de l\'IRJS, Organisations communautaires',
    },
    {
      date: '2023',
      title: language === 'en' ? 'SSHRC Application' : 'Demande au CRSH',
      description: language === 'en'
        ? 'Team of 12 scholars from Brock University, University of Toronto, York University and University at Buffalo (SUNY), and 11 community organizations apply to SSHRC for Partnership Development Grant to support the Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara initiative. Dr. Livianna Tossutti and Dr. Jean Ntakirutimana of Brock University agree to serve as co-directors.'
        : 'Équipe de 12 chercheurs de l\'Université Brock, de l\'Université de Toronto, de l\'Université York et de l\'Université de Buffalo (SUNY), et 11 organisations communautaires présentent une demande au CRSH pour une subvention de développement de partenariat afin de soutenir l\'initiative Mobiliser les savoirs subjugués pour un Niagara juste et inclusif. Dre Livianna Tossutti et Dr Jean Ntakirutimana de l\'Université Brock acceptent d\'être codirecteurs.',
      type: 'past',
      participants: language === 'en' ? '12 Scholars, 11 Community Organizations' : '12 Chercheurs, 11 Organisations communautaires',
    },
    {
      date: language === 'en' ? 'March 2024' : 'Mars 2024',
      title: language === 'en' ? 'SSHRC Grant Awarded' : 'Subvention CRSH accordée',
      description: language === 'en'
        ? 'SSHRC awards Partnership Development Grant of $199,930 for March 2024-March 2027 period.'
        : 'Le CRSH accorde une subvention de développement de partenariat de 199 930 $ pour la période de mars 2024 à mars 2027.',
      type: 'past',
      participants: language === 'en' ? 'Research Team, SSHRC' : 'Équipe de recherche, CRSH',
    },
    {
      date: '2024-2025',
      title: language === 'en' ? 'Partnership Expansion' : 'Expansion du partenariat',
      description: language === 'en'
        ? 'The partnership expands: seven community organizations and 10 academic researchers join the initiative.'
        : 'Le partenariat s\'élargit : sept organisations communautaires et 10 chercheurs universitaires rejoignent l\'initiative.',
      type: 'past',
      participants: language === 'en' ? '7 New Community Organizations, 10 New Researchers' : '7 Nouvelles organisations communautaires, 10 Nouveaux chercheurs',
    },
    {
      date: language === 'en' ? 'July 2024' : 'Juillet 2024',
      title: language === 'en' ? 'Visioning Event - Official Launch' : 'Événement de vision - Lancement officiel',
      description: language === 'en'
        ? 'Visioning Event at Brock University - Official launch of Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara initiative.'
        : 'Événement de vision à l\'Université Brock - Lancement officiel de l\'initiative Mobiliser les savoirs subjugués pour un Niagara juste et inclusif.',
      type: 'past',
      participants: language === 'en' ? 'All Partnership Members, Stakeholders' : 'Tous les membres du partenariat, Parties prenantes',
    },
    {
      date: language === 'en' ? 'June 2025' : 'Juin 2025',
      title: language === 'en' ? 'Spring Meeting' : 'Réunion du printemps',
      description: language === 'en'
        ? 'Spring Meeting at Brock University bringing together research hubs and community partners for progress updates and strategic planning.'
        : 'Réunion du printemps à l\'Université Brock réunissant les pôles de recherche et les partenaires communautaires pour les mises à jour des progrès et la planification stratégique.',
      type: 'past',
      participants: language === 'en' ? 'Research Hub Teams, Community Partners' : 'Équipes des pôles de recherche, Partenaires communautaires',
    },
    {
      date: '2026',
      title: language === 'en' ? 'Research Symposium' : 'Symposium de recherche',
      description: language === 'en'
        ? 'Research Symposium showcasing findings from all three research hubs and celebrating partnership achievements. (Date TBA)'
        : 'Symposium de recherche présentant les résultats des trois pôles de recherche et célébrant les réalisations du partenariat. (Date à déterminer)',
      type: 'upcoming',
      participants: language === 'en' ? 'All Partnership Members, Research Community, Public' : 'Tous les membres du partenariat, Communauté de recherche, Public',
    },
  ];

  const upcomingEvents = [
    {
      date: 'February 20, 2026',
      time: '1:00 PM - 3:00 PM',
      title: language === 'en' ? 'Community Partner Forum' : 'Forum des partenaires communautaires',
      description: language === 'en' 
        ? 'Quarterly forum for community partners to share updates, discuss challenges, and collaborate on solutions.'
        : 'Forum trimestriel pour les partenaires communautaires pour partager des mises à jour, discuter des défis et collaborer sur des solutions.',
      location: language === 'en' ? 'Virtual' : 'Virtuel',
      registration: language === 'en' ? 'Opens December 2025' : 'Ouverture décembre 2025',
    },
    {
      date: language === 'en' ? 'March 10, 2026' : '10 mars 2026',
      time: '10:00 AM - 12:00 PM',
      title: language === 'en' ? 'Knowledge Translation Workshop' : 'Atelier de transfert de connaissances',
      description: language === 'en'
        ? 'Workshop on effective strategies for translating research findings into practical applications and public communications.'
        : 'Atelier sur les stratégies efficaces pour traduire les résultats de recherche en applications pratiques et communications publiques.',
      location: language === 'en' ? 'McMaster University, Hamilton, ON' : 'Université McMaster, Hamilton, ON',
      registration: language === 'en' ? 'Opens January 2026' : 'Ouverture janvier 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#8B0000]">
        {/* Dot-grid brand motif */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        {/* Diagonal cut bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 pb-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                {language === 'en' ? 'Timeline & Events' : 'Chronologie et événements'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}>
              {t('nav.timeline')}
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4">
              {language === 'en'
                ? 'Explore the history of our partnership and discover upcoming events and opportunities for engagement.'
                : 'Explorez l\'histoire de notre partenariat et découvrez les événements à venir et les opportunités d\'engagement.'}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative z-20">
        {/* Tabs with elevated card design */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <Tabs defaultValue="timeline" className="w-full">
            <div className="bg-gradient-to-r from-gray-50 to-white px-4 sm:px-6 py-4 border-b border-gray-200">
              <TabsList className="w-full md:w-auto bg-gray-100 p-1 rounded-full gap-2">
                <TabsTrigger value="timeline" className="flex-1 md:flex-none data-[state=active]:bg-[#8B0000] data-[state=active]:text-white data-[state=inactive]:hover:bg-gray-200 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-200 font-medium text-sm sm:text-base">
                  {t('timeline.partnership')}
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="flex-1 md:flex-none data-[state=active]:bg-[#8B0000] data-[state=active]:text-white data-[state=inactive]:hover:bg-gray-200 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-200 font-medium text-sm sm:text-base">
                  {t('timeline.upcoming')}
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6 md:p-8">
              <TabsContent value="timeline" className="mt-0">
                <div className="relative">
                  {/* Heavy timeline track */}
                  <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B0000]/0 via-[#8B0000]/40 to-[#8B0000]/0" />
                  <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-[#8B0000]/20" />

                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => {
                      const isPast = event.type === 'past';
                      return (
                        <div key={index} className="relative pl-16 group">
                          {/* Year/dot node */}
                          <div className="absolute left-0 top-5 flex items-center gap-2">
                            {/* Outer ring */}
                            <div className={`w-14 h-8 rounded-full flex items-center justify-center text-[10px] font-bold tracking-wider border transition-all duration-300 ${
                              isPast
                                ? 'bg-[#8B0000] border-[#8B0000] text-white group-hover:shadow-lg group-hover:shadow-[#8B0000]/30'
                                : 'bg-white border-dashed border-[#8B0000]/60 text-[#8B0000]'
                            }`}>
                              {isPast ? '✓' : '→'}
                            </div>
                          </div>

                          {/* Event card */}
                          <div className={`rounded-2xl border transition-all duration-300 group-hover:shadow-md overflow-hidden ${
                            isPast
                              ? 'bg-white border-gray-100 group-hover:border-[#8B0000]/20'
                              : 'bg-[#8B0000]/5 border-dashed border-[#8B0000]/30'
                          }`}>
                            <div className="p-5 md:p-6">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3">
                                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                                    isPast
                                      ? 'bg-[#8B0000]/8 text-[#8B0000]'
                                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                                  }`}>
                                    {event.date}
                                  </span>
                                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                                    isPast ? 'text-gray-400' : 'text-amber-600'
                                  }`}>
                                    {isPast ? t('timeline.past') : t('common.upcoming')}
                                  </span>
                                </div>
                              </div>

                              <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 leading-snug"
                                style={{ fontFamily: 'var(--font-heading)' }}>
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-500 leading-relaxed mb-3">{event.description}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Users className="w-3.5 h-3.5 shrink-0" />
                                <span>{event.participants}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-0">
                <div className="grid grid-cols-1 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-[#8B0000]" />
                          <span className="text-[#8B0000] font-medium">{event.date}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-[#0A0A0A]/60">{event.time}</span>
                        </div>
                        <CardTitle className="text-2xl text-[#0A0A0A]">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-[#0A0A0A]/70">{event.description}</p>
                        
                        <div className="flex items-center gap-2 text-[#0A0A0A]/60">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <span className="text-sm text-[#0A0A0A]/60">{t('timeline.registration')}: </span>
                            <Badge variant={event.registration === 'Open' ? 'default' : 'secondary'}>
                              {event.registration === 'Open' ? t('common.open') : event.registration}
                            </Badge>
                          </div>
                          {event.registration === 'Open' && (
                            <button className="px-4 py-2 bg-[#8B0000] text-white rounded-md hover:bg-[#A40000] transition-colors">
                              {t('timeline.register')}
                            </button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}