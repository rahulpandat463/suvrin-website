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
  Info,
  ChevronRight
} from "lucide-react";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const sections = [
    {
      title: "MAIN",
      items: [
        {
          name: "Home",
          Icon: Home,
          path: "/",
          subItems: [
            { name: "Heros", path: "/heros" },
            { name: "Work With", path: "/work-with" },
            { name: "Impact By Number", path: "/impact-by-number" },
            { name: "Testimonial", path: "/testimonials" },
            { name: "Tools & Technology", path: "/tools" },
          ]
        },
        { name: "Blogs", Icon: PenTool, path: "/blogs", hasArrow: true },
        { name: "Our Team", Icon: Users, path: "/team", hasArrow: true },
        {
          name: "About",
          Icon: Info,
          path: "/about",
          subItems: [
            { name: "Who We Are", path: "/about/who-we-are" },
            { name: "Careers", path: "/about/careers" },
          ]
        },
      ]
    }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-sidebar-bg text-sidebar-text border-r border-border z-20 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      {/* Logo Section */}
      <div className={`h-16 flex items-center transition-all duration-300 border-b border-border ${isOpen ? "px-8 h-28" : "justify-center"}`}>
        {isOpen ? (
          <Image
            src="/logoos.jpg"
            alt="Suvrin Logo"
            width={110}
            height={110}
            className="object-contain"
          />
        ) : (
          <span className="text-2xl font-black text-green-400 italic">S</span>
        )}
      </div>

      <nav className="flex-1 py-6 overflow-y-auto [overflow-x:visible] custom-scrollbar">
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
                <div key={item.name} className="relative group/navitem">
                  <Link
                    href={item.path}
                    className={`flex items-center transition-all duration-200 hover:bg-sidebar-active hover:text-sidebar-active-text group whitespace-nowrap px-4 py-3 ${isOpen ? "mx-4 rounded-xl" : "justify-center"}`}
                    title={!isOpen && !item.subItems ? item.name : ""}
                  >
                    <div className={`flex items-center gap-3 ${!isOpen && "justify-center"}`}>
                      <item.Icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      {isOpen && (
                        <span className="text-sm font-medium">{item.name}</span>
                      )}
                    </div>
                    {isOpen && (item.hasArrow || item.subItems) && (
                      <ChevronRight className="ml-auto w-3 h-3 opacity-40 group-hover:opacity-100 transition-transform group-hover/navitem:rotate-90" />
                    )}
                  </Link>

                  {/* Sub-menu on Hover (Open Sidebar) */}
                  {item.subItems && isOpen && (
                    <div className="max-h-0 overflow-hidden group-hover/navitem:max-h-[500px] transition-all duration-500 ease-in-out opacity-0 group-hover/navitem:opacity-100">
                      <div className="mt-1 ml-10 space-y-1 border-l border-border pl-2 mb-2 mr-4">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-2 text-sm text-sidebar-text opacity-70 hover:opacity-100 hover:text-sidebar-active-text hover:bg-sidebar-active/50 rounded-lg transition-all whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sub-menu on Hover (Closed Sidebar) */}
                  {item.subItems && !isOpen && (
                    <div className="fixed left-20 mt-[-45px] ml-2 w-48 bg-sidebar-bg border border-border rounded-xl shadow-lg opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-200 z-50 overflow-hidden">
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-bold text-sidebar-text opacity-50 uppercase tracking-wider border-b border-border mb-1">
                          {item.name}
                        </div>
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-2 text-sm text-sidebar-text hover:bg-sidebar-active hover:text-sidebar-active-text transition-colors whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
