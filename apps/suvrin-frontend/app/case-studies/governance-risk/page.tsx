import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";

export const metadata: Metadata = {
  title: "AI Governance & Risk | Suvrin Technologies",
  description: "AI Governance — Deploy AI Responsibly, Compliantly, and Confidently.",
};

export default function AIGovernanceRiskPage() {
  const points = [
    "AI risk assessment and impact analysis",
    "Bias detection and fairness evaluation in AI models",
    "Regulatory compliance — GDPR, India DPDP Act, UAE AI regulations",
    "AI ethics frameworks and responsible AI policies",
    "AI audit and explainability systems",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="governance-risk"
        title={
          <>
            AI Governance —
            <br />
            Deploy AI Responsibly,
            <br />
            Compliantly, and Confidently
          </>
        }
        description="As AI becomes central to business operations, the risks of deploying it irresponsibly grow. We help organisations build AI governance frameworks that ensure compliance, protect against bias, and build the trust needed for AI to be adopted across your organisation."
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
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="Governance & Risk" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
