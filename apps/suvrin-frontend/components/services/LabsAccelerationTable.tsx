/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function AccelerationSection() {
  return (
    <section
      className="bg-[#fafafa] py-12 border-t border-[#e5e5e5] border-dashed relative z-10"
      id="acceleration"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-16">
          Suvrin acceleration
        </h2>

        <div className="w-full bg-white rounded-[32px] border border-[#eee] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[440px]">
          {/* Desktop Categories Sidebar (Hidden on Mobile) */}
          <div className="hidden md:flex md:w-[280px] bg-[#fafafa] md:border-r border-[#eee] flex-col pt-[100px]">
            <div className="flex-1 flex items-center justify-center text-[1rem] font-medium text-[#666]">
              AI Expertise
            </div>
            <div className="flex-1 flex items-center justify-center text-[1rem] font-medium text-[#666]">
              Execution Speed
            </div>
            <div className="flex-1 flex items-center justify-center text-[1rem] font-medium text-[#666]">
              Value Driven
            </div>
          </div>

          {/* Table Data / Mobile Cards */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Desktop Table Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center border-b border-[#eee] py-6 px-10 min-h-[100px]">
              <div className="font-serif text-[1.2rem] text-[#111]">Key Outcomes</div>
              <div className="text-center font-medium text-[0.9rem] text-[#888] uppercase tracking-wider">In-House</div>
              <div className="text-center font-medium text-[0.9rem] text-[#888] uppercase tracking-wider">Consultants</div>
              <div className="text-center font-serif font-black text-[1.5rem] tracking-[0.2em] text-[#0546e0] leading-tight">
                SU<br />VR
              </div>
            </div>

            {/* Content List */}
            <div className="flex flex-col md:divide-y md:divide-[#f5f5f5] flex-1">
              
              {/* Outcome 1 */}
              <div className="p-6 md:p-0 md:px-10 flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center flex-1 border-b md:border-b-0 border-[#f5f5f5] last:border-b-0">
                <div className="mb-6 md:mb-0 w-full">
                  <span className="md:hidden inline-block px-3 py-1 bg-[#0546e0]/5 text-[#0546e0] text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-3">
                    AI Expertise
                  </span>
                  <h4 className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-1">
                    AI Intellectual Property
                  </h4>
                  <p className="text-[#888] text-[0.9rem] md:text-[0.85rem]">
                    Develop a competitive advantage
                  </p>
                </div>

                <div className="grid grid-cols-3 md:contents w-full gap-2">
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#eee] md:border-0 md:bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#0546e0] flex items-center justify-center text-white shadow-lg shadow-[#0546e0]/20">
                      <CheckIcon />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#0546e0] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-white/60 font-bold uppercase mb-2">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-white md:bg-[#0546e0] flex items-center justify-center text-[#0546e0] md:text-white shadow-lg md:shadow-none">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 2 */}
              <div className="p-6 md:p-0 md:px-10 flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center flex-1 border-b md:border-b-0 border-[#f5f5f5] last:border-b-0">
                <div className="mb-6 md:mb-0 w-full">
                  <span className="md:hidden inline-block px-3 py-1 bg-[#0546e0]/5 text-[#0546e0] text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-3">
                    Execution Speed
                  </span>
                  <h4 className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-1">
                    Labs Acceleration
                  </h4>
                  <p className="text-[#888] text-[0.9rem] md:text-[0.85rem]">
                    Reduce time-to-market for builds
                  </p>
                </div>

                <div className="grid grid-cols-3 md:contents w-full gap-2">
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#eee] md:border-0 md:bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#fff0f0] flex items-center justify-center text-[#ff4d4f]">
                      <XIcon />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#0546e0] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-white/60 font-bold uppercase mb-2">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-white md:bg-[#0546e0] flex items-center justify-center text-[#0546e0] md:text-white shadow-lg md:shadow-none">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 3 */}
              <div className="p-6 md:p-0 md:px-10 flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center flex-1 border-b md:border-b-0 border-[#f5f5f5] last:border-b-0">
                <div className="mb-6 md:mb-0 w-full">
                  <span className="md:hidden inline-block px-3 py-1 bg-[#0546e0]/5 text-[#0546e0] text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-3">
                    Value Driven
                  </span>
                  <h4 className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-1">
                    Business Growth
                  </h4>
                  <p className="text-[#888] text-[0.9rem] md:text-[0.85rem]">
                    Capitalize on high-value AI projects
                  </p>
                </div>

                <div className="grid grid-cols-3 md:contents w-full gap-2">
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#eee] md:border-0 md:bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#fafafa] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-[#aaa] font-bold uppercase mb-2">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#fff0f0] flex items-center justify-center text-[#ff4d4f]">
                      <XIcon />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 bg-[#0546e0] md:bg-transparent rounded-2xl md:rounded-none">
                    <span className="md:hidden text-[0.6rem] text-white/60 font-bold uppercase mb-2">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-white md:bg-[#0546e0] flex items-center justify-center text-[#0546e0] md:text-white shadow-lg md:shadow-none">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}