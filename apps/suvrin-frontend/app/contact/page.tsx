"use client";

import { useState, type FormEvent } from "react";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import FAQSection from "@/components/shared/FAQSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      country: "India",
      city: "Gurgaon (Headquarters)",
      address: "P1/55, DLF Phase 2, Cyber City, Gurgaon — 122002, Haryana, India",
      phone: "+91 9811021616",
      email: "sudeep@suvrin.com"
    },
    {
      country: "UAE",
      city: "Dubai",
      address: "MAXCODE SOLUTIONS LLC, Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina, Dubai, UAE",
      phone: "+971 551 120 975"
    },
    {
      country: "USA",
      city: "Hoboken, New Jersey",
      address: "Riverfront Center, 221 River St, 9th Floor, Hoboken, NJ 07030, United States",
      phone: "+1 917 689 3693"
    }
  ];

  return (
    <div className="bg-[#fbfcff] min-h-screen pt-40 pb-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Info & Locations */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-[clamp(2.5rem,5vw,4.2rem)] font-heading font-medium leading-[1.05] text-[#111] tracking-tight">
                Ready to Build <br /> Something Exceptional?
              </h1>
              <p className="text-[1.15rem] text-[#555] leading-relaxed max-w-[600px]">
                Whether you have a clearly defined project or just an idea you want to explore — we would love to hear from you. Our team typically responds within 4 business hours.
              </p>
            </div>

            {/* Office Locations */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#111]">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {locations.map((loc, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#eeeeee] shadow-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#0546e0] uppercase tracking-wider">{loc.country}</span>
                      <span className="text-sm text-[#888]">{loc.city}</span>
                    </div>
                    <p className="text-[0.95rem] text-[#333] leading-relaxed">
                      {loc.address}
                    </p>
                    <div className="text-[0.9rem] text-[#666] flex flex-col gap-1">
                      {loc.phone && <div>Phone: {loc.phone}</div>}
                      {loc.email && <div>Email: {loc.email}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worked with Section */}
            <div className="pt-8 border-t border-[#e5e5e5] border-dashed">
              <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
                Worked with:
              </p>
              <div className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <FrameworkLogos />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 lg:p-10 rounded-[30px] border border-[#eeeeee] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl text-green-500 border border-green-100">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111] mb-2">Message Sent!</h3>
                    <p className="text-[#666]">We'll get back to you within 4 business hours.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#0546e0] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="first-name">First Name</label>
                      <input
                        id="first-name"
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="last-name">Last Name</label>
                      <input
                        id="last-name"
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="email">Business Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@company.com"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your organisation"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="country">Country</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Select your country"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base text-[#111] placeholder:text-gray-400"
                      required
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Odoo ERP">Odoo ERP</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="budget">Project Budget (optional)</label>
                    <input
                      id="budget"
                      type="text"
                      placeholder="Approximate budget range"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.85rem] font-bold text-[#111] uppercase tracking-wider" htmlFor="message">Tell Us About Your Project</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your challenge, goal, or idea..."
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#0546e0]/20 transition-all font-sans text-base resize-none placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-[#0546e0] hover:bg-[#0437b0] text-white font-bold text-[1.1rem] rounded-2xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(5,70,224,0.3)] hover:-translate-y-1 mt-2 flex items-center justify-center gap-2"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
      <FAQSection />
    </div>
  );
}
