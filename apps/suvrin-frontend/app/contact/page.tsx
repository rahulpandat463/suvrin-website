"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import FrameworkLogos from "@/components/shared/FrameworkLogos";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "contact@suvrin.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+1 917 689 3693",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      label: "Address",
      value: "Riverfront Center, 221 River St 9th Floor, Hoboken, NJ 07030",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#fbfcff] min-h-screen pt-40 pb-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Info & Logos */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-[clamp(2.5rem,5vw,4.2rem)] font-heading font-medium leading-[1.05] text-[#111] tracking-tight">
                Shaping the future <br /> of AI together
              </h1>
              <p className="text-[1.15rem] text-[#555] leading-relaxed max-w-[600px]">
                Whether you're exploring AI's potential, planning your first project, or 
                growing your business — our expert team is here to help you move from vision to impact.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="bg-white p-6 rounded-2xl border border-[#eeeeee] shadow-sm flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-100">
                      {info.icon}
                    </div>
                    <span className="text-base font-medium text-[#111]">{info.label}</span>
                  </div>
                  <p className="text-[0.92rem] text-[#666] leading-relaxed">
                    {info.value}
                  </p>
                </div>
              ))}
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
          <div className="lg:col-span-5">
            <div className="bg-white p-8 lg:p-10 rounded-[30px] border border-[#eeeeee] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl text-green-500 border border-green-100">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111] mb-2">Message Sent!</h3>
                    <p className="text-[#666]">We'll get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.95rem] font-bold text-[#111]" htmlFor="first-name">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="Jane"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.95rem] font-bold text-[#111]" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.95rem] font-bold text-[#111]" htmlFor="topic">Topic</label>
                    <input
                      id="topic"
                      type="text"
                      placeholder="AI strategy, product, or partnership"
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.95rem] font-bold text-[#111]" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your goals, challenges, or ideas. The more context you share, the better we can help."
                      className="w-full px-5 py-3.5 bg-[#f4f4f5] border-none rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-base resize-none placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-accent hover:bg-accent-hover text-white font-bold text-[1.1rem] rounded-2xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(232,134,58,0.3)] hover:-translate-y-1 mt-2"
                  >
                    Send a Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
