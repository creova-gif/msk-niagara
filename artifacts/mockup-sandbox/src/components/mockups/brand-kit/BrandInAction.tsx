export function BrandInAction() {
  const hubs = [
    { id: "childhood", name: "Childhood & Growing Up", color: "#089EA5", tag: "Hub 01" },
    { id: "health", name: "Health Literacy", color: "#C97B2E", tag: "Hub 02" },
    { id: "identity", name: "Identity & Belonging", color: "#7B5EA7", tag: "Hub 03" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F5] font-['Inter']">
      {/* Header */}
      <div className="bg-[#7B5EA7] px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-1">MSK Niagara Research Partnership</p>
          <h1 className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Board 3 — Brand in Action</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-12 py-10 space-y-12">

        {/* Navbar mockup */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Navigation Bar</h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-[#0A0A0A] flex items-center justify-between px-8 h-16">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="w-7 h-7">
                  <rect x="1" y="18" width="7" height="13" rx="1.5" fill="#8B0000"/>
                  <rect x="11" y="10" width="7" height="21" rx="1.5" fill="#8B0000"/>
                  <rect x="21" y="2" width="7" height="29" rx="1.5" fill="#FFFFFF"/>
                </svg>
                <div>
                  <div className="text-white font-bold text-sm font-['Plus_Jakarta_Sans'] leading-none">MSK <span className="text-white/40 font-normal text-[10px] tracking-widest">NIAGARA</span></div>
                  <div className="text-[8px] text-white/30 tracking-[0.15em] uppercase">Research Partnership</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/60">
                <span className="hover:text-white cursor-pointer">Home</span>
                <span className="hover:text-white cursor-pointer">About ▾</span>
                <span className="hover:text-white cursor-pointer">Research ▾</span>
                <span className="hover:text-white cursor-pointer">Community</span>
                <span className="text-[#8B0000] font-semibold">Timeline & Events</span>
                <span className="hover:text-white cursor-pointer">Media</span>
              </div>
              <button className="bg-[#8B0000] text-white text-xs font-bold px-4 py-2 rounded-lg">
                Get Involved →
              </button>
            </div>
          </div>
        </section>

        {/* Hero mockup */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Page Hero — Crimson with Dot Grid + Diagonal Cut</h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div className="relative bg-[#8B0000] pt-12 pb-16 px-12 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#F8F7F5]"
                style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-px bg-white/30" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">MSK Niagara</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-3 font-['Plus_Jakarta_Sans'] leading-tight">Mobilizing Knowledge<br />for a Just Niagara</h2>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">A transnational university-community partnership advancing knowledge and social justice for newcomer and marginalized communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hub cards */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Research Hub Cards — Accent Colour System</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {hubs.map(hub => (
              <div key={hub.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-1.5" style={{ backgroundColor: hub.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-gray-300">{hub.tag}</span>
                  </div>
                  <h3 className="font-bold text-[#0A0A0A] font-['Plus_Jakarta_Sans'] mb-2 group-hover:text-[#8B0000] transition-colors">{hub.name} Hub</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">Community-engaged research improving lives of newcomers across the Niagara region.</p>
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#8B0000] transition-colors">
                    Explore Hub
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Stats Strip — Ink Background</h2>
          </div>
          <div className="bg-[#0A0A0A] rounded-xl p-8 grid grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { n: "65+", label: "Team Members" },
              { n: "3", label: "Research Hubs" },
              { n: "26", label: "Community Partners" },
              { n: "SSHRC", label: "Funded By" },
            ].map(s => (
              <div key={s.n} className="px-8 text-center">
                <div className="w-3 h-0.5 bg-[#8B0000] mx-auto mb-3 rounded" />
                <div className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-1">{s.n}</div>
                <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Report card */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#8B0000] rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Annual Report Card — Split Cover Layout</h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow">
            <div className="grid grid-cols-[220px_1fr]">
              <div className="relative bg-[#8B0000] p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07]"
                  style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '18px 18px' }} />
                <div className="absolute bottom-0 left-0 right-0 text-[80px] font-extrabold text-white/[0.06] font-['Plus_Jakarta_Sans'] leading-none select-none pointer-events-none overflow-hidden">2024</div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex gap-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-white/10 text-white/60">2024–2025</span>
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-white text-[#8B0000]">Latest</span>
                  </div>
                  <div className="mt-8">
                    <div className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">Annual Impact Report</div>
                    <div className="text-xs text-white/40 mt-1">Second Year of Partnership</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-sm">Comprehensive overview of research activities, community partnerships and measurable impact across all three research hubs.</p>
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[["26", "Partners"], ["65", "Members"], ["12", "Projects"], ["150+", "Events"]].map(([v, l]) => (
                    <div key={l} className="bg-[#8B0000]/[0.04] rounded-lg p-2 text-center border border-[#8B0000]/10">
                      <div className="text-lg font-extrabold text-[#8B0000] font-['Plus_Jakarta_Sans']">{v}</div>
                      <div className="text-[9px] text-gray-400 uppercase tracking-wide font-semibold">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] text-white text-xs font-bold rounded-lg">
                    ↓ Download PDF
                  </button>
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-gray-500 text-xs font-semibold rounded-lg">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
