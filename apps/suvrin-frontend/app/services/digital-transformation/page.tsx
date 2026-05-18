import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Digital Transformation | Suvrin Technologies",
  description:
    "Transform your business — Process by Process, System by System. We help organisations define their transformation vision.",
};

export default function DigitalTransformationPage() {
  const points = [
    "Digital Transformation Strategy & Roadmap",
    "IT Consulting — technology assessment, vendor selection, architecture review",
    "Digital Sovereignty — data localisation, compliance, and technology independence",
  ];

  return (
    <>
      <ServicesHero
        id="digital-transformation"
        title={
          <>
            Transform Your Business —
            <br />
            Process by Process,
            <br />
            System by System
          </>
        }
        description="Digital transformation is not a single project — it is an ongoing journey. We help organisations across India and the Middle East define their transformation vision, modernise their operations, and build the digital capabilities they need to lead in their markets."
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
