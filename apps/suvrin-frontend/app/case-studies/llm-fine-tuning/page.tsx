import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLM Fine-Tuning | Suvrin Technologies",
  description: "Fine-Tuned Language Models — AI That Speaks Your Business Language.",
};

export default function LLMFineTuningPage() {
  const points = [
    "Training data preparation and curation",
    "Fine-tuning on proprietary business data",
    "Model evaluation and performance benchmarking",
    "Deployment of fine-tuned models via API or on-premise",
    "Continuous learning and model improvement pipelines",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="llm-fine-tuning"
        title={
          <>
            Fine-Tuned Language
            <br />
            Models — AI That Speaks
            <br />
            Your Business Language
          </>
        }
        description="General-purpose LLMs like GPT-4 or Claude are powerful — but they do not know your business, your terminology, your products, or your customers. Fine-tuned LLMs trained on your specific data dramatically outperform general models for your specific use cases."
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
              Fine-Tune Your AI Model →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="LLM Fine-Tuning" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
