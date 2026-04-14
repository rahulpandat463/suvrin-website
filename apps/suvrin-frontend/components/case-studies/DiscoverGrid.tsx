"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { categories, caseStudies, slugify } from "./data";

interface DiscoverGridProps {
  initialFilter?: string;
  disableScroll?: boolean;
}

function DiscoverGridContent({ initialFilter, disableScroll }: DiscoverGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(initialFilter || "Strategy & Advisory");

  useEffect(() => {
    // Priority: query param > initialFilter prop > default
    const filterParam = searchParams.get("filter");
    if (filterParam && categories.includes(filterParam)) {
      setActiveFilter(filterParam);
      if (!disableScroll) scrollToDiscover();
    } else if (initialFilter && categories.includes(initialFilter)) {
      setActiveFilter(initialFilter);
      if (!disableScroll) scrollToDiscover();
    }
  }, [searchParams, initialFilter, disableScroll]);

  const scrollToDiscover = () => {
    const element = document.getElementById("discover");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilterClick = (cat: string) => {
    setActiveFilter(cat);
    router.push(`/service-scope/${slugify(cat)}`);
  };

  const filteredStudies = caseStudies.filter((cs) =>
    cs.categories.includes(activeFilter)
  );

  return (
    <section className="py-24 bg-white" id="discover">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-serif tracking-tight text-[#111] mb-4">
            Discover our case studies
          </h2>
          <p className="text-[1.1rem] text-[#555] font-sans">
            See how we deliver world-class AI with acceleration.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-14">
          <p className="text-[0.9rem] font-medium text-[#888] mb-6">
            Service Scope:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-5 py-2 rounded-full text-[0.9rem] font-medium transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-[#0546e0] border-[#0546e0] text-white shadow-lg shadow-blue-500/20"
                    : "bg-[#f5f5f7] border-transparent text-[#333] hover:bg-[#e8e8ed]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/study/${study.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[1.4/1] w-full overflow-hidden rounded-[24px] mb-8 shadow-sm transition-all duration-500 group-hover:shadow-md">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.5rem] font-serif tracking-tight text-[#111] leading-[1.25] group-hover:text-[#0546e0] transition-colors">
                  {study.title}
                </h3>
                <div className="text-[1rem] text-[#888] font-sans">
                  {study.location}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-[#888] text-[1.1rem] italic font-serif">
              Expanding our portfolio... check back soon for more {activeFilter}{" "}
              cases.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function DiscoverGrid(props: DiscoverGridProps) {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading Case Studies...</div>}>
      <DiscoverGridContent {...props} />
    </Suspense>
  );
}