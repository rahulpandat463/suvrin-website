import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Enterprise Applications | Suvrin Technologies",
  description:
    "Enterprise ERP & CRM — Implemented Right, the First Time. Odoo, SAP, Salesforce, and more.",
};

export default function EnterpriseApplicationsPage() {
  const points = [
    "Odoo ERP Implementation — full-cycle implementation, customisation, and support",
    "SAP — implementation and advisory",
    "Salesforce Implementation — CRM, Sales Cloud, Service Cloud",
    "Salesforce Consulting Services",
    "CRM Consulting — strategy, selection, and implementation",
    "Creatio CRM Implementation",
    "Oracle Managed Services",
    "Staff Augmentation — skilled technology resources on demand",
  ];

  return (
    <>
      <ServicesHero
        id="enterprise-applications"
        title={
          <>
            Enterprise ERP & CRM —
            <br />
            Implemented Right,
            <br />
            the First Time
          </>
        }
        description="Enterprise software implementations are high-stakes. We bring the expertise, methodology, and discipline to implement ERP and CRM systems that actually get adopted — delivering the efficiency gains and business intelligence they promise. We are experienced Odoo partners with a strong track record across India and the GCC."
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, i) => {
              const parts = point.split(" — ");
              const title = parts[0] ?? "";
              const desc = parts[1];
              const isOdoo = title.trim() === "Odoo ERP Implementation";

              const cardContent = (
                <>
                  <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3">
                    {title}
                    {isOdoo && (
                      <span className="ml-2 text-[#0546e0] text-[1rem]">→</span>
                    )}
                  </h3>
                  {desc && (
                    <p className="text-[0.95rem] text-[#666] leading-relaxed">
                      {desc}
                    </p>
                  )}
                </>
              );

              if (isOdoo) {
                return (
                  <Link
                    key={i}
                    href="/services/enterprise-applications/odoo-erp-implementation"
                    className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
