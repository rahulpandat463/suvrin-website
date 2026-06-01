"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroData {
  heading1: string;
  heading2: string | null;
  subheading: string | null;
  button1: string | null;
  button2: string | null;
}

export default function HeroSection() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch("/api/heros");
        if (res.ok) {
          const data = await res.json();
          if (data.heros && data.heros.length > 0) {
            setHeroData(data.heros[0]); // Using the most recent hero
          }
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchHero();
  }, []);

  // Fallback default values
  const heading1 = heroData?.heading1 || "AI Solutions";
  const heading2 = heroData?.heading2 || "That Drive Real Business Growth";
  const subheading = heroData?.subheading || "We support your business through the entire lifecycle of AI projects — from strategy and development to commercial launch. Trusted by enterprises across India, Dubai, and the USA.";
  const button1 = heroData?.button1 || "Speak with Our AI Innovation Team →";
  const button2 = heroData?.button2 || "Explore Our Services";

  // Check if heading has multiple lines or em tags if needed, but since it's dynamic text, we'll just render it
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
        <h1 className="text-[clamp(2rem,5vw,4rem)] leading-[0.92] mb-10 text-white tracking-tight font-heading whitespace-pre-wrap">
          {heading1}
          {heading2 && (
            <>
              <br />
              {heading2}
            </>
          )}
        </h1>
        <p className="text-[1.1rem] md:text-[1.2rem] text-white/75 max-w-[460px] leading-relaxed mb-12 whitespace-pre-wrap">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {button1 && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 text-[1rem] font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,123,255,0.35)]"
              id="hero-cta"
            >
              {button1}
            </Link>
          )}
          {button2 && (
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-9 py-4 text-[1rem] font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,123,255,0.35)]"
              id="hero-secondary-cta"
            >
              {button2}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
