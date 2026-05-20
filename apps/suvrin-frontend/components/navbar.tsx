"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// --- Types ---
interface SubItem {
  label: string;
  href: string;
  dropdown?: SubItem[];
}


interface NavItem {
  label: string;
  href: string;
  dropdown?: SubItem[];
}

// --- Data ---
const navItems: NavItem[] = [
  {
    label: "Tech Stack",
    href: "/tech-stack",
    dropdown: [
      {
        label: "Front-end",
        href: "/tech-stack/front-end",
      },
      {
        label: "Back-end",
        href: "/tech-stack/back-end",
      },
      {
        label: "Mobile",
        href: "/tech-stack/mobile",
      }
    ]
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Who We Are", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Application Development",
        href: "/services/app-development",
      },
      { label: "Cybersecurity", href: "/service-scope/cybersecurity" },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      {
        label: "Software Engineering",
        href: "/services/software-engineering",
      },
      {
        label: "Enterprise Applications",
        href: "/services/enterprise-applications",
      },
      {
        label: "Support Services",
        href: "/services/support-services",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// --- Sub-Components ---

function NavLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/top-logo.png"
        alt="Suvrin Technologies Logo"
        width={250}
        height={50}
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </Link>
  );
}

function DropdownMenu({ items, depth = 0, align = "top" }: { items: SubItem[], depth?: number, align?: "top" | "bottom" }) {
  const isNested = depth > 0;

  if (isNested) {
    return (
      <div className={`absolute ${align === "bottom" ? "bottom-0" : "top-0"} left-full pl-5 opacity-0 invisible pointer-events-none group-hover/nestedItem:opacity-100 group-hover/nestedItem:visible group-hover/nestedItem:pointer-events-auto transition-all duration-200 ease-out z-[100]`}>
        {/* Transparent bridge to ensure mouse never loses connection */}
        <div className="absolute top-0 -left-6 w-6 h-full" />
        <div className="min-w-[260px] w-max max-w-[320px] bg-[#1a1a1a]/95 backdrop-blur-3xl border border-white/10 rounded-[24px] py-4 px-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-1">
            {items.map((sub) => (
              <div key={sub.label} className="relative group/nestedItem">
                {sub.dropdown ? (
                  <>
                    <Link
                      href={sub.href}
                      className="w-full text-left px-5 py-2.5 text-[0.95rem] font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-[12px] transition-all duration-150 flex items-center justify-between"
                    >
                      <span>{sub.label}</span>
                      <span className="opacity-40 text-[0.85rem]">›</span>
                    </Link>
                    <div className="absolute top-0 left-full pl-5 opacity-0 invisible pointer-events-none group-hover/nestedItem:opacity-100 group-hover/nestedItem:visible group-hover/nestedItem:pointer-events-auto transition-all duration-200 ease-out">
                      <div className="absolute top-0 -left-6 w-6 h-full" />
                      <DropdownMenu items={sub.dropdown} depth={depth + 1} align="top" />
                    </div>
                  </>
                ) : (
                  <Link
                    href={sub.href}
                    className="block w-full px-5 py-2.5 text-[0.95rem] font-medium text-white/50 hover:text-white hover:bg-white/10 rounded-[12px] transition-all duration-150"
                  >
                    {sub.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Top level dropdown (depth === 0)
  return (
    <div className="absolute top-full left-0 pt-4 opacity-0 invisible pointer-events-none translate-y-3 transition-all duration-250 ease-out group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
      <div className="min-w-[280px] w-max max-w-[340px] bg-[#1a1a1a]/95 backdrop-blur-3xl border border-white/10 rounded-[28px] py-4 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
        <div className="flex flex-col gap-1.5 px-3">
          {items.map((sub, index) => {
            // Zone-based alignment: top items align top, bottom items align bottom
            const alignMode = index >= 4 ? "bottom" : "top";

            return (
              <div
                key={sub.label}
                className="relative group/nestedItem"
              >
                {sub.dropdown ? (
                  <>
                    <Link
                      href={sub.href}
                      className="w-full text-left px-5 py-3 text-[1rem] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-[14px] transition-all duration-150 flex items-center justify-between"
                    >
                      <span>{sub.label}</span>
                      <span className="opacity-40 text-[1.1rem]">›</span>
                    </Link>
                    <DropdownMenu items={sub.dropdown} depth={depth + 1} align={alignMode} />
                  </>
                ) : (
                  <Link
                    href={sub.href}
                    className="block w-full px-5 py-3 text-[1rem] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-[14px] transition-all duration-150"
                  >
                    {sub.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}



function DesktopNavItem({
  item,
  pathname,
  isLight,
}: {
  item: NavItem;
  pathname: string;
  isLight: boolean;
}) {
  const isActive =
    pathname === item.href ||
    (item.dropdown && item.dropdown.some((s) => pathname === s.href));

  return (
    <div className="relative group parent-item py-6">
      <Link
        href={item.href}
        className={`flex items-center gap-2 px-3 py-2 text-[1.05rem] font-medium whitespace-nowrap transition-colors duration-200 ${isActive
          ? isLight
            ? "text-text-primary"
            : "text-white"
          : isLight
            ? "text-text-secondary hover:text-text-primary"
            : "text-white/70 hover:text-white"
          }`}
      >
        {item.label}
        {item.dropdown && (
          <span
            className={`text-[0.6rem] ml-0.5 opacity-70 transition-transform duration-250 group-hover:rotate-180 inline-block`}
          >
            ▼
          </span>
        )}
      </Link>
      {item.dropdown && <DropdownMenu items={item.dropdown} />}
    </div>
  );
}

// --- Main Navbar Component ---

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNested, setOpenNested] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenNested([]);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isLight = true;

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-[1240px] rounded-[25px] border transition-all duration-300 ease-in-out bg-white border-[#eeeeee] shadow-[0_15px_40px_rgba(0,0,0,0.05)] ${scrolled ? "top-4" : "top-8"
        }`}
    >
      <div className="px-8 lg:px-10 flex items-center justify-between h-[84px]">
        <NavLogo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              isLight={isLight}
            />
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={`hidden lg:inline-flex items-center px-8 py-3.5 text-[0.95rem] font-bold rounded-full transition-all duration-200 ${isLight
            ? "text-white bg-[#0052cc] hover:bg-[#0043a6] shadow-md"
            : "text-white bg-[#0052cc] hover:bg-[#0043a6] shadow-[0_4px_14px_0_rgba(0,82,204,0.39)] border border-white/10"
            }`}
        >
          Connect with Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 gap-[5.5px] bg-transparent border-0 p-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[24px] h-[1.5px] transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-[24px] h-[1.5px] transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[24px] h-[1.5px] transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[110px] left-1/2 -translate-x-1/2 w-[92%] bg-[#111]/95 backdrop-blur-3xl p-6 overflow-y-auto z-[999] rounded-[30px] border border-white/10 shadow-2xl max-h-[70vh]">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/5 last:border-0"
            >
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-4 text-[1.05rem] font-medium text-white/90"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <span
                      className={`text-[0.6rem] transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-4 flex flex-col gap-3">
                      {item.dropdown.map((sub) => (
                        <div
                          key={sub.label}
                          className="flex flex-col gap-2"
                        >
                          {sub.dropdown ? (
                            <div className="flex flex-col gap-2">
                              <button
                                className="flex items-center justify-between w-full text-[0.95rem] font-medium text-white/70 py-2 transition-colors active:text-blue-400"
                                onClick={() => {
                                  setOpenNested((prev) =>
                                    prev.includes(sub.label) ? prev.filter(i => i !== sub.label) : [...prev, sub.label]
                                  );
                                }}
                              >
                                <span>{sub.label}</span>
                                <span className={`text-[0.6rem] transition-transform duration-300 ${openNested.includes(sub.label) ? "rotate-180" : ""}`}>
                                  ▼
                                </span>
                              </button>

                              {openNested.includes(sub.label) && (
                                <div className="pl-4 pb-2 flex flex-col gap-4 border-l border-white/10 ml-1">
                                  {sub.dropdown.map((sub2) => (
                                    <Link
                                      key={sub2.label}
                                      href={sub2.href}
                                      className="text-[0.85rem] text-white/40 hover:text-white py-1 transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {sub2.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={sub.href}
                              className="text-[0.95rem] font-medium text-white/70 hover:text-white py-2 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-4 text-[1.05rem] font-medium text-white/90"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center py-4 mt-6 text-base font-semibold text-white bg-white/10 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Connect with Us
          </Link>
        </div>
      )}
    </nav>
  );
}
