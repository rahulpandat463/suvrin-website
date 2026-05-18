import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Software Engineering | Suvrin Technologies",
  description:
    "Engineering software that powers your business. Bespoke systems, IoT, DevOps, and more.",
};

export default function SoftwareEngineeringPage() {
  const points = [
    "Custom Software Development — bespoke systems built for your exact requirements",
    "IoT Development — connected device platforms and edge computing solutions",
    "DevOps Services — CI/CD pipelines, infrastructure automation, cloud operations",
    "Legacy Modernisation — re-architect, re-platform, or re-build outdated systems",
    "API Integration — connect your systems, eliminate data silos",
    "AI-Powered Robotic Integration — intelligent automation for physical operations",
  ];

  return (
    <>
      <ServicesHero
        id="software-engineering"
        title={
          <>
            Engineering Software
            <br />
            That Powers Your Business
          </>
        }
        description="Our software engineering practice builds the systems that run your business — from custom enterprise software to IoT platforms, DevOps pipelines, and API integration layers. We write clean, scalable code and engineer systems designed to evolve with your business."
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
    </>
  );
}
