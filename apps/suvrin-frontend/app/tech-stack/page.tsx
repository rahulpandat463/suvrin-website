import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import { Footer } from "@/components/Footer";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology Stack | React, Node.js, Python, Flutter & More — Suvrin Technologies",
  description: "Suvrin Technologies works with a modern, battle-tested technology stack including React, Angular, Vue, Node.js, Python, Java, iOS, Android, Flutter, and React Native for web, mobile, and AI development.",
};

export default function TechStackPage() {
  const categories = [
    {
      title: "Front-End Development",
      description: "Interfaces That Perform and Delight. We specialise in React, Angular, and Vue.",
      href: "/tech-stack/front-end"
    },
    {
      title: "Back-End Development",
      description: "The Engine Behind Your Application. Python, Node.js, and Java.",
      href: "/tech-stack/back-end"
    },
    {
      title: "Mobile Development",
      description: "iOS, Android & Cross-Platform. Swift, Kotlin, React Native, and Flutter.",
      href: "/tech-stack/mobile"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="tech-stack"
        title={
          <>
            Our Technology Stack
          </>
        }
        description="We work with a carefully selected set of proven technologies — chosen not for trend-chasing, but for their ability to deliver reliable, scalable, and maintainable solutions for our clients. Our engineers are specialists, not generalists — you get deep expertise in each technology we offer."
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                href={cat.href}
                key={i}
                className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3 group-hover:text-[#0546e0] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[0.95rem] text-[#666] leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-auto pt-6 text-[#0546e0] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore {cat.title} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FrameworkLogos />
      <Footer />
    </main>
  );
}
