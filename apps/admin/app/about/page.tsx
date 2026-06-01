"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Briefcase, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const cards = [
    {
      title: "Who We Are",
      description:
        "Manage your company's story, mission, vision, and values. Keep your About content fresh and up to date.",
      icon: Users,
      path: "/about/who-we-are",
      color: "blue",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
      badge: "Company Info",
      badgeColor: "text-blue-600",
      badgeBg: "bg-blue-50",
    },
    {
      title: "Careers",
      description:
        "Manage job openings, internship opportunities, and career-related content to attract the right talent.",
      icon: Briefcase,
      path: "/about/careers",
      color: "violet",
      gradient: "from-violet-50 to-violet-100",
      border: "border-violet-200",
      iconBg: "bg-violet-600",
      badge: "Jobs & Openings",
      badgeColor: "text-violet-600",
      badgeBg: "bg-violet-50",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Back Button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          ABOUT
        </div>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
          About Management
        </h1>
        <p className="text-text-muted text-sm font-medium">
          Manage your company's About page sections from one place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.path}
              className={`group relative flex flex-col gap-5 p-7 bg-gradient-to-br ${card.gradient} border ${card.border} rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${card.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Badge */}
              <span className={`absolute top-7 right-7 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeColor} border ${card.border}`}>
                {card.badge}
              </span>

              {/* Text */}
              <div className="space-y-2">
                <h2 className="text-xl font-extrabold text-text-primary group-hover:text-inherit transition-colors">
                  {card.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-sm font-semibold text-text-muted group-hover:gap-2 transition-all">
                Manage <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
