import { Link } from './LocalizedLink';

/**
 * MSK wordmark — Figma Brand Identity System, page 02b "Logo Colorways".
 *
 * Rules from the brand guide:
 *  - Hub colors must NOT replace the core MSK logo (no hub variant on purpose).
 *  - Clear space = height of the "M" on all sides; digital minimum height 32px.
 *  - Don't stretch, rotate, add effects, change the typeface or recolor.
 */
export type LogoVariant =
  | 'primary'      // teal on light/paper surfaces (default)
  | 'on-teal'      // reversed on brand teal surfaces
  | 'on-dark'      // reversed on dark/ink backgrounds
  | 'mono-dark'    // single-color institutional use
  | 'mono-light';  // reversed monochrome

const COLOR: Record<LogoVariant, string> = {
  primary: 'text-teal-600',
  'on-teal': 'text-white',
  'on-dark': 'text-white',
  'mono-dark': 'text-ink',
  'mono-light': 'text-white',
};

interface LogoProps {
  variant?: LogoVariant;
  /** Wordmark height in px. Brand minimum is 32px (digital). */
  size?: number;
  className?: string;
}

/** Non-interactive wordmark (use inside links, footers, print layouts). */
export function Logo({ variant = 'primary', size = 32, className = '' }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="MSK"
      className={`inline-block select-none font-bold uppercase leading-none ${COLOR[variant]} ${className}`}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: `${Math.round(size * 0.78)}px`,
        letterSpacing: '0.16em',
        // Trailing letter-spacing would otherwise skew centering.
        marginRight: '-0.16em',
      }}
    >
      MSK
    </span>
  );
}

/** Wordmark wrapped as the "home" link. */
export function LogoLink({ variant = 'primary', size = 32, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="MSK Niagara Research Partnership — Home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Logo variant={variant} size={size} />
    </Link>
  );
}
