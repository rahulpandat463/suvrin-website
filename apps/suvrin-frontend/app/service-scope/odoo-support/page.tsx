/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Support & AMC | Post-Go-Live Support with Guaranteed SLAs | Suvrin Technologies",
  description:
    "Reliable post-go-live Odoo support with guaranteed response times. Essential, Business, and Enterprise AMC plans with dedicated support engineers.",
};

const plans = [
  {
    name: "Essential Support",
    items: [
      "Email and ticket-based support",
      "48-hour response SLA for bug fixes",
      "Monthly system health check report",
      "Up to 10 support hours per month",
    ],
  },
  {
    name: "Business Support",
    items: [
      "Email, WhatsApp, and phone support",
      "24-hour response SLA for critical issues",
      "Bi-weekly review calls",
      "Up to 25 support hours per month — minor enhancements included",
    ],
  },
  {
    name: "Enterprise Support",
    items: [
      "Dedicated support engineer",
      "4-hour response SLA for critical issues",
      "Weekly review calls + up to 60 hours per month",
      "Priority feature development + quarterly system audit",
    ],
  },
];

const allPlansInclude = [
  "Bug fixes within 1-year warranty period",
  "Odoo security patch monitoring and application",
  "User training for new team members",
  "Documentation updates for new processes",
];

export default function OdooSupportPage() {
  return (
    <>
      <ServicesHero
        id="odoo-support"
        title={
          <>
            Odoo Support
            <br />& AMC
          </>
        }
        description="Reliable post-go-live support with guaranteed response times"
        ctaText="Choose Your Support Plan →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Going live is the beginning, not the end. Our Odoo AMC plans give you a dedicated
            support relationship with a team that already knows your system — so every issue gets
            resolved by someone with context, not someone reading your system for the first time.
          </p>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border flex flex-col ${
                  i === 1
                    ? "bg-[#0546e0] border-[#0546e0] text-white"
                    : "bg-white border-[#eaeaea]"
                }`}
              >
                <h3
                  className={`text-[1.2rem] font-serif font-bold mb-6 ${
                    i === 1 ? "text-white" : "text-[#111]"
                  }`}
                >
                  {plan.name}
                </h3>
                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.92rem]">
                      <span
                        className={`mt-1 flex-shrink-0 font-bold ${
                          i === 1 ? "text-white/70" : "text-[#0546e0]"
                        }`}
                      >
                        ›
                      </span>
                      <span className={i === 1 ? "text-white/90" : "text-[#555]"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All plans include */}
          <div>
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-6">
              All plans include
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allPlansInclude.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl border border-[#eaeaea]"
                >
                  <span className="mt-0.5 text-[#0546e0] font-bold flex-shrink-0">›</span>
                  <p className="text-[0.95rem] text-[#444]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-white bg-[#0546e0] rounded-full hover:bg-[#0438c4] hover:-translate-y-0.5 transition-all duration-250"
          >
            Get Your AMC Quote →
          </Link>
          <Link
            href="/services/enterprise-applications/odoo-erp-implementation"
            className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-[#0546e0] bg-white border border-[#0546e0] rounded-full hover:bg-[#0546e0]/5 transition-all duration-250"
          >
            ← Back to All Odoo Services
          </Link>
        </div>
      </section>
    </>
  );
}
