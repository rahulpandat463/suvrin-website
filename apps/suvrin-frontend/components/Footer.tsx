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
    if (typeof window !== "undefined" && window.innerWidth >= 1024) return;
    setOpenSections((prev) => {
      const isCurrentlyOpen = prev[section];
      return {
        about: section === "about" ? !isCurrentlyOpen : false,
        services: section === "services" ? !isCurrentlyOpen : false,
        caseStudies: section === "caseStudies" ? !isCurrentlyOpen : false,
      };
    });
  };

  const offices = [
    {
      country: "India",
      city: "Gurgaon",
      name: "Suvrin Technologies",
      address: "P1/55, DLF Phase 2, Cyber City, Gurgaon — 122002",
      phone: "+91 9811021616",
      email: "sudeep@suvrin.com"
    },
    {
      country: "Dubai, UAE",
      city: "Dubai",
      name: "Maxcode Solutions LLC (Suvrin Technologies)",
      address: "Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina",
      phone: "+971 551 120 975"
    },
    {
      country: "USA",
      city: "Hoboken",
      name: "Suvrin Technologies",
      address: "Riverfront Center, 221 River St, 9th Floor, Hoboken, NJ 07030",
      phone: "+1 917 689 3693"
    }
  ];

  return (
    <footer
      className="bg-white text-gray-900 pt-16 pb-6 font-sans relative"
      id="site-footer"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-200">

          {/* Column 1: Brand & SEO Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/suvrin-logo.png"
                alt="Suvrin Technologies Logo"
                width={200}
                height={70}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-[0.85rem] font-bold text-[#0546e0]">
              Suvrin Technologies — AI Solutions for Modern Businesses
            </p>
            <p className="text-[0.8rem] text-gray-600 leading-relaxed">
              Suvrin Technologies is a global AI and technology consulting firm helping businesses across India, the UAE, and the USA build competitive advantage through artificial intelligence, ERP implementation, custom software development, and digital transformation. With offices in Gurgaon, Dubai, and New Jersey, our team of engineers and AI specialists deliver measurable business value on every project.
            </p>
            <div className="relative w-full max-w-[140px] mt-2">
              <Image
                src="/footer_Logo.jpeg"
                alt="Footer Logo"
                width={200}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2: Addresses */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1rem] font-bold text-gray-900 border-b border-gray-200 pb-2">
              Office Locations
            </h3>
            {offices.map((office, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <h4 className="text-[0.75rem] font-bold text-gray-500 uppercase tracking-widest">
                  {office.country}
                </h4>
                <p className="text-[0.85rem] font-bold text-gray-900">
                  {office.name}
                </p>
                <p className="text-[0.8rem] text-gray-600 leading-relaxed">
                  {office.address}
                </p>
                <p className="text-[0.8rem] font-bold text-gray-900 mt-0.5">
                  {office.phone}
                </p>
                {office.email && (
                  <p className="text-[0.8rem] text-[#0546e0] font-medium">
                    {office.email}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1rem] font-bold border-b border-gray-200 pb-2 text-gray-900">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-[0.9rem] font-bold hover:text-[#0546e0] transition-colors text-gray-900">
                  Home
                </Link>
              </li>

              {/* About Section */}
              <li className="flex flex-col gap-1.5">
                <button
                  onClick={() => toggleSection("about")}
                  className="flex items-center gap-1 w-auto text-[0.9rem] font-bold hover:text-[#0546e0] lg:hover:text-gray-900 transition-colors text-gray-900 cursor-pointer lg:cursor-default"
                >
                  <span>About</span>
                  <span className={`text-[0.6rem] transition-transform duration-300 ml-1 lg:hidden ${openSections.about ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 lg:mt-0 ${openSections.about ? "max-h-[200px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-1.5 pl-3 border-l border-gray-200">
                    <li><Link href="/about" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Who We Are</Link></li>
                    <li><Link href="/about/team" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Team</Link></li>
                    <li><Link href="/about/careers" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Careers</Link></li>
                  </ul>
                </div>
              </li>

              {/* Services Section */}
              <li className="flex flex-col gap-1.5">
                <button
                  onClick={() => toggleSection("services")}
                  className="flex items-center gap-1 w-auto text-[0.9rem] font-bold hover:text-[#0546e0] lg:hover:text-gray-900 transition-colors text-gray-900 cursor-pointer lg:cursor-default"
                >
                  <span>Services</span>
                  <span className={`text-[0.6rem] transition-transform duration-300 ml-1 lg:hidden ${openSections.services ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 lg:mt-0 ${openSections.services ? "max-h-[350px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-1.5 pl-3 border-l border-gray-200">
                    <li><Link href="/services/app-development" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Application Development</Link></li>
                    <li><Link href="/service-scope/cybersecurity" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Cybersecurity</Link></li>
                    <li><Link href="/services/digital-transformation" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Digital Transformation</Link></li>
                    <li><Link href="/services/software-engineering" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Software Engineering</Link></li>
                    <li><Link href="/services/enterprise-applications" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Enterprise Applications</Link></li>
                    <li><Link href="/service-scope/staff-augmentation" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Staff Augmentation</Link></li>
                    <li><Link href="/services/support-services" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Support Services</Link></li>
                  </ul>
                </div>
              </li>

              {/* Case Studies Section */}
              <li className="flex flex-col gap-1.5">
                <button
                  onClick={() => toggleSection("caseStudies")}
                  className="flex items-center gap-1 w-auto text-[0.9rem] font-bold hover:text-[#0546e0] lg:hover:text-gray-900 transition-colors text-gray-900 cursor-pointer lg:cursor-default"
                >
                  <span>Case Studies</span>
                  <span className={`text-[0.6rem] transition-transform duration-300 ml-1 lg:hidden ${openSections.caseStudies ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 lg:mt-0 ${openSections.caseStudies ? "max-h-[450px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-1.5 pl-3 border-l border-gray-200">
                    <li><Link href="/case-studies/strategy-advisory" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Strategy & Advisory</Link></li>
                    <li><Link href="/case-studies/ai-products-platforms" className="text-[0.8rem] text-gray-600 hover:text-gray-900">AI Products & Platforms</Link></li>
                    <li><Link href="/service-scope/commercialization-growth" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Commercialisation & Growth</Link></li>
                    <li><Link href="/case-studies/agents" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Agents</Link></li>
                    <li><Link href="/case-studies/knowledge-systems" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Knowledge Systems</Link></li>
                    <li><Link href="/case-studies/automation-integration" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Automation & Integration</Link></li>
                    <li><Link href="/case-studies/ai-infrastructure" className="text-[0.8rem] text-gray-600 hover:text-gray-900">AI Infrastructure</Link></li>
                    <li><Link href="/case-studies/governance-risk" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Governance & Risk</Link></li>
                    <li><Link href="/case-studies/llm-fine-tuning" className="text-[0.8rem] text-gray-600 hover:text-gray-900">LLM Fine-Tuning</Link></li>
                    <li><Link href="/service-scope/web-scraping" className="text-[0.8rem] text-gray-600 hover:text-gray-900">Web Scraping</Link></li>
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/blog" className="text-[0.9rem] font-bold hover:text-[#0546e0] transition-colors text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[0.9rem] font-bold hover:text-[#0546e0] transition-colors text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Latest Insights */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1rem] font-bold text-gray-900 border-b border-gray-200 pb-2">Latest Insights</h3>
            <div className="flex flex-col gap-4">
              <Link href="/blog/journey-from-idea-to-ai-product" className="group flex flex-col gap-1">
                <h4 className="text-[0.85rem] font-bold text-gray-900 group-hover:text-[#0546e0] transition-colors">
                  The Journey from Idea to AI Product
                </h4>
                <p className="text-[0.75rem] text-gray-500">JAN 8, 2026</p>
              </Link>
              <Link href="/blog/choosing-right-erp-india-middle-east" className="group flex flex-col gap-1">
                <h4 className="text-[0.85rem] font-bold text-gray-900 group-hover:text-[#0546e0] transition-colors">
                  Choosing the Right ERP for India and the Middle East
                </h4>
                <p className="text-[0.75rem] text-gray-500">DEC 10, 2025</p>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 text-center md:text-left text-[0.8rem] text-gray-600">
          <div>
            © 2026 Suvrin Technologies. All rights reserved. | <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link> | <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
          </div>
          <div>
            In collaboration with Maxcode Solutions LLC, Dubai, UAE.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/Twitter logo.avif" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/facebook Logo.avif" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/instagram logo.avif" alt="Instagram" width={20} height={20} />
            </Link>
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
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </footer>
  );
}
