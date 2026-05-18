import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Support Services | Suvrin Technologies",
  description:
    "Ongoing Technology Support — So You Can Focus on Your Business. Product development, UI/UX, QA, and more.",
};

export default function SupportServicesPage() {
  const points = [
    "Product Development Services — from concept to launch",
    "UI/UX Design — user research, wireframing, prototyping, design systems",
    "QA & Testing — manual, automated, performance, and security testing",
    "IT Infrastructure Services — cloud, networking, and server management",
    "Maintenance & Support — bug fixes, updates, and feature enhancements",
  ];

  return (
    <>
      <ServicesHero
        id="support-services"
        title={
          <>
            Ongoing Technology Support —
            <br />
            So You Can Focus on Your Business
          </>
        }
        description="Technology needs maintenance, optimisation, and continuous improvement. Our support services ensure your systems stay secure, performant, and aligned with your evolving business needs — with predictable costs and responsive SLAs."
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
