import Link from "next/link";
import BlogHero from "@/components/blog/BlogHero";
import BlogListItem from "@/components/blog/BlogListItem";
import BlogSidebar from "@/components/blog/BlogSidebar";
import FinalCTA from "@/components/home/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & AI Blog | Insights from Suvrin Technologies",
  description: "Read the latest insights on AI, Odoo ERP, digital transformation, and software development from the Suvrin Technologies team. Practical guides for business leaders and technology teams.",
};

const ALL_POSTS = [
  {
    slug: "journey-from-idea-to-ai-product",
    tag: "AI Products",
    date: "JAN 8, 2026",
    title: "The Journey from Idea to AI Product",
    excerpt: "Every great AI product started as a half-formed idea in a meeting room. The gap between that idea and a shipped, valuable product is where most AI initiatives fall apart. This guide walks you through our proven process for turning an AI concept into a production system — with the discipline and clarity that actually gets things built.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "choosing-right-erp-india-middle-east",
    tag: "ERP",
    date: "DEC 10, 2025",
    title: "Choosing the Right ERP for India and the Middle East",
    excerpt: "ERP selection is one of the highest-stakes technology decisions a growing business will make. Get it right and you unlock years of operational efficiency. Get it wrong and you are looking at failed implementations, sunk costs, and frustrated teams. This guide gives you the framework to evaluate ERP options specifically for the Indian and GCC market context.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "odoos-rise-in-india",
    tag: "Odoo",
    date: "JAN 12, 2025",
    title: "Odoo's Rise in India",
    excerpt: "Five years ago, most Indian CFOs had never heard of Odoo. Today, it is the fastest-growing ERP platform in the SME segment — competing directly with SAP and Oracle at a fraction of the cost. Here is the story of how that happened, and what it means for businesses evaluating ERP in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Blog() {
  const featuredPost = ALL_POSTS[0];
  const listPosts = ALL_POSTS.slice(1);

  return (
    <div className="bg-[#f4f4f5] min-h-screen pt-32 pb-24">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#0546e0] uppercase tracking-wider">Insights from Our Experts</span>
          <h1 className="text-[2.5rem] font-serif font-bold text-[#111] mt-2 mb-4">
            Technology Intelligence for Business Leaders
          </h1>
          <p className="text-[#666] max-w-[600px] mx-auto text-[1.1rem] leading-relaxed">
            The Suvrin blog is where our engineers, AI specialists, and consultants share what they are learning, building, and thinking about. No fluff. No vendor pitches. Just practical intelligence to help you make better technology decisions.
          </p>
        </div>

        {/* Featured Section Container */}
        {featuredPost && (
          <div className="mb-20">
            <BlogHero post={featuredPost} />
          </div>
        )}

        {/* List Section with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar */}
          <BlogSidebar />

          {/* Main List Column */}
          <div className="flex-1">
            <div className="flex flex-col">
              {listPosts.map((post) => (
                <BlogListItem key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
