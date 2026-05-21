/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function MidCTA() {
  return (
    <section className="bg-white" id="final-cta">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="relative w-full rounded-[30px] overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f9fbff] to-[#f0f5fa] py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center border border-[#f0f3f8] mt-8">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-[10%] w-[50%] h-[140%] bg-gradient-to-br from-[#e1ecfc] to-transparent opacity-60 transform -skew-x-[35deg]"></div>
            <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[140%] rounded-full bg-gradient-to-tl from-[#e1ecfc] to-transparent opacity-60"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-serif tracking-tight leading-[1.05] text-[#111]">
              Grow your business <br className="hidden md:block" /> with AI
              innovation
            </h2>

            <Link 
              href="/contact"
              className="bg-[#0546e0] hover:bg-[#0437b0] transition-colors text-white px-6 py-2.5 rounded-full font-medium text-[0.95rem] inline-block"
            >
              Connect with Our Team
            </Link>

            <div className="flex items-center justify-center mt-1">
              {/* Avatar 1 */}
              <div className="w-[3rem] h-[3rem] rounded-full border-[3px] border-white overflow-hidden shadow-sm z-10 translate-x-3 relative bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Avatar 2 (Center) */}
              <div className="w-[4rem] h-[4rem] rounded-full bg-[#f4f7fb] p-[4px] overflow-hidden shadow-sm z-20 relative">
                <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
                    alt="Team lead"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
              </div>
              {/* Avatar 3 */}
              <div className="w-[3rem] h-[3rem] rounded-full border-[3px] border-white overflow-hidden shadow-sm z-10 -translate-x-3 relative bg-white">
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
