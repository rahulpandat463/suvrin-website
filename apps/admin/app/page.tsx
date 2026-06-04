"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Layout, Briefcase, BarChart, MessageSquare, Cpu, ChevronRight, RefreshCw } from "lucide-react";

const _rawApiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
const API_URL = _rawApiUrl.endsWith("/") ? _rawApiUrl.slice(0, -1) + "/api" : (_rawApiUrl.endsWith("/api") ? _rawApiUrl : _rawApiUrl + "/api");

interface SectionCount {
  heros: number | null;
  workWith: number | null;
  impact: number | null;
  testimonials: number | null;
  tools: number | null;
}

const sections = [
  {
    name: "Heros",
    path: "/heros",
    icon: Layout,
    color: "text-blue-500",
    bg: "bg-blue-50",
    countKey: "heros" as keyof SectionCount,
    label: "hero section",
  },
  {
    name: "Work With",
    path: "/work-with",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-50",
    countKey: "workWith" as keyof SectionCount,
    label: "partner logo",
  },
  {
    name: "Impact By Number",
    path: "/impact-by-number",
    icon: BarChart,
    color: "text-green-500",
    bg: "bg-green-50",
    countKey: "impact" as keyof SectionCount,
    label: "stat",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: MessageSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    countKey: "testimonials" as keyof SectionCount,
    label: "review",
  },
  {
    name: "Tools & Technology",
    path: "/tools",
    icon: Cpu,
    color: "text-red-500",
    bg: "bg-red-50",
    countKey: "tools" as keyof SectionCount,
    label: "tool",
  },
];

export default function Home() {
  const [counts, setCounts] = useState<SectionCount>({
    heros: null,
    workWith: null,
    impact: null,
    testimonials: null,
    tools: null,
  });
  const [refreshing, setRefreshing] = useState(false);

  const fetchCounts = async () => {
    setRefreshing(true);
    try {
      const [herosRes, workWithRes, impactRes, testimonialsRes, toolsRes] = await Promise.allSettled([
        fetch(`${API_URL}/heros`).then(r => r.json()),
        fetch(`${API_URL}/WorkedWith`).then(r => r.json()),
        fetch(`${API_URL}/impact`).then(r => r.json()),
        fetch(`${API_URL}/testimonial`).then(r => r.json()),
        fetch(`${API_URL}/tools`).then(r => r.json()),
      ]);

      setCounts({
        heros: herosRes.status === "fulfilled" ? (herosRes.value.heros?.length ?? 0) : null,
        workWith: workWithRes.status === "fulfilled" ? (workWithRes.value.count ?? 0) : null,
        impact: impactRes.status === "fulfilled" ? (impactRes.value.count ?? 0) : null,
        testimonials: testimonialsRes.status === "fulfilled" ? (testimonialsRes.value.count ?? 0) : null,
        tools: toolsRes.status === "fulfilled" ? (toolsRes.value.count ?? 0) : null,
      });
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => { fetchCounts(); }, []);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE DASHBOARD
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Welcome to your admin control panel.
          </p>
        </div>
        <button
          onClick={fetchCounts}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} /> Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const count = counts[section.countKey];
          return (
            <Link
              href={section.path}
              key={section.name}
              className="group block p-6 bg-white border border-border rounded-3xl hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className={`p-4 rounded-2xl ${section.bg} ${section.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="p-2 rounded-full bg-bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-text-primary" />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-blue-600 transition-colors">
                  {section.name}
                </h3>
                <p className="text-text-muted text-sm mt-2">
                  Manage your {section.name.toLowerCase()} content and settings.
                </p>
                {/* Live count badge */}
                <div className="mt-4">
                  {count === null ? (
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-muted/60 italic">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Loading...
                    </span>
                  ) : (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${section.bg} ${section.color}`}>
                      {count} {section.label}{count !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
              {/* Decorative gradient blur */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full ${section.bg}`}></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
