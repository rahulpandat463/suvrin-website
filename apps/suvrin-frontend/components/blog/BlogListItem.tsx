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

export default function BlogListItem({ post }: { post: BlogPost }) {
  return (
    <div className="group py-12 border-b border-[#eeeeee] last:border-0">
      <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        {/* Text Content (Left) */}
        <div className="flex-1 flex flex-col pt-2">
          <span className="text-[#888] text-[0.75rem] font-bold uppercase tracking-widest mb-6 leading-none">
            {post.date}
          </span>
          
          <h3 className="text-[1.25rem] font-heading font-medium text-[#111] leading-tight mb-3 group-hover:text-[#0546e0] transition-colors tracking-tight">
            {post.title}
          </h3>
          
          <p className="text-[#666] text-[0.95rem] leading-relaxed max-w-[650px]">
            {post.excerpt}
          </p>
        </div>

        {/* Image (Right) */}
        <div className="w-full md:w-[320px] lg:w-[400px] aspect-[1.8/1] relative rounded-3xl overflow-hidden bg-[#f4f4f5] shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </Link>
    </div>
  );
}
