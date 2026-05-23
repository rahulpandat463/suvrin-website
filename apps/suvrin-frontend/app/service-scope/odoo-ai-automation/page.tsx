/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo AI & Automation | Intelligent Workflows & Predictive Analytics | Suvrin Technologies",
  description:
    "Embed AI and intelligent automation into Odoo — document processing, predictive inventory, chatbot agents, ticket routing, and revenue analytics.",
};

const whatWeBuild = [
  "AI-powered OCR & document processing — auto-extract data from supplier invoices, POs, and receipts",
  "Predictive inventory & demand forecasting — ML models trained on your sales history",
  "Intelligent ticket routing — AI reads tickets and auto-assigns to the right team",
  "AI chatbot integrated with live Odoo data — order status, service tickets, product queries",
  "Automated approval intelligence — learn from patterns, flag anomalies, predict bottlenecks",
  "Sales and revenue analytics with natural language querying of Odoo data",
  "Smart email classification — auto-route inbound emails to the right Odoo module",
];

export default function OdooAIAutomationPage() {
  return (
    <>
      <ServicesHero
        id="odoo-ai-automation"
        title={
          <>
            Odoo AI
            <br />& Automation
          </>
        }
        description="Embed intelligence into your Odoo workflows — automate more, decide faster"
        ctaText="Explore AI for Your Odoo →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            When you layer AI and intelligent automation on top of Odoo, it becomes a genuine
            competitive advantage — predicting demand, reading invoices automatically, routing
            tickets intelligently, and giving your leadership team insights they could never get
            from a manual reporting process.
          </p>

          <div>
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">What we build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whatWeBuild.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[#eaeaea] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[0.95rem] text-[#444] leading-relaxed">{item}</p>
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
