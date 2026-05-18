import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PartnersSection from "@/components/services/PartnersSection";

export const metadata: Metadata = {
  title: "App Development | Suvrin Technologies",
  description:
    "Custom applications built for performance and scale. We design and build web, mobile, and cross-platform applications.",
};

export default function AppDevelopmentPage() {
  const points = [
    "Mobile App Development — iOS, Android, React Native, Flutter",
    "Web Application Development — React, Angular, Vue, Next.js",
    "Cross-Platform Development — single codebase, multiple platforms",
    "Progressive Web Apps (PWA) — offline-capable, app-like web experiences",
    "CMS-Based Web Development — WordPress, Strapi, Contentful",
    "Cybersecurity — application security, penetration testing, compliance",
  ];

  return (
    <>
      <ServicesHero
        id="app-development"
        title={
          <>
            Custom Applications
            <br />
            Built for Performance
            <br />
            and Scale
          </>
        }
        description="We design and build web, mobile, and cross-platform applications that are engineered for reliability, performance, and long-term maintainability. Whether you need a customer-facing mobile app, an internal operations tool, or a complex multi-platform system, our development teams deliver on time and to spec."
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
                  <p className="text-[0.95rem] text-[#666] leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
