import type { ReactNode } from 'react';

/**
 * Shared brand building blocks — Figma Brand Identity System, page 09
 * (Component Library) and the page 16 website mockups.
 */

/* ─────────────────────────────────────────────
   HUB SYSTEM
   Hub 01 Childhood = Ochre · Hub 02 Health Literacy = Sage ·
   Hub 03 Identity, Connections & Belonging = Terracotta.
   Class names are written out in full so Tailwind can see them.
───────────────────────────────────────────── */
export type HubKey = 'childhood' | 'health' | 'identity';

export const HUB_STYLE: Record<
  HubKey,
  {
    number: '01' | '02' | '03';
    href: string;
    /** 4px accent bar / solid fill */
    solid: string;
    /** soft tinted chip: background + readable text */
    chip: string;
    /** accent text on light surfaces (AA) */
    text: string;
    /** accent text on dark surfaces */
    textOnDark: string;
    /** square eyebrow bullet class */
    eyebrow: string;
    /** raw hex, for SVG / inline style / animation props */
    hex: string;
  }
> = {
  childhood: {
    number: '01',
    href: '/about/hubs/childhood',
    solid: 'bg-ochre-500',
    chip: 'bg-ochre-50 text-ochre-700',
    text: 'text-ochre-700',
    textOnDark: 'text-ochre-300',
    eyebrow: 'eyebrow-ochre',
    hex: '#D6A43A',
  },
  health: {
    number: '02',
    href: '/about/hubs/health',
    solid: 'bg-sage-500',
    chip: 'bg-sage-50 text-sage-700',
    text: 'text-sage-600',
    textOnDark: 'text-sage-300',
    eyebrow: 'eyebrow-sage',
    hex: '#4E8064',
  },
  identity: {
    number: '03',
    href: '/about/hubs/identity',
    solid: 'bg-terra-500',
    chip: 'bg-terra-50 text-terra-700',
    text: 'text-terra-600',
    textOnDark: 'text-terra-300',
    eyebrow: 'eyebrow-terra',
    hex: '#A85645',
  },
};

/** "01 Childhood & Growing Up" pill — Figma "Hub Badge System". */
export function HubBadge({ hub, label }: { hub: HubKey; label: string }) {
  const s = HUB_STYLE[hub];
  return (
    <span className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white ${s.solid}`}>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25 text-[10px] font-bold">
        {s.number}
      </span>
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADING — eyebrow + serif title + lede
───────────────────────────────────────────── */
interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  /** Eyebrow bullet accent: teal (default) or a hub colour. */
  accent?: 'teal' | 'ochre' | 'sage' | 'terra';
  /** Use on ink / teal backgrounds. */
  onDark?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  accent = 'teal',
  onDark = false,
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const accentClass = accent === 'teal' ? '' : `eyebrow-${accent}`;
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div
          className={`eyebrow mb-4 ${accentClass} ${onDark ? '!text-white/70' : ''}`}
          style={onDark && accent === 'teal' ? ({ ['--eyebrow-accent' as string]: '#D6A43A' }) : undefined}
        >
          {eyebrow}
        </div>
      )}
      <Tag className={onDark ? '!text-white' : ''}>{title}</Tag>
      {lede && (
        <p className={`mt-4 max-w-3xl text-base leading-relaxed sm:text-lg ${align === 'center' ? 'mx-auto' : ''} ${onDark ? '!text-white/75' : ''}`}>
          {lede}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE CONTAINER
───────────────────────────────────────────── */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
