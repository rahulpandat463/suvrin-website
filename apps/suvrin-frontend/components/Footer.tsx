"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    about: false,
    services: false,
    caseStudies: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const offices = [
    {
      city: "Dubai (UAE)",
      name: "MAXCODE SOLUTIONS LLC",
      address: "Living, Marina Gate, D94 M Floor, Jumeirah, Dubai Marina",
      phone: "+971 551120975",
    },
    {
      city: "INDIA",
      name: "Gurgaon",
      address: "P1/55, DLF Phase 2, Cyber City, Gurgaon",
      phone: "+91 9811021616",
    },
    {
      city: "USA",
      name: "Hoboken, NJ",
      address: "Riverfront Center, 221 River St 9th Floor, Hoboken, NJ 07030",
      phone: "+1 917 689 3693",
    },
  ];

  const news = [
    {
      title: "Choosing the Right ERP Solution for Businesses in India and the Middle East",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
      link: "#",
    },
    {
      title: "Odoo's Meteoric Rise in India: From Open-Source Roots to Enterprise Dominance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
      link: "#",
    },
  ];

  return (
    <footer className="bg-[#053aa3] text-white pt-20 pb-10 font-sans relative" id="site-footer">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Column 1: Brandt & Partners */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Suvrin Technologies Logo"
                width={150}
                height={50}
                className="h-14 w-auto object-contain"
                style={{ height: 'auto' }}
                priority
              />
            </Link>

            <div className="flex flex-col gap-6 pt-4">
              <div className="relative w-full max-w-[200px]">
                <Image 
                  src="/clutch.svg" 
                  alt="Partner Logos" 
                  width={200} 
                  height={300} 
                  className="w-full h-auto object-contain"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Column 2: Addresses */}
          <div className="flex flex-col gap-10">
            {offices.map((office, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h4 className="text-[0.85rem] font-bold text-white/50 uppercase tracking-widest">{office.city}</h4>
                <p className="text-[1rem] font-bold">{office.name}</p>
                <p className="text-[0.9rem] text-white/70 leading-relaxed max-w-[240px]">
                  {office.address}
                </p>
                <p className="text-[0.9rem] font-bold text-white mt-1">{office.phone}</p>
              </div>
            ))}
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.2rem] font-bold border-b border-white/10 pb-2">Navigation</h3>
              <ul className="flex flex-col gap-6">
                {/* Home */}
                <li><Link href="/" className="text-[1.05rem] font-bold hover:text-white/70 transition-colors">Home</Link></li>

                {/* About Section */}
                <li className="flex flex-col gap-2.5">
                  <button
                    onClick={() => toggleSection("about")}
                    className="flex items-center justify-between w-full text-[1.05rem] font-bold hover:text-white/70 transition-colors"
                  >
                    <span>About</span>
                    <span className={`text-[0.7rem] transition-transform duration-300 ${openSections.about ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections.about ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-1.5 pl-3 border-l border-white/10">
                      <li><Link href="/about" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Who We Are</Link></li>
                      <li><Link href="/about/team" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Team</Link></li>
                      <li><Link href="/about/careers" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Careers</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Services Section */}
                <li className="flex flex-col gap-2.5">
                  <button
                    onClick={() => toggleSection("services")}
                    className="flex items-center justify-between w-full text-[1.05rem] font-bold hover:text-white/70 transition-colors"
                  >
                    <span>Services</span>
                    <span className={`text-[0.7rem] transition-transform duration-300 ${openSections.services ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections.services ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-1.5 pl-3 border-l border-white/10">
                      <li><Link href="/services/startup" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Startup</Link></li>
                      <li><Link href="/services/business" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Business</Link></li>
                      <li><Link href="/services/enterprise" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Enterprise</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Case Studies Section */}
                <li className="flex flex-col gap-2.5">
                  <button
                    onClick={() => toggleSection("caseStudies")}
                    className="flex items-center justify-between w-full text-[1.05rem] font-bold hover:text-white/70 transition-colors"
                  >
                    <span>Case Studies</span>
                    <span className={`text-[0.7rem] transition-transform duration-300 ${openSections.caseStudies ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections.caseStudies ? "max-h-[350px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-1.5 pl-3 border-l border-white/10 overflow-y-auto scrollbar-thin pr-2">
                      <li><Link href="/service-scope/strategy-advisory" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Strategy & Advisory</Link></li>
                      <li><Link href="/service-scope/ai-products-platforms" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">AI Products & Platforms</Link></li>
                      <li><Link href="/service-scope/commercialization-growth" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Growth</Link></li>
                      <li><Link href="/service-scope/agents" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Agents</Link></li>
                      <li><Link href="/service-scope/knowledge-systems" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Knowledge Systems</Link></li>
                      <li><Link href="/service-scope/automation-integration" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Automation</Link></li>
                      <li><Link href="/service-scope/ai-infrastructure" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Infrastructure</Link></li>
                      <li><Link href="/service-scope/governance-risk" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Governance</Link></li>
                      <li><Link href="/service-scope/llm-fine-tuning" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Fine-Tuning</Link></li>
                      <li><Link href="/service-scope/web-scraping" className="text-[0.9rem] text-white/60 hover:text-white transition-colors">Web-Scraping</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Blog & Contact */}
                <li><Link href="/blog" className="text-[1.05rem] font-bold hover:text-white/70 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-[1.05rem] font-bold hover:text-white/70 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Latest News */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[1.2rem] font-bold">Latest news</h3>
            <div className="flex flex-col gap-10">
              {news.map((item, idx) => (
                <Link key={idx} href={item.link} className="flex gap-4 group">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 80px, 80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-[0.95rem] font-medium leading-[1.4] hover:text-white/70 transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-[1.5rem]">𝕏</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-[1.5rem]">𝓯</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-[1.5rem]">📷</Link>
          </div>

          <div className="text-[1rem] font-medium text-white/80">
            In Collaboration with <Link href="#" className="text-white hover:underline underline-offset-4 font-bold transition-all">Maxcode Solutions</Link>
          </div>

          <div className="text-[0.85rem] text-white/50">
            © 2026 Suvrin Technologies.
          </div>
        </div>

      </div>

      {/* WhatsApp FAB */}
      <Link
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[1001]"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </footer>
  );
}
