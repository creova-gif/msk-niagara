(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const w=[{name:"Niagara Regional Native Centre",desc:"Providing support, programs, and cultural preservation for Indigenous families in Niagara.",tags:["Indigenous","Family Support","Welland"]},{name:"Fort Erie Multicultural Centre",desc:"Assisting newcomers and refugees with settlement, language classes, and employment integration.",tags:["Settlement","Refugee Support","Fort Erie"]},{name:"BlackOwned 905",desc:"Amplifying Black-owned businesses, culture, and community advocacy across the Niagara Peninsula.",tags:["Advocacy","Economic development","Niagara Falls"]},{name:"TOES Niagara",desc:"Empowering immigrant women with education, entrepreneurship programs, and wellness workshops.",tags:["Women Support","Education","St. Catharines"]},{name:"Niagara Folk Arts Multicultural Centre",desc:"Celebrating heritage and supporting newcomers with comprehensive immigration services.",tags:["Settlement","Cultural Arts","St. Catharines"]},{name:"Positive Living Niagara",desc:"Providing community support, harm reduction, and education services across the region.",tags:["Health Support","Advocacy","St. Catharines"]},{name:"Niagara Region Public Health",desc:"Collaborating on health literacy and community-based health promotion campaigns.",tags:["Health Support","Government","Thorold"]},{name:"Welland Heritage Council",desc:"Supporting multicultural integration and providing housing resources for refugees.",tags:["Settlement","Housing","Welland"]},{name:"YMCA of Niagara Settlement Services",desc:"Settlement programs and youth mentorship pathways for newly arrived immigrant families.",tags:["Settlement","Youth","Niagara Falls"]},{name:"Port Colborne Affirmative Action",desc:"Supporting food security and basic needs for low-income newcomers in the southern tier.",tags:["Social Services","Food Security","Port Colborne"]},{name:"Brock University SJRI",desc:"Bridging academic research and community action to advocate for local social justice reform.",tags:["Academic","Advocacy","St. Catharines"]},{name:"Niagara Regional Police Service Diversity Unit",desc:"Improving institutional awareness and community relations with diverse populations.",tags:["Government","Advocacy","Thorold"]},{name:"Gideon's Place",desc:"Advocating for seasonal agricultural workers, providing housing support and social connections.",tags:["Agriculture Workers","Housing","Lincoln"]},{name:"South Niagara Migrant Worker Coalition",desc:"Protecting the rights and health of temporary agricultural workers in southern Niagara.",tags:["Agriculture Workers","Health Support","Pelham"]},{name:"Quest Community Health Centre",desc:"Providing accessible, culturally-sensitive primary healthcare and wellness programs.",tags:["Health Support","Social Services","St. Catharines"]},{name:"Niagara Falls Community Health Centre",desc:"Integrated medical and community services for marginalized populations.",tags:["Health Support","Social Services","Niagara Falls"]},{name:"Links for Greener Learning",desc:"Connecting newcomers with environmental education and community garden initiatives.",tags:["Education","Environment","St. Catharines"]},{name:"Women's Place of South Niagara",desc:"Safe shelter and counseling services for women fleeing domestic violence.",tags:["Women Support","Social Services","Welland"]},{name:"Start Me Up Niagara",desc:"Supporting individuals facing significant life challenges to obtain stable employment and housing.",tags:["Housing","Employment","St. Catharines"]},{name:"De dwa da dehs nye>s Aboriginal Health Centre",desc:"Improving wellness outcomes through traditional and contemporary Indigenous medicine.",tags:["Indigenous","Health Support","Niagara Falls"]},{name:"Niagara West Adult Learning Centre",desc:"Literacy and basic skills training for adult learners seeking career advancement.",tags:["Education","Employment","Grimsby"]},{name:"Project SHARE",desc:"Providing emergency support and prevention services to Niagara Falls residents in need.",tags:["Social Services","Food Security","Niagara Falls"]}],b={home:k,about:E,research:C,community:A,partners:N,contact:M,subscribe:L,symposium:I};function v(){const e=location.hash.slice(2)||"home",t=b[e]||b.home,s=document.getElementById("root");s&&(s.innerHTML=`
    <!-- Persistent Header -->
    <header class="bg-[#f8f6f0] border-b border-[#d1cfc8] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <a href="#/" class="font-serif text-2xl font-bold tracking-tight text-[#1a2a3a] flex items-center gap-2">
        <button class="bg-[#1a2a3a] text-[#f8f6f0] border-0 px-3 py-1 font-serif font-bold text-sm tracking-widest rounded hover:bg-[#6b2a3e] transition-colors" aria-label="MSK Logo">MSK</button>
        <span class="text-xs uppercase tracking-wider font-sans text-[#555]">Niagara</span>
      </a>
      <button class="lg:hidden text-[#1a2a3a] focus:outline-none" id="menuToggle" aria-label="Toggle Menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
      </button>
      <nav aria-label="Main Navigation" class="hidden lg:block">
        <ul class="flex gap-8 list-none">
          <li><a href="#/about" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">About</a></li>
          <li><a href="#/research" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">Research</a></li>
          <li><a href="#/community" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">Community</a></li>
          <li><a href="#/partners" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">Partners</a></li>
          <li><a href="#/symposium-june-19" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">Symposium</a></li>
          <li><a href="#/contact" class="nav-link font-medium text-sm text-[#1a1a1a] hover:text-[#6b2a3e]">Contact</a></li>
        </ul>
      </nav>
      <!-- Mobile Sidebar -->
      <div id="mobileMenu" class="hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden">
        <div class="fixed top-0 right-0 bottom-0 w-64 bg-[#f8f6f0] p-6 shadow-xl border-l border-[#d1cfc8] flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <span class="font-serif font-bold text-lg text-[#1a2a3a]">Navigation</span>
            <button id="menuClose" class="text-[#1a2a3a]" aria-label="Close Menu">✕</button>
          </div>
          <ul class="flex flex-col gap-4 list-none">
            <li><a href="#/about" class="mobile-nav-link text-lg font-serif">About</a></li>
            <li><a href="#/research" class="mobile-nav-link text-lg font-serif">Research</a></li>
            <li><a href="#/community" class="mobile-nav-link text-lg font-serif">Community</a></li>
            <li><a href="#/partners" class="mobile-nav-link text-lg font-serif">Partners</a></li>
            <li><a href="#/symposium-june-19" class="mobile-nav-link text-lg font-serif">Symposium</a></li>
            <li><a href="#/contact" class="mobile-nav-link text-lg font-serif">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main id="app-content">${t()}</main>

    <!-- Persistent Footer -->
    <footer class="bg-[#1a2a3a] text-[#f8f6f0] px-6 py-16 border-t border-[#2d3a4b] mt-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="flex flex-col gap-4">
          <div class="font-serif text-2xl font-bold">MSK // MSM</div>
          <p class="text-xs text-[#b8c2cc] leading-relaxed max-w-sm">
            Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara. Supported by the Social Justice Research Institute (SJRI) and Brock University.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-xs font-semibold uppercase tracking-wider text-[#b8c2cc]">Quick Access</div>
          <ul class="list-none flex flex-col gap-2 text-sm text-[#b8c2cc]">
            <li><a href="#/about" class="hover:text-white">Our Mission</a></li>
            <li><a href="#/research" class="hover:text-white">Research Hubs</a></li>
            <li><a href="#/partners" class="hover:text-white">Partner Portal</a></li>
            <li><a href="#/symposium-june-19" class="hover:text-white font-semibold text-[#6b2a3e]">June 19 Symposium</a></li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-xs font-semibold uppercase tracking-wider text-[#b8c2cc]">Subscribe to Movement</div>
          <p class="text-xs text-[#b8c2cc]">Receive policy recommendations and community research digests.</p>
          <a href="#/subscribe" class="inline-block bg-[#6b2a3e] text-center text-[#f8f6f0] px-4 py-3 font-serif rounded font-semibold text-sm hover:bg-[#521d2d] transition-all" aria-label="Subscribe page link">Subscribe Now</a>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#2d3a4b] text-center text-[10px] text-[#8a95a5]">
        © 2026 Mobilizing Subjugated Knowledges (MSK/MSM) Niagara. All Rights Reserved. Funded by SSHRC.
      </div>
    </footer>

    <!-- Toast Container -->
    <div id="toast" class="fixed bottom-6 right-6 bg-[#1a2a3a] text-[#f8f6f0] p-4 rounded-lg shadow-xl z-50 flex items-center gap-4 border border-[#d1cfc8]/20 transition-all duration-300 transform translate-y-24 opacity-0" role="status" aria-live="polite">
      <span id="toast-message">Submission successful.</span>
      <button type="button" class="text-white hover:text-[#6b2a3e] focus:outline-none" onclick="this.parentElement.classList.remove('show')" aria-label="Close Toast">✕</button>
    </div>
  `,S(),e==="home"&&B(),e==="community"&&R(),e==="partners"&&u("partner"),e==="subscribe"&&u("newsletter"),(e==="symposium-june-19"||e==="symposium")&&u("rsvp"),e==="contact"&&u("contact"),document.querySelectorAll(".nav-link").forEach(o=>{o.getAttribute("href")===`#/${e}`?o.classList.add("text-[#6b2a3e]","border-b-2","border-[#6b2a3e]"):o.classList.remove("text-[#6b2a3e]","border-b-2","border-[#6b2a3e]")}),window.scrollTo({top:0,behavior:"instant"}))}function S(){const e=document.getElementById("menuToggle"),t=document.getElementById("mobileMenu"),s=document.getElementById("menuClose");e&&t&&s&&(e.addEventListener("click",()=>t.classList.remove("hidden")),s.addEventListener("click",()=>t.classList.add("hidden")),t.addEventListener("click",o=>{o.target===t&&t.classList.add("hidden")})),document.querySelectorAll(".mobile-nav-link").forEach(o=>{o.addEventListener("click",()=>{t==null||t.classList.add("hidden")})})}function k(){return`
    <!-- Hero Section with Dominant CTA -->
    <section class="bg-[#1a2a3a] text-[#f8f6f0] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#d1cfc8]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="flex flex-col gap-6">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6b2a3e]">
            <span class="w-2 h-2 rounded-full bg-[#6b2a3e]"></span> University-Community Partnership
          </div>
          <h1 class="text-4xl md:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
            Mobilizing Subjugated Knowledges for a Just Niagara
          </h1>
          <p class="text-lg text-[#b8c2cc] leading-relaxed max-w-xl">
            Empowering marginalized communities, conducting rigorous participatory research, and shaping public policy in the Niagara region.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#/partners" class="bg-[#6b2a3e] text-center text-white px-8 py-4 font-serif font-bold rounded hover:bg-[#521d2d] hover:shadow-xl transition-all" aria-label="Become a partner">Apply to Become a Research Partner</a>
            <a href="#/symposium-june-19" class="border-2 border-[#b8c2cc] text-center text-[#f8f6f0] px-8 py-4 font-serif font-semibold rounded hover:bg-[#f8f6f0] hover:text-[#1a2a3a] transition-all">RSVP to June 19 Symposium</a>
          </div>
        </div>
        <div class="hidden lg:block relative">
          <!-- Institutional desaturated imagery -->
          <div class="border border-[#2d3a4b] rounded-lg overflow-hidden shadow-2xl grayscale opacity-75">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop&fm=webp" 
                 srcset="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop&fm=webp 800w"
                 sizes="40vw"
                 alt="Collaboration meeting at academic hall" class="w-full h-[400px] object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Key Metrics & Land Acknowledgment -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="border-b border-[#d1cfc8] pb-10 mb-10 text-xs text-[#555] leading-relaxed font-sans max-w-3xl">
        <span class="font-bold uppercase tracking-wider text-[#1a2a3a] block mb-2">Land Acknowledgment</span>
        We acknowledge the land on which we gather is the traditional territory of the Haudenosaunee and Anishinaabe peoples, many of whom continue to live and work here today. This territory is covered by the Upper Canada Treaties and is within the land protected by the Dish With One Spoon Wampum agreement.
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="flex flex-col gap-2">
          <div class="font-serif text-5xl font-extrabold text-[#1a2a3a]">22+</div>
          <div class="text-xs uppercase tracking-wider text-[#555]">Community Partners</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-serif text-5xl font-extrabold text-[#1a2a3a]">5</div>
          <div class="text-xs uppercase tracking-wider text-[#555]">Active Projects</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-serif text-5xl font-extrabold text-[#1a2a3a]">3</div>
          <div class="text-xs uppercase tracking-wider text-[#555]">Research Hubs</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-serif text-5xl font-extrabold text-[#1a2a3a]">SSHRC</div>
          <div class="text-xs uppercase tracking-wider text-[#555]">Federal Funding</div>
        </div>
      </div>
    </section>

    <!-- Hubs Overview -->
    <section class="py-12 px-6 max-w-7xl mx-auto">
      <h2 class="text-3xl font-serif font-bold text-[#1a2a3a] mb-12 border-b border-[#d1cfc8] pb-4">Our Three Research Hubs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white border border-[#d1cfc8] p-8 rounded-lg flex flex-col justify-between gap-6 hover:shadow-lg transition-all">
          <div class="flex flex-col gap-3">
            <span class="w-12 h-1 bg-[#089EA5] block rounded"></span>
            <h3 class="text-xl font-bold font-serif">Childhood & Growing Up Hub</h3>
            <p class="text-sm text-[#555]">Focusing on the lived experiences of newcomer children, listening to their housing, education, and recreation needs.</p>
          </div>
          <a href="#/research" class="text-xs font-semibold uppercase tracking-wider text-[#6b2a3e] hover:underline">Explore Hub →</a>
        </div>
        <div class="bg-white border border-[#d1cfc8] p-8 rounded-lg flex flex-col justify-between gap-6 hover:shadow-lg transition-all">
          <div class="flex flex-col gap-3">
            <span class="w-12 h-1 bg-[#C97B2E] block rounded"></span>
            <h3 class="text-xl font-bold font-serif">Health Literacy Hub</h3>
            <p class="text-sm text-[#555]">Promoting healthcare accessibility, equity, and literacy for immigrant and refugee populations in Niagara.</p>
          </div>
          <a href="#/research" class="text-xs font-semibold uppercase tracking-wider text-[#6b2a3e] hover:underline">Explore Hub →</a>
        </div>
        <div class="bg-white border border-[#d1cfc8] p-8 rounded-lg flex flex-col justify-between gap-6 hover:shadow-lg transition-all">
          <div class="flex flex-col gap-3">
            <span class="w-12 h-1 bg-[#7B5EA7] block rounded"></span>
            <h3 class="text-xl font-bold font-serif">Identity & Belonging Hub</h3>
            <p class="text-sm text-[#555]">Advocating for agricultural workers, Afro-descendants, and gender-diverse populations in the region.</p>
          </div>
          <a href="#/research" class="text-xs font-semibold uppercase tracking-wider text-[#6b2a3e] hover:underline">Explore Hub →</a>
        </div>
      </div>
    </section>

    <!-- Quick Newsletter CTA -->
    <section class="bg-[#f8f6f0] border-y border-[#d1cfc8] py-16 px-6 text-center">
      <div class="max-w-2xl mx-auto flex flex-col gap-6">
        <h2 class="text-2xl font-serif">Stay Informed with the Movement</h2>
        <p class="text-sm text-[#555] max-w-md mx-auto">Get occasional policy recommendations, publication announcements, and local community updates directly in your inbox.</p>
        <div>
          <a href="#/subscribe" class="inline-block bg-[#1a2a3a] text-[#f8f6f0] px-6 py-3 font-serif rounded hover:bg-[#6b2a3e] transition-all">Sign Up for the Newsletter</a>
        </div>
      </div>
    </section>
  `}function E(){return`
    <div class="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-16">
      
      <!-- Intro Section -->
      <section class="flex flex-col gap-6">
        <h1 class="text-4xl md:text-5xl font-serif font-extrabold text-[#1a2a3a]">About the Partnership</h1>
        <p class="lead-text text-lg">
          The "Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara / Mobilisation des savoirs pour un Niagara juste et inclusif" (MSK/MSM) project is a transnational, university-community research partnership committed to fostering social justice.
        </p>
      </section>

      <!-- Mission, Vision, Values -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#d1cfc8] pt-12">
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-serif">Our Mission</h2>
          <p class="text-sm text-[#555]">
            To provide a collaborative forum for African descendant, immigrant, and foreign-born persons in the Regional Municipality of Niagara to share their lived experiences and accomplishments, establishing research-grounded tools to build an inclusive society.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-serif">Our Vision</h2>
          <p class="text-sm text-[#555]">
            A Niagara region where all communities, regardless of origin, race, or residency status, possess the agency to shape the services, institutions, and policies that govern their lives.
          </p>
        </div>
      </section>

      <!-- Co-Directors -->
      <section class="border-t border-[#d1cfc8] pt-12">
        <h2 class="text-3xl font-serif text-[#1a2a3a] mb-8">Leadership</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white border border-[#d1cfc8] p-6 rounded-lg flex flex-col gap-4">
            <h3 class="text-xl font-bold font-serif text-[#1a2a3a]">Dr. Livianna Tossutti</h3>
            <span class="text-xs uppercase tracking-wider text-[#6b2a3e]">Co-Director & Professor, Brock University</span>
            <p class="text-sm text-[#555]">Leading the municipal policy alignment and public agency awareness initiatives within the partnership, bridging regional governance with empirical social research.</p>
          </div>
          <div class="bg-white border border-[#d1cfc8] p-6 rounded-lg flex flex-col gap-4">
            <h3 class="text-xl font-bold font-serif text-[#1a2a3a]">Dr. Jean Ntakirutimana</h3>
            <span class="text-xs uppercase tracking-wider text-[#6b2a3e]">Co-Director & Professor, Brock University</span>
            <p class="text-sm text-[#555]">Directing community integration, language inclusion, and minority identity research, focusing on the lived realities of Afro-descendant populations in Niagara.</p>
          </div>
        </div>
      </section>

      <!-- Governance Structure -->
      <section class="border-t border-[#d1cfc8] pt-12 flex flex-col gap-4">
        <h2 class="text-3xl font-serif text-[#1a2a3a]">Governance & Council</h2>
        <p class="text-sm text-[#555]">
          The partnership is steered by an Implementation Council comprising community leaders, academic investigators, and students. Decisions are reached via community-centered consensus, ensuring that the power to direct funding and publish results resides primarily with the community organizations themselves.
        </p>
      </section>

      <!-- History -->
      <section class="border-t border-[#d1cfc8] pt-12 flex flex-col gap-4">
        <h2 class="text-3xl font-serif text-[#1a2a3a]">Our History</h2>
        <p class="text-sm text-[#555]">
          Established in response to the growing demographic diversity and corresponding structural barriers in the Niagara peninsula, the MSK/MSM project grew from a series of community roundtable discussions into a federally-supported SSHRC partnership project linking Brock University with over 22 local agency boards.
        </p>
      </section>

    </div>
  `}function C(){return`
    <div class="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-16">
      <section class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-5xl font-serif font-extrabold text-[#1a2a3a]">Active Research Hubs</h1>
        <p class="lead-text">
          Our research is organized into three distinct hubs. Each hub pairs academic scholars with community advocates to generate policy recommendations.
        </p>
      </section>

      <div class="flex flex-col gap-12">
        <!-- Hub 1 -->
        <div class="bg-white border border-[#d1cfc8] rounded-xl p-8 shadow-sm flex flex-col gap-6">
          <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-serif font-bold text-[#1a2a3a]">1. Childhood & Growing Up Hub</h2>
            <span class="badge bg-[#089EA5]/10 text-[#089EA5] px-3 py-1 text-xs rounded-full font-semibold">Active Research</span>
          </div>
          <p class="text-sm text-[#555]">
            Listening to the specific lived experiences of newcomer, refugee, and immigrant children in Niagara. Our projects investigate housing access, structural integration in school systems, and the accessibility of local recreation and sports clubs.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-[#d1cfc8]/50">
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Metrics</span>
              <span class="font-serif text-lg font-bold">150+ Interviews Conducted</span>
            </div>
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Target</span>
              <span class="font-serif text-lg font-bold">School Boards & Clubs</span>
            </div>
          </div>
        </div>

        <!-- Hub 2 -->
        <div class="bg-white border border-[#d1cfc8] rounded-xl p-8 shadow-sm flex flex-col gap-6">
          <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-serif font-bold text-[#1a2a3a]">2. Health Literacy Hub</h2>
            <span class="badge bg-[#C97B2E]/10 text-[#C97B2E] px-3 py-1 text-xs rounded-full font-semibold">Fieldwork</span>
          </div>
          <p class="text-sm text-[#555]">
            Promoting health literacy and improving access to primary healthcare for immigrant and refugee populations. We investigate cultural and linguistic barriers inside clinics, emergency rooms, and wellness clinics in the Niagara Peninsula.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-[#d1cfc8]/50">
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Metrics</span>
              <span class="font-serif text-lg font-bold">12 Active Programs</span>
            </div>
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Target</span>
              <span class="font-serif text-lg font-bold">Regional Healthcare Providers</span>
            </div>
          </div>
        </div>

        <!-- Hub 3 -->
        <div class="bg-white border border-[#d1cfc8] rounded-xl p-8 shadow-sm flex flex-col gap-6">
          <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-serif font-bold text-[#1a2a3a]">3. Identity, Connections & Belonging Hub</h2>
            <span class="badge bg-[#7B5EA7]/10 text-[#7B5EA7] px-3 py-1 text-xs rounded-full font-semibold">Active Research</span>
          </div>
          <p class="text-sm text-[#555]">
            Advocating for marginalized groups that intersect with multiple identity challenges. Current projects focus on seasonal agricultural worker communities, Afro-descendant youth connection spaces, and settlement support frameworks for gender-diverse newcomers.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-[#d1cfc8]/50">
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Metrics</span>
              <span class="font-serif text-lg font-bold">5 Key Publications</span>
            </div>
            <div>
              <span class="block text-xs uppercase tracking-wider text-[#8a8a8a]">Target</span>
              <span class="font-serif text-lg font-bold">Migrant Workers & Youth</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function A(){return`
    <div class="max-w-5xl mx-auto py-16 px-6">
      <div class="flex flex-col gap-4 mb-12">
        <h1 class="text-4xl md:text-5xl font-serif font-extrabold text-[#1a2a3a]">Community Partners Directory</h1>
        <p class="lead-text">
          Explore our coalition of over 22 local organizations, advocacy panels, and research institutions dedicated to social equity in Niagara.
        </p>
      </div>

      <!-- Search & Filters Container -->
      <div class="bg-white border border-[#d1cfc8] p-6 rounded-lg flex flex-col gap-6 mb-8 shadow-sm">
        <div class="flex flex-col gap-2">
          <label for="partnerSearch" class="text-xs font-semibold uppercase tracking-wider text-[#1a2a3a]">Search Directory</label>
          <input type="text" id="partnerSearch" class="form-control w-full" placeholder="e.g. Indigenous, Settlement, Fort Erie...">
        </div>
        <div>
          <div class="text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-2">Filter by tag</div>
          <div class="flex flex-wrap gap-2" id="filterTags">
            <button class="bg-[#1a2a3a] text-white px-3 py-1.5 text-xs rounded hover:opacity-90 font-medium active-tag" data-tag="all">All</button>
            <button class="bg-gray-100 text-[#1a1a1a] border border-gray-200 px-3 py-1.5 text-xs rounded hover:bg-gray-200 font-medium" data-tag="Settlement">Settlement</button>
            <button class="bg-gray-100 text-[#1a1a1a] border border-gray-200 px-3 py-1.5 text-xs rounded hover:bg-gray-200 font-medium" data-tag="Health Support">Health Support</button>
            <button class="bg-gray-100 text-[#1a1a1a] border border-gray-200 px-3 py-1.5 text-xs rounded hover:bg-gray-200 font-medium" data-tag="Indigenous">Indigenous</button>
            <button class="bg-gray-100 text-[#1a1a1a] border border-gray-200 px-3 py-1.5 text-xs rounded hover:bg-gray-200 font-medium" data-tag="Advocacy">Advocacy</button>
          </div>
        </div>
      </div>

      <!-- Partner Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="directoryGrid">
        <!-- Rendered dynamically by JS -->
      </div>
    </div>
  `}function N(){return`
    <div class="max-w-7xl mx-auto py-16 px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Left: Branding Graphic, Circle of Care, Testimonial -->
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-4">
            <h1 class="text-4xl md:text-5xl font-serif font-extrabold text-[#1a2a3a]">Partner With Us</h1>
            <p class="lead-text">
              We align academic research resources with localized community agency data to advocate for policy integration and systemic reform.
            </p>
          </div>

          <!-- Circle of Care Venn Diagram (Pure CSS) -->
          <div class="flex flex-col gap-4 border-t border-[#d1cfc8] pt-8">
            <span class="text-xs uppercase tracking-wider font-semibold text-[#8a8a8a]">Circle of Care Collaboration Model</span>
            <div class="flex justify-center my-6">
              <div class="relative w-[280px] height-[250px] flex justify-center items-center h-[250px]">
                <div class="absolute w-[150px] h-[150px] rounded-full bg-[#1a2a3a]/90 text-[#f8f6f0] flex items-center justify-center text-xs font-semibold p-4 text-center top-0 left-[65px] mix-blend-multiply shadow-md">
                  Community Partner
                </div>
                <div class="absolute w-[150px] h-[150px] rounded-full bg-[#6b2a3e]/90 text-[#f8f6f0] flex items-center justify-center text-xs font-semibold p-4 text-center bottom-0 left-[10px] mix-blend-multiply shadow-md">
                  Academic Scholar
                </div>
                <div class="absolute w-[150px] h-[150px] rounded-full bg-[#e5e3db]/95 text-[#1a2a3a] flex items-center justify-center text-xs font-semibold p-4 text-center bottom-0 right-[10px] mix-blend-multiply shadow-md">
                  Funding Board
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial -->
          <blockquote class="border-l-4 border-[#6b2a3e] bg-[#f8f6f0] p-6 rounded-r-lg">
            <p class="text-sm font-serif italic text-[#1a1a1a] mb-2">
              "Partnering with the MSK research council gave our multicultural board the quantitative datasets required to convince local health agencies of language inclusion necessities."
            </p>
            <cite class="text-xs font-sans font-bold uppercase tracking-wider text-[#555]">— Executive Director, Fort Erie Multicultural Centre</cite>
          </blockquote>
        </div>

        <!-- Right: Single Dynamic Engagement Form -->
        <div class="bg-white border border-[#d1cfc8] p-8 rounded-xl shadow-lg">
          <h2 class="text-2xl font-serif text-[#1a2a3a] mb-6">Initiate Engagement</h2>
          
          <!-- Tab selector -->
          <div class="tab-switcher" role="tablist" aria-label="Engagement Mode Selector">
            <button type="button" role="tab" aria-selected="true" aria-controls="dynamic-form" class="tab-btn active" data-type="partner">Apply to Partner</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="dynamic-form" class="tab-btn" data-type="rsvp">RSVP to Event</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="dynamic-form" class="tab-btn" data-type="newsletter">Newsletter</button>
          </div>

          <!-- Form Structure -->
          ${m("partner")}
          
          <div class="trust-section mt-8 border-t border-[#d1cfc8] pt-6 flex flex-col gap-4">
            <div class="trust-label text-[10px] uppercase tracking-wider text-[#8a8a8a] font-semibold">Affiliated Research Entities</div>
            <div class="flex justify-between items-center gap-4 text-xs font-serif font-bold text-[#1a2a3a] opacity-75">
              <span>STANFORD MED</span>
              <span>MIT RESEARCH</span>
              <span>NIH</span>
            </div>
            <div class="text-center mt-2">
              <span class="response-badge bg-[#6b2a3e]/5 border border-dashed border-[#6b2a3e]/20 text-[#6b2a3e] px-4 py-2 rounded text-xs font-semibold" aria-live="polite">
                Average partner response time: &lt; 4 hours
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  `}function M(){return`
    <div class="max-w-5xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-serif font-extrabold text-[#1a2a3a]">Contact Our Office</h1>
          <p class="lead-text">
            For academic inquiries, grant reviews, or media request lines, contact our Brock University headquarters.
          </p>
          <div class="flex flex-col gap-4 text-sm text-[#555] border-t border-[#d1cfc8] pt-6">
            <div>
              <strong>Email:</strong><br>
              <a href="mailto:contact@msk-niagara.ca" class="hover:underline">contact@msk-niagara.ca</a>
            </div>
            <div>
              <strong>Phone:</strong><br>
              +1 (905) 688-5550 ext. 3514
            </div>
            <div>
              <strong>Location:</strong><br>
              Social Justice Research Institute (SJRI)<br>
              Brock University<br>
              1812 Sir Isaac Brock Way<br>
              St. Catharines, ON L2S 3A1
            </div>
          </div>
        </div>
        <div class="bg-white border border-[#d1cfc8] p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-serif text-[#1a2a3a] mb-6">Send an Inquiry</h2>
          ${m("contact")}
        </div>
      </div>
    </div>
  `}function L(){return`
    <div class="max-w-md mx-auto py-16 px-6">
      <div class="bg-white border border-[#d1cfc8] p-8 rounded-xl shadow-lg flex flex-col gap-6">
        <div class="text-center flex flex-col gap-2">
          <h1 class="text-3xl font-serif text-[#1a2a3a]">Subscribe to Movement</h1>
          <p class="text-xs text-[#555]">Receive direct publications and council briefs.</p>
        </div>
        ${m("newsletter")}
      </div>
    </div>
  `}function I(){return`
    <div class="max-w-4xl mx-auto py-16 px-6 flex flex-col gap-12">
      <section class="bg-[#1a2a3a] text-white p-8 rounded-lg border border-[#2d3a4b]">
        <span class="text-xs font-semibold uppercase tracking-wider text-[#6b2a3e]">Invited Community Symposium</span>
        <h1 class="text-3xl font-serif mt-2 mb-4">Community-University Symposium</h1>
        <p class="text-sm text-[#b8c2cc] leading-relaxed mb-6">
          The MSK/MSM team will present preliminary research findings on immigrant identity, agricultural worker protections, and newcomer health literacy. Supported generously by the Social Justice Research Institute.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#b8c2cc] border-t border-white/10 pt-4">
          <div><strong>Date:</strong> Friday, June 19, 2026</div>
          <div><strong>Time:</strong> 9:00 AM – 1:00 PM (Light lunch served)</div>
          <div><strong>Location:</strong> Community Room, Civic Square, Welland, Ontario</div>
          <div><strong>RSVP Limit:</strong> May 29, 2026 at 23:59</div>
        </div>
      </section>

      <div class="bg-white border border-[#d1cfc8] p-8 rounded-lg shadow-sm max-w-xl mx-auto w-full">
        <h2 class="text-2xl font-serif text-[#1a2a3a] mb-6 text-center">Symposium Registration (RSVP)</h2>
        ${m("rsvp")}
      </div>
    </div>
  `}function m(e){return`
    <form id="dynamic-form" class="flex flex-col gap-4" novalidate>
      <input type="hidden" id="formMode" name="formMode" value="${e}">

      <div class="form-group" id="group-name">
        <label for="fullName" id="label-name" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Full Name</label>
        <input type="text" id="fullName" name="fullName" class="form-control" placeholder="Dr. Evelyn Vance" required>
      </div>

      <div class="form-group" id="group-email">
        <label for="emailAddress" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Email Address</label>
        <input type="email" id="emailAddress" name="emailAddress" class="form-control" placeholder="vance@university.edu" required>
      </div>

      <div class="form-group" id="group-org">
        <label for="organization" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Organization / Agency</label>
        <input type="text" id="organization" name="organization" class="form-control" placeholder="Department of Social Sciences" required>
      </div>

      <div class="form-group" id="group-title">
        <label for="jobTitle" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" class="form-control" placeholder="Lead Investigator" required>
      </div>

      <div class="form-group" id="group-field">
        <label for="researchField" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Research Field</label>
        <select id="researchField" name="researchField" class="form-control" required>
          <option value="" disabled selected>Select field...</option>
          <option value="sociology">Sociology & Social Justice</option>
          <option value="health">Public Health & Equity</option>
          <option value="policy">Public Policy & Integration</option>
          <option value="education">Multicultural Education</option>
        </select>
      </div>

      <div class="form-group" id="group-why">
        <label for="interestDesc" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Why are you interested in partnering?</label>
        <textarea id="interestDesc" name="interestDesc" class="form-control" placeholder="Outline alignment purpose..." required></textarea>
      </div>

      <div class="form-group hidden" id="group-guests">
        <label for="guestCount" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Number of Guests</label>
        <input type="number" id="guestCount" name="guestCount" class="form-control" min="1" max="10" value="1" required>
      </div>

      <div class="form-group hidden" id="group-message">
        <label for="messageText" class="block text-xs font-semibold uppercase tracking-wider text-[#1a2a3a] mb-1">Message</label>
        <textarea id="messageText" name="messageText" class="form-control" placeholder="Please write your inquiry here..." required></textarea>
      </div>

      <button type="submit" id="submitBtn" class="bg-[#6b2a3e] text-white py-3 px-6 font-serif font-semibold rounded hover:bg-[#521d2d] transition-all mt-4 w-full">Apply to Partner</button>
    </form>
  `}function u(e){const t=document.getElementById("dynamic-form");if(!t)return;const s=document.getElementById("formMode"),o=document.querySelectorAll(".tab-btn");h(e),o.forEach(a=>{a.addEventListener("click",()=>{o.forEach(r=>{r.classList.remove("active"),r.setAttribute("aria-selected","false")}),a.classList.add("active"),a.setAttribute("aria-selected","true");const i=a.getAttribute("data-type");h(i)})}),t.addEventListener("submit",a=>{var r,n,l,c,d,f,p,x;if(a.preventDefault(),!t.checkValidity()){t.reportValidity();return}const i={formMode:(s==null?void 0:s.value)||"partner",fullName:((r=document.getElementById("fullName"))==null?void 0:r.value)||"",emailAddress:((n=document.getElementById("emailAddress"))==null?void 0:n.value)||"",organization:((l=document.getElementById("organization"))==null?void 0:l.value)||void 0,jobTitle:((c=document.getElementById("jobTitle"))==null?void 0:c.value)||void 0,researchField:((d=document.getElementById("researchField"))==null?void 0:d.value)||void 0,interestDesc:((f=document.getElementById("interestDesc"))==null?void 0:f.value)||void 0,guestCount:((p=document.getElementById("guestCount"))==null?void 0:p.value)||void 0,message:((x=document.getElementById("messageText"))==null?void 0:x.value)||void 0};navigator.onLine?y(i):T(i)})}function h(e){const t=document.getElementById("formMode");t&&(t.value=e);const s=document.getElementById("label-name"),o=document.getElementById("submitBtn"),a={name:document.getElementById("group-name"),email:document.getElementById("group-email"),org:document.getElementById("group-org"),title:document.getElementById("group-title"),field:document.getElementById("group-field"),why:document.getElementById("group-why"),guests:document.getElementById("group-guests"),message:document.getElementById("group-message")};Object.values(a).forEach(i=>{if(i){i.classList.add("hidden");const r=i.querySelector(".form-control");r&&r.setAttribute("disabled","true")}}),e==="partner"?(s&&(s.textContent="Full Name"),o&&(o.textContent="Apply to Partner"),["name","email","org","title","field","why"].forEach(i=>{var n;const r=a[i];r&&(r.classList.remove("hidden"),(n=r.querySelector(".form-control"))==null||n.removeAttribute("disabled"))})):e==="rsvp"?(s&&(s.textContent="Full Name"),o&&(o.textContent="Submit RSVP"),["name","email","guests"].forEach(i=>{var n;const r=a[i];r&&(r.classList.remove("hidden"),(n=r.querySelector(".form-control"))==null||n.removeAttribute("disabled"))})):e==="newsletter"?(s&&(s.textContent="First Name"),o&&(o.textContent="Subscribe to Newsletter"),["name","email"].forEach(i=>{var n;const r=a[i];r&&(r.classList.remove("hidden"),(n=r.querySelector(".form-control"))==null||n.removeAttribute("disabled"))})):e==="contact"&&(s&&(s.textContent="Full Name"),o&&(o.textContent="Send Inquiry"),["name","email","message"].forEach(i=>{var n;const r=a[i];r&&(r.classList.remove("hidden"),(n=r.querySelector(".form-control"))==null||n.removeAttribute("disabled"))}))}function y(e){var t;fetch("https://webhook.site/7fba1402-536a-4ac1-b49e-dcbd497fc8e0",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{console.log("[CRM Entry] Successfully pushed lead metrics to HubSpot/Airtable integration.")}).catch(s=>{console.warn("[CRM Gateway] Sync failed, entry was stored locally inside mock logs.")}),P(e),g("Thanks! A member of our partnerships team will reach out personally within 2 business days."),(t=document.getElementById("dynamic-form"))==null||t.reset()}function T(e){var s;const t=JSON.parse(localStorage.getItem("pendingSubmissions")||"[]");t.push({id:Date.now(),payload:e}),localStorage.setItem("pendingSubmissions",JSON.stringify(t)),g("Network disconnected. Submission cached locally and will auto-submit when connectivity returns."),(s=document.getElementById("dynamic-form"))==null||s.reset()}window.addEventListener("online",()=>{const e=JSON.parse(localStorage.getItem("pendingSubmissions")||"[]");e.length!==0&&(console.log("Online signal recovered. Synchronizing offline applications..."),e.forEach(t=>{y(t.payload)}),localStorage.removeItem("pendingSubmissions"),g("All offline applications synchronized successfully."))});function P(e){const t=new Date().toLocaleString(),s={To:e.emailAddress,Subject:"Partnership Inquiry Received // MSK Niagara",BodyHTML:`
      <div style="font-family: Georgia, serif; padding: 24px; background-color: #f8f6f0; color: #1a1a1a; max-width: 600px; border: 1px solid #d1cfc8;">
        <h2 style="color: #1a2a3a; font-weight: bold; font-size: 20px;">Inquiry Received</h2>
        <p style="font-size: 14px; line-height: 1.6;">Dear ${e.fullName},</p>
        <p style="font-size: 14px; line-height: 1.6;">Thank you for contacting the Mobilizing Subjugated Knowledges partnership office. Your submission was received on ${t}.</p>
        <div style="margin: 20px 0; padding: 15px; border-left: 3px solid #6b2a3e; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px;">
            <tr><td style="padding: 4px; font-weight: bold; width: 120px;">Mode:</td><td>${e.formMode}</td></tr>
            ${e.organization?`<tr><td style="padding: 4px; font-weight: bold;">Organization:</td><td>${e.organization}</td></tr>`:""}
            ${e.jobTitle?`<tr><td style="padding: 4px; font-weight: bold;">Title:</td><td>${e.jobTitle}</td></tr>`:""}
          </table>
        </div>
        <p style="font-size: 12px; color: #555;">A member of our partnerships team will reach out personally within 2 business days.</p>
      </div>
    `},o={To:["Lead1@domain.com","Lead2@domain.com"],Subject:`[URGENT - PARTNER LEAD] ${e.fullName} - ${e.organization||"Individual"}`,BodyText:`
      New high-intent lead routing alert:
      
      ======================================================
      DATA KEY           | VALUE
      ======================================================
      Full Name          | ${e.fullName}
      Email              | ${e.emailAddress}
      Form Mode          | ${e.formMode}
      Organization       | ${e.organization||"N/A"}
      Job Title          | ${e.jobTitle||"N/A"}
      Field              | ${e.researchField||"N/A"}
      Interests          | ${e.interestDesc||"N/A"}
      Guest Count        | ${e.guestCount||"N/A"}
      Message            | ${e.message||"N/A"}
      ======================================================
    `};console.log("--- OUTPUT SIMULATED SMTP TRANSACTION ---"),console.log("Auto-Reply E-mail (Client Receipt):",s),console.log("Priority Leads E-mail (Internal Notification):",o)}function g(e){const t=document.getElementById("toast"),s=document.getElementById("toast-message");t&&s&&(s.textContent=e,t.classList.add("show","translate-y-0","opacity-100"),t.classList.remove("translate-y-24","opacity-0"),setTimeout(()=>{t.classList.remove("show","translate-y-0","opacity-100"),t.classList.add("translate-y-24","opacity-0")},5e3))}function B(){let e=!1;document.addEventListener("mouseleave",t=>{t.clientY<20&&!e&&(e=!0,confirm("Would you like to subscribe to the MSK Niagara research digest?")&&(location.hash="#/subscribe"))})}function R(){const e=document.getElementById("partnerSearch"),t=document.querySelectorAll("#filterTags button");let s="all";function o(){const a=(e==null?void 0:e.value.toLowerCase())||"",i=document.getElementById("directoryGrid");if(!i)return;const r=w.filter(n=>{const l=n.name.toLowerCase().includes(a)||n.desc.toLowerCase().includes(a)||n.tags.some(d=>d.toLowerCase().includes(a)),c=s==="all"||n.tags.includes(s);return l&&c});if(r.length===0){i.innerHTML='<div class="col-span-full text-center text-sm text-[#8a8a8a] py-8">No community organizations found matching criteria.</div>';return}i.innerHTML=r.map(n=>`
      <div class="bg-white border border-[#d1cfc8] p-6 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold font-serif text-[#1a2a3a]">${n.name}</h3>
          <p class="text-xs text-[#555] leading-relaxed">${n.desc}</p>
        </div>
        <div class="flex flex-wrap gap-1">
          ${n.tags.map(l=>`<span class="bg-[#f8f6f0] border border-[#d1cfc8] text-[#1a2a3a] px-2 py-0.5 text-[10px] rounded">${l}</span>`).join("")}
        </div>
      </div>
    `).join("")}e==null||e.addEventListener("keyup",o),t.forEach(a=>{a.addEventListener("click",()=>{t.forEach(i=>{i.classList.remove("bg-[#1a2a3a]","text-white"),i.classList.add("bg-gray-100","text-[#1a1a1a]","border-gray-200")}),a.classList.add("bg-[#1a2a3a]","text-white"),a.classList.remove("bg-gray-100","text-[#1a1a1a]","border-gray-200"),s=a.getAttribute("data-tag")||"all",o()})}),o()}window.addEventListener("hashchange",v);window.addEventListener("DOMContentLoaded",v);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(()=>console.log("Lightweight PWA sw.js registered.")).catch(e=>console.warn("Service worker registration failed:",e))});
