/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Rescue & Takeover Projects | Failed Odoo Implementations | Suvrin Technologies",
  description:
    "We specialise in rescuing failed, stalled, and poorly implemented Odoo projects. Rapid assessment, recovery roadmap, and systematic remediation across India and the UAE.",
};

const rescueProcess = [
  "Rapid assessment (1 week) — audit configuration, data integrity, code quality, and delivery gaps",
  "Recovery roadmap — clear plan with effort estimate, timeline, and budget",
  "Stabilisation — fix critical bugs and data issues blocking business operations first",
  "Systematic remediation — rebuild or reconfigure in order of business priority",
  "Testing and validation — proper UAT before any remediated module goes live",
  "Handover and knowledge transfer — full documentation and training",
];

const rescueSigns = [
  "Users have gone back to spreadsheets and manual processes",
  "Financial reports do not match your accountant's numbers",
  "Inventory balances are incorrect or unreliable",
  "Your Odoo partner is unresponsive or has stopped answering",
  "The project has been 'in implementation' for more than 12 months",
  "Go-live happened but critical modules were never delivered",
];

export default function OdooRescuePage() {
  return (
    <>
      <ServicesHero
        id="odoo-rescue"
        title={
          <>
            Odoo Rescue &
            <br />
            Takeover Projects
          </>
        }
        description="We specialise in rescuing failed, stalled, and poorly implemented Odoo projects"
        ctaText="Get a Rescue Assessment →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            A project starts well, hits problems mid-implementation, and either stalls completely or
            goes live in a state that does not work for the business. Users lose confidence. Data is
            wrong. Workflows do not match reality. We take over these projects. We have rescued Odoo
            implementations for businesses across India and the UAE — creating a recovery plan and
            delivering a system that actually works.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rescue Process */}
            <div>
              <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">
                Our rescue process
              </h2>
              <div className="space-y-4">
                {rescueProcess.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#eaeaea]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-sm flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[0.93rem] text-[#444] pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signs your project needs rescue */}
            <div>
              <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">
                Signs your Odoo project needs rescue
              </h2>
              <div className="space-y-4">
                {rescueSigns.map((sign, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-5 rounded-xl border border-[#eaeaea]"
                  >
                    <span className="mt-0.5 text-[#0546e0] font-bold flex-shrink-0 text-lg">!</span>
                    <p className="text-[0.93rem] text-[#444]">{sign}</p>
                  </div>
                ))}
              </div>
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
            Get a Rescue Assessment →
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
