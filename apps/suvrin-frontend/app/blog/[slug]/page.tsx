import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";

const ALL_POSTS = [
  {
    slug: "journey-from-idea-to-ai-product",
    tag: "AI Products",
    date: "JAN 8, 2026",
    title: "The Journey from Idea to AI Product",
    description: "Learn how to take an AI concept from a rough idea to a market-ready product. Our step-by-step guide covers ideation, prototyping, data strategy, development, and launch — with real examples.",
    intro: "Every great AI product started as a half-formed idea in a meeting room. The gap between that idea and a shipped, valuable product is where most AI initiatives fall apart. This guide walks you through our proven process for turning an AI concept into a production system — with the discipline and clarity that actually gets things built.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "choosing-right-erp-india-middle-east",
    tag: "ERP",
    date: "DEC 10, 2025",
    title: "Choosing the Right ERP for India and the Middle East",
    description: "Comparing ERP solutions for SMEs in India and the GCC? We break down the key factors — cost, localisation, Arabic support, GST compliance, and scalability — to help you choose the right platform.",
    intro: "ERP selection is one of the highest-stakes technology decisions a growing business will make. Get it right and you unlock years of operational efficiency. Get it wrong and you are looking at failed implementations, sunk costs, and frustrated teams. This guide gives you the framework to evaluate ERP options specifically for the Indian and GCC market context.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "odoos-rise-in-india",
    tag: "Odoo",
    date: "JAN 12, 2025",
    title: "Odoo's Rise in India",
    description: "How Odoo went from an open-source curiosity to the ERP of choice for Indian SMEs — and why its trajectory in the Middle East is just beginning.",
    intro: "Five years ago, most Indian CFOs had never heard of Odoo. Today, it is the fastest-growing ERP platform in the SME segment — competing directly with SAP and Oracle at a fraction of the cost. Here is the story of how that happened, and what it means for businesses evaluating ERP in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80",
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = ALL_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Suvrin Technologies`,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = ALL_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-40 pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-8">
          <span className="text-sm font-bold text-[#0546e0] uppercase tracking-wider">{post.tag}</span>
          <span className="text-sm text-[#888] ml-4">{post.date}</span>
        </div>
        
        <h1 className="text-[2.5rem] font-serif font-bold text-[#111] mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-[1.15rem] text-[#333] leading-relaxed font-serif">
            {post.intro}
          </p>
          <div className="mt-12 pt-8 border-t border-[#eee]">
            <p className="text-[#666] text-[0.95rem]">
              This is a preview of the article. The full content will be available soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
