import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automation & Integration | Suvrin Technologies",
  description: "Intelligent Automation — Eliminate Repetitive Work, Accelerate Growth.",
};

export default function AutomationIntegrationPage() {
  const points = [
    "Intelligent document processing — automated data extraction from invoices, contracts, forms",
    "Business process automation — end-to-end workflow automation with AI decision-making",
    "API and system integration — connect your tools and eliminate data silos",
    "RPA (Robotic Process Automation) with AI enhancement",
    "AI-powered data pipelines and ETL processes",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="automation-integration"
        title={
          <>
            Intelligent Automation —
            <br />
            Eliminate Repetitive Work,
            <br />
            Accelerate Growth
          </>
        }
        description="Automation is no longer just about scripting repetitive tasks. AI-powered automation understands context, handles exceptions, and continuously improves — dramatically reducing operational costs while increasing speed and accuracy across your business processes."
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, i) => {
              const [title, desc] = point.split(" — ");
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3">
                    {title}
                  </h3>
                  {desc && (
                    <p className="text-[0.95rem] text-[#666] leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="text-[#0546e0] font-serif font-bold text-xl hover:underline">
              Automate Your Operations →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="Automation & Integration" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
