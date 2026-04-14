"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Types ---
interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: SubItem[];
}

// --- Data ---
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
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
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    dropdown: [
      { label: "Strategy & Advisory", href: "/service-scope/strategy-advisory" },
      { label: "AI Products & Platforms", href: "/service-scope/ai-products-platforms" },
      { label: "Commercialization & Growth", href: "/service-scope/commercialization-growth" },
      { label: "Agents", href: "/service-scope/agents" },
      { label: "Knowledge Systems", href: "/service-scope/knowledge-systems" },
      { label: "Automation & Integration", href: "/service-scope/automation-integration" },
      { label: "AI Infrastructure", href: "/service-scope/ai-infrastructure" },
      { label: "Governance & Risk", href: "/service-scope/governance-risk" },
      { label: "LLM Fine-Tuning", href: "/service-scope/llm-fine-tuning" },
      { label: "Web-Scraping", href: "/service-scope/web-scraping" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// --- Sub-Components ---

function NavLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="flex flex-col font-black text-white text-[1.4rem] leading-[1.05] tracking-[0.1em] uppercase">
        <span>S U</span>
        <span>V R</span>
      </div>
    </Link>
  );
}

function DropdownMenu({ items }: { items: SubItem[] }) {
  return (
    <div className="absolute top-full left-0 pt-3 opacity-0 invisible pointer-events-none translate-y-2 transition-all duration-250 ease-out group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0">
      <div className="min-w-[240px] bg-[#1a1a1a]/90 backdrop-blur-3xl border border-white/10 rounded-[20px] py-4 px-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-1">
          {items.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="px-5 py-3 text-[0.95rem] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-[14px] transition-all duration-150"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(s => pathname === s.href));

  return (
    <div className="relative group py-6">
      <Link
        href={item.href}
        className={`flex items-center gap-2 px-3 py-2 text-[1.05rem] font-medium whitespace-nowrap transition-colors duration-200 ${isActive ? "text-white" : "text-white/70 hover:text-white"
          }`}
      >
        {item.label}
        {item.dropdown && (
          <span className="text-[0.6rem] ml-0.5 opacity-70 transition-transform duration-250 group-hover:rotate-180 inline-block">
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-[1240px] rounded-[25px] backdrop-blur-2xl border border-white/20 transition-all duration-300 ease-in-out ${scrolled
          ? "top-4 bg-black/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "top-8 bg-[#8a7f76]/20"
        }`}
    >
      <div className="px-8 lg:px-10 flex items-center justify-between h-[84px]">
        <NavLogo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={pathname} />
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200"
        >
          Connect with Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 gap-[5.5px] bg-transparent border-0 p-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[24px] h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[24px] h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[24px] h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[110px] left-1/2 -translate-x-1/2 w-[92%] bg-[#111]/95 backdrop-blur-3xl p-6 overflow-y-auto z-[999] rounded-[30px] border border-white/10 shadow-2xl max-h-[70vh]">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/5 last:border-0">
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-4 text-[1.05rem] font-medium text-white/90"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <span className={`text-[0.6rem] transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-4 flex flex-col gap-3">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="text-[0.95rem] text-white/60 hover:text-white" onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="block py-4 text-[1.05rem] font-medium text-white/90" onClick={() => setMobileOpen(false)}>
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