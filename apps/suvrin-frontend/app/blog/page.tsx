import Link from "next/link";

const posts = [
  { id: "ai-product-strategy", icon: "🚀", tag: "Strategy", title: "The Journey from Idea to AI Product", excerpt: "A comprehensive guide on going from an initial AI concept to a live, production-ready AI product that delivers real value." },
  { id: "data-strategy", icon: "📊", tag: "Data", title: "Data Strategies for AI Applications", excerpt: "How to think about data strategy for AI applications — from collection and governance to quality and pipeline design." },
  { id: "ai-chatbot-healthcare", icon: "🏥", tag: "Healthcare", title: "How to Build an AI Chatbot for Clinics", excerpt: "A comprehensive guide to building compliant, effective AI chatbots for healthcare environments." },
  { id: "llm-fine-tuning", icon: "🧠", tag: "Engineering", title: "When and How to Fine-Tune an LLM", excerpt: "Understanding when fine-tuning makes sense versus prompting strategies, RAG, or other techniques." },
  { id: "ai-agents-enterprise", icon: "🤖", tag: "AI Agents", title: "AI Agents in Enterprise Workflows", excerpt: "How autonomous AI agents are transforming enterprise operations and decision-making processes." },
  { id: "ai-governance", icon: "🛡️", tag: "Governance", title: "AI Governance: A Practical Framework", excerpt: "Building responsible AI with practical governance frameworks that balance innovation with risk management." },
];

export default function Blog() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-b border-border" id="blog-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[3px] mb-4">Blog</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mb-4 text-text-primary max-w-[700px]">
            From our
            <br />
            <em className="font-light">experts</em>
          </h1>
          <p className="text-[1.15rem] text-text-secondary max-w-[500px] leading-7">
            Insights, guides, and thought leadership from the Suvrin team on AI
            strategy, engineering, and deployment.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="no-underline">
                <div className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-250 hover:border-border-light hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  <div className="w-full h-[200px] bg-bg-card-hover flex items-center justify-center text-[2.5rem]">
                    {post.icon}
                  </div>
                  <div className="p-6">
                    <div className="text-[0.75rem] font-semibold text-accent uppercase tracking-wider mb-2.5">{post.tag}</div>
                    <h3 className="text-[1.1rem] font-semibold text-text-primary mb-2.5 leading-snug">{post.title}</h3>
                    <p className="text-[0.88rem] text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-[0.85rem] font-semibold text-accent hover:opacity-80 transition-opacity">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-primary text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-text-primary">Have a project in mind?</h2>
          <p className="text-[1.1rem] text-text-secondary mb-10 max-w-[500px] mx-auto">
            Connect with our team and let&apos;s explore how AI can drive your business forward.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-text-primary bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(232,134,58,0.35)]">
            Connect with Us →
          </Link>
        </div>
      </section>
    </>
  );
}
