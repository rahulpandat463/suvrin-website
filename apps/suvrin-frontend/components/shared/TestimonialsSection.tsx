"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Caroline Harrington",
      role: "Director of Product @Aperian",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      initial: "A",
      company: "aperian",
      text: `"Working with Suvrin Technologies was an eye-opening experience. In a matter of weeks, we were able to fully spec out two AI-powered products that furthered our organisation's mission and goals, with a clear vision for how those products could scale in the future. Their expertise and guidance helped us transform rough ideas into reality."`,
      metrics: [
        { value: "2x", label: "AI Products delivered" },
        { value: "+40%", label: "Improved in team efficiency" },
      ],
    },
    {
      name: "Stephen Smeke",
      role: "CEO @Datapoint",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      initial: "D",
      company: "datapoint",
      text: `"Suvrin demonstrated world class domain expertise in planning and executing digital transformation, advising on cutting edge AI best practices. They completely overhauled our internal data pipelines in record time."`,
      metrics: [
        { value: "10x", label: "Processing Speed" },
        { value: "30%", label: "Cost Reduction" },
      ],
    },
    {
      name: "Victoria Hendrickson",
      role: "VP @GlobalScale",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      initial: "G",
      company: "globalscale",
      text: `"They took the time to understand what we do in great depth and turned around a product that is ready within weeks. They have been fantastic to work with and we continue to see incredible ROI from our partnership."`,
      metrics: [
        { value: "5 Wks", label: "Time to Market" },
        { value: "$1M+", label: "Generated Revenue" },
      ],
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const currentT = testimonials[activeTestimonial];

  return (
    <section
      className="bg-white py-12 border-t border-[#e5e5e5] border-dashed"
      id="testimonials"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <h2 className="text-[clamp(2rem,6vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-16">
          What Our Clients Say 
        </h2>

        <div className="w-full bg-white border border-[#eaeaea] shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-[24px] p-6 sm:p-10 md:p-14 relative transition-all duration-300">
          {/* Header: User Info & Logo */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 w-full gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                <img
                  src={currentT?.image}
                  alt={currentT?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[1.1rem] md:text-[1.15rem] font-serif text-text-primary tracking-tight">
                  {currentT?.name}
                </h4>
                <p className="text-[0.85rem] md:text-[0.9rem] text-[#666] mt-0.5">
                  {currentT?.role}
                </p>
              </div>
            </div>
            <div className="shrink-0 grayscale opacity-90 static md:static lg:absolute lg:top-10 lg:right-14">
              {/* Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="text-[2.2rem] font-serif font-black text-[#111] leading-none mb-1">
                  {currentT?.initial}
                </div>
                <div className="text-[0.65rem] tracking-widest uppercase font-semibold text-[#111] leading-none">
                  {currentT?.company}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Text & Arrow */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <p className="text-[1.3rem] md:text-[1.55rem] font-serif leading-[1.6] text-[#222] flex-1 text-left min-h-[140px]">
              {currentT?.text}
            </p>

            <button
              onClick={handleNext}
              className="w-[3.25rem] h-[3.25rem] rounded-full border border-[#0546e0] flex items-center justify-center text-[#0546e0] hover:bg-[#f0f4ff] transition-colors shrink-0 hidden md:flex cursor-pointer shadow-sm hover:shadow active:scale-95"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Metrics Footer */}
          <div className="border-t border-[#f0f0f0] pt-8 flex flex-wrap gap-8 sm:gap-16 md:gap-28">
            {currentT?.metrics?.map((metric, i) => (
              <div key={i}>
                <div className="text-2xl font-serif text-[#111] mb-1">
                  {metric.value}
                </div>
                <div className="text-[0.9rem] font-medium text-[#888]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrow */}
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#0546e0] flex items-center justify-center text-[#0546e0] hover:bg-[#f0f4ff] transition-colors shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
