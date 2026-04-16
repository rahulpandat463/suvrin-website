import Link from "next/link";

interface CategoryHeroProps {
  category: string;
  description: string;
}

export default function CategoryHero({ category, description }: CategoryHeroProps) {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 px-6 lg:px-10 pb-8 bg-[#fbfbfb]">
      <section className="mx-auto max-w-[1240px] w-full" id="category-hero">

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Left Card: Focus on the specific service */}
          <div className="bg-white rounded-[32px] p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-center min-h-[400px] sm:min-h-[450px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/[0.02] relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef652a]/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#ef652a]/[0.05] transition-colors duration-700" />
            
            <h1 className="text-[clamp(2rem,5vw,4.2rem)] tracking-tight text-[#111] leading-[1.05] mb-8 font-serif relative z-10">
              {category} <br />
              <span className="text-[#ef652a]">Specialization</span>
            </h1>
            
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#444] leading-relaxed mb-12 max-w-full sm:max-w-[550px] font-sans relative z-10">
              {description}
            </p>

            <div className="relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 text-[0.95rem] font-bold text-white bg-[#111] rounded-full transition-all duration-300 hover:bg-[#ef652a] hover:shadow-[0_8px_24px_rgba(239,101,42,0.2)]"
              >
                Discuss your {category} project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>

          {/* Right Card: Dynamic Graphics or Info Stats */}
          <div className="bg-white rounded-[32px] p-10 flex flex-col items-center justify-center min-h-[400px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/[0.02] relative overflow-hidden">
             {/* Abstract Geometric Pattern */}
             <div className="absolute inset-0 opacity-[0.05]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                         <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>

             <div className="relative text-center">
                <div className="text-[4.5rem] font-serif text-[#ef652a]/20 leading-none mb-2 select-none">Impact</div>
                <div className="text-[0.95rem] font-medium text-[#666] tracking-widest uppercase">Expertise Focused Delivery</div>
                
                {/* Visual Placeholder for Category Icon/Design */}
                <div className="mt-12 w-32 h-1 bg-[#ef652a]/20 mx-auto rounded-full" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}