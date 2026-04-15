import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
  slug: string;
}

export default function BlogHero({ post }: { post: BlogPost }) {
  return (
    <div className="relative w-full bg-white rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-[#eeeeee]">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Image Section (Left) */}
        <div className="lg:w-[48%] relative h-[300px] lg:h-auto overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section (Right) */}
        <div className="lg:w-[52%] p-12 lg:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-6 mb-10">
            <span className="px-6 py-2.5 bg-[#e9eefd] text-[#0546e0] text-[0.75rem] font-bold rounded-full uppercase tracking-wider shadow-sm">
              {post.tag}
            </span>
            <span className="text-[#888] text-[0.8rem] font-bold uppercase tracking-[0.2em] leading-none">
              • &nbsp; {post.date}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-heading font-medium text-[#111] leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>

          <p className="text-[1.1rem] text-[#555] leading-relaxed mb-12 max-w-[600px]">
            {post.excerpt}
          </p>

          <div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center px-9 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white text-[1rem] font-bold rounded-full transition-all duration-300 hover:shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:-translate-y-1"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
