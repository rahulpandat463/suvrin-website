/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function FinalCTA() {
  return (
    <section className="bg-white pb-8" id="cta">
      <div className="max-w-[1340px] mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <div className="relative w-full rounded-[30px] overflow-hidden bg-gradient-to-br from-[#2f71f4] to-[#1c55d4] py-28 md:py-36 px-6 flex flex-col items-center justify-center text-center mt-8 shadow-inner shadow-blue-900/50">
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "16.66% 33.33%",
            }}
          ></div>

          {/* Soft Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-10">
            <h2 className="text-[clamp(3.5rem,5vw,4.8rem)] font-serif tracking-tight leading-[1.05] text-white">
              Let's shape your <br className="hidden md:block" /> AI strategy
              together
            </h2>

            <button className="bg-[#0334a1] hover:bg-[#022880] transition-colors text-white px-9 py-4 rounded-full font-medium text-[1.1rem] shadow-lg border border-blue-400/20">
              Connect with Our Team
            </button>

            <div className="flex items-center justify-center mt-2">
              {/* Avatar 1 */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[4px] border-[#0a48e3] overflow-hidden shadow-sm z-10 translate-x-5 relative bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Avatar 2 (Center) */}
              <div className="w-[6.5rem] h-[6.5rem] rounded-full bg-white/20 p-[6px] overflow-hidden shadow-xl z-20 relative backdrop-blur-sm">
                <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
                    alt="Team lead"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
              </div>
              {/* Avatar 3 */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[4px] border-[#0a48e3] overflow-hidden shadow-sm z-10 -translate-x-5 relative bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
