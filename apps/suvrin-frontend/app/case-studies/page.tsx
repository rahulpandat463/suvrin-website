import Link from "next/link";

const caseStudies = [
  { id: "revenue-intelligence", icon: "📊", tag: "AI Products", title: "AI Revenue Intelligence Platform", text: "Built a comprehensive AI-powered revenue intelligence platform that automates capital raising analysis and investor matching.", stats: [{ value: "2.5x", label: "Revenue Growth" }, { value: "+40%", label: "Efficiency" }] },
  { id: "customer-support", icon: "💬", tag: "Automation", title: "Reduce Customer Support Backlog by 40%", text: "Deployed AI-powered support automation for an automotive company, dramatically reducing response times and backlog.", stats: [{ value: "40%", label: "Backlog Reduction" }, { value: "3x", label: "Faster Response" }] },
  { id: "survey-coach", icon: "🎯", tag: "AI Agents", title: "AI Survey Coach for 20k Employees", text: "Created an intelligent coaching agent that personalizes feedback for 20,000+ employees based on survey data.", stats: [{ value: "20k+", label: "Employees" }, { value: "+50%", label: "Engagement" }] },
  { id: "construction", icon: "🏗️", tag: "Automation", title: "Accelerate Construction Takeoffs", text: "AI-powered automation that reduces construction takeoff time from hours to minutes with precision extraction.", stats: [{ value: "10x", label: "Faster Takeoffs" }, { value: "95%", label: "Accuracy" }] },
  { id: "healthcare", icon: "🏥", tag: "Enterprise", title: "Scale Healthcare Data Migrations by 200%", text: "Automated complex healthcare data migrations with AI-powered mapping and validation, reducing errors and timeline.", stats: [{ value: "200%", label: "Scale Increase" }, { value: "-70%", label: "Error Rate" }] },
  { id: "financial", icon: "💰", tag: "AI Products", title: "AI Financial Intelligence Platform", text: "Built a financial intelligence system for CPAs that automates analysis, reporting, and compliance checks.", stats: [{ value: "4x", label: "Faster Analysis" }, { value: "+35%", label: "ROI" }] },
];

export default function CaseStudies() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-b border-border" id="case-studies-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[3px] mb-4">Case Studies</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mb-4 text-text-primary max-w-[700px]">
            Real impact,
            <br />
            <em className="font-light">real results</em>
          </h1>
          <p className="text-[1.15rem] text-text-secondary max-w-[500px] leading-7">
            See how we&apos;ve helped companies across industries unlock the
            power of AI to drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24" id="products">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-250 hover:border-border-light hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="w-full h-[220px] bg-gradient-to-br from-bg-card-hover to-bg-secondary flex items-center justify-center text-5xl">
                  {cs.icon}
                </div>
                <div className="p-7">
                  <div className="text-[0.75rem] font-semibold text-accent uppercase tracking-wider mb-2.5">{cs.tag}</div>
                  <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">{cs.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{cs.text}</p>
                  <div className="flex gap-6 pt-4 border-t border-border">
                    {cs.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[1.1rem] font-bold text-accent">{stat.value}</div>
                        <div className="text-[0.78rem] text-text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-primary text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-text-primary">Want results like these?</h2>
          <p className="text-[1.1rem] text-text-secondary mb-10 max-w-[500px] mx-auto">
            Let&apos;s discuss how AI can transform your business operations.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-text-primary bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(232,134,58,0.35)]">
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
