import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Strategy & Advisory | Suvrin Technologies",
  description: "AI Strategy That Starts with Your Business, Not the Technology.",
};

export default function StrategyAdvisoryPage() {
  const points = [
    "AI readiness assessment — where does your business stand today?",
    "Opportunity identification — which AI use cases create the most value?",
    "Technology selection — which AI tools and platforms fit your needs and budget?",
    "Risk and governance framework — how do you deploy AI responsibly?",
    "Executive AI education — helping your leadership team make confident AI decisions",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="strategy-advisory"
        title={
          <>
            AI Strategy That Starts
            <br />
            with Your Business,
            <br />
            Not the Technology
          </>
        }
        description="Most AI initiatives fail because they start with technology and work backwards to find a business case. We do the opposite. Our AI strategy practice starts with your business challenges, your competitive landscape, and your data — then builds an AI roadmap that is specific, prioritised, and achievable."
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
              Book an AI Strategy Session →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="Strategy & Advisory" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
