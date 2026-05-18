import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Infrastructure | Suvrin Technologies",
  description: "AI Infrastructure — The Foundation Your AI Needs to Scale.",
};

export default function AIInfrastructurePage() {
  const points = [
    "Cloud infrastructure architecture (AWS, GCP, Azure) for AI workloads",
    "GPU compute provisioning and cost optimisation",
    "MLOps — model versioning, monitoring, retraining pipelines",
    "Data lake and data warehouse architecture for AI",
    "Real-time inference infrastructure and API gateway setup",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="ai-infrastructure"
        title={
          <>
            AI Infrastructure —
            <br />
            The Foundation Your
            <br />
            AI Needs to Scale
          </>
        }
        description="Even the best AI model fails without the right infrastructure. We design and build the cloud architecture, data pipelines, monitoring systems, and deployment frameworks that allow your AI to operate reliably at scale — whether you process a hundred requests a day or a million."
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
              Build Your AI Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="AI Infrastructure" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
