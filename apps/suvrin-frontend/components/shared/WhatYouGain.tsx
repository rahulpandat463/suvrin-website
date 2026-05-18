/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function WhatYouGain() {
  return (
    <section
      className="bg-white py-12 border-t border-[#e5e5e5] border-dashed"
      id="what-you-gain"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-16">
          Everything You Need to Win with AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Strategy */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div className="flex bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-xl gap-2.5 items-end h-[100px] z-10">
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[40%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[65%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[35%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[85%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[50%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[100%]"></div>
                <div className="w-[14px] bg-[#0546e0] rounded-sm h-[75%]"></div>
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                AI Strategy & Alignment
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Define your AI vision, align your leadership team, and structure your first AI project with confidence. Our 1-on-1 AI consulting sessions cut through the noise and give you a clear, actionable direction.
              </p>
            </div>
          </div>

          {/* Card 2: Roadmap */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div className="bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-xl w-[220px] flex flex-col gap-4 z-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0546e0]"></div>
                    <div className="h-1.5 bg-gray-100 rounded-full w-full"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                Roadmap & Costing
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Get a comprehensive AI project roadmap with defined scope, realistic cost estimates, projected ROI, and delivery timelines — so you can present a business case that gets approved.
              </p>
            </div>
          </div>

          {/* Card 3: Development */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div className="flex items-center gap-1.5 z-10">
                <div className="w-[3.25rem] h-[3.25rem] bg-white rounded-full shadow-sm flex items-center justify-center font-mono text-gray-500 font-bold">
                  &lt;/&gt;
                </div>
                <div className="h-px w-6 bg-blue-200"></div>
                <div className="w-[4rem] h-[4rem] bg-[#0546e0] rounded-full shadow-[0_4px_15px_rgba(5,70,224,0.3)] flex flex-col items-center justify-center text-white font-bold leading-[1.1] text-sm tracking-widest">
                  <span>SU</span>
                  <span>VR</span>
                </div>
                <div className="h-px w-6 bg-blue-200"></div>
                <div className="w-[3.25rem] h-[3.25rem] bg-white rounded-full shadow-sm flex items-center justify-center text-xl">
                  🚀
                </div>
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                AI Development & Deployment
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Build AI with best-in-class engineering practices, enterprise-grade UX, and deployments that scale. From MVPs to full enterprise systems, we build for long-term reliability and performance.
              </p>
            </div>
          </div>

          {/* Card 4: Testing */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div className="relative w-full flex justify-center items-center z-10">
                <div className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#0546e0] to-transparent opacity-40 shadow-[0_0_15px_rgba(5,70,224,0.8)]"></div>
                <div className="w-[4.5rem] h-[4.5rem] bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-10 text-[#0546e0]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                Testing, Validation & Launch
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Commercialise your AI with confidence. We validate performance metrics, run quality assurance, and ensure your AI delivers measurable value from day one of launch.
              </p>
            </div>
          </div>

          {/* Card 5: Advisory */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div className="w-[12rem] h-[12rem] rounded-full border border-gray-200 absolute top-[20%]"></div>
              <div className="w-[18rem] h-[18rem] rounded-full border border-gray-100 absolute top-[10%]"></div>

              <div className="relative flex flex-col items-center mt-12 z-10">
                <div className="w-[14rem] h-10 bg-gray-200 rounded-xl absolute -top-3 shadow-inner"></div>
                <div className="w-[15rem] h-14 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] rounded-xl relative z-10 flex items-center px-3.5 gap-3 text-[0.92rem] font-medium text-[#222]">
                  <div className="w-8 h-8 bg-[#0546e0] rounded-[6px] text-white flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6z" />
                    </svg>
                  </div>
                  New AI Optimization Guide
                </div>
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                Continuous Advisory & Support
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Receive executive-level AI guidance as your business evolves. We stay with you after launch — helping you adapt to new market conditions, regulatory changes, and emerging AI capabilities.
              </p>
            </div>
          </div>

          {/* Card 6: Network */}
          <div className="bg-[#fafafc] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="h-[220px] w-full flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px]">
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #333 1.5px, transparent 1px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "radial-gradient(ellipse at center, black, transparent 70%)",
                }}
              ></div>
              <div className="absolute bg-white text-[0.75rem] px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 font-medium text-[#111] border border-gray-100 z-10">
                <span className="text-[#e23f33]">📍</span> India • Dubai • USA
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
              <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                Expert Network
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                Access our global ecosystem of AI specialists, technology partners, investors, and industry leaders across India, Dubai, and the USA — giving you connections that accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
