export function LogoConcepts() {
  const WordmarkLight = () => (
    <svg viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Icon: 3 rising bars */}
      <rect x="2" y="30" width="10" height="20" rx="2" fill="#8B0000"/>
      <rect x="16" y="18" width="10" height="32" rx="2" fill="#8B0000"/>
      <rect x="30" y="6" width="10" height="44" rx="2" fill="#8B0000"/>
      {/* MSK */}
      <text x="50" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="26" fill="#0A0A0A">MSK</text>
      {/* Dot separator */}
      <circle cx="127" cy="28" r="3" fill="#8B0000"/>
      {/* Niagara */}
      <text x="136" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="26" fill="#0A0A0A">Niagara</text>
      {/* Subtitle */}
      <text x="50" y="50" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="9" letterSpacing="3" fill="#8B0000">RESEARCH PARTNERSHIP</text>
    </svg>
  );

  const WordmarkDark = () => (
    <svg viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="30" width="10" height="20" rx="2" fill="#FF6B6B"/>
      <rect x="16" y="18" width="10" height="32" rx="2" fill="#FF8A8A"/>
      <rect x="30" y="6" width="10" height="44" rx="2" fill="#FFFFFF"/>
      <text x="50" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="26" fill="#FFFFFF">MSK</text>
      <circle cx="127" cy="28" r="3" fill="#FF6B6B"/>
      <text x="136" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="26" fill="#FFFFFF">Niagara</text>
      <text x="50" y="50" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="9" letterSpacing="3" fill="rgba(255,255,255,0.5)">RESEARCH PARTNERSHIP</text>
    </svg>
  );

  const IconOnly = ({ dark = false }: { dark?: boolean }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="26" width="10" height="18" rx="2.5" fill={dark ? "#FF8A8A" : "#8B0000"}/>
      <rect x="15" y="14" width="10" height="30" rx="2.5" fill={dark ? "#FF6B6B" : "#8B0000"}/>
      <rect x="28" y="4" width="10" height="40" rx="2.5" fill={dark ? "#FFFFFF" : "#8B0000"}/>
      <rect x="36" y="4" width="10" height="40" rx="2.5" fill="transparent"/>
    </svg>
  );

  const Monogram = ({ dark = false }: { dark?: boolean }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill={dark ? "#FFFFFF" : "#8B0000"}/>
      <text x="24" y="33" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="22" fill={dark ? "#8B0000" : "#FFFFFF"} textAnchor="middle">M</text>
    </svg>
  );

  const AppIcon = ({ dark = false }: { dark?: boolean }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill={dark ? "#0A0A0A" : "#8B0000"}/>
      <rect x="8" y="36" width="12" height="20" rx="3" fill={dark ? "#FF8A8A" : "rgba(255,255,255,0.6)"}/>
      <rect x="24" y="22" width="12" height="34" rx="3" fill={dark ? "#FF6B6B" : "rgba(255,255,255,0.8)"}/>
      <rect x="40" y="8" width="12" height="48" rx="3" fill={dark ? "#FFFFFF" : "#FFFFFF"}/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#F8F7F5] font-['Inter']">
      {/* Header */}
      <div className="bg-[#0A0A0A] px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-1">MSK Niagara Research Partnership</p>
          <h1 className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Board 2 — Logo Concepts</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-12 py-10 space-y-10">

        {/* Wordmark — Light bg */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Wordmark — Light Background</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-10 flex items-center justify-center">
            <div className="w-72"><WordmarkLight /></div>
          </div>
        </section>

        {/* Wordmark — Dark bg */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Wordmark — Dark Background</h2>
          </div>
          <div className="bg-[#0A0A0A] rounded-xl p-10 flex items-center justify-center">
            <div className="w-72"><WordmarkDark /></div>
          </div>
        </section>

        {/* Icon variants row */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Icon Variations — Light & Dark</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16"><IconOnly /></div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Icon — Light</span>
            </div>
            <div className="bg-[#0A0A0A] rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16"><IconOnly dark /></div>
              <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">Icon — Dark</span>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16"><Monogram /></div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Monogram — Light</span>
            </div>
            <div className="bg-[#0A0A0A] rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16"><Monogram dark /></div>
              <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">Monogram — Dark</span>
            </div>
          </div>
        </section>

        {/* App icon */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">App Icon — Rounded Square (Social / Favicon)</h2>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 flex items-center gap-8">
            {[
              { size: "w-16 h-16", label: "64px" },
              { size: "w-10 h-10", label: "40px" },
              { size: "w-8 h-8", label: "32px" },
              { size: "w-6 h-6", label: "24px" },
              { size: "w-4 h-4", label: "16px" },
            ].map(({ size, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={size}><AppIcon /></div>
                <span className="text-[9px] text-gray-400 font-mono">{label}</span>
              </div>
            ))}
            <div className="ml-8 border-l border-gray-200 pl-8 flex flex-col items-center gap-2">
              <div className="w-16 h-16"><AppIcon dark /></div>
              <span className="text-[9px] text-gray-400 font-mono">Dark bg</span>
            </div>
          </div>
        </section>

        {/* Single-color version */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Single-Colour — Monochrome (Print / Embossing)</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-8 flex items-center justify-center">
              <svg viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64">
                <rect x="2" y="30" width="10" height="20" rx="2" fill="#0A0A0A"/>
                <rect x="16" y="18" width="10" height="32" rx="2" fill="#0A0A0A"/>
                <rect x="30" y="6" width="10" height="44" rx="2" fill="#0A0A0A"/>
                <text x="50" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="26" fill="#0A0A0A">MSK</text>
                <circle cx="127" cy="28" r="3" fill="#0A0A0A"/>
                <text x="136" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="26" fill="#0A0A0A">Niagara</text>
                <text x="50" y="50" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="9" letterSpacing="3" fill="#0A0A0A">RESEARCH PARTNERSHIP</text>
              </svg>
            </div>
            <div className="bg-[#0A0A0A] rounded-xl p-8 flex items-center justify-center">
              <svg viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64">
                <rect x="2" y="30" width="10" height="20" rx="2" fill="#FFFFFF"/>
                <rect x="16" y="18" width="10" height="32" rx="2" fill="#FFFFFF"/>
                <rect x="30" y="6" width="10" height="44" rx="2" fill="#FFFFFF"/>
                <text x="50" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="26" fill="#FFFFFF">MSK</text>
                <circle cx="127" cy="28" r="3" fill="#FFFFFF"/>
                <text x="136" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="26" fill="#FFFFFF">Niagara</text>
                <text x="50" y="50" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="9" letterSpacing="3" fill="rgba(255,255,255,0.5)">RESEARCH PARTNERSHIP</text>
              </svg>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
