export function BrandGuidelines() {
  return (
    <div className="min-h-screen bg-[#F8F7F5] font-['Inter']">
      {/* Header */}
      <div className="bg-[#C97B2E] px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-1">MSK Niagara Research Partnership</p>
          <h1 className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Board 4 — Brand Guidelines</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-12 py-10 space-y-12">

        {/* Colour usage rules */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Colour Usage Rules</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Do */}
            <div className="bg-white rounded-xl border border-green-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-[10px] font-bold">✓</span>
                </div>
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Do</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2 items-start"><span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> Use Crimson #8B0000 for primary CTAs, active nav items, and section accents</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> Use Ink #0A0A0A for hero sections, dark panels, and high-contrast backgrounds</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> Use hub accent colours only for their corresponding hub (Teal=Childhood, Amber=Health, Purple=Identity)</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> Always ensure 4.5:1 minimum contrast for body text against any background</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> Use the dot-grid motif at 6–8% opacity on crimson hero backgrounds only</li>
              </ul>
            </div>
            {/* Don't */}
            <div className="bg-white rounded-xl border border-red-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="text-red-500 text-[10px] font-bold">✕</span>
                </div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Don't</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2 items-start"><span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> Do not use Crimson text on Ink backgrounds — contrast ratio is only 1.8:1</li>
                <li className="flex gap-2 items-start"><span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> Do not use hub accent colours as primary buttons or CTAs — they are hub identifiers only</li>
                <li className="flex gap-2 items-start"><span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> Do not use pure black #000000 — always use Ink #0A0A0A for softness</li>
                <li className="flex gap-2 items-start"><span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> Do not mix more than 2 hub accent colours on a single page</li>
                <li className="flex gap-2 items-start"><span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> Do not use wave SVGs — the diagonal cut is the only hero transition element</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typography hierarchy */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Typography Hierarchy</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Role</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Font</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Size / Weight</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Sample</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { role: "Page Title H1", font: "Plus Jakarta Sans", spec: "64px / 800", sample: "Partnership", sampleClass: "text-2xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0A0A0A]" },
                  { role: "Section Heading H2", font: "Plus Jakarta Sans", spec: "40px / 700", sample: "Research Hubs", sampleClass: "text-xl font-['Plus_Jakarta_Sans'] font-bold text-[#0A0A0A]" },
                  { role: "Card Title H3", font: "Plus Jakarta Sans", spec: "24px / 600", sample: "Childhood Hub", sampleClass: "text-base font-['Plus_Jakarta_Sans'] font-semibold text-[#0A0A0A]" },
                  { role: "Body Large", font: "Inter", spec: "18px / 400", sample: "A transnational partnership.", sampleClass: "text-base font-['Inter'] text-gray-700" },
                  { role: "Body Default", font: "Inter", spec: "14px / 400", sample: "Community research.", sampleClass: "text-sm font-['Inter'] text-gray-500" },
                  { role: "Label / Overline", font: "Inter", spec: "11px / 600 / +0.2em", sample: "MSK NIAGARA", sampleClass: "text-[10px] font-['Inter'] font-bold tracking-[0.2em] uppercase text-[#8B0000]" },
                  { role: "Monospace (code)", font: "Font Mono", spec: "13px / 400", sample: "#8B0000", sampleClass: "text-xs font-mono text-gray-500" },
                ].map(row => (
                  <tr key={row.role} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3 text-gray-500 text-xs">{row.role}</td>
                    <td className="px-6 py-3 text-gray-500 text-xs font-mono">{row.font}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs font-mono">{row.spec}</td>
                    <td className="px-6 py-3"><span className={row.sampleClass}>{row.sample}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Voice & Tone */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Voice & Tone</h2>
          </div>
          <div className="grid grid-cols-5 gap-3 mb-6">
            {["Authoritative", "Inclusive", "Justice-focused", "Community-led", "Transparent"].map(word => (
              <div key={word} className="bg-[#8B0000] rounded-xl px-4 py-3 text-center">
                <span className="text-white text-xs font-semibold">{word}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-green-100 p-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-green-600 mb-3">✓ Do Write</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>"Our interdisciplinary team mobilizes voices that have been marginalized."</li>
                <li>"We work in partnership — not for the community, but with it."</li>
                <li>"Research conducted in English, French, and Spanish."</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-red-100 p-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-red-500 mb-3">✕ Avoid</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>"Helping vulnerable populations." → Avoid deficit language</li>
                <li>"We're a non-profit." → Lead with mission, not category</li>
                <li>"Our cutting-edge research." → Avoid jargon buzzwords</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample applications */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Sample Applications</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Business card */}
            <div>
              <div className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-semibold">Business Card — Front</div>
              <div className="bg-[#8B0000] rounded-xl p-8 relative overflow-hidden" style={{ aspectRatio: '1.75' }}>
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 32 32" className="w-6 h-6">
                      <rect x="1" y="18" width="7" height="13" rx="1.5" fill="rgba(255,255,255,0.4)"/>
                      <rect x="11" y="10" width="7" height="21" rx="1.5" fill="rgba(255,255,255,0.7)"/>
                      <rect x="21" y="2" width="7" height="29" rx="1.5" fill="#FFFFFF"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-['Plus_Jakarta_Sans']">MSK Niagara</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg font-['Plus_Jakarta_Sans'] leading-tight">Dr. Rebecca Raby</div>
                    <div className="text-white/60 text-xs mt-0.5">Childhood and Growing Up Hub — Lead</div>
                    <div className="text-white/40 text-[10px] mt-2">msk-niagara.ca · contact@msk-niagara.ca</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social post */}
            <div>
              <div className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-semibold">Social Post — Square Format</div>
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden" style={{ aspectRatio: '1' }}>
                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#8B0000] mb-3">Research Update</div>
                    <div className="text-white font-extrabold text-xl font-['Plus_Jakarta_Sans'] leading-tight mb-3">
                      "Mobilizing voices that have been marginalized."
                    </div>
                    <div className="text-white/40 text-xs leading-relaxed">New findings from our Childhood & Growing Up Hub examining newcomer children's experiences in Niagara schools.</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <rect x="0.5" y="13" width="5" height="10" rx="1" fill="#8B0000"/>
                        <rect x="8" y="7" width="5" height="16" rx="1" fill="#8B0000"/>
                        <rect x="15.5" y="1" width="5" height="22" rx="1" fill="#FFFFFF"/>
                      </svg>
                      <span className="text-white/50 text-[10px] font-semibold">MSK Niagara</span>
                    </div>
                    <span className="text-white/20 text-[9px] font-mono">msk-niagara.ca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailwind config */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Tailwind Config Tokens</h2>
          </div>
          <div className="bg-[#0A0A0A] rounded-xl p-8 font-mono text-xs leading-6 whitespace-pre">
            <span className="text-[#089EA5]">colors: {"{"}</span>{"\n"}
            {"  "}<span className="text-[#C97B2E]">crimson</span>
            {": { DEFAULT: "}
            <span className="text-green-400">&apos;#8B0000&apos;</span>
            {", 50: "}
            <span className="text-green-400">&apos;#FFF1F1&apos;</span>
            {", 600: "}
            <span className="text-green-400">&apos;#8B0000&apos;</span>
            {", 900: "}
            <span className="text-green-400">&apos;#350000&apos;</span>
            {" },"}{"\n"}
            {"  "}<span className="text-[#C97B2E]">ink</span>
            {": { DEFAULT: "}
            <span className="text-green-400">&apos;#0A0A0A&apos;</span>
            {" },"}{"\n"}
            {"  "}<span className="text-[#C97B2E]">hub</span>
            {": {"}{"\n"}
            {"    "}<span className="text-[#C97B2E]">childhood</span>
            {": "}
            <span className="text-green-400">&apos;#089EA5&apos;</span>
            {","}{"\n"}
            {"    "}<span className="text-[#C97B2E]">health</span>
            {": "}
            <span className="text-green-400">&apos;#C97B2E&apos;</span>
            {","}{"\n"}
            {"    "}<span className="text-[#C97B2E]">identity</span>
            {": "}
            <span className="text-green-400">&apos;#7B5EA7&apos;</span>
            {","}{"\n"}
            {"  },"}{"\n"}
            <span className="text-[#089EA5]">{"}"}</span>{"\n"}
            <span className="text-[#089EA5]">fontFamily: {"{"}</span>{"\n"}
            {"  "}<span className="text-[#C97B2E]">heading</span>
            {": ["}
            <span className="text-green-400">&apos;Plus Jakarta Sans&apos;</span>
            {", "}
            <span className="text-green-400">&apos;sans-serif&apos;</span>
            {"],"}{"\n"}
            {"  "}<span className="text-[#C97B2E]">body</span>
            {": ["}
            <span className="text-green-400">&apos;Inter&apos;</span>
            {", "}
            <span className="text-green-400">&apos;sans-serif&apos;</span>
            {"],"}{"\n"}
            <span className="text-[#089EA5]">{"}"}</span>
          </div>
        </section>

      </div>
    </div>
  );
}
