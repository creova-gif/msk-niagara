import { sanitizeUrl } from '../utils/security';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, BookOpen, Users, Landmark, Send } from 'lucide-react';
import { useState } from 'react';

// Import logos (using the ones from Partnership.tsx)
const sshrcLogo = '/c9c77bb67634af21353fb8f536aed3347c90330c.png';
const brockLogo = '/6a2d35fb10f25faa07b97ffff38a76f184734ae4.png';
const uoftOiseLogo = '/7b98ee478f466c3dd71a0410d27d1cae36bc7b2a.png';
const brockESRCLogo = '/4825dd65e7c70d72bc4874a4e49e5ed0e76764db.png';
const niagaraRegionLogo = '/b80316cbb5ce9244931d871f5cd787d687cfdafb.png';
const yorkUniversityLogo = '/c04bb3e0b2c20a914be2fc34dabdbd667e3f6fd3.png';
const universityAtBuffaloLogo = '/1e02762e71863f48fceb1cc3277e8ecd07e53156.png';

export function Partners() {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Hardcoded for now based on the prompt's layout request
  const partnersData = {
    community: [
      { name: 'Niagara Region', url: 'https://www.niagararegion.ca/', logo: niagaraRegionLogo },
      { name: 'Black Community Organization', url: '#', logo: null },
      { name: 'Migrant Worker Support Center', url: '#', logo: null }
    ],
    academic: [
      { name: 'Brock University – ESRC', url: 'https://www.brocku.ca/esrc/', logo: brockESRCLogo },
      { name: 'University of Toronto – OISE', url: 'https://www.oise.utoronto.ca/', logo: uoftOiseLogo },
      { name: 'Social Justice Research Institute', url: 'https://www.brocku.ca/social-justice-research-institute/', logo: brockLogo },
      { name: 'York University', url: 'https://www.yorku.ca/', logo: yorkUniversityLogo },
      { name: 'University at Buffalo', url: 'https://www.buffalo.edu/', logo: universityAtBuffaloLogo }
    ],
    funding: [
      { name: 'Social Sciences and Humanities Research Council (SSHRC)', url: 'https://www.sshrc-crsh.gc.ca/', logo: sshrcLogo }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* ── HERO ── */}
      <div className="relative bg-[#8B0000] py-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm border border-white/20">
            {language === 'en' ? 'Our Network' : 'Notre Réseau'}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {language === 'en' ? 'United for Justice and Inclusion' : 'Unis pour la justice et l\'inclusion'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Our strength lies in collaboration. By uniting community grassroots organizations, academic researchers, and institutional funders, we create a circle of care dedicated to addressing the needs of marginalized communities in the Niagara region.' 
              : 'Notre force réside dans la collaboration. En réunissant des organisations communautaires, des chercheurs universitaires et des bailleurs de fonds institutionnels, nous créons un cercle de bienveillance.'}
          </p>
        </div>
      </div>

      {/* ── CIRCLE OF CARE (VENN DIAGRAM) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-24">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {language === 'en' ? 'The Circle of Care' : 'Le Cercle de Bienveillance'}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {language === 'en' ? 'A non-hierarchical, interconnected model of partnership where every stakeholder holds equal value in driving systemic change.' : 'Un modèle de partenariat non hiérarchique et interconnecté.'}
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full max-w-2xl mx-auto flex items-center justify-center">
            {/* Top Circle - Funding */}
            <div className="absolute top-[5%] w-[60%] h-[60%] rounded-full border-4 border-[#C97B2E]/30 bg-[#C97B2E]/5 backdrop-blur-sm flex flex-col items-center justify-start pt-10 transition-all hover:bg-[#C97B2E]/10 z-10 hover:z-40 hover:scale-105 duration-300 shadow-[0_0_30px_rgba(201,123,46,0.1)]">
              <Landmark className="w-8 h-8 text-[#C97B2E] mb-2" />
              <span className="font-bold text-[#8B4D15] text-center text-sm md:text-base">
                {language === 'en' ? 'Funding Partners' : 'Partenaires Financiers'}
              </span>
            </div>

            {/* Bottom Left Circle - Academic */}
            <div className="absolute bottom-[5%] left-[5%] w-[60%] h-[60%] rounded-full border-4 border-[#8B0000]/30 bg-[#8B0000]/5 backdrop-blur-sm flex flex-col items-center justify-end pb-10 transition-all hover:bg-[#8B0000]/10 z-20 hover:z-40 hover:scale-105 duration-300 shadow-[0_0_30px_rgba(139,0,0,0.1)]">
              <span className="font-bold text-[#600000] text-center text-sm md:text-base mt-2">
                {language === 'en' ? 'Academic Partners' : 'Partenaires Académiques'}
              </span>
              <BookOpen className="w-8 h-8 text-[#8B0000] mt-2" />
            </div>

            {/* Bottom Right Circle - Community */}
            <div className="absolute bottom-[5%] right-[5%] w-[60%] h-[60%] rounded-full border-4 border-[#089EA5]/30 bg-[#089EA5]/5 backdrop-blur-sm flex flex-col items-center justify-end pb-10 transition-all hover:bg-[#089EA5]/10 z-30 hover:z-40 hover:scale-105 duration-300 shadow-[0_0_30px_rgba(8,158,165,0.1)]">
              <span className="font-bold text-[#056d72] text-center text-sm md:text-base mt-2">
                {language === 'en' ? 'Community Partners' : 'Partenaires Communautaires'}
              </span>
              <Users className="w-8 h-8 text-[#089EA5] mt-2" />
            </div>

            {/* Center Intersection text */}
            <div className="absolute z-50 text-center flex flex-col items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <span className="font-extrabold text-gray-900 tracking-wider">MSK NIAGARA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNERS DIRECTORY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Community */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-[#089EA5] p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-3 bg-[#089EA5]/10 rounded-xl">
                <Users className="w-6 h-6 text-[#089EA5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'en' ? 'Community Partners' : 'Partenaires Communautaires'}
              </h3>
            </div>
            <div className="space-y-4">
              {partnersData.community.map((partner, i) => (
                <a key={i} href={sanitizeUrl(partner.url)} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-[#089EA5]/30 hover:bg-[#089EA5]/5 transition-all flex items-center justify-between">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-8 object-contain max-w-[120px]" />
                    ) : (
                      <span className="font-semibold text-gray-700 group-hover:text-[#089EA5] text-sm">{partner.name}</span>
                    )}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#089EA5] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Academic */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-[#8B0000] p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-3 bg-[#8B0000]/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'en' ? 'Academic Partners' : 'Partenaires Académiques'}
              </h3>
            </div>
            <div className="space-y-4">
              {partnersData.academic.map((partner, i) => (
                <a key={i} href={sanitizeUrl(partner.url)} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/5 transition-all flex items-center justify-between">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-8 object-contain max-w-[120px]" />
                    ) : (
                      <span className="font-semibold text-gray-700 group-hover:text-[#8B0000] text-sm">{partner.name}</span>
                    )}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Funding */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-[#C97B2E] p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-3 bg-[#C97B2E]/10 rounded-xl">
                <Landmark className="w-6 h-6 text-[#C97B2E]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'en' ? 'Funding Partners' : 'Partenaires Financiers'}
              </h3>
            </div>
            <div className="space-y-4">
              {partnersData.funding.map((partner, i) => (
                <a key={i} href={sanitizeUrl(partner.url)} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-[#C97B2E]/30 hover:bg-[#C97B2E]/5 transition-all flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <img src={partner.logo} alt={partner.name} className="h-10 object-contain max-w-[120px] invert grayscale opacity-80 group-hover:opacity-100" />
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C97B2E] group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="font-medium text-gray-600 text-xs">{partner.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── SUBSCRIPTION / PARTNER WITH US ── */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#089EA5]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B0000]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#089EA5] font-bold tracking-widest uppercase text-xs mb-3 block">Join The Network</span>
                <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {language === 'en' ? 'Partner With Us' : 'Devenez Partenaire'}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {language === 'en' 
                    ? 'Whether you are a community organization looking to collaborate, an academic institution offering research support, or a philanthropic entity aiming to fund systemic change—we want to hear from you.'
                    : 'Que vous soyez une organisation communautaire, une institution académique ou une entité philanthropique, nous voulons vous entendre.'}
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B0000] border-2 border-[#1A1A1A] flex items-center justify-center"><BookOpen className="w-4 h-4 text-white" /></div>
                    <div className="w-10 h-10 rounded-full bg-[#089EA5] border-2 border-[#1A1A1A] flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
                    <div className="w-10 h-10 rounded-full bg-[#C97B2E] border-2 border-[#1A1A1A] flex items-center justify-center"><Landmark className="w-4 h-4 text-white" /></div>
                  </div>
                  <span className="text-white/60 text-xs font-medium">Join 10+ Organizations</span>
                </div>
              </div>

              <div className="flex-1 w-full">
                {formStatus === 'success' ? (
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-sm text-gray-400">Thank you for your interest. Our coordination team will reach out shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm text-[#089EA5] hover:text-white transition-colors">Submit another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl space-y-4 shadow-inner">
                    <div>
                      <label className="sr-only">Organization Name</label>
                      <input required type="text" placeholder="Organization Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#089EA5] focus:ring-1 focus:ring-[#089EA5] transition-all text-sm" />
                    </div>
                    <div>
                      <label className="sr-only">Email Address</label>
                      <input required type="email" placeholder="Contact Email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#089EA5] focus:ring-1 focus:ring-[#089EA5] transition-all text-sm" />
                    </div>
                    <div>
                      <label className="sr-only">Partner Type</label>
                      <select required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#089EA5] focus:ring-1 focus:ring-[#089EA5] transition-all text-sm appearance-none">
                        <option value="" disabled selected>Select Partnership Type...</option>
                        <option value="community">Community Partner</option>
                        <option value="academic">Academic / Research Partner</option>
                        <option value="funding">Funding / Philanthropy</option>
                      </select>
                    </div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-gradient-to-r from-[#089EA5] to-[#067A80] hover:from-[#09B5BD] hover:to-[#089EA5] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70">
                      {formStatus === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Submit Interest</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
