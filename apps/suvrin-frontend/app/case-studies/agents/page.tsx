import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents | Suvrin Technologies",
  description: "Intelligent AI Agents That Work — 24/7, Without Errors.",
};

export default function AIAgentsPage() {
  const points = [
    "Conversational AI agents — customer service, lead qualification, HR support",
    "Task automation agents — multi-step process execution without human intervention",
    "Research and analysis agents — autonomous data gathering and summarisation",
    "Multi-agent systems — coordinated networks of specialised AI agents",
    "Agent integration with enterprise tools — CRM, ERP, email, calendars",
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="ai-agents"
        title={
          <>
            Intelligent AI Agents
            <br />
            That Work — 24/7,
            <br />
            Without Errors
          </>
        }
        description="AI agents are autonomous software systems that perceive their environment, make decisions, and take actions to achieve defined goals — without constant human supervision. We build AI agents for customer service, sales, operations, research, and complex enterprise workflows."
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
              Deploy Your First AI Agent →
            </Link>
          </div>
        </div>
      </section>

      <FrameworkLogos />

      <div className="bg-white">
        <DiscoverGrid initialFilter="Agents" disableScroll={true} />
      </div>

      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}
