/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Version Migration & Upgrades | v12/13/14/15/16 to v17/v18 | Suvrin Technologies",
  description:
    "Safe, complete Odoo migration from older versions to v17 or v18. We have migrated businesses from Odoo 12, 13, 14, 15, and 16 — including complex deployments with 20+ custom modules.",
};

const migrationProcess = [
  "Pre-migration audit — all modules, data volume, integrations, and customisations",
  "Custom module compatibility analysis — rewrite vs. upgrade assessment",
  "Migration roadmap, risk register, and data migration plan",
  "Development environment migration and thorough testing",
  "Staging parallel run (old and new systems running simultaneously)",
  "Production cutover planning and post-migration hypercare",
];

const migrationPaths = [
  "Odoo 12 / 13 / 14 / 15 / 16 → v17 / v18",
  "Community → Enterprise (edition upgrade)",
  "On-premise → Odoo.sh or cloud (hosting migration)",
];

export default function OdooMigrationPage() {
  return (
    <>
      <ServicesHero
        id="odoo-migration"
        title={
          <>
            Odoo Version
            <br />
            Migration & Upgrades
          </>
        }
        description="Safe, complete migration from older Odoo versions to v17 or v18"
        ctaText="Plan Your Migration →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Every Odoo version upgrade is a project in its own right. Custom modules break. Data
            schemas change. Features move. Without expert migration support, a poorly executed
            upgrade can leave your business with a broken system and months of recovery work. We
            have migrated businesses from Odoo 12, 13, 14, 15, and 16 to the latest versions —
            including complex deployments with 20+ custom modules and live integrations.
          </p>

          {/* Migration Process */}
          <div className="mb-16">
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">
              Our migration process
            </h2>
            <div className="space-y-4">
              {migrationProcess.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl border border-[#eaeaea]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[0.98rem] text-[#444] pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Migration Paths */}
          <div>
            <h2 className="text-[1.5rem] font-serif font-bold text-[#111] mb-8">
              Migration paths we support
            </h2>
            <div className="flex flex-col gap-3">
              {migrationPaths.map((path) => (
                <div
                  key={path}
                  className="flex items-center gap-3 bg-[#0546e0]/5 border border-[#0546e0]/20 rounded-xl px-6 py-4"
                >
                  <span className="text-[#0546e0] font-bold">→</span>
                  <p className="text-[0.98rem] text-[#333] font-medium">{path}</p>
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
            Plan Your Odoo Migration →
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
