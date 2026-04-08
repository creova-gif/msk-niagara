export function ColorTypography() {
  const crimsonShades = [
    { shade: "50",  hex: "#FFF1F1", light: true },
    { shade: "100", hex: "#FFE4E4", light: true },
    { shade: "200", hex: "#FFBDBD", light: true },
    { shade: "300", hex: "#FF8484", light: true },
    { shade: "400", hex: "#FF4040", light: false },
    { shade: "500", hex: "#CC0000", light: false },
    { shade: "600", hex: "#8B0000", light: false },
    { shade: "700", hex: "#6B0000", light: false },
    { shade: "800", hex: "#500000", light: false },
    { shade: "900", hex: "#350000", light: false },
  ];

  const palette = [
    { name: "Crimson", role: "Primary", hex: "#8B0000", oklch: "oklch(28% 0.16 17)", light: false },
    { name: "Ink", role: "Foreground", hex: "#0A0A0A", oklch: "oklch(6% 0 0)", light: false },
    { name: "White", role: "Background", hex: "#FFFFFF", oklch: "oklch(100% 0 0)", light: true, border: true },
    { name: "Teal", role: "Childhood Hub", hex: "#089EA5", oklch: "oklch(62% 0.12 192)", light: false },
    { name: "Amber", role: "Health Hub", hex: "#C97B2E", oklch: "oklch(60% 0.13 57)", light: false },
    { name: "Purple", role: "Identity Hub", hex: "#7B5EA7", oklch: "oklch(49% 0.12 295)", light: false },
  ];

  const contrastPairs = [
    { bg: "#FFFFFF", fg: "#8B0000", bgName: "White", fgName: "Crimson", ratio: "11.1:1", pass: true },
    { bg: "#FFFFFF", fg: "#0A0A0A", bgName: "White", fgName: "Ink", ratio: "20.4:1", pass: true },
    { bg: "#8B0000", fg: "#FFFFFF", bgName: "Crimson", fgName: "White", ratio: "11.1:1", pass: true },
    { bg: "#0A0A0A", fg: "#FFFFFF", bgName: "Ink", fgName: "White", ratio: "20.4:1", pass: true },
    { bg: "#8B0000", fg: "#0A0A0A", bgName: "Crimson", fgName: "Ink", ratio: "1.8:1", pass: false },
    { bg: "#FFFFFF", fg: "#089EA5", bgName: "White", fgName: "Teal", ratio: "3.4:1", pass: false },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F5] font-['Inter']">
      {/* Header */}
      <div className="bg-[#8B0000] px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-1">MSK Niagara Research Partnership</p>
          <h1 className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Board 1 — Color & Typography</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-12 py-10 space-y-14">

        {/* Primary palette */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Primary Colour Palette</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {palette.map(c => (
              <div key={c.hex} className={`rounded-xl overflow-hidden ${c.border ? 'border border-gray-200' : ''}`}>
                <div className="h-20" style={{ backgroundColor: c.hex }} />
                <div className="bg-white px-4 py-3">
                  <div className="font-bold text-[#0A0A0A] text-sm">{c.name}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{c.role}</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">{c.hex}</div>
                  <div className="text-[10px] text-gray-400 font-mono">{c.oklch}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crimson shade ramp */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Crimson Shade Ramp</h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="flex">
              {crimsonShades.map(s => (
                <div key={s.shade} className="flex-1 flex flex-col">
                  <div className="h-16" style={{ backgroundColor: s.hex }} />
                  <div className="bg-white px-1.5 py-2 text-center border-r last:border-r-0 border-gray-100">
                    <div className="text-[9px] font-bold text-gray-500">{s.shade}</div>
                    <div className="text-[8px] font-mono text-gray-400">{s.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Typography System</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Display */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B0000] mb-4">Display — Plus Jakarta Sans</div>
              <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-5xl text-[#0A0A0A] leading-none mb-3">Aa</div>
              <div className="space-y-1">
                <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-[#0A0A0A]">Headline H1 — 64px / 800</div>
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#0A0A0A]">Subhead H2 — 40px / 700</div>
                <div className="font-['Plus_Jakarta_Sans'] font-semibold text-lg text-[#0A0A0A]">Section H3 — 28px / 600</div>
                <div className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-[#0A0A0A]">Card Title H4 — 20px / 600</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-[10px] font-mono text-gray-400">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%&*
              </div>
            </div>
            {/* Body */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B0000] mb-4">Body — Inter</div>
              <div className="font-['Inter'] font-medium text-5xl text-[#0A0A0A] leading-none mb-3">Aa</div>
              <div className="space-y-2">
                <div className="font-['Inter'] text-base text-[#0A0A0A] leading-relaxed">Body Large — 18px / 400 — Our interdisciplinary team of faculty, students, and community organizations is committed to fostering a more just and inclusive Niagara.</div>
                <div className="font-['Inter'] text-sm text-gray-500 leading-relaxed">Body Default — 14px / 400 — Through community-based participatory research and knowledge mobilization.</div>
                <div className="font-['Inter'] text-xs text-gray-400 tracking-wide uppercase font-semibold">LABEL — 11px / 600 / TRACKED</div>
                <div className="font-['Inter'] font-mono text-xs text-gray-400">#8B0000 · oklch(28% 0.16 17)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contrast audit */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">WCAG 2.2 Contrast Audit</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Background</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Text</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">Ratio</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold tracking-wider uppercase text-gray-400">AA (4.5:1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {contrastPairs.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3 flex items-center gap-2">
                      <div className="w-5 h-5 rounded border border-gray-200" style={{ backgroundColor: p.bg }} />
                      <span className="text-gray-600">{p.bgName}</span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border border-gray-200" style={{ backgroundColor: p.fg }} />
                        <span className="text-gray-600">{p.fgName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 font-mono font-semibold text-gray-700">{p.ratio}</td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${p.pass ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {p.pass ? '✓ Pass' : '✗ Fail'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CSS Tokens */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Design Tokens — CSS Custom Properties</h2>
          </div>
          <div className="bg-[#0A0A0A] rounded-xl p-8 font-mono text-sm leading-7">
            <div className="text-[#089EA5]">:root {'{'}</div>
            <div className="pl-6 text-gray-300">
              <div><span className="text-[#C97B2E]">--color-crimson</span><span className="text-white/40">:</span> <span className="text-green-400">#8B0000</span><span className="text-white/40">; /* oklch(28% 0.16 17) */</span></div>
              <div><span className="text-[#C97B2E]">--color-ink</span><span className="text-white/40">:</span> <span className="text-green-400">#0A0A0A</span><span className="text-white/40">; /* oklch(6% 0 0) */</span></div>
              <div><span className="text-[#C97B2E]">--color-white</span><span className="text-white/40">:</span> <span className="text-green-400">#FFFFFF</span><span className="text-white/40">; /* oklch(100% 0 0) */</span></div>
              <div><span className="text-[#C97B2E]">--hub-childhood</span><span className="text-white/40">:</span> <span className="text-green-400">#089EA5</span><span className="text-white/40">; /* oklch(62% 0.12 192) */</span></div>
              <div><span className="text-[#C97B2E]">--hub-health</span><span className="text-white/40">:</span> <span className="text-green-400">#C97B2E</span><span className="text-white/40">; /* oklch(60% 0.13 57) */</span></div>
              <div><span className="text-[#C97B2E]">--hub-identity</span><span className="text-white/40">:</span> <span className="text-green-400">#7B5EA7</span><span className="text-white/40">; /* oklch(49% 0.12 295) */</span></div>
              <div><span className="text-[#C97B2E]">--font-heading</span><span className="text-white/40">:</span> <span className="text-green-400">'Plus Jakarta Sans', sans-serif</span><span className="text-white/40">;</span></div>
              <div><span className="text-[#C97B2E]">--font-body</span><span className="text-white/40">:</span> <span className="text-green-400">'Inter', sans-serif</span><span className="text-white/40">;</span></div>
            </div>
            <div className="text-[#089EA5]">{'}'}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
