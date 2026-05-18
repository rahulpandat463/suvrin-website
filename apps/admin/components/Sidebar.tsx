"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Briefcase,
  MessageSquare,
  Cpu,
  PenTool,
  Users,
  ChevronRight
} from "lucide-react";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const sections = [
    {
      title: "MAIN",
      items: [
        { name: "Home", Icon: Home, path: "/" },
        { name: "Work With", Icon: Briefcase, path: "/work-with", hasArrow: true },
        { name: "Testimonial", Icon: MessageSquare, path: "/testimonials", hasArrow: true },
        { name: "Tools & Technology", Icon: Cpu, path: "/tools", hasArrow: true },
        { name: "Blogs", Icon: PenTool, path: "/blogs", hasArrow: true },
        { name: "Our Team", Icon: Users, path: "/team", hasArrow: true },
      ]
    }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-sidebar-bg text-sidebar-text border-r border-border z-20 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      {/* Logo Section */}
      <div className={`h-16 flex items-center transition-all duration-300 border-b border-border ${isOpen ? "px-8 h-28" : "justify-center"}`}>
        {isOpen ? (
          <Image
            src="/top-logo.png"
            alt="Suvrin Logo"
            width={150}
            height={60}
            className="object-contain"
          />
        ) : (
          <span className="text-2xl font-black text-green-400 italic">S</span>
        )}
      </div>

      <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden">
        {sections.map((section, idx) => (
          <div key={section.title} className="mb-6">
            {/* Section Header or Divider */}
            {isOpen ? (
              <h3 className="px-8 text-[10px] font-bold tracking-widest uppercase mb-4">
                {section.title}
              </h3>
            ) : (
              <div className="mx-4 border-b border-dashed border-border mb-4 opacity-50"></div>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center transition-all duration-200 hover:bg-sidebar-active hover:text-sidebar-active-text group whitespace-nowrap px-4 py-3 ${isOpen ? "mx-4 rounded-xl" : "justify-center"}`}
                  title={!isOpen ? item.name : ""}
                >
                  <div className={`flex items-center gap-3 ${!isOpen && "justify-center"}`}>
                    <item.Icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {isOpen && (
                      <span className="text-sm font-medium">{item.name}</span>
                    )}
                  </div>
                  {isOpen && item.hasArrow && (
                    <ChevronRight className="ml-auto w-3 h-3 opacity-40 group-hover:opacity-100" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
