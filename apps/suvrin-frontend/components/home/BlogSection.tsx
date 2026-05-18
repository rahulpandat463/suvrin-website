/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function BlogSection() {
  const blogPosts = [
    {
      title:
        "The Journey from Idea to AI Product — A practical framework for taking your first AI concept to a market-ready product",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Data Strategies for AI Applications — How to structure your data architecture to unlock AI's full potential",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "How to Build an AI Chatbot for Clinics — A step-by-step guide to deploying conversational AI in healthcare settings",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Choosing the Right ERP Solution for Businesses in India and the Middle East",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      title:
        "Odoo's Meteoric Rise in India: From Open-Source Roots to Enterprise Dominance",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      className="bg-white py-12 pb-6 border-t border-[#e5e5e5] border-dashed"
      id="blog"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 border-x border-[#e5e5e5] border-dashed">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary tracking-tight font-serif mb-4">
              Insights from Our AI Experts
            </h2>
            <p className="text-[1.1rem] text-[#666] leading-relaxed">
              Practical guides, strategic thinking, and technical deep-dives
              from the Suvrin team — designed to help business leaders make
              confident AI decisions.
            </p>
          </div>
          <Link
            href="/blog"
            className="bg-[#0546e0] hover:bg-[#0437b0] transition-colors text-white px-8 py-3.5 rounded-full font-medium text-[1.05rem] self-start md:self-auto"
          >
            Read our blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-[#fbfcfc] rounded-2xl p-4 border border-[#f0f0f0] group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-[220px] rounded-xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-[1.3rem] font-serif leading-[1.3] text-[#111] mb-8 px-2 tracking-tight group-hover:text-[#0546e0] transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-[0.75rem] text-[#888] uppercase tracking-[0.1em] font-semibold px-2 mt-auto pb-3 group-hover:text-[#0546e0] transition-colors">
                Read More{" "}
                <svg
                  className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
