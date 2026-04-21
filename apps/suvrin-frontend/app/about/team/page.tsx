import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Suvrin Technologies",
  description: "Meet the expert team of AI engineers, designers, and strategists.",
};

export default function TeamPage() {
  return (
    <>
      <div className="pt-32 pb-16 px-6 md:px-10 bg-[#eef0f2]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6 min-h-[500px]">
            {/* Left Card */}
            <div className="bg-[#fbfcff] rounded-[24px] p-10 md:p-14 lg:p-16 flex flex-col justify-between shadow-[0_2px_24px_rgba(0,0,0,0.02)] border border-[#ffffff]">
              {/* Avatars */}
              <div className="flex -space-x-5 mb-20">
                <div className="w-[84px] h-[84px] rounded-full border-[6px] border-[#fbfcff] bg-white overflow-hidden z-30 shadow-[0_0_0_1.5px_#e8eaeb,0_8px_16px_rgba(0,0,0,0.06)]">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-[84px] h-[84px] rounded-full border-[6px] border-[#fbfcff] bg-white overflow-hidden z-20 shadow-[0_0_0_1.5px_#e8eaeb,0_8px_16px_rgba(0,0,0,0.06)]">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-[84px] h-[84px] rounded-full border-[6px] border-[#fbfcff] bg-white overflow-hidden z-10 shadow-[0_0_0_1.5px_#e8eaeb,0_8px_16px_rgba(0,0,0,0.06)]">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Text */}
              <div className="mt-auto">
                <h1 className="text-[clamp(3.5rem,5.5vw,4.5rem)] font-serif tracking-tight text-[#111] mb-6 leading-[1.1]">
                  Team
                </h1>
                <p className="text-[1.1rem] text-[#333] leading-[1.6] max-w-[540px]">
                  Suvrin Labs is built by an expert team of AI engineers, designers, and strategists who have turned generative AI into real, working products — not experiments.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#fbfcff] rounded-[24px] p-10 relative overflow-hidden shadow-[0_2px_24px_rgba(0,0,0,0.02)] border border-[#ffffff] hidden lg:block">
              {/* Decorative SVG Lines */}
              <div className="absolute -bottom-[20%] -right-[15%] w-[100%] h-[100%] opacity-40">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M400 250 C 350 250, 300 350, 200 350 C 100 350, 50 200, -50 200" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 230 C 340 230, 290 330, 190 330 C 90 330, 40 180, -60 180" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 210 C 330 210, 280 310, 180 310 C 80 310, 30 160, -70 160" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 190 C 320 190, 270 290, 170 290 C 70 290, 20 140, -80 140" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 170 C 310 170, 260 270, 160 270 C 60 270, 10 120, -90 120" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 150 C 300 150, 250 250, 150 250 C 50 250, 0 100, -100 100" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 130 C 290 130, 240 230, 140 230 C 40 230, -10 80, -110 80" stroke="#111" strokeWidth="0.8" />
                  <path d="M400 110 C 280 110, 230 210, 130 210 C 30 210, -20 60, -120 60" stroke="#111" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Framework Section */}
      <section className="bg-white" id="framework">
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
          {/* Logos and Title */}
          <div className="pt-12 px-6">
            <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
              Worked with:
            </p>

            <div className="w-full overflow-hidden mb-24 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-12 md:gap-x-16">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
                  >
                    <div className="flex items-center gap-2 text-[#d11141] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                      </div>
                      UOB
                    </div>
                    <div className="flex items-center gap-2 text-[#00a859] font-medium text-lg leading-tight text-left shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6 rounded-tl-lg rounded-br-lg bg-[#00a859] rotate-45" />
                      standard
                      <br />
                      chartered
                    </div>
                    <div className="bg-[#244b8a] text-white px-4 py-1.5 font-serif text-lg tracking-widest shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      BROWN
                    </div>
                    <div className="text-[#e2231a] font-black italic text-3xl tracking-tighter lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      ntuc
                    </div>
                    <div className="text-[#00a3e0] font-sans font-bold text-2xl tracking-wider lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      eNGie
                    </div>
                    <div className="text-[#e3000f] font-black text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      TDOT
                    </div>
                    <div className="text-black font-black text-2xl tracking-wide shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      SAMSUNG
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Grid */}
      <section className="pt-16 pb-12 bg-white" id="culture">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-serif tracking-tight text-[#111] leading-[1.1] max-w-[800px]">
              A culture built for
              <br />
              acceleration and value creation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Autonomy & trust",
                desc: "Freedom to build, responsibility to deliver.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                )
              },
              {
                title: "Continuous learning",
                desc: "Every project is an opportunity to evolve.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                )
              },
              {
                title: "Cross-functional collaboration",
                desc: "Design, data, and code in one flow.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Impact-first mindset",
                desc: "We measure success by what changes.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                )
              },
              {
                title: "Clarity over complexity",
                desc: "We design systems that simplify, not obscure.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="14" y2="16" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                  </svg>
                )
              },
              {
                title: "Experimentation as a habit",
                desc: "We move fast, test constantly.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.31" />
                    <path d="M14 9.3V1.99" />
                    <path d="M8.5 2h7" />
                    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                    <path d="M5.52 16h12.96" />
                  </svg>
                )
              }
            ].map(item => (
              <div key={item.title}>
                <div className="flex items-center gap-4">
                  <div className="w-[42px] h-[42px] rounded-xl border border-[#ebebeb] bg-[#fcfcfc] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center text-[#555] shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-[1.12rem] font-serif tracking-tight text-[#111]">
                    {item.title}
                  </h3>
                </div>
                
                <div className="h-[1px] w-full bg-[#f0f0f0] my-5"></div>
                
                <p className="text-[0.95rem] text-[#666] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Slider Gallery */}
      <section className="pt-4 pb-16 bg-white overflow-hidden w-full relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="w-full relative overflow-hidden flex pb-8 pt-4">
          <div className="animate-marquee gap-4 md:gap-6 px-3">
            {[
              "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
            ].map((src, i) => (
              <div 
                key={i} 
                className="shrink-0 w-[280px] sm:w-[340px] md:w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <img 
                  src={src} 
                  alt="Team working" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Executive Team */}
      <section className="pt-12 pb-4 bg-white" id="executive-team">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-12">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-serif tracking-tight text-[#111]">
            Executive team
          </h2>
        </div>

        <div className="bg-[#f8f9fb] py-20 w-full">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Arthur Wandzel",
                  role: "Co-founder & CEO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                  bio: "Arthur is a visionary entrepreneur dedicated to pushing the boundaries of generative AI to solve complex enterprise challenges at scale. He brings a strong track record of building and scaling technology startups from ground zero."
                },
                {
                  name: "Dr. Dirk Jan Van Veen",
                  role: "Co-Founder & CTO",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
                  bio: "Dirk leads the engineering and AI research division, bringing decades of deep tech experience in machine learning, neural networks, and creating massively scalable autonomous architectures."
                },
                {
                  name: "Reza Ladchartabi",
                  role: "Advisor",
                  image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
                  bio: "Reza Ladchartabi is a product and AI leader with extensive experience building and scaling conversational AI and LLM operations across healthcare, logistics, and mobility. He has led high-impact products from early concept to large-scale deployment, combining strong execution with deep expertise in regulated, data-intensive environments."
                },
                {
                  name: "Adam Bo",
                  role: "Advisor",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
                  bio: "Adam brings strategic insight and commercial expertise to guide the company's product-market fit and global expansion. His background in venture capital helps navigate complex high-growth ecosystems."
                }
              ].map((member) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#eee] relative group cursor-pointer overflow-hidden min-h-[420px]"
                >
                  {/* Default State (Image + Info) */}
                  <div className="flex flex-col h-full transition-opacity duration-300 group-hover:opacity-0 relative z-10">
                    <div className="w-full aspect-square mb-6 overflow-hidden rounded-[16px]">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale" 
                      />
                    </div>
                    <div>
                      <h3 className="text-[1.3rem] font-serif tracking-tight text-[#111] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[0.95rem] text-[#666]">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover State (Bio Text) */}
                  <div className="absolute inset-0 p-8 flex items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:duration-500 z-20">
                    <p className="text-[0.95rem] text-[#444] leading-[1.65]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Core Members */}
      <section className="pt-4 pb-4 bg-white" id="core-members">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-12">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-serif tracking-tight text-[#111]">
            Core members
          </h2>
        </div>

        <div className="bg-[#f8f9fb] py-20 w-full">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Nenad Radovanovic", role: "Senior AI Product Engineer", image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?auto=format&fit=crop&w=600&q=80" },
                { name: "Jonathan Elliott", role: "AI Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
                { name: "Chiayi Seow", role: "AI Developer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
                { name: "Ravinder Rai", role: "AI Developer", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=600&q=80" },
                { name: "Anastasiia Yakubovska", role: "Lead AI Product Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
                { name: "Alex Borodach", role: "Senior AI Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
                { name: "Ali Aljoubory", role: "Senior Mobile Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
                { name: "Jessica Morgan", role: "Go-to-Market Specialist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" }
              ].map((member) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-[20px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#eee] relative group cursor-pointer overflow-hidden min-h-[380px]"
                >
                  {/* Default State - Fades to nothing on hover */}
                  <div className="flex flex-col h-full transition-opacity duration-300 md:duration-500 group-hover:opacity-0 relative z-10">
                    <div className="w-full aspect-square mb-5 overflow-hidden rounded-[14px]">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-[1.15rem] font-serif tracking-tight text-[#111] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[0.9rem] text-[#666]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Intentionally left blank behind to create the empty white box effect */}
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <button className="px-9 py-3.5 bg-[#0546e0] text-white text-[1.05rem] font-medium rounded-full hover:bg-[#0437b0] transition-colors shadow-[0_4px_16px_rgba(5,70,224,0.25)]">
                Connect with Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* From Research to Reality */}
      <section className="pt-8 pb-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-serif tracking-tight text-[#111] mb-8 leading-[1.1]">
                From research to reality
              </h2>
              <div className="flex flex-col gap-6 text-[1.1rem] text-[#555] leading-[1.65]">
                <p>
                  Suvrin Technologies was founded by a collective of Ex-AI Researchers and Ex-VC-backed Founders who saw a gap between AI research and business reality.
                </p>
                <p>
                  What started as a small innovation unit is evolving into a global network — delivering AI products that learn, adapt, and transform industries.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern corporate architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
