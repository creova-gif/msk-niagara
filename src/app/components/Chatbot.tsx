/**
 * MSK Chat Component
 * 
 * Intelligent chatbot assistant for MSK Niagara Research Partnership
 * 
 * Features:
 * - Comprehensive knowledge base about MSK research, hubs, team, and partners
 * - Bilingual support (English/French)
 * - Context-aware responses with detailed information
 * - Quick reply suggestions
 * - Smart pattern matching for better understanding
 * - Professional black, white, and dark red color scheme (#8B0000)
 * - Enhanced natural language processing
 * - Detailed responses with actionable information
 * 
 * @version 3.0 - Enhanced MSK Chat
 */

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickReply {
  text: string;
  textFr: string;
  action: string;
}

export function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies: QuickReply[] = [
    { text: 'Research Hubs', textFr: 'Pôles de recherche', action: 'hubs' },
    { text: 'Our Mission', textFr: 'Notre mission', action: 'mission' },
    { text: 'Get Involved', textFr: 'Participer', action: 'involved' },
    { text: 'Team & Partners', textFr: 'Équipe & Partenaires', action: 'team' },
  ];

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: language === 'en' 
          ? "👋 Welcome to MSK Chat!\n\nI'm your intelligent assistant for the Mobilizing Subjugated Knowledges research partnership. I can help you with:\n\n• Research Hubs & Projects\n• Team Members & Expertise\n• Community Partners\n• Partnership Opportunities\n• Events & Timeline\n\nWhat would you like to know?"
          : "👋 Bienvenue sur MSK Chat!\n\nJe suis votre assistant intelligent pour le partenariat de recherche Mobiliser les savoirs marginalisés. Je peux vous aider avec:\n\n• Pôles & Projets de recherche\n• Membres de l'équipe & Expertise\n• Partenaires communautaires\n• Opportunités de partenariat\n• Événements & Chronologie\n\nQue voulez-vous savoir?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  /**
   * Enhanced Bot Response System
   * Now with more detailed, context-aware responses
   */
  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Enhanced language-specific responses
    const responses = {
      en: {
        greeting: "Hello! 👋 I'm MSK Chat, your intelligent assistant for our research partnership.\n\nI'm here to help you discover:\n✓ Our 3 Research Hubs\n✓ 56 Team Members\n✓ 22 Community Partners\n✓ Ongoing Research Projects\n✓ Ways to Get Involved\n✓ Connect with Hub Leaders\n\nWhat interests you most?",
        
        mission: "🎯 OUR MISSION:\n\nMobilizing Subjugated Knowledges for a Just and Inclusive Niagara is a SSHRC-funded transnational university-community partnership.\n\n📋 OUR GOALS:\n• Give voice to African descendant and foreign-born persons\n• Develop culturally responsive community services\n• Conduct multilingual research (English, French, Spanish)\n• Train student and community researchers\n• Foster social justice in Niagara\n\n🎨 BRANDING:\n• Black (#0A0A0A) - Authority & Clarity\n• White (#FFFFFF) - Accessibility & Truth\n• Dark Red (#8B0000) - Cultural Depth & Social Justice\n\n💡 We mobilize marginalized voices to create lasting change!",
        
        hubs: "🔬 OUR 3 RESEARCH HUBS:\n\n1️⃣ CHILDHOOD & GROWING UP HUB\n   Focus: Newcomer & racialized children's experiences\n   Areas: Housing, education, sport/recreation\n   Projects: 🔹 1 Project\n   Team Members: 👥 45 members\n   Hub Leader: Dr. Rebecca Raby (Brock University)\n   📧 Contact Hub Leader: Type 'contact childhood hub'\n\n2️⃣ HEALTH LITERACY HUB\n   Focus: Immigrant & refugee health literacy\n   Approach: Community-based health education\n   Projects: 🔹 1 Project\n   Team Members: 👥 20 members\n   Co-Leaders: Dr. Joanne Crawford (Brock) & Mariam Khayinza (TOES)\n   📧 Contact Hub Leaders: Type 'contact health hub'\n\n3️⃣ IDENTITY, CONNECTIONS & BELONGING HUB\n   Focus: Afro-descendants, LGBTQ+ newcomers, migrant farmworkers\n   Goal: Foster belonging and community integration\n   Projects: 🔹 3 Projects\n   Team Members: 👥 26 members\n   Hub Leader: Dr. Jean Ntakirutimana\n   📧 Contact Hub Leader: Type 'contact identity hub'\n\n💡 Total: 56 team members across all hubs!\n💡 Each hub uses participatory research methods!",
        
        hubDetail: "I can provide detailed information about any specific hub!\n\n🏘️ CHILDHOOD & GROWING UP HUB\nLed by Dr. Rebecca Raby (Hub Leader) with 👥 45 team members.\n\n🔹 PROJECT COUNT: 1 Project\n\nFOCUS AREAS:\n• Housing challenges for newcomer families\n• Educational integration for racialized children\n• Sport & recreation access and inclusion\n• Children's voices in research\n\nKEY PARTNERS:\n• YWCA Niagara Region (housing & family support)\n• Community organizations across Niagara\n\n📧 CONNECT: Type 'contact childhood hub' to reach Dr. Raby\n\n🏥 HEALTH LITERACY HUB\nCo-led by Dr. Joanne Crawford (Brock University) and Mariam Khayinza (TOES Niagara) with 👥 20 team members.\n\n🔹 PROJECT COUNT: 1 Project\n\nFOCUS AREAS:\n• Multilingual health information access\n• Community-based health education\n• Culturally responsive healthcare\n• Health navigation for newcomers\n\nKEY PARTNERS:\n• Bridges Niagara\n• TOES Niagara\n• Niagara Health\n• Community Health Centres\n• Future Black Female\n\n📧 CONNECT: Type 'contact health hub' to reach the co-leaders\n\n🤝 IDENTITY, CONNECTIONS & BELONGING\nLed by Dr. Jean Ntakirutimana with 👥 23 members across 3 projects:\n\n🔹 PROJECT COUNT: 3 Projects\n\n• PROJECT #1: Identity & Belonging - Afro Descendants (12 members)\n  Partners: SOFIFRAN, Welland Heritage, TOES Niagara\n\n• PROJECT #2: Migrant Farmworkers (5 members)\n  Partners: Migrant Farm Workers Project\n\n• PROJECT #3: LGBTQ+ Newcomers (8 members)\n  Partners: Niagara Immigration Partnership\n\n📧 CONNECT: Type 'contact identity hub' to reach Dr. Ntakirutimana\n\nWhich hub would you like to explore?",
        
        team: "👥 NOTRE ÉQUIPE (56 MEMBRES):\n\n🎓 CODIRECTION:\n• Dr. Livianna Tossutti (Université Brock)\n• Dr. Jean Ntakirutimana (Université Brock)\n📧 Contact: Tapez 'contact directors'\n\n🔬 CHEFS DE PÔLE:\n• Dr. Rebecca Raby - Pôle Enfance & Croissance\n• Dr. Joanne Crawford & Mariam Khayinza - Pôle Littératie en Santé\n• Dr. Jean Ntakirutimana - Pôle Identité, Connexions & Appartenance\n📧 Contact: Tapez 'contact [nom du pôle] hub'\n\n📊 DÉTAILS DE L'ÉQUIPE:\n• 45 membres - Pôle Enfance & Croissance\n• 20 membres - Pôle Littératie en Santé\n• 26 membres - Pôle Identité, Connexions & Appartenance\n\n🌍 UNIVERSITÉS:\n• Université Brock (chef de file)\n• Université de Toronto (OISE)\n• Université York\n• Université de Buffalo\n\n💡 Visitez notre page Biographies pour voir les profils complets!",
        
        partners: "🤝 COMMUNITY PARTNERS (22 ORGANIZATIONS):\n\n✅ WITH AUTHENTIC LOGOS:\n• YWCA Niagara Region - Housing & Support\n• Bridges Niagara - Settlement Services\n• TOES Niagara - Employment Support\n• Migrant Farm Workers Project - Labor Rights\n• St. Catharines Public Library - Community Education\n• Community Health Centres - Healthcare Access\n• Niagara Region Public Health - Public Health\n• Niagara Connects - Settlement Services\n• Welland Heritage - Community Education\n• Niagara Immigration Partnership - Settlement\n• Niagara Health - Healthcare Access\n• Future Black Female - Community Education\n\n🌟 PARTNERSHIP BENEFITS:\n• Co-lead research projects\n• Shape community programs\n• Access research findings\n• Build organizational capacity\n\n💡 Interested in becoming a partner?\n📧 Type 'partnership inquiry' for contact info!",
        
        contactChildhood: "📧 CHILDHOOD & GROWING UP HUB\n\n👤 HUB LEADER:\nDr. Rebecca Raby\nBrock University\n\n📬 TO CONNECT:\n1. Email: contact@msk-niagara.ca\n   Subject: 'Childhood Hub Inquiry - Attn: Dr. Raby'\n\n2. Visit our website Member Bios page\n\n3. Attend hub events (check Timeline & Events page)\n\n💡 BEST FOR INQUIRIES ABOUT:\n• Newcomer children's experiences\n• Housing & homelessness research\n• Educational integration\n• Sport & recreation access\n• Community-engaged research with children\n\n⏱️ Response time: 2-3 business days",
        
        contactHealth: "📧 HEALTH LITERACY HUB\n\n👤 CO-LEADERS:\nDr. Joanne Crawford (Brock University)\nMariam Khayinza (TOES Niagara)\n\n📬 TO CONNECT:\n1. Email: contact@msk-niagara.ca\n   Subject: 'Health Literacy Hub Inquiry'\n\n2. Visit our website Member Bios page\n\n3. Connect via TOES Niagara for community partnerships\n\n💡 BEST FOR INQUIRIES ABOUT:\n• Health literacy programs\n• Multilingual health information\n• Community health education\n• Healthcare navigation for newcomers\n• Academic-community partnerships\n\n⏱️ Response time: 2-3 business days",
        
        contactIdentity: "📧 IDENTITY, CONNECTIONS & BELONGING HUB\n\n👤 HUB LEADER:\nDr. Jean Ntakirutimana\nProfessor and Co-Director\nBrock University\n\n📬 TO CONNECT:\n1. Email: contact@msk-niagara.ca\n   Subject: 'Identity Hub Inquiry - Attn: Dr. Ntakirutimana'\n\n2. Visit our website Member Bios page\n\n3. Attend community events (check Timeline page)\n\n💡 BEST FOR INQUIRIES ABOUT:\n• Afro-descendant community research\n• LGBTQ+ newcomer support\n• Migrant farmworker advocacy\n• Identity & belonging studies\n• Community integration programs\n\n⏱️ Response time: 2-3 business days",
        
        contactDirectors: "📧 CODIRECTEURS MSK\n\n👤 CODIRECTEURS:\nDr. Livianna Tossutti - Professeure et Codirectrice, Université Brock\nDr. Jean Ntakirutimana - Professeur et Codirecteur, Université Brock\n\n📬 POUR SE CONNECTER:\n1. Email: contact@msk-niagara.ca\n   Objet: 'Inquiry sur le partenariat MSK - Codirecteurs'\n\n2. Téléphone: +1 (905) 688-5550\n\n3. Visitez: Université Brock\n   1812 Sir Isaac Brock Way\n   St. Catharines, ON L2S 3A1\n\n💡 MEILLEUR POUR LES DEMANDES SUR:\n• Stratégie globale du partenariat\n• Nouvelles opportunités de partenariat\n• Financement & ressources\n• Collaboration institutionnelle\n• Gouvernance & prise de décision\n\n⏱️ Temps de réponse: 2-3 jours ouvrables",
        
        partnershipInquiry: "🤝 BECOME A RESEARCH PARTNER\n\nWe welcome partnerships with:\n✅ Community organizations\n✅ Healthcare providers\n✅ Educational institutions\n✅ Settlement agencies\n✅ Cultural groups\n✅ Government agencies\n\n📧 CONTACT INFORMATION:\n• Email: contact@msk-niagara.ca\n• Phone: +1 (905) 688-5550\n• Address: Brock University, St. Catharines, ON\n\n📋 WHAT TO INCLUDE:\n• Your organization's name\n• Area of interest/focus\n• Type of partnership you're seeking\n• Your contact information\n\n🎯 PARTNERSHIP OPPORTUNITIES:\n• Co-lead research projects\n• Participate in community workshops\n• Access research findings\n• Shape program development\n\n⏱️ We typically respond within 2-3 business days!\n\n💡 Visit our Research Hubs page to see current partnerships!",
        
        projects: "📚 ACTIVE RESEARCH PROJECTS:\n\n1️⃣ CHILDHOOD EXPERIENCES\n   • Housing challenges for newcomer families\n   • Educational integration & success\n   • Access to sport & recreation\n\n2️⃣ HEALTH EQUITY\n   • Health literacy in multiple languages\n   • Culturally responsive health services\n   • Community health navigation\n\n3️⃣ IDENTITY & BELONGING\n   • Afro-descendant community building\n   • LGBTQ+ newcomer support networks\n   • Migrant farmworker advocacy\n\n📊 METHODOLOGY:\nParticipatory action research with community co-leadership\n\n🌍 LANGUAGES:\nEnglish, French, Spanish\n\n💡 All projects prioritize community voices and actionable outcomes!",
        
        involved: "🙋 GET INVOLVED:\n\nWe welcome partnerships from:\n\n✅ COMMUNITY ORGANIZATIONS\nPartner on research, access resources, shape programs\n\n✅ RESEARCHERS & STUDENTS\nJoin our hubs, access training, collaborate on projects\n\n✅ FUNDERS & SUPPORTERS\nSupport social justice research in Niagara\n\n✅ COMMUNITY MEMBERS\nParticipate in research, share your experiences\n\n📧 NEXT STEPS:\n1. Explore our website\n2. Attend our events (see Timeline page)\n3. Contact our team\n4. Join a research hub\n\n💡 Your voice matters! Let's build a more just Niagara together.",
        
        contact: "📞 CONTACT US:\n\nWe'd love to hear from you!\n\n📧 EMAIL:\nReach out through our website contact page\n\n🏢 LOCATION:\nBrock University, St. Catharines, Ontario\n\n🤝 FOR PARTNERSHIPS:\nContact our Co-Directors about:\n• Research collaborations\n• Community projects\n• Student opportunities\n• Event participation\n\n📅 EVENTS:\nCheck our Timeline & Events page for:\n• Community workshops\n• Research presentations\n• Partnership meetings\n\n💡 We typically respond within 2-3 business days!",
        
        timeline: "📅 OUR JOURNEY:\n\n✅ JUNE 2025 - Partnership Launch\n   SSHRC funding secured, team assembled\n\n✅ JULY 2025 - Hub Formation\n   3 research hubs established with community partners\n\n✅ AUG 2025 - Community Engagement\n   First workshops with immigrant communities\n\n🔄 ONGOING:\n   • Weekly hub meetings\n   • Monthly community workshops\n   • Quarterly research symposiums\n   • Annual partnership conferences\n\n🔮 UPCOMING:\n   Check our Timeline & Events page for:\n   • Community consultation sessions\n   • Research findings presentations\n   • Training workshops\n   • Partnership celebrations\n\n💡 We're building momentum for lasting change!",
        
        about: "ℹ️ ABOUT MSK NIAGARA:\n\n🎯 FULL NAME:\nMobilizing Subjugated Knowledges for a Just and Inclusive Niagara\n\n💰 FUNDING:\nSocial Sciences and Humanities Research Council (SSHRC)\n\n🤝 PARTNERSHIP TYPE:\nTransnational university-community collaboration\n\n🌍 SCOPE:\nNiagara Region with international perspectives\n\n📊 STRUCTURE:\n• Implementation Council (10 members)\n• 3 Research Hubs\n• 45+ Team Members\n• Multiple Community Partners\n\n🎓 INSTITUTIONS:\nBrock University (lead), U of T (OISE), international partners\n\n💡 Our work centers marginalized voices to transform systems!",
        
        governance: "⚖️ GOVERNANCE STRUCTURE:\n\n🏛️ IMPLEMENTATION COUNCIL (IC):\nOur democratic decision-making body\n\n👥 IC MEMBERS (10 total):\n• 2 Co-Directors\n• 6 Hub Representatives (2 per hub)\n  → 1 community partner\n  → 1 faculty member\n• 2 Student Representatives\n\n🔄 ROTATION:\nAnnual rotating membership ensures all voices are heard\n\n✅ DECISION-MAKING:\nConsensus-based, valuing each hub equally\n\n📋 RESPONSIBILITIES:\n• Set partnership priorities\n• Allocate resources\n• Ensure ethical research\n• Foster collaboration\n\n💡 Power-sharing is core to our social justice mission!",
        
        publications: "📖 KNOWLEDGE DISSEMINATION:\n\nWe share our findings through:\n\n📚 ACADEMIC:\n• Peer-reviewed journal articles\n• Conference presentations\n• Research reports\n• Policy briefs\n\n🌐 COMMUNITY:\n• Workshops & training sessions\n• Community reports (plain language)\n• Social media & blogs\n• Public events\n\n📊 MULTILINGUAL:\n• English, French, Spanish materials\n• Accessible formats\n• Community-friendly summaries\n\n🎯 IMPACT:\nOur research directly informs:\n• Community programs\n• Policy changes\n• Service improvements\n• Social advocacy\n\n💡 Visit our Knowledge Dissemination page for full publications!",
        
        sshrc: "💰 SSHRC FUNDING:\n\nWe're proudly funded by the Social Sciences and Humanities Research Council of Canada.\n\n🏆 PROGRAM:\nPartnership Grants - Community-University Research\n\n✅ WHY IT MATTERS:\n• Supports long-term partnerships\n• Ensures rigorous research\n• Funds community engagement\n• Trains next generation\n\n📊 IMPACT:\nSSHRC funding allows us to:\n• Hire student researchers\n• Support community partners\n• Conduct multi-year studies\n• Share findings widely\n\n🌟 ACCOUNTABILITY:\nWe report regularly on outcomes and community impact\n\n💡 This investment in social justice research creates lasting change!",
        
        languages: "🌍 MULTILINGUAL APPROACH:\n\nWe conduct research in THREE languages:\n\n🇬🇧 ENGLISH - Primary language\n🇫🇷 FRANÇAIS - Full bilingual support\n🇪🇸 ESPAÑOL - For Latin American communities\n\n✅ WHY IT MATTERS:\n• Reaches diverse communities\n• Honors linguistic identity\n• Ensures inclusive participation\n• Respects cultural context\n\n📊 OUR COMMITMENT:\n• Bilingual website (EN/FR)\n• Multilingual research materials\n• Translation services\n• Culturally appropriate communication\n\n💡 Language access is social justice!",
        
        niagara: "🏙️ NIAGARA REGION FOCUS:\n\nOur research centers on the Regional Municipality of Niagara:\n\n📍 GEOGRAPHY:\n12 municipalities from Fort Erie to Grimsby\n\n👥 DEMOGRAPHICS:\nDiverse, growing immigrant population\n\n🎯 WHY NIAGARA:\n• Mid-sized region (often overlooked)\n• Rich immigrant history\n• Growing diversity\n• Unique challenges & opportunities\n\n🌟 LOCAL IMPACT:\nOur findings help:\n• Small-mid sized communities nationally\n• Settlement agencies\n• Municipal governments\n• Community organizations\n\n💡 Building justice starts locally but ripples outward!",
        
        thanks: "You're very welcome! 😊\n\nI'm here whenever you need information about our research, team, or ways to get involved.\n\n💡 Quick tip: You can ask me about specific topics like:\n• Individual research hubs\n• Team member expertise\n• Partnership opportunities\n• Upcoming events\n\nIs there anything else I can help you with?",
        
        bye: "Thank you for chatting with MSK Chat! 👋\n\n🌟 REMEMBER:\n• Explore our website for detailed information\n• Check our Events page for upcoming opportunities\n• Reach out anytime about partnerships\n\n💡 Together, we're building a more just and inclusive Niagara!\n\nHave a wonderful day! 😊",
        
        help: "🆘 I CAN HELP YOU WITH:\n\n📚 RESEARCH:\n• Research hubs (3 main areas)\n• Active projects & findings\n• Methodology & approach\n\n👥 PEOPLE:\n• Team members (45 total)\n• Community partners\n• Leadership & governance\n\n🤝 ENGAGEMENT:\n• Partnership opportunities\n• How to get involved\n• Upcoming events\n\n📖 INFORMATION:\n• Our mission & values\n• Timeline & history\n• Publications & reports\n\n💬 Just ask me a question or choose a topic!\n\nWhat would you like to know?",
        
        unknown: "🤔 I'm not quite sure about that specific question.\n\n💡 I'M GREAT AT ANSWERING:\n\n✓ What are your research hubs?\n✓ Who is on your team?\n✓ How can I get involved?\n✓ Tell me about your partners\n✓ What's your mission?\n✓ Where are you located?\n✓ What projects are you working on?\n✓ When are your events?\n\n📝 Try rephrasing your question or pick a topic above!\n\nWhat would you like to know?",
      },
      fr: {
        greeting: "Bonjour! 👋 Je suis MSK Chat, votre assistant intelligent pour notre partenariat de recherche.\n\nJe peux vous aider à découvrir:\n✓ Nos 3 pôles de recherche\n✓ 56 membres de l'équipe\n✓ 22 partenaires communautaires\n✓ Projets de recherche en cours\n✓ Façons de participer\n✓ Contacter les chefs de pôle\n\nQu'est-ce qui vous intéresse le plus?",
        
        mission: "🎯 NOTRE MISSION:\n\nMobiliser les savoirs marginalisés pour un Niagara juste et inclusif est un partenariat transnational université-communauté financé par le CRSH.\n\n📋 NOS OBJECTIFS:\n• Donner la voix aux personnes d'ascendance africaine et nées à l'étranger\n• Développer des services communautaires culturellement adaptés\n• Mener des recherches multilingues (anglais, français, espagnol)\n• Former des chercheur·euse·s étudiant·e·s et communautaires\n• Favoriser la justice sociale à Niagara\n\n🎨 MARQUE:\n• Noir (#0A0A0A) - Autorité & Clarté\n• Blanc (#FFFFFF) - Accessibilité & Vérité\n• Rouge foncé (#8B0000) - Profondeur culturelle & Justice sociale\n\n💡 Nous mobilisons les voix marginalisées pour créer un changement durable!",
        
        hubs: "🔬 NOS 3 PÔLES DE RECHERCHE:\n\n1️⃣ PÔLE ENFANCE ET CROISSANCE\n   Focus: Expériences des enfants nouveaux arrivants et racialisés\n   Domaines: Logement, éducation, sport/loisirs\n   Projets: 🔹 1 Projet\n   Membres d'équipe: 👥 45 membres\n   Chef de pôle: Dr. Rebecca Raby (Université Brock)\n   📧 Contacter le chef de pôle: Tapez 'contact childhood hub'\n\n2️⃣ PÔLE LITTÉRATIE EN SANTÉ\n   Focus: Littératie en santé des immigrant·e·s et réfugié·e·s\n   Approche: Éducation communautaire en santé\n   Projets: 🔹 1 Projet\n   Membres d'équipe: 👥 20 membres\n   Co-Chefs: Dr. Joanne Crawford (Brock) & Mariam Khayinza (TOES)\n   📧 Contacter les co-chefs: Tapez 'contact health hub'\n\n3️⃣ PÔLE IDENTITÉ, CONNEXIONS ET APPARTENANCE\n   Focus: Afro-descendants, nouveaux arrivants LGBTQ+, travailleurs agricoles migrants\n   Objectif: Favoriser l'appartenance et l'intégration\n   Projets: 🔹 3 Projets\n   Membres d'équipe: 👥 26 membres\n   Chef de pôle: Dr. Jean Ntakirutimana\n   📧 Contacter le chef de pôle: Tapez 'contact identity hub'\n\n💡 Total: 56 membres d'équipe sur tous les pôles!\n💡 Chaque pôle utilise des méthodes de recherche participative!",
        
        hubDetail: "Je peux fournir des informations détaillées sur n'importe quel pôle!\n\n🏘️ PÔLE ENFANCE & CROISSANCE\nDirigé par Dr. Rebecca Raby (Chef de pôle) avec 👥 45 membres d'équipe.\n\n🔹 NOMBRE DE PROJETS: 1 Projet\n\nDOMAINES DE FOCUS:\n• Défis de logement pour familles nouvelles arrivantes\n• Intégration éducative pour enfants racialisés\n• Accès et inclusion au sport et aux loisirs\n• Voix des enfants dans la recherche\n\nPARTENAIRES CLÉS:\n• YWCA Région de Niagara (logement & soutien familial)\n• Organisations communautaires à travers Niagara\n\n📧 CONNECT: Tapez 'contact childhood hub' pour joindre Dr. Raby\n\n🏥 PÔLE LITTÉRATIE EN SANTÉ\nCo-dirigé par Dr. Joanne Crawford (Université Brock) et Mariam Khayinza (TOES Niagara) avec 👥 20 membres d'équipe.\n\n🔹 NOMBRE DE PROJETS: 1 Projet\n\nDOMAINES DE FOCUS:\n• Accès à des informations de santé multilingues\n• Éducation communautaire en santé\n• Soins de santé culturellement adaptés\n• Navigation en santé pour les nouveaux arrivants\n\nPARTENAIRES CLÉS:\n• Bridges Niagara\n• TOES Niagara\n• Niagara Health\n• Centres de santé communautaire\n• Future Black Female\n\n📧 CONNECT: Tapez 'contact health hub' pour joindre les co-chefs\n\n🤝 IDENTITÉ, CONNEXIONS & APPARTENANCE\nDirigé par Dr. Jean Ntakirutimana avec 👥 23 membres sur 3 projets:\n\n🔹 NOMBRE DE PROJETS: 3 Projets\n\n• PROJET #1: Identité & Appartenance - Afro Descendants (12 membres)\n  Partenaires: SOFIFRAN, Heritage de Welland, TOES Niagara\n\n• PROJET #2: Travailleurs agricoles migrants (5 membres)\n  Partenaires: Projet des travailleurs agricoles migrants\n\n• PROJET #3: Nouveaux arrivants LGBTQ+ (8 membres)\n  Partenaires: Partenariat d'immigration de Niagara\n\n📧 CONNECT: Tapez 'contact identity hub' pour joindre Dr. Ntakirutimana\n\nQuel pôle souhaitez-vous explorer?",
        
        team: "👥 NOTRE ÉQUIPE (56 MEMBRES):\n\n🎓 CODIRECTION:\n• Dr. Livianna Tossutti (Université Brock)\n• Dr. Jean Ntakirutimana (Université Brock)\n📧 Contact: Tapez 'contact directors'\n\n🔬 CHEFS DE PÔLE:\n• Dr. Rebecca Raby - Pôle Enfance & Croissance\n• Dr. Joanne Crawford & Mariam Khayinza - Pôle Littératie en Santé\n• Dr. Jean Ntakirutimana - Pôle Identité, Connexions & Appartenance\n📧 Contact: Tapez 'contact [nom du pôle] hub'\n\n📊 DÉTAILS DE L'ÉQUIPE:\n• 45 membres - Pôle Enfance & Croissance\n• 20 membres - Pôle Littératie en Santé\n• 26 membres - Pôle Identité, Connexions & Appartenance\n\n🌍 UNIVERSITÉS:\n• Université Brock (chef de file)\n• Université de Toronto (OISE)\n• Université York\n• Université de Buffalo\n\n💡 Visitez notre page Biographies pour voir les profils complets!",
        
        partners: "🤝 PARTENAIRES COMMUNAUTAIRES (22 ORGANISATIONS):\n\n✅ AVEC DES LOGOS AUTHENTIQUES:\n• YWCA Région de Niagara - Logement & Soutien\n• Bridges Niagara - Services d'établissement\n• TOES Niagara - Soutien à l'emploi\n• Projet des travailleurs agricoles migrants - Droits du travail\n• Bibliothèque publique de St. Catharines - Éducation communautaire\n• Centres de santé communautaire - Accès aux soins de santé\n• Santé publique de la Région de Niagara - Santé publique\n• Niagara Connects - Services d'établissement\n• Heritage de Welland - Éducation communautaire\n• Partenariat d'immigration de Niagara - Établissement\n• Niagara Health - Accès aux soins de santé\n• Future Black Female - Éducation communautaire\n\n🌟 AVANTAGES DU PARTENARIAT:\n• Co-diriger des projets de recherche\n• Concevoir des programmes communautaires\n• Accéder aux résultats de la recherche\n• Construire la capacité organisationnelle\n\n💡 Intéressé à devenir partenaire?\n📧 Tapez 'partnership inquiry' pour les informations de contact!",
        
        contactChildhood: "📧 PÔLE ENFANCE & CROISSANCE\n\n👤 CHEF DE PÔLE:\nDr. Rebecca Raby\nUniversité Brock\n\n📬 POUR SE CONNECTER:\n1. Email: contact@msk-niagara.ca\n   Objet: 'Inquiry sur le pôle Enfance - Attn: Dr. Raby'\n\n2. Visitez notre page Biographies sur le site web\n\n3. Assistez aux événements du pôle (voir la page Chronologie & Événements)\n\n💡 MEILLEUR POUR LES DEMANDES SUR:\n• Expériences des enfants nouveaux arrivants\n• Recherche sur le logement et l'itinérance\n• Intégration éducative\n• Accès et inclusion au sport et aux loisirs\n• Recherche engagée avec les enfants\n\n⏱️ Temps de réponse: 2-3 jours ouvrables",
        
        contactHealth: "📧 PÔLE LITTÉRATIE EN SANTÉ\n\n👤 CO-CHEFS:\nDr. Joanne Crawford (Université Brock)\nMariam Khayinza (TOES Niagara)\n\n📬 POUR SE CONNECTER:\n1. Email: contact@msk-niagara.ca\n   Objet: 'Inquiry sur le pôle Littératie en Santé'\n\n2. Visitez notre page Biographies sur le site web\n\n3. Connectez-vous via TOES Niagara pour les partenariats communautaires\n\n💡 MEILLEUR POUR LES DEMANDES SUR:\n• Programmes de littératie en santé\n• Informations de santé multilingues\n• Éducation communautaire en santé\n• Navigation en santé pour les nouveaux arrivants\n• Partenariats académique-communautaires\n\n⏱️ Temps de réponse: 2-3 jours ouvrables",
        
        contactIdentity: "📧 IDENTITY, CONNECTIONS & BELONGING HUB\n\n👤 HUB LEADER:\nDr. Jean Ntakirutimana\nProfessor and Co-Director\nBrock University\n\n📬 TO CONNECT:\n1. Email: contact@msk-niagara.ca\n   Subject: 'Identity Hub Inquiry - Attn: Dr. Ntakirutimana'\n\n2. Visit our website Member Bios page\n\n3. Attend community events (check Timeline page)\n\n💡 BEST FOR INQUIRIES ABOUT:\n• Afro-descendant community research\n• LGBTQ+ newcomer support\n• Migrant farmworker advocacy\n• Identity & belonging studies\n• Community integration programs\n\n⏱️ Response time: 2-3 business days",
        
        contactDirectors: "📧 CODIRECTEURS MSK\n\n👤 CODIRECTEURS:\nDr. Livianna Tossutti - Professeure et Codirectrice, Université Brock\nDr. Jean Ntakirutimana - Professeur et Codirecteur, Université Brock\n\n📬 POUR SE CONNECTER:\n1. Email: contact@msk-niagara.ca\n   Objet: 'Inquiry sur le partenariat MSK - Codirecteurs'\n\n2. Téléphone: +1 (905) 688-5550\n\n3. Visitez: Université Brock\n   1812 Sir Isaac Brock Way\n   St. Catharines, ON L2S 3A1\n\n💡 MEILLEUR POUR LES DEMANDES SUR:\n• Stratégie globale du partenariat\n• Nouvelles opportunités de partenariat\n• Financement & ressources\n• Collaboration institutionnelle\n• Gouvernance & prise de décision\n\n⏱️ Temps de réponse: 2-3 jours ouvrables",
        
        partnershipInquiry: "🤝 DEVENIR PARTENAIRE DE RECHERCHE\n\nNous accueillons des partenariats avec:\n✅ Organisations communautaires\n✅ Fournisseurs de services de santé\n✅ Institutions éducatives\n✅ Agences d'établissement\n✅ Groupes culturels\n✅ Agences gouvernementales\n\n📧 INFORMATIONS DE CONTACT:\n• Email: contact@msk-niagara.ca\n• Téléphone: +1 (905) 688-5550\n• Adresse: Université Brock, St. Catharines, ON\n\n📋 À INCLURE:\n• Nom de votre organisation\n• Domaine d'intérêt/focus\n• Type de partenariat recherché\n• Vos informations de contact\n\n🎯 OPPORTUNITÉS DE PARTENARIAT:\n• Co-diriger des projets de recherche\n• Participer aux ateliers communautaires\n• Accéder aux résultats de la recherche\n• Concevoir le développement des programmes\n\n⏱️ Nous répondons généralement sous 2-3 jours ouvrables!\n\n💡 Visitez notre page Pôles de recherche pour voir les partenariats actuels!",
        
        projects: "📚 PROJETS DE RECHERCHE ACTIFS:\n\n1️⃣ EXPÉRIENCES DE L'ENFANCE\n   • Défis de logement pour familles nouvelles arrivantes\n   • Intégration et succès éducatifs\n   • Accès au sport et aux loisirs\n\n2️⃣ ÉQUITÉ EN SANTÉ\n   • Programmes de littératie en santé multilingue\n   • Services de santé culturellement adaptés\n   • Navigation communautaire en santé\n\n3️⃣ IDENTITÉ & APPARTENANCE\n   • Construction communautaire afro-descendante\n   • Réseaux de soutien LGBTQ+ nouveaux arrivants\n   • Défense des travailleurs agricoles migrants\n\n📊 MÉTHODOLOGIE:\nRecherche-action participative avec co-leadership communautaire\n\n🌍 LANGUES:\nAnglais, français, espagnol\n\n💡 Tous les projets priorisent les voix communautaires!",
        
        involved: "🙋 PARTICIPEZ:\n\nNous accueillons des partenariats de:\n\n✅ ORGANISATIONS COMMUNAUTAIRES\nPartenariat de recherche, accès aux ressources, façonnement de programmes\n\n✅ CHERCHEUR·EUSE·S & ÉTUDIANT·E·S\nRejoignez nos pôles, accédez à la formation, collaborez\n\n✅ BAILLEURS DE FONDS & SUPPORTERS\nSoutenez la recherche en justice sociale à Niagara\n\n✅ MEMBRES DE LA COMMUNAUTÉ\nParticipez à la recherche, partagez vos expériences\n\n📧 PROCHAINES ÉTAPES:\n1. Explorez notre site web\n2. Assistez à nos événements (page Chronologie)\n3. Contactez notre équipe\n4. Rejoignez un pôle de recherche\n\n💡 Votre voix compte! Construisons ensemble un Niagara plus juste.",
        
        contact: "📞 CONTACTEZ-NOUS:\n\nNous aimerions avoir de vos nouvelles!\n\n📧 COURRIEL:\nContactez-nous via la page contact de notre site\n\n🏢 EMPLACEMENT:\nUniversité Brock, St. Catharines, Ontario\n\n🤝 POUR PARTENARIATS:\nContactez nos codirecteur·rice·s pour:\n• Collaborations de recherche\n• Projets communautaires\n• Opportunités étudiantes\n• Participation aux événements\n\n📅 ÉVÉNEMENTS:\nConsultez notre page Chronologie pour:\n• Ateliers communautaires\n• Présentations de recherche\n• Rencontres de partenariat\n\n💡 Nous répondons généralement sous 2-3 jours ouvrables!",
        
        timeline: "📅 NOTRE PARCOURS:\n\n✅ JUIN 2025 - Lancement du partenariat\n   Financement CRSH obtenu, équipe assemblée\n\n✅ JUILLET 2025 - Formation des pôles\n   3 pôles établis avec partenaires communautaires\n\n✅ AOÛT 2025 - Engagement communautaire\n   Premiers ateliers avec communautés immigrantes\n\n🔄 EN COURS:\n   • Rencontres hebdomadaires de pôles\n   • Ateliers communautaires mensuels\n   • Symposiums de recherche trimestriels\n   • Conférences annuelles\n\n🔮 À VENIR:\n   Consultez notre page Chronologie pour:\n   • Sessions de consultation communautaire\n   • Présentations de résultats\n   • Ateliers de formation\n   • Célébrations de partenariat\n\n💡 Nous construisons l'élan pour un changement durable!",
        
        about: "ℹ️ À PROPOS DE MSK NIAGARA:\n\n🎯 NOM COMPLET:\nMobiliser les savoirs marginalisés pour un Niagara juste et inclusif\n\n💰 FINANCEMENT:\nConseil de recherches en sciences humaines (CRSH)\n\n🤝 TYPE DE PARTENARIAT:\nCollaboration transnationale université-communauté\n\n🌍 PORTÉE:\nRégion de Niagara avec perspectives internationales\n\n📊 STRUCTURE:\n• Conseil de mise en œuvre (10 membres)\n• 3 pôles de recherche\n• 45+ membres de l'équipe\n• Multiples partenaires communautaires\n\n🎓 INSTITUTIONS:\nUniversité Brock (chef de file), U de T (OISE), partenaires internationaux\n\n💡 Notre travail centre les voix marginalisées pour transformer les systèmes!",
        
        governance: "⚖️ STRUCTURE DE GOUVERNANCE:\n\n🏛️ CONSEIL DE MISE EN ŒUVRE (CM):\nNotre organe décisionnel démocratique\n\n👥 MEMBRES DU CM (10 au total):\n• 2 Codirecteur·rice·s\n• 6 Représentant·e·s de pôles (2 par pôle)\n  → 1 partenaire communautaire\n  → 1 membre du corps professoral\n• 2 Représentant·e·s étudiant·e·s\n\n🔄 ROTATION:\nAdhésion rotative annuelle pour toutes les voix\n\n✅ PRISE DE DÉCISION:\nBasée sur le consensus, valorisant chaque pôle également\n\n📋 RESPONSABILITÉS:\n• Établir les priorités\n• Allouer les ressources\n• Assurer la recherche éthique\n• Favoriser la collaboration\n\n💡 Le partage du pouvoir est au cœur de notre mission!",
        
        publications: "📖 DIFFUSION DES CONNAISSANCES:\n\nNous partageons nos résultats via:\n\n📚 ACADÉMIQUE:\n• Articles de revues avec comité de lecture\n• Présentations de conférence\n• Rapports de recherche\n• Notes d'orientation\n\n🌐 COMMUNAUTAIRE:\n• Ateliers et sessions de formation\n• Rapports communautaires (langage simple)\n• Médias sociaux et blogues\n• Événements publics\n\n📊 MULTILINGUE:\n• Matériels en anglais, français, espagnol\n• Formats accessibles\n• Résumés adaptés à la communauté\n\n🎯 IMPACT:\nNotre recherche informe directement:\n• Programmes communautaires\n• Changements de politiques\n• Améliorations de services\n• Plaidoyer social\n\n💡 Visitez notre page Diffusion des connaissances!",
        
        sshrc: "💰 FINANCEMENT CRSH:\n\nNous sommes fièrement financés par le Conseil de recherches en sciences humaines du Canada.\n\n🏆 PROGRAMME:\nSubventions de partenariat - Recherche université-communauté\n\n✅ POURQUOI C'EST IMPORTANT:\n• Soutient les partenariats à long terme\n• Assure une recherche rigoureuse\n• Finance l'engagement communautaire\n• Forme la prochaine génération\n\n📊 IMPACT:\nLe financement CRSH nous permet de:\n• Embaucher des chercheur·euse·s étudiant·e·s\n• Soutenir les partenaires communautaires\n• Mener des études pluriannuelles\n• Partager largement les résultats\n\n🌟 RESPONSABILITÉ:\nNous rapportons régulièrement sur les résultats et l'impact\n\n💡 Cet investissement en recherche sociale crée un changement durable!",
        
        languages: "🌍 APPROCHE MULTILINGUE:\n\nNous menons des recherches en TROIS langues:\n\n🇬🇧 ANGLAIS - Langue principale\n🇫🇷 FRANÇAIS - Soutien bilingue complet\n🇪🇸 ESPAGNOL - Pour les communautés latino-américaines\n\n✅ POURQUOI C'EST IMPORTANT:\n• Rejoint diverses communautés\n• Honore l'identité linguistique\n• Assure une participation inclusive\n• Respecte le contexte culturel\n\n📊 NOTRE ENGAGEMENT:\n• Site web bilingue (EN/FR)\n• Matériels de recherche multilingues\n• Services de traduction\n• Communication culturellement appropriée\n\n💡 L'accès linguistique est la justice sociale!",
        
        niagara: "🏙️ FOCUS RÉGION DE NIAGARA:\n\nNotre recherche se concentre sur la municipalité régionale de Niagara:\n\n📍 GÉOGRAPHIE:\n12 municipalités de Fort Erie à Grimsby\n\n👥 DÉMOGRAPHIE:\nPopulation immigrante diverse et croissante\n\n🎯 POURQUOI NIAGARA:\n• Région de taille moyenne (souvent négligée)\n• Riche histoire d'immigration\n• Diversité croissante\n• Défis et opportunités uniques\n\n🌟 IMPACT LOCAL:\nNos résultats aident:\n• Communautés de petite-moyenne taille nationalement\n• Agences d'établissement\n• Gouvernements municipaux\n• Organisations communautaires\n\n💡 Construire la justice commence localement mais rayonne!",
        
        thanks: "De rien! 😊\n\nJe suis là quand vous avez besoin d'informations sur notre recherche, équipe ou façons de participer.\n\n💡 Conseil rapide: Vous pouvez me poser des questions sur:\n• Pôles de recherche individuels\n• Expertise des membres\n• Opportunités de partenariat\n• Événements à venir\n\nY a-t-il autre chose que je puisse faire pour vous?",
        
        bye: "Merci d'avoir discuté avec MSK Chat! 👋\n\n🌟 RAPPELEZ-VOUS:\n• Explorez notre site pour des informations détaillées\n• Consultez notre page Événements\n• Contactez-nous pour des partenariats\n\n💡 Ensemble, nous construisons un Niagara plus juste et inclusif!\n\nPassez une excellente journée! 😊",
        
        help: "🆘 JE PEUX VOUS AIDER AVEC:\n\n📚 RECHERCHE:\n• Pôles de recherche (3 domaines principaux)\n• Projets et résultats actifs\n• Méthodologie et approche\n\n👥 PERSONNES:\n• Membres de l'équipe (45 au total)\n• Partenaires communautaires\n• Leadership et gouvernance\n\n🤝 ENGAGEMENT:\n• Opportunités de partenariat\n• Comment participer\n• Événements à venir\n\n📖 INFORMATION:\n• Notre mission et valeurs\n• Chronologie et histoire\n• Publications et rapports\n\n💬 Posez-moi simplement une question ou choisissez un sujet!\n\nQue voulez-vous savoir?",
        
        unknown: "🤔 Je ne suis pas sûr de cette question spécifique.\n\n💡 JE SUIS EXCELLENT POUR RÉPONDRE À:\n\n✓ Quels sont vos pôles de recherche?\n✓ Qui est dans votre équipe?\n✓ Comment puis-je participer?\n✓ Parlez-moi de vos partenaires\n✓ Quelle est votre mission?\n✓ Où êtes-vous situés?\n✓ Sur quels projets travaillez-vous?\n✓ Quand sont vos événements?\n\n📝 Essayez de reformuler votre question ou choisissez un sujet!\n\nQue voulez-vous savoir?",
      }
    };

    const lang = language === 'en' ? 'en' : 'fr';

    // Enhanced pattern matching with more specific responses

    // Greeting patterns
    if (/^(hi|hello|hey|bonjour|salut|good morning|good afternoon)/i.test(lowerMessage)) {
      return responses[lang].greeting;
    }

    // Mission/About queries
    if (/(mission|about|what is msk|qui êtes|c'est quoi|purpose|objectif|goal)/i.test(lowerMessage)) {
      return responses[lang].mission;
    }

    // Hub-related queries
    if (/(hub|pôle|research hub|pôle de recherche|childhood|enfance|health|santé|identity|identité|belonging|appartenance)/i.test(lowerMessage)) {
      if (/(detail|specific|tell me more|en savoir plus|childhood|enfance|health|santé|identity|identité)/i.test(lowerMessage)) {
        return responses[lang].hubDetail;
      }
      return responses[lang].hubs;
    }

    // Team-related queries
    if (/(team|member|researcher|staff|faculty|équipe|membre|chercheur|personnel|who|qui)/i.test(lowerMessage)) {
      return responses[lang].team;
    }

    // Partner-related queries
    if (/(partner|community|organization|ywca|migrant|farmworker|partenaire|communauté|organisme)/i.test(lowerMessage)) {
      return responses[lang].partners;
    }

    // Project-related queries
    if (/(project|research|study|work|projet|recherche|étude|travail|what are you working|sur quoi travaillez)/i.test(lowerMessage)) {
      return responses[lang].projects;
    }

    // Get involved queries
    if (/(involve|join|participate|volunteer|collaboration|collaborate|impliquer|rejoindre|participer|collabor)/i.test(lowerMessage)) {
      return responses[lang].involved;
    }

    // Contact queries
    if (/(contact|email|phone|reach|address|location|contacter|courriel|téléphone|joindre|adresse|où)/i.test(lowerMessage)) {
      return responses[lang].contact;
    }

    // Timeline/Events queries
    if (/(timeline|event|history|when|chronologie|événement|histoire|quand|calendar)/i.test(lowerMessage)) {
      return responses[lang].timeline;
    }

    // About/Information queries
    if (/(about|information|learn more|en savoir|info|what is|c'est quoi)/i.test(lowerMessage)) {
      return responses[lang].about;
    }

    // Governance queries
    if (/(governance|structure|council|implementation|gouvernance|conseil|mise en œuvre|organization)/i.test(lowerMessage)) {
      return responses[lang].governance;
    }

    // Publications queries
    if (/(publication|dissemination|paper|article|report|diffusion|rapport|document)/i.test(lowerMessage)) {
      return responses[lang].publications;
    }

    // SSHRC/Funding queries
    if (/(sshrc|crsh|fund|grant|money|financement|subvention)/i.test(lowerMessage)) {
      return responses[lang].sshrc;
    }

    // Language queries
    if (/(language|multilingual|translation|langue|multilingue|traduction|english|french|spanish|anglais|français|espagnol)/i.test(lowerMessage)) {
      return responses[lang].languages;
    }

    // Niagara queries
    if (/(niagara|region|local|st catharines|welland|fort erie|région|locale)/i.test(lowerMessage)) {
      return responses[lang].niagara;
    }

    // Help queries
    if (/(help|assist|support|aide|aider|soutien|what can you|que peux-tu)/i.test(lowerMessage)) {
      return responses[lang].help;
    }

    // Contact hub leaders - specific queries
    if (/(contact.*childhood|childhood.*contact|childhood.*hub|contact.*raby|raby)/i.test(lowerMessage)) {
      return responses[lang].contactChildhood;
    }

    if (/(contact.*health|health.*contact|health.*hub|contact.*crawford|crawford|contact.*khayinza|khayinza)/i.test(lowerMessage)) {
      return responses[lang].contactHealth;
    }

    if (/(contact.*identity|identity.*contact|identity.*hub|contact.*ntakirutimana|ntakirutimana|belonging.*contact)/i.test(lowerMessage)) {
      return responses[lang].contactIdentity;
    }

    if (/(contact.*director|director.*contact|contact.*tossutti|tossutti|co-director)/i.test(lowerMessage)) {
      return responses[lang].contactDirectors;
    }

    if (/(partnership.*inquiry|become.*partner|new.*partnership|partner.*opportunity)/i.test(lowerMessage)) {
      return responses[lang].partnershipInquiry;
    }

    // Thanks
    if (/(thank|merci|thanks|appreciate|grateful)/i.test(lowerMessage)) {
      return responses[lang].thanks;
    }

    // Goodbye
    if (/(bye|goodbye|see you|au revoir|à bientôt|adieu|ciao)/i.test(lowerMessage)) {
      return responses[lang].bye;
    }

    // Default response
    return responses[lang].unknown;
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate realistic bot typing delay (500-1500ms based on response length)
    const typingDelay = 800 + Math.random() * 700;
    
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleQuickReply = (action: string) => {
    const quickReplyTexts: Record<string, { en: string; fr: string }> = {
      hubs: { en: 'Tell me about your research hubs', fr: 'Parlez-moi de vos pôles de recherche' },
      mission: { en: 'What is your mission?', fr: 'Quelle est votre mission?' },
      involved: { en: 'How can I get involved?', fr: 'Comment puis-je participer?' },
      team: { en: 'Tell me about your team and partners', fr: 'Parlez-moi de votre équipe et partenaires' },
    };

    const text = language === 'en' ? quickReplyTexts[action].en : quickReplyTexts[action].fr;
    handleSendMessage(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button - Black, White & Dark Red Theme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 border-2 ${ 
          isOpen 
            ? 'bg-[#8B0000] text-white border-[#8B0000] rotate-0' 
            : 'bg-[#8B0000] text-white border-[#8B0000] hover:bg-[#A40000] hover:border-[#A40000] hover:scale-110 hover:shadow-[0_0_30px_rgba(139,0,0,0.5)]'
        }`}
        aria-label="Toggle MSK Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#8B0000] animate-pulse"></div>
        )}
      </button>

      {/* Chat Window - Enhanced Design */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-[#8B0000]/20">
          {/* Header - Dark Red Gradient */}
          <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-4 flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold flex items-center gap-2 text-white">
                MSK Chat
              </h3>
              <p className="text-xs opacity-90 flex items-center gap-1 text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {language === 'en' ? 'Online • Ready to help' : 'En ligne • Prêt à aider'}
              </p>
            </div>
          </div>

          {/* Messages - Light Gray Background */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${ 
                  message.sender === 'bot' 
                    ? 'bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white' 
                    : 'bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white'
                }`}>
                  {message.sender === 'bot' ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md ${ 
                    message.sender === 'bot'
                      ? 'bg-white text-[#0A0A0A] border border-[#8B0000]/10'
                      : 'bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white'
                  }`}
                >
                  <p className={`text-sm whitespace-pre-wrap break-words leading-relaxed ${message.sender === 'user' ? 'text-white' : ''}`}>{message.text}</p>
                  <p className={`text-xs mt-1 ${ 
                    message.sender === 'bot' ? 'text-gray-400' : 'text-white/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 animate-fade-in">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-[#8B0000]/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && !isTyping && (
            <div className="p-3 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2 font-medium">
                {language === 'en' ? '💡 Quick topics:' : '💡 Sujets rapides:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply.action)}
                    className="px-3 py-1.5 bg-[#8B0000]/10 text-[#8B0000] rounded-full text-xs font-medium hover:bg-[#8B0000]/20 hover:scale-105 transition-all border border-[#8B0000]/20"
                  >
                    {language === 'en' ? reply.text : reply.textFr}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input - Enhanced Design */}
          <div className="p-4 bg-white border-t-2 border-[#8B0000]/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'en' ? 'Ask me anything...' : 'Posez-moi une question...'}
                className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000] text-sm transition-all"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2.5 bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white rounded-full hover:from-[#A40000] hover:to-[#8B0000] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:hover:shadow-md transform hover:scale-105 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              {language === 'en' ? 'Powered by MSK AI • Bilingual Support' : 'Propulsé par MSK IA • Support bilingue'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}