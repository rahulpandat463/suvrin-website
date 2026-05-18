import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import { Footer } from "@/components/Footer";
import FrameworkLogos from "@/components/shared/FrameworkLogos";

export const metadata: Metadata = {
  title: "Mobile App Development | iOS, Android, Flutter | Suvrin Technologies",
  description: "Mobile App Development — iOS, Android & Cross-Platform. We deliver apps that are fast and polished.",
};

export default function MobilePage() {
  const points = [
    {
      title: "iOS Development",
      description: "Native iOS development using Swift and SwiftUI — for apps that demand the highest performance, tightest hardware integration, and best user experience on Apple devices."
    },
    {
      title: "Android Development",
      description: "Native Android development using Kotlin — for apps targeting the world's largest mobile operating system with access to the full Android feature set."
    },
    {
      title: "React Native",
      description: "React Native lets us build one codebase that runs on both iOS and Android — significantly reducing development time and cost without sacrificing the native look, feel, and performance that users expect."
    },
    {
      title: "Flutter",
      description: "Google's Flutter framework delivers beautifully designed cross-platform apps with exceptional performance. We recommend Flutter for projects that prioritise pixel-perfect UI consistency across iOS, Android, and even web."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="mobile"
        title={
          <>
            Mobile App Development —
            <br />
            iOS, Android &
            <br />
            Cross-Platform
          </>
        }
        description="Mobile is where your users live. Whether you need a native iOS app, an Android application, or a cross-platform solution that runs on both, our mobile team delivers apps that are fast, polished, and loved by users."
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
                <p className="text-[0.95rem] text-[#666] leading-relaxed">
                  {point.description}
                </p>
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
