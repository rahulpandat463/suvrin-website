"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Caroline Harrington",
      role: "Director of Product @Aperian",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      initial: "A",
      company: "aperian",
      text: `"Working with Suvrin Technologies was an eye-opening experience. In a matter of weeks, we were able to fully spec out two AI-powered products that furthered our organization's mission and goals, with a vision for how those products could scale in the future. Their expertise and guidance helped us transform rough ideas into reality!"`,
      metrics: [
        { value: "2x", label: "AI Products" },
        { value: "+40%", label: "Improved Efficiency" },
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
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-black"
        id="hero"
      >
        {/* Optional: show video if file exists, fallback to black */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2 w-full h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
            src="/Home-banner.webm"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 md:px-16 pt-32 pb-24 text-left">
          <h1 className="text-[clamp(3rem,6vw,5rem)] leading-[0.92] mb-10 text-white tracking-tight font-heading">
            AI
            <br />
            <em className="not-italic font-serif">for Modern Companies</em>
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-white/75 max-w-[460px] leading-relaxed mb-12">
            We support your business through the entire lifecycle of AI
            projects, from strategy to launch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-4 text-[1rem] font-semibold text-white bg-[#ef652a] rounded-full transition-all duration-300 hover:bg-[#d4561a] hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(239,101,42,0.35)]"
            id="hero-cta"
          >
            Speak with Our AI Innovation Team
          </Link>
        </div>
      </section>

      {/* Framework Section */}
      <section className="bg-white" id="framework">
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
          {/* Logos and Title */}
          <div className="pt-12 px-6">
            <p className="text-[#888] text-[0.95rem] font-sans mb-8">
              Worked with:
            </p>

            <div className="w-full overflow-hidden mb-24 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-12 md:gap-x-16">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
                  >
                    <div className="flex items-center gap-2 text-[#d11141] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                        <div className="w-1 h-5 bg-[#d11141]" />
                      </div>
                      UOB
                    </div>
                    <div className="flex items-center gap-2 text-[#00a859] font-medium text-lg leading-tight text-left shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6 rounded-tl-lg rounded-br-lg bg-[#00a859] rotate-45" />
                      standard
                      <br />
                      chartered
                    </div>
                    <div className="bg-[#244b8a] text-white px-4 py-1.5 font-serif text-lg tracking-widest shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      BROWN
                    </div>
                    <div className="text-[#e2231a] font-black italic text-3xl tracking-tighter lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      ntuc
                    </div>
                    <div className="text-[#00a3e0] font-sans font-bold text-2xl tracking-wider lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      eNGie
                    </div>
                    <div className="text-[#e3000f] font-black text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      TDOT
                    </div>
                    <div className="text-black font-black text-2xl tracking-wide shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      SAMSUNG
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] text-text-primary tracking-tight font-serif whitespace-nowrap mb-2">
              Our proven AI delivery framework
            </h2>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full border-t border-[#e5e5e5] border-dashed"></div>

          {/* Framework Cards */}
          <div className="bg-[#fafafa] py-16 px-6 w-full overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full text-left">
              {/* Strategy */}
              <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
                <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                  <img
                    src="https://framerusercontent.com/images/oXDuZAUX9L5DJtCxlTAoJYaee4.svg?width=338&height=264"
                    alt="Strategy Visual"
                    className="w-[85%] h-full object-contain"
                  />
                </div>
                <div className="p-8 pt-0 flex flex-col flex-1">
                  <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                    Strategy
                  </h3>
                  <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                    Clarify your high-value AI opportunities and set an AI
                    roadmap to accelerate your business' growth. We help you
                    minimize technical risk and maximize value return through
                    professional AI strategy, starting with first-principles.
                  </p>
                </div>
              </div>

              {/* Development */}
              <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
                <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                  <img
                    src="https://framerusercontent.com/images/pWnkjFiOVw83aOdWsi4YpJcyV4.png?scale-down-to=512&width=760&height=456"
                    alt="Development Visual"
                    className="w-[95%] h-full object-contain"
                  />
                </div>
                <div className="p-8 pt-0 flex flex-col flex-1">
                  <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                    Development
                  </h3>
                  <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                    Our team of AI engineers and designers build scalable AI
                    custom to your business. From prototypes to enterprise-grade
                    systems, we ensure all projects — from Agents to Platforms —
                    create long-term impact.
                  </p>
                </div>
              </div>

              {/* Commercial */}
              <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
                <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                  <img
                    src="https://framerusercontent.com/images/FTYr7yDYpTGrjLecLA7dZOE1dU.png?scale-down-to=512&width=750&height=450"
                    alt="Commercial Visual"
                    className="w-[95%] h-full object-contain"
                  />
                </div>
                <div className="p-8 pt-0 flex flex-col flex-1">
                  <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                    Commercial
                  </h3>
                  <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                    Turn your AI into a market-winning product. From launch to
                    scaled adoption to continuous optimization, we help you
                    create real-world value and turn your AI innovation into a
                    lasting competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-white pt-16 pb-20" id="impact">
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed px-6">
          <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] text-text-primary tracking-tight font-serif mb-16">
            Our impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 w-full">
            {/* ROW 1 */}
            <div className="col-span-2 bg-[#f8f8f8] rounded-[24px] p-8 md:p-10 flex flex-col justify-between aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-[3rem] lg:text-[4.5rem] font-serif tracking-tight leading-none text-black">
                $10M
              </h3>
              <p className="text-[#444] font-medium text-[0.95rem]">
                Business Value Created
              </p>
            </div>
            <div className="col-span-2 bg-[#f8f8f8] rounded-[24px] p-8 md:p-10 flex flex-col justify-between aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-[3rem] lg:text-[4.5rem] font-serif tracking-tight leading-none text-black">
                3x
              </h3>
              <p className="text-[#444] font-medium text-[0.95rem]">
                Faster Time-to-Market
              </p>
            </div>
            <div className="hidden md:block col-span-2"></div> {/* Blank */}
            {/* ROW 2 */}
            <div className="col-span-2 bg-[#f8f8f8] rounded-[24px] p-8 md:p-10 flex flex-col justify-between aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-[3rem] lg:text-[4.5rem] font-serif tracking-tight leading-none text-black">
                50+
              </h3>
              <p className="text-[#444] font-medium text-[0.95rem]">
                Companies Supported
              </p>
            </div>
            <div className="col-span-2 bg-[#f8f8f8] rounded-[24px] p-8 md:p-10 flex flex-col justify-between aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-[3rem] lg:text-[4.5rem] font-serif tracking-tight leading-none text-black">
                30+
              </h3>
              <p className="text-[#444] font-medium text-[0.95rem]">
                Years of Collective AI Expertise
              </p>
            </div>
            <div className="hidden md:block col-span-1"></div> {/* Blank */}
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt="Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* ROW 3 */}
            <div className="hidden md:block col-span-3"></div> {/* Blank */}
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Tech Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                alt="Cyber"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                alt="Blueprint"
                className="w-full h-full object-cover"
              />
            </div>
            {/* ROW 4 */}
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="Abstract"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
                alt="Screens"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1531366936337-7785443115cf?auto=format&fit=crop&w=600&q=80"
                alt="Aurora Tech"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=600&q=80"
                alt="Gradient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80"
                alt="Industrial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"
                alt="Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white " id="final-cta">
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

              <button className="bg-[#0546e0] hover:bg-[#0437b0] transition-colors text-white px-6 py-2.5 rounded-full font-medium text-[0.95rem]">
                Connect with Our Team
              </button>

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

      {/* Testimonial Section */}
      <section
        className="bg-white py-12 border-t border-[#e5e5e5] border-dashed"
        id="testimonials"
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-16">
            What our customers say
          </h2>

          <div className="w-full bg-white border border-[#eaeaea] shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-[24px] p-10 md:p-14 relative transition-all duration-300">
            {/* Header: User Info & Logo */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 w-full gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    src={currentT?.image}
                    alt={currentT?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[1.15rem] font-serif text-text-primary tracking-tight">
                    {currentT?.name}
                  </h4>
                  <p className="text-[0.9rem] text-[#666] mt-0.5">
                    {currentT?.role}
                  </p>
                </div>
              </div>
              <div className="shrink-0 grayscale opacity-90 absolute top-10 right-10 md:static">
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
            <div className="border-t border-[#f0f0f0] pt-8 flex gap-16 md:gap-28">
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

      {/* What You Gain Section */}
      <section
        className="bg-white py-12 border-t border-[#e5e5e5] border-dashed"
        id="what-you-gain"
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif text-center mb-16">
            What you gain with Suvrin Technologies
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
                  Define your AI vision, structure a project, and align
                  stakeholders with 1-on-1 AI consulting sessions.
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
                  Create a comprehensive AI roadmap covering your project's
                  scope, costing, ROI and timelines.
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
                  Build AI with best-in-class development techniques,
                  enterprise-grade UX, and scalable deployments.
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
                  Commercialize your AI with validation and performance metrics
                  to ensure launch value.
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
                  Receive executive-level AI advising to adapt to evolving
                  markets.
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
                  <span className="text-[#e23f33]">📍</span> San Francisco
                </div>
              </div>
              <div className="p-8 pt-6 flex-1 bg-[#fafafc]">
                <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] mb-2">
                  Expert Network
                </h3>
                <p className="text-[0.95rem] text-[#666] leading-relaxed">
                  Access a San Francisco-based ecosystem of AI experts,
                  investors, and industry leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceleration Section */}
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

      {/* Tools & Technologies */}
      <section
        className="bg-white py-12 border-t border-[#e5e5e5] border-dashed overflow-hidden"
        id="tools"
      >
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed relative z-10">
          <p className="text-center text-[#888] text-[0.95rem] font-medium mb-10">
            Tools & Technologies
          </p>
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-20">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-20 shrink-0 text-[1.4rem] font-bold font-sans text-gray-800 pb-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-[#61DAFB]">
                      <svg
                        width="28"
                        height="28"
                        viewBox="-11.5 -10.23174 23 20.46348"
                      >
                        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                        <g stroke="#61dafb" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                      </svg>
                    </div>
                    React
                  </div>
                  <div className="font-black tracking-tighter text-3xl">
                    NEXT<span className="font-light text-xl">.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3776AB]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 118 118"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.3093 3.63004C43.515 3.63004 39.5413 10.3121 39.5413 10.3121L39.4678 25.1385H77.6749V28.1887H33.2764C18.6657 28.1887 13.5645 36.6346 13.5645 52.8875C13.5645 69.1404 17.5 76.5447 28.98 77.2847H38.257V66.2411C38.257 56.548 46.223 48.582 55.9161 48.582H78.9327C88.6258 48.582 96.5918 40.616 96.5918 30.9229V15.2533C96.5918 15.2533 91.5471 3.63004 58.3093 3.63004ZM44.2057 11.2335C46.8523 11.2335 48.997 13.3782 48.997 16.0248C48.997 18.6714 46.8523 20.816 44.2057 20.816C41.5591 20.816 39.4144 18.6714 39.4144 16.0248C39.4144 13.3782 41.5591 11.2335 44.2057 11.2335Z"
                        fill="#387EB8"
                      />
                      <path
                        d="M59.6274 114.37C74.4218 114.37 78.3955 107.688 78.3955 107.688L78.4689 92.8615H40.2619V89.8113H84.6603C99.2711 89.8113 104.372 81.3654 104.372 65.1125C104.372 48.8596 100.437 41.4553 88.9568 40.7153H79.6797V51.7589C79.6797 61.452 71.7138 69.418 62.0207 69.418H39.0041C29.311 69.418 21.3449 77.384 21.3449 87.0771V102.747C21.3449 102.747 26.3897 114.37 59.6274 114.37ZM73.7311 106.767C71.0845 106.767 68.9398 104.622 68.9398 101.975C68.9398 99.3286 71.0845 97.184 73.7311 97.184C76.3777 97.184 78.5224 99.3286 78.5224 101.975C78.5224 104.622 76.3777 106.767 73.7311 106.767Z"
                        fill="#FFE052"
                      />
                    </svg>{" "}
                    Python
                  </div>
                  <div className="flex flex-col items-start leading-[0.8]">
                    <span className="font-bold text-xl">LLaMA</span>
                    <span className="text-[0.6rem] text-gray-500 font-semibold tracking-wider uppercase">
                      by Meta
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-gradient-to-tr from-purple-600 to-blue-500 rounded flex items-center justify-center text-white text-[10px]">
                      🦙
                    </div>
                    LlamaIndex
                  </div>
                  <div className="font-medium flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.28 11.5c.06-.52.09-1.04.1-1.57-.26-3.8-3.03-6.9-6.79-7.58-.2-.04-.42-.06-.63-.07-1.12-.08-2.26.11-3.3.56-1 .44-1.92 1.05-2.68 1.83C7.26 3.1 5.07 2.44 2.8 3.2 0 4.29-1 7.15-.35 9.87c.2.86.58 1.66 1.12 2.37-1.07 1.55-1.56 3.42-1.38 5.3.36 3.73 3.23 6.72 6.94 7.24 1.15.16 2.31 0 3.38-.45 1.05-.44 2-.1 2.8-1.85 1.67 1.62 3.96 2.37 6.27 1.67 2.82-1.13 3.8-4.04 3.08-6.79-.19-.77-.52-1.5-1-2.14 1.25-.97 2-2.3 2.14-3.72zm-12.75-8.4c1.86.13 3.53 1.25 4.3 2.92L8.2 8.52c-.6-1.18-.8-2.5-.58-3.8l.64.08c.6-.9 1.4-1.63 2.3-2.12.57-.3 1.22-.44 1.86-.48h.01zm-5.18 2.6c1.17 0 2.3.43 3.2 1.2-.5 1.4-1.25 2.7-2.17 3.8-1.44-.06-2.82.35-3.95 1.16v-.66c-.03-2.3 1.42-4.32 3.6-5.02.43-.13.88-.22 1.34-.23zm-.67 16l4.63-2.53-2.65-4.52C4.54 15.65 3.32 16.5 2 17.1c-.04-.37-.06-.75-.06-1.13 0-1.87.97-3.5 2.5-4.47 1.2-.75 2.6-1.05 3.9-1v.7c0 1.25.32 2.45.9 3.53l.3.62L5 19.86l-1.3-.15zm10.74 1.15c-1.86-.12-3.53-1.24-4.3-2.92l5.64-2.5c.6 1.18.8 2.5.58 3.8-.2-.02-.4-.05-.58-.08-.63.9-1.44 1.62-2.36 2.1-.56.3-1.2.45-1.84.5h-.02v-.02zm3.36-4.9c-.8.56-1.74.88-2.73.9V14.6c1.44.02 2.8-.4 3.94-1.2v.63c.02 2.3-1.44 4.32-3.6 5.04-.43.15-.9.23-1.36.24l.5-.5-1.2-1.95zm2.74-5.32c-.1.35-.15.72-.2 1.07 0 1.87-1 3.53-2.5 4.5h-1c-1.05.65-2.28.94-3.5 1h-.6l2.12-3.52c.98-.32 1.83-.94 2.45-1.78l1.32-.4" />
                    </svg>
                    OpenAI
                  </div>
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    <span className="text-[1.5rem]">🤗</span> HuggingFace
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Experts Section */}
      <section
        className="bg-white py-12 pb-6 border-t border-[#e5e5e5] border-dashed"
        id="blog"
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif">
              From our experts
            </h2>
            <Link
              href="/blog"
              className="bg-[#0546e0] hover:bg-[#0437b0] transition-colors text-white px-8 py-3.5 rounded-full font-medium text-[1.05rem]"
            >
              Read our blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The journey from idea to AI product",
                image:
                  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Data strategies for AI applications",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "How to build an AI chatbot for clinics",
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-[#fbfcfc] rounded-2xl p-4 border border-[#f0f0f0] group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-[220px] rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <h3 className="text-[1.3rem] font-serif leading-[1.3] text-[#111] mb-8 px-2 tracking-tight group-hover:text-[#0546e0] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-[0.75rem] text-[#888] uppercase tracking-[0.1em] font-semibold px-2 mt-auto pb-3 group-hover:text-[#0546e0] transition-colors">
                  Read More{" "}
                  <svg
                    className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Final CTA Section */}
    </>
  );
}
