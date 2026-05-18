import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Systems | Suvrin Technologies",
  description: "AI-Powered Knowledge Systems — Your Organisation's Intelligence, Unlocked.",
};

export default function KnowledgeSystemsPage() {
  const points = [
    "Enterprise knowledge bases with AI-powered search and retrieval",
    "RAG (Retrieval-Augmented Generation) systems for accurate, source-cited answers",
    "Document intelligence — AI that reads, understands, and extracts from your documents",
    "Internal chatbots trained on your company data and policies",
    "Knowledge graph development for complex organisational data",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="knowledge-systems"
        title={
          <>
            AI-Powered Knowledge
            <br />
            Systems — Your Organisation's
            <br />
            Intelligence, Unlocked
          </>
        }
        description="Your organisation has decades of accumulated knowledge locked in documents, databases, emails, and people's heads. AI-powered knowledge systems surface this intelligence instantly — enabling employees to find answers, make decisions, and serve customers faster than ever before."
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
              Build Your Knowledge System →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="Knowledge Systems" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
