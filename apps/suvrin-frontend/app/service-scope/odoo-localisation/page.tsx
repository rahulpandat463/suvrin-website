/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Localisation — India, UAE & GCC | GST, VAT, ZATCA, Arabic | Suvrin Technologies",
  description:
    "Statutory compliance, language support, and regional business processes for Odoo in India (GST, e-invoicing), UAE (VAT, FTA), and Saudi Arabia (ZATCA). Full localisation built in.",
};

const indiaItems = [
  "GST configuration — CGST, SGST, IGST, cess, and HSN/SAC codes",
  "GST e-invoicing (IRP integration) — Phase 1 and Phase 2",
  "E-way bill generation and management",
  "TDS and TCS computation and deduction tracking",
  "Form 16, Form 26Q, and quarterly TDS filing reports",
  "India-specific HR — PF, ESI, Professional Tax, Gratuity, LTA",
  "Multi-state payroll with state-specific tax rules",
  "Tally integration for Indian accounting workflows",
  "GST return reports — GSTR-1, GSTR-3B, GSTR-2A reconciliation",
];

const gccItems = [
  "UAE FTA VAT configuration — 5% standard, zero-rated, and exempt",
  "VAT return report (Form VAT201) generation",
  "Saudi Arabia ZATCA e-invoicing — Phase 1 (QR code) and Phase 2 (portal integration)",
  "Arabic language UI and bilingual (Arabic/English) document templates",
  "UAE WPS (Wage Protection System) payroll file generation",
  "End of service gratuity calculation per UAE Labour Law",
  "Kuwait, Oman, Qatar, Bahrain VAT configuration",
  "Arabic chart of accounts and localised accounting structures",
];

export default function OdooLocalisationPage() {
  return (
    <>
      <ServicesHero
        id="odoo-localisation"
        title={
          <>
            Odoo Localisation —
            <br />
            India, UAE & GCC
          </>
        }
        description="Statutory compliance, language support, and regional business processes built in"
        ctaText="Configure Your Localisation →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Running Odoo in India, the UAE, or Saudi Arabia requires localisation — compliance with
            local tax laws, government reporting mandates, Arabic language support, and regional
            business practices that are not in the standard Odoo installation. We have built and
            configured Odoo localisation for clients across all three regions — ensuring full
            compliance from day one.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* India */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🇮🇳</span>
                <h2 className="text-[1.5rem] font-serif font-bold text-[#111]">
                  India Localisation
                </h2>
              </div>
              <div className="space-y-3">
                {indiaItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#eaeaea]"
                  >
                    <span className="mt-0.5 text-[#0546e0] font-bold flex-shrink-0">›</span>
                    <p className="text-[0.93rem] text-[#444]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE & GCC */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🇦🇪</span>
                <h2 className="text-[1.5rem] font-serif font-bold text-[#111]">
                  UAE & GCC Localisation
                </h2>
              </div>
              <div className="space-y-3">
                {gccItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#eaeaea]"
                  >
                    <span className="mt-0.5 text-[#0546e0] font-bold flex-shrink-0">›</span>
                    <p className="text-[0.93rem] text-[#444]">{item}</p>
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
            Start the Conversation →
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
