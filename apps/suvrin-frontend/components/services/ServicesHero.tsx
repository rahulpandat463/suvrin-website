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
    <div className="bg-bg-secondary pt-40 px-6 lg:px-10 pb-32 min-h-[90vh]">
      <section className="mx-auto max-w-[1240px] w-full" id={id}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Left Card */}
          <div className="bg-bg-card rounded-[32px] p-10 md:p-14 lg:p-[4.5rem] flex flex-col justify-end min-h-[500px] lg:min-h-[580px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/[0.04]">
            <h2 className="text-[clamp(3.2rem,4.5vw,4.6rem)] tracking-[0.01em] text-[#111] leading-[1.05] mb-6 font-serif">
              {title}
            </h2>
            <p className="text-[1.12rem] text-[#555] leading-relaxed mb-10 max-w-[500px]">
              {description}
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-white bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(232,134,58,0.3)]"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Card (Abstract Wave Graphics) */}
          <div className="bg-bg-card rounded-[32px] overflow-hidden relative min-h-[400px] lg:min-h-[580px] flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/[0.04]">
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
