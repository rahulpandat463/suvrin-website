"use client";

import { useState } from "react";

export default function BlogSidebar() {
  const [searchValue, setSearchValue] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    "Strategy",
    "Data",
    "Healthcare",
    "Engineering",
    "AI Agents",
    "Governance",
  ];

  return (
    <aside className="w-full lg:w-[280px] pr-8 flex flex-col gap-12">
      {/* SF AI Logo Section */}
      <div className="flex flex-col items-start gap-0 leading-none">
        <span className="text-[3.5rem] font-bold tracking-tighter text-[#111]">SUV</span>
        <span className="text-[3.5rem] font-bold tracking-tighter text-[#111] -mt-4">RIN</span>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <div className="flex items-center gap-3 py-2 border-b border-[#dddddd] group-focus-within:border-[#111] transition-colors">
          <svg className="w-5 h-5 text-[#888] group-focus-within:text-[#111] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-base w-full placeholder:text-[#888]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      {/* Categories Dropdown/List */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <button 
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex items-center justify-between w-full py-2 border-b border-[#dddddd] text-base text-[#111] font-medium group cursor-pointer"
          >
            Categories
            <svg 
              className={`w-4 h-4 text-[#888] transition-all duration-300 ${isCategoriesOpen ? "rotate-180" : ""}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Categories List */}
        <div className={`flex flex-col gap-3 mt-1 overflow-hidden transition-all duration-300 ${isCategoriesOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}>
          {categories.map((category) => (
            <button
              key={category}
              className="text-left text-[0.95rem] text-[#666] hover:text-[#0546e0] transition-colors py-1"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
