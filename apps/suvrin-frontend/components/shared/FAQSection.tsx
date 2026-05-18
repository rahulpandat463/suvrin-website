"use client";

const faqs = [
  {
    q: "What types of businesses does Suvrin Technologies work with?",
    a: "We work with businesses of all sizes — from ambitious startups to large enterprises — across industries including manufacturing, healthcare, logistics, financial services, real estate, retail, and professional services. Our clients are based in India, the UAE, and the USA."
  },
  {
    q: "How long does a typical AI project take?",
    a: "Project timelines vary significantly based on scope and complexity. An AI strategy engagement typically takes 2–4 weeks. A custom AI product or platform typically takes 3–6 months from discovery to go-live. We always provide a detailed project plan with milestones before work begins."
  },
  {
    q: "Do you offer Odoo ERP implementation in Dubai?",
    a: "Yes — we implement Odoo ERP for businesses across the UAE, Saudi Arabia, Qatar, and the broader GCC region. Our Dubai-based team brings local market knowledge and Arabic language support to every implementation."
  },
  {
    q: "What is your development process?",
    a: "We follow an agile delivery methodology with fixed-scope phases, regular client demos, and clear sign-off processes. Every project begins with a detailed requirements document (FRD), is tracked via a shared project management tool, and concludes with formal UAT and go-live support."
  },
  {
    q: "Can you work with our existing technology systems?",
    a: "Absolutely. API integration and legacy system modernisation are core capabilities. We regularly build custom connectors for Tally, SAP, Salesforce, MakeMyTrip, and many other enterprise systems."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-serif font-bold text-[#111] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#666] max-w-[600px] mx-auto">
            Find answers to common questions about our services, process, and capabilities.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto divide-y divide-[#eeeeee]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <h3 className="text-[1.2rem] font-serif font-bold text-[#111] mb-3">
                {faq.q}
              </h3>
              <p className="text-[0.95rem] text-[#555] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
