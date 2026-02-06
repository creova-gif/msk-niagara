/**
 * Premium Section Component
 * Provides consistent spacing and styling across all pages
 */

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'muted' | 'dark' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function Section({ 
  children, 
  className = '', 
  background = 'white',
  spacing = 'lg',
  id 
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    muted: 'bg-[#F9F9F9]',
    dark: 'bg-[#0A0A0A] text-white',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
  };

  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  return (
    <section 
      id={id}
      className={`${bgClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}