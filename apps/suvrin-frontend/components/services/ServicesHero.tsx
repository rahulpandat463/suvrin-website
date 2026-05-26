/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ReactNode } from "react";

interface ServicesHeroProps {
  id: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
}

export default function ServicesHero({
  id,
  title,
  description,
  ctaText = "Speak with Our AI Innovation Team",
}: ServicesHeroProps) {
  return (
    <div className="bg-bg-secondary pt-28 sm:pt-32 md:pt-36 px-6 lg:px-10 pb-16 md:pb-20 min-h-[50vh] md:min-h-[60vh]">
      <section className="mx-auto max-w-[1240px] w-full" id={id}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Left Card */}
          <div className="bg-bg-card rounded-[32px] p-8 sm:p-10 md:p-14 lg:p-[4.5rem] flex flex-col justify-end min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/[0.04]">
            <h6 className="text-[clamp(1.5rem,2.75vw,2.75rem)] tracking-[0.01em] text-[#111] leading-[1.1] mb-4 font-serif">
              {title}
            </h6>
            <p className="text-[1.05rem] md:text-[1.12rem] text-[#555] leading-relaxed mb-10 max-w-full sm:max-w-[500px]">
              {description}
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-[0.95rem] md:text-[1rem] font-medium text-white bg-blue-600 rounded-full transition-all duration-250 hover:bg-blue-600 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(232,134,58,0.3)]"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Card (Abstract Wave Graphics) */}
          <div className="bg-bg-card rounded-[32px] overflow-hidden relative min-h-[340px] lg:min-h-[480px] flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/[0.04]">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.35]">
              <svg
                viewBox="0 0 800 1200"
                className="w-full h-[120%] object-cover stroke-black fill-none"
                strokeWidth="0.4"
              >
                <g className="origin-center scale-[1.1]">
                  {[...Array(40)].map((_, i) => (
                    <path
                      key={`wave-1-${i}`}
                      d={`M -200 ${200 + i * 14} C 200 ${100 - i * 15}, 650 ${700 + i * 22}, 1000 ${500 + i * 12}`}
                      style={{ opacity: 1 - i * 0.02 }}
                    />
                  ))}
                  {[...Array(40)].map((_, i) => (
                    <path
                      key={`wave-2-${i}`}
                      d={`M -200 ${600 - i * 15} C 300 ${300 + i * 25}, 500 ${1000 - i * 15}, 1000 ${700 - i * 12}`}
                      style={{ opacity: 1 - i * 0.02 }}
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
