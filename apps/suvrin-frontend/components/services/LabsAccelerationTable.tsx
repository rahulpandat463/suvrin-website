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

        <div className="w-full bg-white rounded-[24px] border border-[#e5e5e5] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[440px]">
          {/* Left Sidebar (Categories) */}
          <div className="md:w-[280px] bg-[#f9f9f9] border-b md:border-b-0 md:border-r border-[#e5e5e5] flex flex-col pt-6 md:pt-[100px]">
            <div className="flex-1 flex items-center justify-center border-b border-transparent py-4 md:py-0 text-[1.05rem] font-serif text-[#444]">
              AI Expertise
            </div>
            <div className="flex-1 flex items-center justify-center border-b border-transparent py-4 md:py-0 text-[1.05rem] font-serif text-[#444]">
              Execution Speed
            </div>
            <div className="flex-1 flex items-center justify-center py-4 md:py-0 text-[1.05rem] font-serif text-[#444]">
              Value Driven
            </div>
          </div>

          {/* Right Side (Table Data) */}
          <div className="flex-1 flex flex-col overflow-x-auto">
            <div className="min-w-[700px] flex flex-col h-full">
              {/* Header Row */}
              <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center border-b border-[#e5e5e5] py-6 px-8 min-h-[100px]">
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
                <div className="text-center font-serif font-black text-[1.4rem] tracking-[0.2em] text-[#111] leading-[1.1]">
                  SU
                  <br />
                  VR
                </div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center border-b border-gray-100 py-6 md:py-0 px-8 flex-1">
                <div>
                  <div className="text-[#111] font-medium text-[0.95rem] mb-1.5">
                    AI Intellectual Property
                  </div>
                  <div className="text-[#888] text-[0.85rem]">
                    Develop a competitive advantage
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-gray-100"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center border-b border-gray-100 py-6 md:py-0 px-8 flex-1">
                <div>
                  <div className="text-[#111] font-medium text-[0.95rem] mb-1.5">
                    Labs Acceleration
                  </div>
                  <div className="text-[#888] text-[0.85rem]">
                    Reduce time-to-market for builds
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-gray-100"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#fff0f0] text-[#ff4d4f] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr] items-center py-6 md:py-0 px-8 flex-1">
                <div>
                  <div className="text-[#111] font-medium text-[0.95rem] mb-1.5">
                    Business Growth
                  </div>
                  <div className="text-[#888] text-[0.85rem]">
                    Capitalize on high-value AI projects
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-gray-100"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#fff0f0] text-[#ff4d4f] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#0546e0] flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
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