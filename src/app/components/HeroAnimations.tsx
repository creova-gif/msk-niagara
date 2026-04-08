/**
 * HeroAnimations — Thematic, GPU-accelerated hero background animations
 * All elements are aria-hidden, pointer-events-none decorative layers.
 * Uses CSS keyframes defined in theme.css. No external deps.
 */

import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   FLOATING ORBS  (Home hero enhancement)
   Glowing crimson/white orbs that drift upward like embers
───────────────────────────────────────────────────────────── */
export function FloatingOrbs({ count = 8, color = '#ff6060' }: { count?: number; color?: string }) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${10 + (i * 11) % 80}%`,
    top: `${30 + (i * 17) % 50}%`,
    size: 60 + (i * 23) % 80,
    duration: 4 + (i * 1.3) % 4,
    delay: (i * 0.7) % 4,
    dx: (i % 2 === 0 ? 1 : -1) * (10 + (i * 9) % 25),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map(o => (
        <div
          key={o.id}
          className="absolute rounded-full blur-2xl"
          style={{
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            backgroundColor: color,
            animation: `hero-float ${o.duration}s ease-in-out ${o.delay}s infinite`,
            '--dx': `${o.dx}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NETWORK NODES  (Partnership hero)
   SVG network with animated connection lines + pulsing nodes
───────────────────────────────────────────────────────────── */
export function NetworkNodes() {
  const nodes = [
    { cx: 15, cy: 25 }, { cx: 35, cy: 55 }, { cx: 55, cy: 20 },
    { cx: 75, cy: 45 }, { cx: 90, cy: 20 }, { cx: 85, cy: 70 },
    { cx: 50, cy: 75 }, { cx: 20, cy: 70 },
  ];
  const edges = [
    [0,1],[0,2],[1,7],[2,3],[3,4],[3,5],[4,5],[5,6],[6,7],[1,6],[2,4],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-20"
      >
        {edges.map(([a, b], i) => {
          const len = Math.hypot(nodes[b].cx - nodes[a].cx, nodes[b].cy - nodes[a].cy);
          return (
            <line
              key={i}
              x1={nodes[a].cx} y1={nodes[a].cy}
              x2={nodes[b].cx} y2={nodes[b].cy}
              stroke="white"
              strokeWidth="0.3"
              strokeDasharray={`${len} ${len}`}
              strokeDashoffset={`${len}`}
              style={{
                animation: `hero-line-draw 1.2s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s both`,
                pathLength: 1,
              } as React.CSSProperties}
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="1.2" fill="white"
              style={{ animation: `hero-node-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + i * 0.1}s both` }} />
            <circle cx={n.cx} cy={n.cy} r="2.5" fill="none" stroke="white" strokeWidth="0.2"
              style={{ animation: `hero-ripple 2.5s ease-out ${i * 0.4}s infinite`, opacity: 0 }} />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HUB BARS  (ResearchHubs hero)
   Three color bars rise like a bar chart — one per hub
───────────────────────────────────────────────────────────── */
export function HubBars() {
  const bars = [
    { color: '#089EA5', height: '55%', delay: '0.1s' },
    { color: '#C97B2E', height: '80%', delay: '0.25s' },
    { color: '#7B5EA7', height: '65%', delay: '0.4s' },
  ];

  return (
    <div
      className="absolute right-0 top-0 bottom-0 w-40 flex items-end justify-end gap-3 pr-8 pb-14 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {bars.map((b, i) => (
        <div
          key={i}
          className="w-8 rounded-t-lg origin-bottom opacity-30"
          style={{
            backgroundColor: b.color,
            height: b.height,
            animation: `hero-bar-rise 1s cubic-bezier(0.16,1,0.3,1) ${b.delay} both`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   RISING BUBBLES  (Childhood hub)
   Colorful circles float upward like children / growth
───────────────────────────────────────────────────────────── */
export function RisingBubbles({ color = '#089EA5' }) {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 8.5) % 90}%`,
    bottom: `${-5 + (i * 3) % 10}%`,
    size: 8 + (i * 7) % 28,
    duration: 4 + (i * 0.9) % 5,
    delay: (i * 0.5) % 4.5,
    opacity: 0.08 + (i % 4) * 0.04,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="absolute rounded-full border-2"
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            borderColor: color,
            opacity: b.opacity,
            animation: `hero-float ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HEARTBEAT LINE  (Health hub)
   EKG-style SVG path draws itself across the hero
───────────────────────────────────────────────────────────── */
export function HeartbeatLine({ color = '#C97B2E' }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center" aria-hidden="true">
      <svg
        viewBox="0 0 200 40"
        preserveAspectRatio="xMidYMid meet"
        className="w-full opacity-20"
      >
        <polyline
          points="0,20 20,20 30,20 38,5 44,35 50,20 60,20 70,20 78,8 82,32 88,20 100,20 120,20 130,20 138,4 144,36 150,20 160,20 180,20 200,20"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          style={{
            animation: 'hero-line-draw 2s cubic-bezier(0.16,1,0.3,1) 0.3s both',
          }}
        />
        {/* Pulse dot moving along line */}
        <circle r="2" fill={color}
          style={{ animation: 'hero-pulse-dot 1.5s ease-in-out 2.5s infinite' }}>
          <animateMotion
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
            path="M0,20 L20,20 L30,20 L38,5 L44,35 L50,20 L60,20 L70,20 L78,8 L82,32 L88,20 L100,20 L120,20 L130,20 L138,4 L144,36 L150,20 L160,20 L180,20 L200,20"
          />
        </circle>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONSTELLATION  (Identity hub)
   Star dots appear then lines draw between them
───────────────────────────────────────────────────────────── */
export function Constellation({ color = '#7B5EA7' }) {
  const stars = [
    { x: 10, y: 30 }, { x: 25, y: 15 }, { x: 40, y: 40 },
    { x: 60, y: 20 }, { x: 75, y: 50 }, { x: 85, y: 25 },
    { x: 50, y: 60 }, { x: 20, y: 65 }, { x: 90, y: 65 },
  ];
  const lines = [[0,1],[1,2],[2,3],[3,4],[4,5],[2,6],[6,7],[4,8],[3,5]];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 100 80" preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-25">
        {lines.map(([a, b], i) => {
          const len = Math.hypot(stars[b].x - stars[a].x, stars[b].y - stars[a].y);
          return (
            <line key={i}
              x1={stars[a].x} y1={stars[a].y}
              x2={stars[b].x} y2={stars[b].y}
              stroke={color} strokeWidth="0.25"
              pathLength="1" strokeDasharray="1" strokeDashoffset="1"
              style={{ animation: `hero-line-draw 1s ease ${0.6 + i * 0.15}s both` }}
            />
          );
        })}
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="0.8" fill={color}
            style={{ animation: `hero-node-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + i * 0.1}s both` }} />
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   RIPPLE RINGS  (Community hero)
   Rings expand outward from center like community waves
───────────────────────────────────────────────────────────── */
export function RippleRings({ count = 5 }: { count?: number }) {
  const rings = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    size: 80 + i * 40,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
      {rings.map(r => (
        <div
          key={r.id}
          className="absolute rounded-full border border-white/20"
          style={{
            width: r.size,
            height: r.size,
            animation: `hero-ripple 4s cubic-bezier(0, 0.5, 0.5, 1) ${r.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TIMELINE BEAM  (Timeline hero)
   Horizontal beam draws left-to-right with nodes popping in
───────────────────────────────────────────────────────────── */
export function TimelineBeam() {
  const nodes = [15, 30, 47, 62, 78, 90];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center" aria-hidden="true">
      <div className="relative w-full" style={{ height: 2 }}>
        <div
          className="absolute left-0 right-0 h-px bg-white/20"
          style={{ animation: 'hero-beam-draw 1.4s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
        />
        {nodes.map((pct, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/40 bg-transparent"
            style={{
              left: `${pct}%`,
              animation: `hero-node-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.8 + i * 0.15}s both`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FILM SCAN  (Media hero)
   Horizontal scan lines sweep top-to-bottom like a projector
───────────────────────────────────────────────────────────── */
export function FilmScan() {
  const lines = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    delay: i * 1.2,
    opacity: 0.06 - i * 0.015,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {lines.map(l => (
        <div
          key={l.id}
          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-white/0 via-white to-white/0"
          style={{
            top: 0,
            opacity: l.opacity,
            animation: `hero-scan 2.5s cubic-bezier(0.4,0,0.6,1) ${l.delay}s infinite`,
          }}
        />
      ))}
      {/* Film perforations on left edge */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute left-4 w-3 h-4 rounded-sm border border-white/15"
          style={{
            top: `${5 + i * 12}%`,
            animation: `fade-in 0.4s ease ${0.05 + i * 0.05}s both`,
          }}
        />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute right-4 w-3 h-4 rounded-sm border border-white/15"
          style={{
            top: `${5 + i * 12}%`,
            animation: `fade-in 0.4s ease ${0.1 + i * 0.05}s both`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DATA GRID  (ResearchProjects hero)
   Grid of dots materialises from bottom-left to top-right
───────────────────────────────────────────────────────────── */
export function DataGrid() {
  const cols = 8, rows = 4;
  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return { col, row, delay: (col + row) * 0.07 };
  });

  return (
    <div
      className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none flex items-center justify-end pr-8"
      aria-hidden="true"
    >
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {dots.map((d, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/20"
            style={{
              animation: `hero-node-pop 0.35s cubic-bezier(0.34,1.56,0.64,1) ${d.delay}s both`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   KNOWLEDGE FLOW  (KnowledgeDissemination hero)
   Upward-flowing words representing knowledge radiating out
───────────────────────────────────────────────────────────── */
export function KnowledgeFlow() {
  const words = ['Research', 'Community', 'Justice', 'Knowledge', 'Voices', 'Equity', 'Belonging', 'Impact'];
  const positions = [
    { left: '8%',  top: '60%' }, { left: '22%', top: '40%' },
    { left: '38%', top: '70%' }, { left: '52%', top: '30%' },
    { left: '65%', top: '55%' }, { left: '78%', top: '45%' },
    { left: '88%', top: '65%' }, { left: '14%', top: '75%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {words.map((word, i) => (
        <div
          key={i}
          className="absolute text-[10px] font-bold tracking-[0.2em] uppercase text-white/10"
          style={{
            left: positions[i].left,
            top: positions[i].top,
            animation: `hero-float ${3 + i * 0.6}s ease-in-out ${i * 0.4}s infinite`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MEMBER DOTS  (MemberBios hero)
   People-icon dots cascade in to form a team grid
───────────────────────────────────────────────────────────── */
export function MemberDots() {
  const count = 24;
  const dots = Array.from({ length: count }, (_, i) => ({
    id: i,
    col: i % 6,
    row: Math.floor(i / 6),
    delay: (i % 6 + Math.floor(i / 6)) * 0.08,
  }));

  return (
    <div
      className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="grid grid-cols-6 gap-3 opacity-20">
        {dots.map(d => (
          <div
            key={d.id}
            className="w-4 h-4 rounded-full bg-white"
            style={{
              animation: `hero-node-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${d.delay}s both`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WORD REVEAL wrapper — staggered clip-path reveal per word
───────────────────────────────────────────────────────────── */
export function RevealWords({ text, className = '', baseDelay = 0 }: {
  text: string;
  className?: string;
  baseDelay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.25em' }}
        >
          <span
            className="inline-block"
            style={{
              animation: `hero-word-reveal 0.7s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * 0.08}s both`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   EMBER PARTICLES  (Home hero enhancement)
   Small sparks that drift upward and fade
───────────────────────────────────────────────────────────── */
export function EmberParticles({ count = 12 }: { count?: number }) {
  const embers = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + (i * 8.3) % 90}%`,
    bottom: `${5 + (i * 4) % 20}%`,
    size: 3 + (i % 3) * 2,
    duration: 2.5 + (i * 0.4) % 3,
    delay: (i * 0.35) % 4,
    dx: (i % 2 === 0 ? 1 : -1) * (8 + (i * 6) % 20),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {embers.map(e => (
        <div
          key={e.id}
          className="absolute rounded-full bg-white/60"
          style={{
            left: e.left,
            bottom: e.bottom,
            width: e.size,
            height: e.size,
            animation: `hero-ember ${e.duration}s ease-out ${e.delay}s infinite`,
            '--dx': `${e.dx}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* useHeroVisible — triggers once on mount with a small delay */
export function useHeroVisible(delay = 50): boolean {
  const ref = useRef(false);
  if (!ref.current) ref.current = true;
  return ref.current;
}
