"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function HeroSection() {
  return (
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
          className="inline-flex items-center justify-center px-9 py-4 text-[1rem] font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 shadow-0 8px 32px rgba(0, 123, 255, 0.35)"
          id="hero-cta"
        >
          Speak with Our AI Innovation Team
        </Link>
      </div>
    </section>
  );
}
