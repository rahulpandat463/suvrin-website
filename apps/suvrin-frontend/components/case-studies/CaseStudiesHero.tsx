import Link from "next/link";

export default function CaseStudiesHero({
  title = "Case Studies",
  description = "We support you through your entire AI innovation lifecycle, from strategy to launch."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 px-6 lg:px-10 pb-16">
      <section className="mx-auto max-w-[1240px] w-full" id="case-studies-hero">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Left Card */}
          <div className="bg-white rounded-[24px] p-6 sm:p-10 md:p-14 lg:p-[4.5rem] flex flex-col justify-end min-h-[440px] sm:min-h-[500px] lg:min-h-[550px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.03]">
            <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight text-[#111] leading-[1.1] mb-8 font-serif">
              {title}
            </h1>
            <p className="text-[1.1rem] md:text-[1.15rem] text-[#444] leading-relaxed mb-12 max-w-full sm:max-w-[500px]">
              {description}
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 text-[0.95rem] md:text-[1rem] font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(239,101,42,0.35)]"
              >
                Speak with Our AI Innovation Team
              </Link>
            </div>
          </div>

          {/* Right Card (Abstract Wave Graphics) */}
          <div className="bg-white rounded-[24px] overflow-hidden relative min-h-[400px] lg:min-h-[550px] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.03]">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.4]">
              <svg
                viewBox="0 0 800 1200"
                className="w-full h-full object-contain stroke-black/20 fill-none"
                strokeWidth="0.5"
              >
                <g className="origin-center scale-[1.2] translate-y-[-50px]">
                  {[...Array(30)].map((_, i) => (
                    <path
                      key={`wave-${i}`}
                      d={`M 100 ${200 + i * 8} C 300 ${100 + i * 10}, 500 ${1100 - i * 10}, 700 ${800 - i * 8}`}
                      className="transition-all duration-500"
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
