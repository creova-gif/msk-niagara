/**
 * TeamMemberCard Component
 * 
 * Reusable card component for displaying team member information
 * with profile pictures, roles, and contact details.
 * 
 * Features:
 * - Profile photo support with fallback initials
 * - Hub and role badges
 * - Contact information
 * - Responsive design
 * - New color scheme (Black, White, Dark Red)
 * 
 * @author MSK Development Team
 * @version 1.0
 */

import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Building2 } from 'lucide-react';

export interface TeamMember {
  name: string;
  title: string;
  titleFr?: string;
  organization: string;
  organizationFr?: string;
  email: string;
  photo?: string;
  hub: string;
  hubFr?: string;
  role?: string;
  roleFr?: string;
  isHubLeader?: boolean;
  isCoDirector?: boolean;
  bio?: string;
  bioFr?: string;
  type?: 'faculty' | 'student' | 'community' | 'postdoc';
}

interface TeamMemberCardProps {
  member: TeamMember;
  language?: 'en' | 'fr';
  showHub?: boolean;
}

export function TeamMemberCard({ member, language = 'en', showHub = true }: TeamMemberCardProps) {
  // Get initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-t-4 border-dark-red">
      <CardContent className="p-0">
        {/* Photo Section */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {member.photo ? (
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-dark-red text-white">
              <span className="text-4xl font-bold">{getInitials(member.name)}</span>
            </div>
          )}
          
          {/* Leadership Badges */}
          {(member.isCoDirector || member.isHubLeader) && (
            <div className="absolute top-3 left-3">
              {member.isCoDirector && (
                <Badge className="bg-dark-red text-white border-none shadow-lg mb-1">
                  {language === 'en' ? 'Co-Director' : 'Codirecteur'}
                </Badge>
              )}
              {member.isHubLeader && (
                <Badge className="bg-primary text-white border-none shadow-lg">
                  {language === 'en' ? 'Hub Leader' : 'Chef de pôle'}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Name & Title */}
          <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
          <p className="text-dark-red font-semibold mb-3">
            {language === 'en' ? member.title : (member.titleFr || member.title)}
          </p>

          {/* Organization */}
          <div className="flex items-start gap-2 text-secondary text-sm mb-3">
            <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-dark-red" />
            <span>{language === 'en' ? member.organization : (member.organizationFr || member.organization)}</span>
          </div>

          {/* Hub Badge */}
          {showHub && member.hub && (
            <Badge variant="secondary" className="mb-3 text-xs">
              {language === 'en' ? member.hub : (member.hubFr || member.hub)}
            </Badge>
          )}

          {/* Bio */}
          {member.bio && (
            <p className="text-sm text-secondary leading-relaxed mb-4 line-clamp-3">
              {language === 'en' ? member.bio : (member.bioFr || member.bio)}
            </p>
          )}

          {/* Contact */}
          {member.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-dark-red flex-shrink-0" />
              <a 
                href={`mailto:${member.email}`} 
                className="text-sm text-dark-red hover:text-dark-red/80 transition-colors truncate font-medium"
              >
                {language === 'en' ? 'Contact' : 'Contacter'}
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Hub Leadership Showcase Component
 * Displays hub leaders in a prominent horizontal layout
 */
interface HubLeadershipProps {
  leaders: TeamMember[];
  language?: 'en' | 'fr';
  title?: string;
  titleFr?: string;
}

export function HubLeadership({ leaders, language = 'en', title, titleFr }: HubLeadershipProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          {language === 'en' ? (title || 'Hub Leadership') : (titleFr || 'Direction des pôles')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              {/* Leader Photo */}
              <div className="mb-4 mx-auto">
                {leader.photo ? (
                  <img 
                    src={leader.photo} 
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-dark-red shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary to-dark-red text-white flex items-center justify-center border-4 border-dark-red shadow-lg">
                    <span className="text-3xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Leader Info */}
              <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
              <p className="text-dark-red font-semibold mb-2">
                {language === 'en' ? leader.title : (leader.titleFr || leader.title)}
              </p>
              <p className="text-sm text-secondary mb-3">
                {language === 'en' ? leader.organization : (leader.organizationFr || leader.organization)}
              </p>
              
              {leader.hub && (
                <Badge className="bg-dark-red text-white hover:bg-dark-red/90">
                  {language === 'en' ? leader.hub : (leader.hubFr || leader.hub)}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Team Grid Component
 * Displays team members in a responsive grid layout
 */
interface TeamGridProps {
  members: TeamMember[];
  language?: 'en' | 'fr';
  title?: string;
  titleFr?: string;
  showHub?: boolean;
}

export function TeamGrid({ members, language = 'en', title, titleFr, showHub = true }: TeamGridProps) {
  if (members.length === 0) return null;

  return (
    <div className="mb-16">
      {title && (
        <h2 className="text-2xl font-bold text-primary mb-8">
          {language === 'en' ? title : (titleFr || title)}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamMemberCard 
            key={index} 
            member={member} 
            language={language} 
            showHub={showHub}
          />
        ))}
      </div>
    </div>
  );
}
