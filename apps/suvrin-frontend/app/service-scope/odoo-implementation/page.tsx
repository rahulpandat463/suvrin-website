/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo ERP Implementation | Full-Cycle Deployment — India, UAE, USA | Suvrin Technologies",
  description:
    "Full-cycle Odoo ERP implementation across India, the Middle East, and the USA. Manufacturing, trading, healthcare, real estate, and more.",
};

const industries = [
  "Manufacturing & Production",
  "Trading & Distribution",
  "Retail & E-commerce",
  "Healthcare & Clinics",
  "Real Estate & Property Management",
  "Professional Services",
  "Field Service & AMC",
  "Logistics & Warehousing",
  "Construction & Contracting (GCC)",
  "Education & Training Institutes",
];

const modules = [
  "Sales & CRM",
  "Purchase & Vendor Management",
  "Inventory & Warehouse Management",
  "Manufacturing (MRP)",
  "Accounting & Finance",
  "HR & Payroll",
  "Project Management",
  "Field Service",
  "Helpdesk & Ticketing",
  "Website & E-commerce",
  "Point of Sale (POS)",
  "Subscription & Recurring Revenue",
  "Fleet Management",
  "Quality Control",
];

const includes = [
  "Functional Requirements Document (FRD) and project plan with milestones",
  "Full configuration, custom development, and data migration",
  "UAT support, go-live, and 1-year bug-and-defect warranty",
  "Training and user documentation",
];

export default function OdooImplementationPage() {
  return (
    <>
      <ServicesHero
        id="odoo-implementation"
        title={
          <>
            Odoo ERP
            <br />
            Implementation
          </>
        }
        description="Full-cycle new deployment across India, the Middle East, and the USA"
        ctaText="Start Your Odoo Project →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Implementing Odoo is a high-stakes project. Done well, it transforms how your business
            operates — automating manual work, unifying data, and giving leadership real-time
            visibility across every function. We have delivered Odoo implementations for businesses
            in manufacturing, distribution, trading, healthcare, real estate, professional services,
            retail, and field service — across India, UAE, Saudi Arabia, Qatar, Oman, and the USA.
          </p>

          {/* Industries we serve */}
          <div className="mb-16">
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-6">
              Industries we serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 bg-white border border-[#eaeaea] rounded-full text-[0.92rem] text-[#444]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Odoo modules we implement */}
          <div className="mb-16">
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-6">
              Odoo modules we implement
            </h2>
            <div className="flex flex-wrap gap-3">
              {modules.map((mod) => (
                <span
                  key={mod}
                  className="px-4 py-2 bg-[#0546e0]/5 border border-[#0546e0]/20 rounded-full text-[0.92rem] text-[#0546e0]"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* Every implementation includes */}
          <div>
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-6">
              Every implementation includes
            </h2>
            <div className="space-y-3">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl border border-[#eaeaea]"
                >
                  <span className="mt-0.5 text-[#0546e0] font-bold flex-shrink-0">›</span>
                  <p className="text-[0.98rem] text-[#444]">{item}</p>
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
            Start Your Odoo Project →
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
