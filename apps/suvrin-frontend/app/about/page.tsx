import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-b border-border" id="about-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[3px] mb-4">About Suvrin</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mb-4 text-text-primary max-w-[700px]">
            Where ideas become
            <br />
            <em className="font-light">AI products</em>
          </h1>
          <p className="text-[1.15rem] text-text-secondary max-w-[500px] leading-7">
            We are a team of AI engineers, strategists, and designers dedicated
            to building AI solutions that create real business value.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" id="mission">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Our Mission</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">
                Making AI accessible for every business
              </h2>
              <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
                We believe every company deserves access to world-class AI
                expertise. Our mission is to bridge the gap between cutting-edge
                AI research and practical business applications, helping
                organizations of all sizes harness the transformative power of
                artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "💡", title: "Innovation", text: "We stay at the forefront of AI research and apply the latest techniques to solve real problems." },
                { icon: "🎯", title: "Impact", text: "Every project is measured by the tangible value it creates for our clients." },
                { icon: "🤝", title: "Partnership", text: "We work as an extension of your team, not just a vendor." },
                { icon: "🔒", title: "Trust", text: "Enterprise-grade security and transparency in everything we build." },
              ].map((v) => (
                <div key={v.title} className="bg-bg-card border border-border rounded-2xl p-8 text-center transition-all duration-250 hover:border-border-light hover:-translate-y-1">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <div className="text-[1.05rem] font-semibold text-text-primary mb-2">{v.title}</div>
                  <div className="text-[0.88rem] text-text-secondary leading-relaxed">{v.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg-secondary" id="team">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Our Team</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">
              Meet the minds behind Suvrin
            </h2>
            <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
              A world-class team of AI experts, engineers, and strategists.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { initials: "AK", name: "Arjun Kumar", role: "CEO & Co-Founder" },
              { initials: "PS", name: "Priya Sharma", role: "CTO & Co-Founder" },
              { initials: "RM", name: "Rahul Mehta", role: "Head of AI Engineering" },
              { initials: "NS", name: "Neha Singh", role: "Lead AI Strategist" },
            ].map((m) => (
              <div key={m.name} className="text-center p-8 bg-bg-card border border-border rounded-2xl transition-all duration-250 hover:border-border-light hover:-translate-y-1">
                <div className="w-20 h-20 rounded-full bg-accent-light flex items-center justify-center text-[1.8rem] font-bold text-accent mx-auto mb-4">
                  {m.initials}
                </div>
                <div className="text-base font-semibold text-text-primary mb-1">{m.name}</div>
                <div className="text-[0.82rem] text-text-muted">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24" id="careers">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">Careers</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4 text-text-primary">Join our team</h2>
            <p className="text-[1.05rem] text-text-secondary max-w-[560px] leading-7">
              We&apos;re always looking for talented individuals who are
              passionate about AI and pushing the boundaries of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Senior AI Engineer", text: "Build and deploy production-grade AI systems. Experience with LLMs, RAG pipelines, and ML infrastructure required." },
              { title: "AI Product Manager", text: "Drive AI product strategy from concept to launch. Work closely with engineering and clients to deliver business value." },
              { title: "Full Stack Developer", text: "Build enterprise-grade AI platforms and user interfaces. React, Node.js, and cloud experience preferred." },
              { title: "AI Strategist", text: "Consult with clients to identify high-value AI opportunities and develop implementation roadmaps." },
            ].map((j) => (
              <div key={j.title} className="bg-bg-card border border-border rounded-2xl p-9 transition-all duration-250 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{j.title}</h3>
                <p className="text-[0.92rem] text-text-secondary leading-relaxed">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-primary text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-text-primary">Ready to work with us?</h2>
          <p className="text-[1.1rem] text-text-secondary mb-10 max-w-[500px] mx-auto">
            Let&apos;s discuss how Suvrin can accelerate your AI journey.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-text-primary bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(232,134,58,0.35)]">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
