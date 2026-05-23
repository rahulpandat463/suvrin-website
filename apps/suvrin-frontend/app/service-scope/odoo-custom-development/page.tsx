/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Custom Module Development | Python & OWL Development | Suvrin Technologies",
  description:
    "Bespoke Odoo custom module development in Python/OWL for workflows, pricing, automation, and industry-specific needs. India, UAE, USA.",
};

const whatWeBuild = [
  "Custom approval and multi-level workflow engines",
  "Industry-specific modules — AMC management, service contracts, project billing, real estate",
  "Custom pricing engines — volume tiers, customer-specific pricing, dynamic discounting",
  "Advanced inventory and warehouse management logic",
  "Custom document generation — job cards, service reports, delivery notes, certificates",
  "KPI dashboards and management reporting views",
  "Employee self-service portals and HR automation",
  "Custom e-commerce integrations and catalogue management",
  "Barcode and QR code scanning workflows",
  "Multi-company, multi-currency, and multi-warehouse custom logic",
];

const techStack = [
  { tech: "Python 3.x", desc: "Odoo ORM, business logic, API integrations" },
  { tech: "OWL (Odoo Web Library)", desc: "Custom frontend components" },
  { tech: "QWeb", desc: "Custom report and portal templates" },
  { tech: "PostgreSQL", desc: "Database-level optimisation and custom queries" },
  { tech: "XML", desc: "View inheritance and UI customisation" },
];

export default function OdooCustomDevelopmentPage() {
  return (
    <>
      <ServicesHero
        id="odoo-custom-development"
        title={
          <>
            Odoo Custom
            <br />
            Module Development
          </>
        }
        description="Python & OWL development for unique business requirements"
        ctaText="Discuss Your Custom Module →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Standard Odoo covers 80% of what most businesses need. The remaining 20% — the
            workflows, pricing models, approval chains, industry-specific processes, and regulatory
            requirements unique to your business — requires custom development. Our Odoo development
            team builds custom modules that integrate seamlessly with standard Odoo — fully
            upgradeable, fully documented, and built to last.
          </p>

          {/* What we build */}
          <div className="mb-16">
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">What we build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatWeBuild.map((item) => (
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

          {/* Technology stack */}
          <div>
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">
              Technology stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((t) => (
                <div
                  key={t.tech}
                  className="bg-white p-6 rounded-xl border border-[#eaeaea] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  <p className="text-[1rem] font-serif font-bold text-[#0546e0] mb-2">{t.tech}</p>
                  <p className="text-[0.88rem] text-[#666]">{t.desc}</p>
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
            Start Your Custom Module Project →
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
