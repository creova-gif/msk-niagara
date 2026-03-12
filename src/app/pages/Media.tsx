import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Camera, 
  Video, 
  Mic, 
  FileText, 
  Download, 
  Calendar, 
  MapPin, 
  Users, 
  Play,
  ExternalLink,
  Image as ImageIcon,
  Volume2,
  FileDown,
  Eye,
  Clock,
  Tag,
  BookOpen,
  Archive
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Media() {
  const { language } = useLanguage();
  const [selectedGalleryFilter, setSelectedGalleryFilter] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Community Event Photo Gallery Data
  const photoGallery = [
    {
      id: 1,
      title: 'Community Consultation Workshop - Childhood Hub',
      titleFr: 'Atelier de consultation communautaire - Pôle Enfance',
      date: 'February 15, 2025',
      dateFr: '15 février 2025',
      location: 'Brock University',
      locationFr: 'Université Brock',
      hub: 'Childhood and Growing Up Hub',
      hubFr: 'Pôle Enfance et croissance',
      year: '2025',
      description: 'Community partners and researchers gathered to discuss housing, education, and recreation experiences of newcomer children.',
      descriptionFr: 'Des partenaires communautaires et des chercheurs se sont réunis pour discuter des expériences de logement, d\'éducation et de récréation des enfants nouveaux arrivants.',
      images: 3,
      thumbnail: 'https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3b3Jrc2hvcCUyMG1lZXRpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzcyNDczNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'workshop'
    },
    {
      id: 2,
      title: 'Health Literacy Community Roundtable',
      titleFr: 'Table ronde communautaire sur la littératie en santé',
      date: 'January 22, 2025',
      dateFr: '22 janvier 2025',
      location: 'QUEST Community Health Centre',
      locationFr: 'Centre de santé communautaire QUEST',
      hub: 'Health Literacy Hub',
      hubFr: 'Pôle Littératie en santé',
      year: '2025',
      description: 'Healthcare providers and community organizations collaborating on health literacy resources for immigrant and refugee populations.',
      descriptionFr: 'Prestataires de soins de santé et organismes communautaires collaborant sur des ressources en littératie en santé pour les populations immigrantes et réfugiées.',
      images: 5,
      thumbnail: 'https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwcm91bmR0YWJsZSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzcyNDczNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'roundtable'
    },
    {
      id: 3,
      title: 'Partnership Launch Event',
      titleFr: 'Événement de lancement du partenariat',
      date: 'October 10, 2024',
      dateFr: '10 octobre 2024',
      location: 'Brock University, St. Catharines',
      locationFr: 'Université Brock, St. Catharines',
      hub: 'All Hubs',
      hubFr: 'Tous les pôles',
      year: '2024',
      description: 'Official launch of Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara partnership.',
      descriptionFr: 'Lancement officiel du partenariat Mobiliser les savoirs subjugués pour un Niagara juste et inclusif.',
      images: 8,
      thumbnail: 'https://images.unsplash.com/photo-1712903276855-845bb42e5df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGxhdW5jaCUyMGV2ZW50JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNDczNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'launch'
    },
    {
      id: 4,
      title: 'Afro-Descendant Identity Workshop',
      titleFr: 'Atelier sur l\'identité afro-descendante',
      date: 'December 5, 2024',
      dateFr: '5 décembre 2024',
      location: 'Community Centre, Niagara Falls',
      locationFr: 'Centre communautaire, Niagara Falls',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      year: '2024',
      description: 'Community dialogue exploring identity, belonging, and cultural connections among Afro-descendant communities.',
      descriptionFr: 'Dialogue communautaire explorant l\'identité, l\'appartenance et les connexions culturelles parmi les communautés afro-descendantes.',
      images: 6,
      thumbnail: 'https://images.unsplash.com/photo-1766407354000-54a7129f7140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwY3VsdHVyYWwlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcyNDczNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'workshop'
    },
    {
      id: 5,
      title: 'Migrant Farmworkers Support Initiative',
      titleFr: 'Initiative de soutien aux travailleurs agricoles migrants',
      date: 'August 18, 2024',
      dateFr: '18 août 2024',
      location: 'St. Alban\'s Anglican Church',
      locationFr: 'Église anglicane St. Alban',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      year: '2024',
      description: 'Community support event providing resources and connections for seasonal agricultural workers.',
      descriptionFr: 'Événement de soutien communautaire offrant des ressources et des connexions pour les travailleurs agricoles saisonniers.',
      images: 4,
      thumbnail: 'https://images.unsplash.com/photo-1734261780213-765e29537e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtd29ya2VycyUyMGFncmljdWx0dXJhbCUyMHdvcmtlcnMlMjBzdXBwb3J0fGVufDF8fHx8MTc3MjQ3MzYzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'community'
    },
    {
      id: 6,
      title: 'Youth Recreation and Inclusion Forum',
      titleFr: 'Forum sur la récréation et l\'inclusion des jeunes',
      date: 'November 12, 2024',
      dateFr: '12 novembre 2024',
      location: 'YWCA Niagara Region',
      locationFr: 'YWCA Région de Niagara',
      hub: 'Childhood and Growing Up Hub',
      hubFr: 'Pôle Enfance et croissance',
      year: '2024',
      description: 'Forum discussing leisure, sport, and recreation access for newcomer youth and families.',
      descriptionFr: 'Forum discutant de l\'accès aux loisirs, au sport et à la récréation pour les jeunes et familles nouveaux arrivants.',
      images: 7,
      thumbnail: 'https://images.unsplash.com/photo-1765301657537-1b0ea5325867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHJlY3JlYXRpb24lMjBzcG9ydHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcyNDczNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'forum'
    }
  ];

  // Video Testimonials Data
  const videoTestimonials = [
    {
      id: 1,
      title: 'Community Partner Testimonial - Bridges Niagara',
      titleFr: 'Témoignage de partenaire communautaire - Bridges Niagara',
      speaker: 'Maria Santos',
      speakerFr: 'Maria Santos',
      role: 'Executive Director, Bridges Niagara',
      roleFr: 'Directrice exécutive, Bridges Niagara',
      hub: 'Health Literacy Hub',
      hubFr: 'Pôle Littératie en santé',
      duration: '4:32',
      date: 'February 2025',
      dateFr: 'Février 2025',
      description: 'Maria shares how the MSK Partnership has strengthened health literacy programming for newcomer communities.',
      descriptionFr: 'Maria partage comment le partenariat MSK a renforcé la programmation en littératie en santé pour les communautés nouvelles arrivantes.',
      thumbnail: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWx0aGNhcmUlMjBzcGVha2VyfGVufDF8fHx8MTc3MjQ3MzYzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
      views: 342
    },
    {
      id: 2,
      title: 'Research Impact - Dr. Jean Ntakirutimana',
      titleFr: 'Impact de la recherche - Dr Jean Ntakirutimana',
      speaker: 'Dr. Jean Ntakirutimana',
      speakerFr: 'Dr Jean Ntakirutimana',
      role: 'Co-Director, MSK Partnership',
      roleFr: 'Codirecteur, Partenariat MSK',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      duration: '6:15',
      date: 'January 2025',
      dateFr: 'Janvier 2025',
      description: 'Dr. Ntakirutimana discusses the importance of community-engaged research and identity formation among Afro-descendant populations.',
      descriptionFr: 'Dr Ntakirutimana discute de l\'importance de la recherche communautaire et de la formation de l\'identité parmi les populations afro-descendantes.',
      thumbnail: 'https://images.unsplash.com/photo-1621972600542-4cc56f0c72c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzcyNDczNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
      views: 567
    },
    {
      id: 3,
      title: 'Community Voice - TOES Niagara',
      titleFr: 'Voix communautaire - TOES Niagara',
      speaker: 'Mariam Khayinza',
      speakerFr: 'Mariam Khayinza',
      role: 'Community Co-Leader, TOES Niagara',
      roleFr: 'Co-responsable communautaire, TOES Niagara',
      hub: 'Health Literacy Hub',
      hubFr: 'Pôle Littératie en santé',
      duration: '5:48',
      date: 'December 2024',
      dateFr: 'Décembre 2024',
      description: 'Mariam highlights the collaborative approach to improving health information access for immigrant and refugee populations.',
      descriptionFr: 'Mariam souligne l\'approche collaborative pour améliorer l\'accès à l\'information sur la santé pour les populations immigrantes et réfugiées.',
      thumbnail: 'https://images.unsplash.com/photo-1766867264693-e34f484d3371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFraW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MjQ3MzYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
      views: 423
    },
    {
      id: 4,
      title: 'Youth Perspectives - Newcomer Students',
      titleFr: 'Perspectives des jeunes - Étudiants nouveaux arrivants',
      speaker: 'Student Focus Group',
      speakerFr: 'Groupe de discussion étudiant',
      role: 'Newcomer Youth Participants',
      roleFr: 'Participants jeunes nouveaux arrivants',
      hub: 'Childhood and Growing Up Hub',
      hubFr: 'Pôle Enfance et croissance',
      duration: '7:22',
      date: 'November 2024',
      dateFr: 'Novembre 2024',
      description: 'Young newcomers share their experiences with housing, education, and community belonging in Niagara.',
      descriptionFr: 'Les jeunes nouveaux arrivants partagent leurs expériences en matière de logement, d\'éducation et d\'appartenance communautaire à Niagara.',
      thumbnail: 'https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91dGglMjBzdHVkZW50cyUyMGdyb3VwfGVufDF8fHx8MTc3MjQ3MzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
      views: 789
    }
  ];

  // Podcast / Audio Summaries Data
  const podcasts = [
    {
      id: 1,
      title: 'MSK Voices: Understanding Health Literacy in Immigrant Communities',
      titleFr: 'Voix MSK : Comprendre la littératie en santé dans les communautés immigrantes',
      episode: 'Episode 1',
      episodeFr: 'Épisode 1',
      duration: '28:45',
      date: 'March 1, 2025',
      dateFr: '1er mars 2025',
      host: 'Dr. Livianna Tossutti',
      hostFr: 'Dre Livianna Tossutti',
      guests: 'Dr. Joanne Crawford, Mariam Khayinza',
      guestsFr: 'Dre Joanne Crawford, Mariam Khayinza',
      hub: 'Health Literacy Hub',
      hubFr: 'Pôle Littératie en santé',
      description: 'An in-depth conversation about barriers to healthcare access and strategies for improving health literacy among immigrant and refugee populations in Niagara.',
      descriptionFr: 'Une conversation approfondie sur les obstacles à l\'accès aux soins de santé et les stratégies pour améliorer la littératie en santé parmi les populations immigrantes et réfugiées à Niagara.',
      audioUrl: '#',
      transcript: '#',
      downloads: 234
    },
    {
      id: 2,
      title: 'Research in Action: Identity and Belonging for Afro-Descendant Communities',
      titleFr: 'Recherche en action : Identité et appartenance pour les communautés afro-descendantes',
      episode: 'Episode 2',
      episodeFr: 'Épisode 2',
      duration: '32:18',
      date: 'February 15, 2025',
      dateFr: '15 février 2025',
      host: 'Dr. Jean Ntakirutimana',
      hostFr: 'Dr Jean Ntakirutimana',
      guests: 'Community Leaders Panel',
      guestsFr: 'Panel de leaders communautaires',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      description: 'Community leaders discuss identity formation, cultural connections, and sense of belonging in the Niagara region.',
      descriptionFr: 'Des leaders communautaires discutent de la formation de l\'identité, des connexions culturelles et du sentiment d\'appartenance dans la région de Niagara.',
      audioUrl: '#',
      transcript: '#',
      downloads: 189
    },
    {
      id: 3,
      title: 'Growing Up Newcomer: Children\'s Experiences in Niagara',
      titleFr: 'Grandir nouveau arrivant : Expériences des enfants à Niagara',
      episode: 'Episode 3',
      episodeFr: 'Épisode 3',
      duration: '26:55',
      date: 'January 28, 2025',
      dateFr: '28 janvier 2025',
      host: 'Dr. Rebecca Raby',
      hostFr: 'Dre Rebecca Raby',
      guests: 'Dr. Christine Tardif-Williams, Community Partners',
      guestsFr: 'Dre Christine Tardif-Williams, Partenaires communautaires',
      hub: 'Childhood and Growing Up Hub',
      hubFr: 'Pôle Enfance et croissance',
      description: 'Exploring how newcomer children navigate housing, education, leisure, and belonging in their new communities.',
      descriptionFr: 'Explorer comment les enfants nouveaux arrivants naviguent le logement, l\'éducation, les loisirs et l\'appartenance dans leurs nouvelles communautés.',
      audioUrl: '#',
      transcript: '#',
      downloads: 267
    },
    {
      id: 4,
      title: 'Migrant Farmworkers: Stories of Resilience and Community Support',
      titleFr: 'Travailleurs agricoles migrants : Histoires de résilience et de soutien communautaire',
      episode: 'Episode 4',
      episodeFr: 'Épisode 4',
      duration: '30:12',
      date: 'January 10, 2025',
      dateFr: '10 janvier 2025',
      host: 'Dr. Julie Ham',
      hostFr: 'Dre Julie Ham',
      guests: 'Rev. Dr. Daniel Tatarnic, Farmworker Advocates',
      guestsFr: 'Rév. Dr Daniel Tatarnic, Défenseurs des travailleurs agricoles',
      hub: 'Identity, Connections and Belonging Hub',
      hubFr: 'Pôle Identité, connexions et appartenance',
      description: 'Conversations about the experiences, challenges, and community support systems for seasonal agricultural workers.',
      descriptionFr: 'Conversations sur les expériences, les défis et les systèmes de soutien communautaire pour les travailleurs agricoles saisonniers.',
      audioUrl: '#',
      transcript: '#',
      downloads: 156
    }
  ];

  // Annual Reports Data
  const annualReports = [
    {
      id: 1,
      year: '2024-2025',
      title: 'Annual Impact Report 2024-2025',
      titleFr: 'Rapport d\'impact annuel 2024-2025',
      description: 'Comprehensive overview of research activities, community partnerships, knowledge mobilization, and impact across all three research hubs.',
      descriptionFr: 'Aperçu complet des activités de recherche, des partenariats communautaires, de la mobilisation des connaissances et de l\'impact dans les trois pôles de recherche.',
      pages: 48,
      fileSize: '8.2 MB',
      publishDate: 'March 2025',
      publishDateFr: 'Mars 2025',
      highlights: [
        '26 community partners engaged',
        '65 team members across 3 hubs',
        '12 research projects active',
        '150+ community events hosted'
      ],
      highlightsFr: [
        '26 partenaires communautaires engagés',
        '65 membres d\'équipe dans 3 pôles',
        '12 projets de recherche actifs',
        '150+ événements communautaires organisés'
      ],
      downloadUrl: '#',
      downloadUrlFr: '#',
      thumbnail: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      year: '2023-2024',
      title: 'Inaugural Year Report 2023-2024',
      titleFr: 'Rapport de la première année 2023-2024',
      description: 'Launch year achievements, partnership formation, research hub establishment, and community engagement initiatives.',
      descriptionFr: 'Réalisations de l\'année de lancement, formation de partenariats, établissement de pôles de recherche et initiatives d\'engagement communautaire.',
      pages: 36,
      fileSize: '6.5 MB',
      publishDate: 'October 2024',
      publishDateFr: 'Octobre 2024',
      highlights: [
        'Partnership officially launched',
        '18 founding partners',
        '3 research hubs established',
        'SSHRC Partnership Grant awarded'
      ],
      highlightsFr: [
        'Partenariat officiellement lancé',
        '18 partenaires fondateurs',
        '3 pôles de recherche établis',
        'Subvention de partenariat CRSH octroyée'
      ],
      downloadUrl: '#',
      downloadUrlFr: '#',
      thumbnail: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=500&fit=crop'
    }
  ];

  // Filter functions
  const filteredGallery = photoGallery.filter(event => {
    if (selectedGalleryFilter === 'all') return true;
    return event.category === selectedGalleryFilter;
  }).filter(event => {
    if (selectedYear === 'all') return true;
    return event.year === selectedYear;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#8B0000] text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                {language === 'en' ? 'Media & Documentation' : 'Médias et documentation'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {language === 'en' ? 'Media & Documentation' : 'Médias et documentation'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Explore our community events, testimonials, podcasts, and annual reports showcasing the impact of collaborative research.'
                : 'Découvrez nos événements communautaires, témoignages, podcasts et rapports annuels présentant l\'impact de la recherche collaborative.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-white border-2 border-gray-200 p-1.5 rounded-xl">
              <TabsTrigger 
                value="gallery" 
                className="flex items-center gap-2 data-[state=active]:bg-[#8B0000] data-[state=active]:text-white transition-all duration-300"
              >
                <Camera className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'Photo Gallery' : 'Galerie photo'}</span>
                <span className="sm:hidden">{language === 'en' ? 'Photos' : 'Photos'}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="video" 
                className="flex items-center gap-2 data-[state=active]:bg-[#8B0000] data-[state=active]:text-white transition-all duration-300"
              >
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'Video Testimonials' : 'Témoignages vidéo'}</span>
                <span className="sm:hidden">{language === 'en' ? 'Videos' : 'Vidéos'}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="podcast" 
                className="flex items-center gap-2 data-[state=active]:bg-[#8B0000] data-[state=active]:text-white transition-all duration-300"
              >
                <Mic className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'Podcasts' : 'Podcasts'}</span>
                <span className="sm:hidden">{language === 'en' ? 'Audio' : 'Audio'}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="flex items-center gap-2 data-[state=active]:bg-[#8B0000] data-[state=active]:text-white transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'Annual Reports' : 'Rapports annuels'}</span>
                <span className="sm:hidden">{language === 'en' ? 'Reports' : 'Rapports'}</span>
              </TabsTrigger>
            </TabsList>

            {/* Photo Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              {/* Filters */}
              <Card className="border-2 border-gray-200">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        {language === 'en' ? 'Event Type' : 'Type d\'événement'}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['all', 'workshop', 'roundtable', 'launch', 'community', 'forum'].map(category => (
                          <Button
                            key={category}
                            variant={selectedGalleryFilter === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedGalleryFilter(category)}
                            className={selectedGalleryFilter === category 
                              ? "bg-[#8B0000] hover:bg-[#A40000] text-white" 
                              : "border-gray-300 hover:border-[#8B0000]"}
                          >
                            {language === 'en' 
                              ? category.charAt(0).toUpperCase() + category.slice(1)
                              : category === 'all' ? 'Tous'
                              : category === 'workshop' ? 'Atelier'
                              : category === 'roundtable' ? 'Table ronde'
                              : category === 'launch' ? 'Lancement'
                              : category === 'community' ? 'Communauté'
                              : 'Forum'}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        {language === 'en' ? 'Year' : 'Année'}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['all', '2025', '2024'].map(year => (
                          <Button
                            key={year}
                            variant={selectedYear === year ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedYear(year)}
                            className={selectedYear === year 
                              ? "bg-[#8B0000] hover:bg-[#A40000] text-white" 
                              : "border-gray-300 hover:border-[#8B0000]"}
                          >
                            {year === 'all' ? (language === 'en' ? 'All Years' : 'Toutes') : year}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((event, index) => (
                  <Card 
                    key={event.id} 
                    className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#8B0000] group overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={event.thumbnail}
                        alt={language === 'en' ? event.title : event.titleFr}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <ImageIcon className="w-4 h-4 text-[#8B0000]" />
                        <span className="text-sm font-semibold text-gray-800">{event.images} {language === 'en' ? 'photos' : 'photos'}</span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-[#8B0000] text-white text-xs px-2 py-1">
                          {language === 'en' ? event.hub : event.hubFr}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {language === 'en' ? event.title : event.titleFr}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                          <span>{language === 'en' ? event.date : event.dateFr}</span>
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                          <span>{language === 'en' ? event.location : event.locationFr}</span>
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {language === 'en' ? event.description : event.descriptionFr}
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-[#8B0000] to-[#6B0000] hover:from-[#A40000] hover:to-[#8B0000] text-white"
                        aria-label={language === 'en' ? `View ${event.images} photos from ${event.title}` : `Voir ${event.images} photos de ${event.titleFr}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'View Gallery' : 'Voir la galerie'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Video Testimonials Tab */}
            <TabsContent value="video" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {videoTestimonials.map((video, index) => (
                  <Card 
                    key={video.id} 
                    className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#8B0000] overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden group">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={language === 'en' ? video.title : video.titleFr}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <button 
                          className="w-20 h-20 rounded-full bg-[#8B0000] hover:bg-[#A40000] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                          aria-label={language === 'en' ? `Play video: ${video.title}` : `Lire la vidéo : ${video.titleFr}`}
                        >
                          <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                        </button>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">{video.duration}</span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-[#8B0000] text-white text-xs px-2 py-1">
                          {language === 'en' ? video.hub : video.hubFr}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {language === 'en' ? video.title : video.titleFr}
                      </h3>
                      <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-200">
                        <Users className="w-5 h-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">{language === 'en' ? video.speaker : video.speakerFr}</p>
                          <p className="text-sm text-gray-600">{language === 'en' ? video.role : video.roleFr}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        {language === 'en' ? video.description : video.descriptionFr}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {language === 'en' ? video.date : video.dateFr}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {video.views} {language === 'en' ? 'views' : 'vues'}
                        </span>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-[#8B0000] to-[#6B0000] hover:from-[#A40000] hover:to-[#8B0000] text-white"
                        aria-label={language === 'en' ? `Watch video: ${video.title}` : `Regarder la vidéo : ${video.titleFr}`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Watch Video' : 'Regarder la vidéo'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcast" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {podcasts.map((podcast, index) => (
                  <Card 
                    key={podcast.id} 
                    className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#8B0000]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Podcast Icon/Artwork */}
                        <div className="flex-shrink-0">
                          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#8B0000] to-[#A40000] flex items-center justify-center shadow-lg">
                            <Mic className="w-16 h-16 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <Badge className="bg-[#8B0000]/10 text-[#8B0000] border border-[#8B0000]/20 mb-2">
                              {language === 'en' ? podcast.episode : podcast.episodeFr}
                            </Badge>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {language === 'en' ? podcast.title : podcast.titleFr}
                            </h3>
                            <Badge className="bg-gray-100 text-gray-700 text-xs">
                              {language === 'en' ? podcast.hub : podcast.hubFr}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                              <span><strong>{language === 'en' ? 'Host:' : 'Animateur:'}</strong> {language === 'en' ? podcast.host : podcast.hostFr}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                              <span>{language === 'en' ? podcast.date : podcast.dateFr}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Volume2 className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                              <span><strong>{language === 'en' ? 'Duration:' : 'Durée:'}</strong> {podcast.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Download className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                              <span>{podcast.downloads} {language === 'en' ? 'downloads' : 'téléchargements'}</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">
                              {language === 'en' ? 'Guests:' : 'Invités:'}
                            </p>
                            <p className="text-sm text-gray-600">
                              {language === 'en' ? podcast.guests : podcast.guestsFr}
                            </p>
                          </div>

                          <p className="text-sm text-gray-700">
                            {language === 'en' ? podcast.description : podcast.descriptionFr}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3 pt-2">
                            <Button 
                              className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] hover:from-[#A40000] hover:to-[#8B0000] text-white"
                              aria-label={language === 'en' ? `Listen to ${podcast.title}` : `Écouter ${podcast.titleFr}`}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              {language === 'en' ? 'Listen Now' : 'Écouter'}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white"
                              aria-label={language === 'en' ? 'Download podcast' : 'Télécharger le podcast'}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              {language === 'en' ? 'Download' : 'Télécharger'}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-gray-300 hover:border-[#8B0000] hover:text-[#8B0000]"
                              aria-label={language === 'en' ? 'View transcript' : 'Voir la transcription'}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              {language === 'en' ? 'Transcript' : 'Transcription'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Annual Reports Tab */}
            <TabsContent value="reports" className="space-y-8">
              {/* Reports Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {annualReports.map((report, index) => (
                  <Card 
                    key={report.id} 
                    className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#8B0000] overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-[#0A0A0A] to-[#8B0000] p-6 text-white">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className="bg-white/20 text-white border-white/30 mb-3">
                            {report.year}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">
                            {language === 'en' ? report.title : report.titleFr}
                          </h3>
                        </div>
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                          <FileText className="w-8 h-8" />
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm">
                        {language === 'en' ? report.description : report.descriptionFr}
                      </p>
                    </div>

                    <CardContent className="p-6 space-y-6">
                      {/* Report Metadata */}
                      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{language === 'en' ? 'Published' : 'Publié'}</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {language === 'en' ? report.publishDate : report.publishDateFr}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{language === 'en' ? 'Pages' : 'Pages'}</p>
                          <p className="text-sm font-semibold text-gray-900">{report.pages} {language === 'en' ? 'pages' : 'pages'}</p>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Tag className="w-4 h-4 text-[#8B0000]" />
                          {language === 'en' ? 'Key Highlights' : 'Points saillants'}
                        </h4>
                        <ul className="space-y-2">
                          {(language === 'en' ? report.highlights : report.highlightsFr).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000] mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Download Buttons */}
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <Button 
                          className="w-full bg-gradient-to-r from-[#8B0000] to-[#6B0000] hover:from-[#A40000] hover:to-[#8B0000] text-white"
                          aria-label={`${language === 'en' ? 'Download English version of' : 'Télécharger la version anglaise de'} ${language === 'en' ? report.title : report.titleFr}`}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'Download (English)' : 'Télécharger (anglais)'}
                          <span className="ml-auto text-xs opacity-80">{report.fileSize}</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white"
                          aria-label={`${language === 'en' ? 'Download French version of' : 'Télécharger la version française de'} ${language === 'en' ? report.title : report.titleFr}`}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'Download (French)' : 'Télécharger (français)'}
                          <span className="ml-auto text-xs opacity-80">{report.fileSize}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Archive Notice */}
              <Card className="border-2 border-[#8B0000]/20 bg-[#8B0000]/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#8B0000]/10 rounded-lg flex-shrink-0">
                      <Archive className="w-6 h-6 text-[#8B0000]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Looking for Older Reports?' : 'Vous cherchez d\'anciens rapports?'}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4">
                        {language === 'en' 
                          ? 'Access our complete archive of annual reports, financial statements, and historical documentation.'
                          : 'Accédez à nos archives complètes de rapports annuels, états financiers et documentation historique.'}
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'View Archive' : 'Voir les archives'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#8B0000] text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Stay Connected' : 'Restez connecté'}
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            {language === 'en' 
              ? 'Subscribe to receive updates about new media content, events, and publications.'
              : 'Abonnez-vous pour recevoir des mises à jour sur les nouveaux contenus médias, événements et publications.'}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#8B0000] hover:bg-gray-100"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {language === 'en' ? 'Subscribe to Newsletter' : 'S\'abonner à l\'infolettre'}
          </Button>
        </div>
      </section>
    </div>
  );
}