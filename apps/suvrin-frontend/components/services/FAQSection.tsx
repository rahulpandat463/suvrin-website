"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does Suvrin Labs do?",
    answer: "We design, build, and launch AI-powered products and platforms that create real business value. From strategy to deployment, we act as your end-to-end AI innovation partner."
  },
  {
    question: "Who can work with Suvrin Labs?",
    answer: "We work with visionary founders, growth-stage startups, and innovation teams within larger enterprises who are looking to capitalize on AI."
  },
  {
    question: "What kind of AI products does Suvrin Labs build?",
    answer: "Everything from intelligent RAG-based knowledge systems and autonomous AI agents to complex data pipelines and automated workflow platforms."
  },
  {
    question: "How long does it take to develop an AI prototype?",
    answer: "Most of our AI prototypes are developed and ready for testing within 3-5 weeks, focusing on core value proof-of-concept."
  },
  {
    question: "Do I need a technical team to work with Suvrin Labs?",
    answer: "Not at all. We can operate as your full core engineering team or collaborate with your existing technical leads to accelerate builds."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 border-t border-[#e5e5e5] border-dashed" id="faq">
      <div className="max-w-[1440px] mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-serif text-center mb-16 tracking-tight text-[#111]">
            FAQ
          </h2>
          
          <div className="flex flex-col border-t border-[#e5e5e5]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-[#e5e5e5]">
                  <button
                    className="w-full py-8 md:py-10 flex justify-between items-center text-left group transition-all"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[1.25rem] md:text-[1.4rem] font-serif text-[#111] pr-8 leading-[1.3]">
                      {faq.question}
                    </span>
                    <span className={`text-[1.8rem] text-[#888] font-light transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[400px] opacity-100 pb-10 md:pb-12' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="max-w-[700px]">
                      <p className="text-[#555] text-[1.05rem] md:text-[1.15rem] leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
