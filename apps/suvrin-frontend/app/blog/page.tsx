import Link from "next/link";
import BlogHero from "@/components/blog/BlogHero";
import BlogListItem from "@/components/blog/BlogListItem";
import BlogSidebar from "@/components/blog/BlogSidebar";
import FinalCTA from "@/components/home/FinalCTA";

const ALL_POSTS = [
  {
    slug: "ai-product-strategy",
    tag: "Featured",
    date: "JAN 8, 2026",
    title: "The journey from idea to AI product",
    excerpt: "Learn how AI product strategy is different from regular product strategy. A comprehensive guide on going from an initial AI concept to a live, production-ready AI product that delivers real value.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "data-strategy",
    tag: "Data Strategy",
    date: "DEC 10, 2025",
    title: "Data strategies for AI applications",
    excerpt: "If data is gold, how do you think about it? Learn how to structure your data for optimal AI performance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ai-chatbot-healthcare",
    tag: "Healthcare",
    date: "JAN 12, 2025",
    title: "How to build an AI chatbot for clinics",
    excerpt: "Everything you need to know about chatbots before getting one for your clinic. Compliance, safety, and patient experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "fractional-cto",
    tag: "Engineering",
    date: "JAN 4, 2026",
    title: "Why work with a Fractional CTO?",
    excerpt: "Learn how to get a CTO to work on the most high-leverage tasks without the full-time overhead.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ai-startups-finance",
    tag: "AI Agents",
    date: "DEC 2, 2025",
    title: "9 Hot AI Startups Are Disrupting the Finance Industry",
    excerpt: "Get inspiration where your company could increase profit with the help of AI agents and automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "saas-mistakes",
    tag: "Strategy",
    date: "JAN 26, 2026",
    title: "7 SaaS Mistakes You Don't Want to Make",
    excerpt: "A guide for learnings on product building that could save you $100ks if you implement them fast.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Blog() {
  const featuredPost = ALL_POSTS[0];
  const listPosts = ALL_POSTS.slice(1);

  return (
    <div className="bg-[#f4f4f5] min-h-screen pt-32 pb-24">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Featured Section Container */}
        <div className="mb-20">
          <BlogHero post={featuredPost} />
        </div>

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

