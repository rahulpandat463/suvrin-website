import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import { Footer } from "@/components/Footer";
import FrameworkLogos from "@/components/shared/FrameworkLogos";

export const metadata: Metadata = {
  title: "Front-End Development | React, Angular, Vue | Suvrin Technologies",
  description: "Front-End Development — Interfaces That Perform and Delight. We specialise in React, Angular, and Vue.",
};

export default function FrontEndPage() {
  const points = [
    {
      title: "React",
      description: "React is our most-used front-end framework for good reason — its component-based architecture, massive ecosystem, and performance make it the ideal choice for complex, data-driven web applications. Our React developers build everything from marketing sites to enterprise dashboards and AI interfaces.",
      subPoints: [
        "React.js and Next.js development",
        "Component library development and design systems",
        "Server-side rendering (SSR) and static site generation (SSG)",
        "Performance optimisation and Core Web Vitals improvement"
      ]
    },
    {
      title: "Angular",
      description: "Angular is our framework of choice for large-scale enterprise applications that require strict structure, strong typing, and long-term maintainability. Ideal for internal tools, ERP front-ends, and complex workflow applications."
    },
    {
      title: "Vue",
      description: "Vue.js offers the perfect balance of flexibility and structure for mid-size applications. We recommend Vue for projects that need rapid development velocity without sacrificing code quality or maintainability."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="front-end"
        title={
          <>
            Front-End Development —
            <br />
            Interfaces That Perform
            <br />
            and Delight
          </>
        }
        description="A great user experience is not an accident — it is engineered. Our front-end team builds web interfaces that are fast, accessible, and designed to convert. We specialise in React, Angular, and Vue — choosing the right framework for your project's specific needs."
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3">
                  {point.title}
                </h3>
                <p className="text-[0.95rem] text-[#666] leading-relaxed mb-4">
                  {point.description}
                </p>
                {point.subPoints && (
                  <ul className="list-disc list-inside text-[0.9rem] text-[#555] space-y-2 mt-auto">
                    {point.subPoints.map((sp, j) => (
                      <li key={j}>{sp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FrameworkLogos />
      <Footer />
    </main>
  );
}
