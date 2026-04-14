import Link from "next/link";

export default function WhitepaperCTA() {
  const benefits = [
    "Learn how to identify AI opportunities that create measurable business value.",
    "Explore the full lifecycle — from AI concept to launch — used by leading innovators.",
    "Get practical insights from 50+ AI case studies delivered by SFAI Labs worldwide.",
  ];

  return (
    <section
      className="bg-white py-16 mb-10 border-t border-[#e5e5e5] border-dashed"
      id="whitepaper-cta"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif tracking-tight text-[#111] leading-[1.1] mb-12 max-w-[480px]">
              See how we grow businesses with AI
            </h2>

            <div className="flex flex-col gap-8 mb-12">
              {benefits.map((text, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#eaeaea] shadow-sm flex items-center justify-center shrink-0 bg-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0546e0"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-[1.1rem] text-[#333] leading-relaxed pt-2">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="#download"
                className="inline-flex items-center justify-center px-9 py-4 text-[1rem] font-semibold text-white bg-[#0546e0] rounded-full transition-all duration-300 hover:bg-[#0437b0] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(5,70,224,0.25)]"
              >
                Download Our Whitepaper
              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] relative bg-[#222]">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80"
              alt="AI Whitepaper"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
