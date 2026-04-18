/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function AccelerationSection() {
  return (
    <section
      className="bg-[#fafafa] py-12 border-t border-[#e5e5e5] border-dashed relative z-10"
      id="acceleration"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-10 md:mb-16">
          Suvrin acceleration
        </h2>

        <div className="w-full bg-white rounded-[24px] border border-[#e5e5e5] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[440px]">
          {/* Desktop Categories Sidebar (Hidden on Mobile) */}
          <div className="hidden md:flex md:w-[280px] bg-[#f9f9f9] md:border-r border-[#e5e5e5] flex-col pt-[100px]">
            <div className="flex-1 flex items-center justify-center text-[1.05rem] font-serif text-[#444]">
              AI Expertise
            </div>
            <div className="flex-1 flex items-center justify-center text-[1.05rem] font-serif text-[#444]">
              Execution Speed
            </div>
            <div className="flex-1 flex items-center justify-center py-4 md:py-0 text-[1.05rem] font-serif text-[#444]">
              Value Driven
            </div>
          </div>

          {/* Table Data / Mobile Cards */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Desktop Table Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center border-b border-[#e5e5e5] py-6 px-8 min-h-[100px]">
              <div className="font-serif text-[1.1rem] text-[#111]">
                Key Outcomes
              </div>
              <div className="text-center font-serif text-[1.05rem] text-[#444]">
                In-House
              </div>
              <div className="text-center font-serif text-[1.05rem] text-[#444] leading-tight">
                AI Consultants
                <br />
                <span className="text-[0.85rem] text-[#888] font-sans">
                  (McKinsey, IBM, ...)
                </span>
              </div>
              <div className="text-center font-serif font-black text-[1.4rem] tracking-[0.2em] text-[#0546e0] leading-[1.1]">
                SU
                <br />
                VR
              </div>
            </div>

            {/* Content Rows */}
            <div className="flex flex-col md:divide-y md:divide-gray-100 flex-1">
              
              {/* Row 1 / Card 1 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center p-8 md:px-8 md:py-0 flex-1 border-b md:border-b-0 border-[#e5e5e5] last:border-b-0 text-center md:text-left">
                {/* Mobile Category Label */}
                <span className="md:hidden block text-[0.7rem] font-bold text-[#0546e0] uppercase tracking-[0.2em] mb-4">
                  AI Expertise
                </span>
                
                <div className="mb-8 md:mb-0">
                  <div className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-2 md:mb-1.5 leading-snug">
                    AI Intellectual Property
                  </div>
                  <div className="text-[#888] text-[0.95rem] md:text-[0.85rem]">
                    Develop a competitive advantage
                  </div>
                </div>

                {/* Statuses Grid (Mobile-First) */}
                <div className="grid grid-cols-3 md:contents w-full gap-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-[#0546e0]/5 md:bg-transparent rounded-xl py-4 md:py-0">
                    <span className="md:hidden text-[0.65rem] text-[#0546e0] uppercase font-bold tracking-wider">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 / Card 2 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center p-8 md:px-8 md:py-0 flex-1 border-b md:border-b-0 border-[#e5e5e5] last:border-b-0 text-center md:text-left">
                <span className="md:hidden block text-[0.7rem] font-bold text-[#0546e0] uppercase tracking-[0.2em] mb-4">
                  Execution Speed
                </span>
                
                <div className="mb-8 md:mb-0">
                  <div className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-2 md:mb-1.5 leading-snug">
                    Labs Acceleration
                  </div>
                  <div className="text-[#888] text-[0.95rem] md:text-[0.85rem]">
                    Reduce time-to-market for builds
                  </div>
                </div>

                <div className="grid grid-cols-3 md:contents w-full gap-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#fff0f0] text-[#ff4d4f] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-[#0546e0]/5 md:bg-transparent rounded-xl py-4 md:py-0">
                    <span className="md:hidden text-[0.65rem] text-[#0546e0] uppercase font-bold tracking-wider">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 / Card 3 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center p-8 md:px-8 md:py-0 flex-1 border-b md:border-b-0 border-[#e5e5e5] last:border-b-0 text-center md:text-left">
                <span className="md:hidden block text-[0.7rem] font-bold text-[#0546e0] uppercase tracking-[0.2em] mb-4">
                  Value Driven
                </span>
                
                <div className="mb-8 md:mb-0">
                  <div className="text-[#111] font-medium text-[1.1rem] md:text-[0.95rem] mb-2 md:mb-1.5 leading-snug">
                    Business Growth
                  </div>
                  <div className="text-[#888] text-[0.95rem] md:text-[0.85rem]">
                    Capitalize on high-value AI projects
                  </div>
                </div>

                <div className="grid grid-cols-3 md:contents w-full gap-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">In-House</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="md:hidden text-[0.65rem] text-[#888] uppercase font-bold tracking-wider">Consultants</span>
                    <div className="w-8 h-8 rounded-full bg-[#fff0f0] text-[#ff4d4f] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-[#0546e0]/5 md:bg-transparent rounded-xl py-4 md:py-0">
                    <span className="md:hidden text-[0.65rem] text-[#0546e0] uppercase font-bold tracking-wider">SUVRIN</span>
                    <div className="w-8 h-8 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
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
