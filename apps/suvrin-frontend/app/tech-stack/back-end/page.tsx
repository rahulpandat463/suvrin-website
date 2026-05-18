import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import { Footer } from "@/components/Footer";
import FrameworkLogos from "@/components/shared/FrameworkLogos";

export const metadata: Metadata = {
  title: "Back-End Development | Python, Node.js, Java | Suvrin Technologies",
  description: "Back-End Development — The Engine Behind Your Application. We build robust server-side systems.",
};

export default function BackEndPage() {
  const points = [
    {
      title: "Python",
      description: "Python is our primary language for AI, machine learning, and data-intensive applications. Its rich ecosystem — FastAPI, Django, scikit-learn, TensorFlow, PyTorch, LangChain — makes it the definitive choice for any project with an AI or data component.",
      subPoints: [
        "FastAPI and Django REST framework for high-performance APIs",
        "AI and ML model development and deployment",
        "Data processing, ETL pipelines, and analytics backends",
        "Odoo ERP customisation (Python-based)"
      ]
    },
    {
      title: "Node.js",
      description: "Node.js powers our real-time and high-throughput applications — from chat systems to live dashboards and streaming data pipelines. Its event-driven architecture makes it uniquely suited for applications that require simultaneous connections and low latency."
    },
    {
      title: "Java",
      description: "Java remains the backbone of enterprise software for good reason — reliability, performance, and a mature ecosystem. We use Java for large-scale enterprise backends, financial systems, and applications that require the highest levels of stability and security."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <ServicesHero
        id="back-end"
        title={
          <>
            Back-End Development —
            <br />
            The Engine Behind
            <br />
            Your Application
          </>
        }
        description="The best front-end experiences are only as good as the APIs and systems powering them. Our back-end engineers build robust, secure, and highly scalable server-side systems using Python, Node.js, and Java."
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
