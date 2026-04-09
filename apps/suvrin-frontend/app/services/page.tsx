import Link from "next/link";

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-b border-border" id="services-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[3px] mb-4">Our Services</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mb-4 text-text-primary max-w-[700px]">
            AI solutions built
            <br />
            <em className="font-light">for your business</em>
          </h1>
          <p className="text-[1.15rem] text-text-secondary max-w-[500px] leading-7">
            From strategy to deployment, we offer comprehensive AI services
            tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-24" id="strategy">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Strategy &amp; Advisory</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">
                AI Strategy &amp; Alignment
              </h2>
              <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
                We help you define your AI vision, identify high-value
                opportunities, and create a roadmap that aligns with your
                business goals. Our strategic consulting ensures you make
                informed decisions and maximize ROI.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { icon: "📊", title: "AI Opportunity Assessment", text: "Identify and prioritize AI use cases that deliver the highest business value." },
                { icon: "🗺️", title: "Roadmap & Costing", text: "Comprehensive project planning covering scope, timelines, ROI projections, and technical requirements." },
                { icon: "👥", title: "Stakeholder Alignment", text: "Executive workshops and presentations to align leadership on AI initiatives and investment." },
              ].map((c) => (
                <div key={c.title} className="bg-bg-card border border-border rounded-2xl p-9 transition-all duration-250 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  <div className="w-12 h-12 bg-accent-light rounded-[10px] flex items-center justify-center text-[1.4rem] mb-5">{c.icon}</div>
                  <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{c.title}</h3>
                  <p className="text-[0.92rem] text-text-secondary leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="py-24 bg-bg-secondary" id="development">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">AI Engineering</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">AI Development</h2>
            <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
              Our engineers build production-grade AI systems tailored to your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤖", title: "AI Agents", text: "Autonomous AI agents that handle complex workflows, customer interactions, and decision-making processes." },
              { icon: "🧠", title: "Knowledge Systems", text: "RAG pipelines, vector databases, and intelligent search systems that leverage your organization's data." },
              { icon: "📱", title: "AI Products & Platforms", text: "End-to-end AI product development from concept to production, with enterprise-grade UX and scalability." },
              { icon: "🔧", title: "LLM Fine-Tuning", text: "Custom model training and fine-tuning to optimize performance for your specific domain and use cases." },
              { icon: "⚡", title: "Automation & Integration", text: "Seamless integration of AI capabilities into your existing systems, workflows, and business processes." },
              { icon: "🏗️", title: "AI Infrastructure", text: "Cloud-native AI infrastructure design, deployment, and optimization for performance and cost efficiency." },
            ].map((c) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-2xl p-9 transition-all duration-250 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-accent-light rounded-[10px] flex items-center justify-center text-[1.4rem] mb-5">{c.icon}</div>
                <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{c.title}</h3>
                <p className="text-[0.92rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-24" id="deployment">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Launch &amp; Scale</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">Deployment &amp; Commercialization</h2>
            <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
              We don&apos;t just build — we launch, validate, and scale your AI solutions for maximum business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🧪", title: "Testing & Validation", text: "Rigorous testing, benchmarking, and validation to ensure your AI performs reliably in production." },
              { icon: "🚀", title: "Go-to-Market", text: "Strategic launch planning, user onboarding, and adoption strategies to maximize market impact." },
              { icon: "📈", title: "Growth & Optimization", text: "Continuous monitoring, optimization, and scaling to drive sustained growth and competitive advantage." },
            ].map((c) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-2xl p-9 transition-all duration-250 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-accent-light rounded-[10px] flex items-center justify-center text-[1.4rem] mb-5">{c.icon}</div>
                <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{c.title}</h3>
                <p className="text-[0.92rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-24 bg-bg-secondary" id="automation">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Intelligent Automation</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">Automation &amp; AI Agents</h2>
            <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
              Streamline operations with intelligent automation powered by cutting-edge AI agent frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔄", title: "Workflow Automation", text: "Automate complex business processes with AI-driven workflows that learn and adapt over time." },
              { icon: "💬", title: "Conversational AI", text: "Deploy intelligent chatbots and virtual assistants that handle customer queries with human-like understanding." },
              { icon: "🛡️", title: "Governance & Risk", text: "Implement AI governance frameworks to ensure responsible, transparent, and compliant AI operations." },
            ].map((c) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-2xl p-9 transition-all duration-250 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-accent-light rounded-[10px] flex items-center justify-center text-[1.4rem] mb-5">{c.icon}</div>
                <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{c.title}</h3>
                <p className="text-[0.92rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-primary text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-text-primary">Ready to build your AI solution?</h2>
          <p className="text-[1.1rem] text-text-secondary mb-10 max-w-[500px] mx-auto">
            Tell us about your project and we&apos;ll help you find the right approach.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-text-primary bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(232,134,58,0.35)]">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
