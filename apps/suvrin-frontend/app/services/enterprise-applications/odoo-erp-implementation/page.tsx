/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title:
    "Odoo Development Services | Implementation, Migration & Custom Development — India, UAE, USA",
  description:
    "Suvrin Technologies is a certified Odoo development partner delivering full-cycle ERP implementation, custom module development, version migration, and integration services across India, the Middle East, and the USA.",
  keywords:
    "Odoo ERP implementation India, Odoo development company UAE, Odoo implementation partner Dubai, Odoo custom module development, Odoo migration services",
};

const services = [
  {
    num: "01",
    title: "Odoo ERP Implementation",
    desc: "Full-cycle new deployment — from requirements and configuration to go-live and hypercare",
    href: "/service-scope/odoo-implementation",
  },
  {
    num: "02",
    title: "Odoo Custom Module Development",
    desc: "Bespoke modules built in Python/OWL for workflows, pricing, automation, and industry-specific needs",
    href: "/service-scope/odoo-custom-development",
  },
  {
    num: "03",
    title: "Odoo Version Migration & Upgrades",
    desc: "Safe, data-complete migration from Odoo 12/13/14/15/16 to the latest stable version (v17/v18)",
    href: "/service-scope/odoo-migration",
  },
  {
    num: "04",
    title: "Odoo Integration Services",
    desc: "Connect Odoo with Tally, SAP, Salesforce, payment gateways, e-commerce, logistics APIs, and more",
    href: "/service-scope/odoo-integration",
  },
  {
    num: "05",
    title: "Odoo AI & Automation",
    desc: "Embed AI into Odoo — intelligent document processing, predictive analytics, chatbot agents, and RPA",
    href: "/service-scope/odoo-ai-automation",
  },
  {
    num: "06",
    title: "Odoo Technical Support & AMC",
    desc: "Post-go-live bug fixes, performance tuning, user support, and Annual Maintenance Contracts",
    href: "/service-scope/odoo-support",
  },
  {
    num: "07",
    title: "Odoo Functional Consulting",
    desc: "Process mapping, gap analysis, best-practice configuration, and change management advisory",
    href: "/contact",
  },
  {
    num: "08",
    title: "Odoo Training & User Adoption",
    desc: "Role-based end-user training, admin training, and documentation — on-site or remote",
    href: "/contact",
  },
  {
    num: "09",
    title: "Odoo Localisation — India, UAE & GCC",
    desc: "GST, VAT (UAE/KSA), payroll, Arabic language, compliance, and statutory report configuration",
    href: "/service-scope/odoo-localisation",
  },
  {
    num: "10",
    title: "Odoo Rescue & Takeover Projects",
    desc: "We take over failed, stalled, or poorly implemented Odoo projects and get them back on track",
    href: "/service-scope/odoo-rescue",
  },
];

const deliveryPhases = [
  {
    num: "01",
    title: "Discovery & Architecture",
    subtitle: "We understand your business before we touch the system",
    bullets: [
      "Business process mapping and as-is / to-be analysis",
      "Gap analysis — what Odoo covers out-of-the-box vs. what needs custom development",
      "Module selection and solution architecture design",
      "Functional Requirements Document (FRD) with client sign-off",
      "Data migration strategy and master data template preparation",
      "Timeline, resource, and budget planning",
    ],
  },
  {
    num: "02",
    title: "Configuration, Development & Integration",
    subtitle: "We build it right — not just fast",
    bullets: [
      "Odoo module configuration — Sales, Purchase, Inventory, Manufacturing, Accounting, HR, CRM, and more",
      "Custom module development in Python with OWL/QWeb frontend",
      "Workflow automation — approval chains, scheduled actions, email triggers, and alerts",
      "Third-party integrations — accounting software, payment gateways, marketplaces, and logistics",
      "Report development — custom PDF reports, dashboards, and analytical views",
      "UAT (User Acceptance Testing) support and client sign-off process",
    ],
  },
  {
    num: "03",
    title: "Go-Live, Training & Hypercare",
    subtitle: "We stay with you through go-live and beyond",
    bullets: [
      "Production deployment and go-live support",
      "Role-based user training — employees, managers, finance, admin",
      "User manuals and video documentation in English, Hindi, and Arabic",
      "Hypercare support (2 weeks post go-live) with 48-hour issue resolution SLA",
      "Annual Maintenance Contract (AMC) options for ongoing support",
      "Continuous improvement roadmap and regular system health reviews",
    ],
  },
];

const regions = [
  {
    flag: "🇮🇳",
    region: "India",
    tagline: "Odoo's Fastest-Growing Market — We Are at the Centre of It",
    body: "India has become one of the largest Odoo markets in the world — driven by the platform's cost advantage over SAP and Oracle, its depth across manufacturing and trading sectors, and strong GST compliance capabilities. We are based in Gurgaon and serve clients across Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, and Ahmedabad.",
    focus:
      "GST e-invoicing · Manufacturing ERP · Distribution & Trading · MSME Digital Transformation · Tally-to-Odoo Migration · Indian Payroll & Compliance",
  },
  {
    flag: "🇦🇪",
    region: "UAE & GCC",
    tagline: "The Middle East's Most Ambitious ERP Market",
    body: "The UAE and broader GCC region is undergoing unprecedented ERP adoption — driven by VAT implementation, Saudi Arabia's Vision 2030 transformation, and rapid move toward digital business infrastructure. We operate through Maxcode Solutions LLC in Dubai and serve clients across UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.",
    focus:
      "UAE VAT & FTA Compliance · Saudi ZATCA e-Invoicing · Arabic Localisation · Construction ERP · WPS Payroll · Trading Company ERP",
  },
  {
    flag: "🇺🇸",
    region: "USA",
    tagline: "Odoo Is Growing Fast in North America — So Are We",
    body: "Odoo's US market has expanded significantly as mid-market businesses seek alternatives to NetSuite and Microsoft Dynamics. Our New Jersey office serves clients across the Northeast, and we deliver US engagements remotely for clients coast to coast.",
    focus:
      "US GAAP Accounting · Multi-State Tax · Shopify & Amazon Integration · Professional Services Billing · Non-Profit Fund Accounting",
  },
];

const impactNumbers = [
  { stat: "150+", label: "Odoo Projects Delivered" },
  { stat: "3", label: "Continents — India, GCC, USA" },
  { stat: "10+", label: "Years of Odoo Experience" },
  { stat: "100%", label: "Projects with 1-Year Warranty" },
];

const whyCards = [
  {
    title: "Certified Expertise",
    desc: "We are Odoo-certified developers and functional consultants with hands-on experience across all major Odoo versions (12 through 18) and all core modules. No generalists — dedicated Odoo specialists.",
  },
  {
    title: "Fixed-Scope Delivery",
    desc: "We work with fixed scope, signed FRDs, and formal UAT sign-offs. You know exactly what you are getting, what it costs, and when it will be delivered — before we start.",
  },
  {
    title: "Regional Compliance Built In",
    desc: "India GST, UAE VAT, Saudi ZATCA, Arabic localisation — our team has configured regional compliance for 50+ businesses and knows every edge case before your project starts.",
  },
  {
    title: "AI-Ready Architecture",
    desc: "Every Odoo system we build is architected to accept AI and automation layers. If you want to add intelligent document processing or predictive analytics in the future, the foundation is already right.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We are not a project-and-done vendor. Our AMC and support plans mean we stay invested in your system's performance long after go-live — and grow with you as your business evolves.",
  },
  {
    title: "No-Surprise Commercials",
    desc: "One fixed project price. No hourly billing ambiguity. No surprise change requests for scope that was always in scope. Our proposals are detailed and our contracts protect both sides.",
  },
];

export default function OdooERPImplementationPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServicesHero
        id="odoo-erp-implementation"
        title={
          <>
            Odoo ERP — Built for
            <br />
            Your Business,
            <br />
            Delivered on Time.
          </>
        }
        description="Odoo is the world's fastest-growing ERP platform — and we are one of its most experienced implementation partners. From greenfield deployments to complex migrations, custom modules, and AI-powered workflows, Suvrin Technologies delivers Odoo that works the way your business actually works. Trusted by companies across India, the UAE, Saudi Arabia, Qatar, and the USA."
        ctaText="Start Your Odoo Project →"
      />

      {/* SERVICES LIST SECTION */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-serif font-bold text-[#111] mb-3">
            All Odoo Services — At a Glance
          </h2>
          <p className="text-[1rem] text-[#666] mb-12">
            End-to-end Odoo expertise, from first deployment to long-term support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.num}
                href={svc.href}
                className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-6">
                  {svc.num}
                </div>
                <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3 group-hover:text-[#0546e0] transition-colors duration-200">
                  {svc.title}
                  <span className="ml-2 text-[#0546e0] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                </h3>
                <p className="text-[0.95rem] text-[#666] leading-relaxed">
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-serif font-bold text-[#111] mb-4">
              How We Deliver Odoo — Right, the First Time
            </h2>
            <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[780px]">
              Most Odoo projects fail not because of the software — but because of poor scoping,
              rushed configuration, and weak change management. Our delivery methodology eliminates
              these failure points at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.num}
                className="bg-[#fafafa] rounded-2xl border border-[#eaeaea] p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#0546e0]/5 flex items-center justify-center text-[#0546e0] font-serif font-bold text-lg mb-5">
                  {phase.num}
                </div>
                <h3 className="text-[1.2rem] font-serif font-bold text-[#111] mb-1">
                  {phase.title}
                </h3>
                <p className="text-[0.9rem] text-[#0546e0] font-medium mb-5">
                  {phase.subtitle}
                </p>
                <ul className="space-y-2">
                  {phase.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-[0.92rem] text-[#555]">
                      <span className="mt-1 text-[#0546e0] flex-shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL MARKET FOCUS */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-serif font-bold text-[#111] mb-3">
            Serving Three Markets — One Team You Can Trust
          </h2>
          <p className="text-[1.05rem] text-[#555] mb-12 max-w-[680px]">
            We understand the regulatory requirements, business culture, and technology landscape of
            each market we serve. This is not a generic global offering — it is localised expertise
            at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((r) => (
              <div
                key={r.region}
                className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
              >
                <span className="text-3xl mb-4">{r.flag}</span>
                <h3 className="text-[1.2rem] font-serif font-bold text-[#111] mb-1">
                  {r.region}
                </h3>
                <p className="text-[0.88rem] text-[#0546e0] font-medium mb-4">{r.tagline}</p>
                <p className="text-[0.92rem] text-[#555] leading-relaxed mb-5">{r.body}</p>
                <div className="mt-auto pt-4 border-t border-[#eaeaea]">
                  <p className="text-[0.82rem] text-[#888] font-medium uppercase tracking-wide mb-1">
                    Focus
                  </p>
                  <p className="text-[0.88rem] text-[#444]">{r.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactNumbers.map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-[clamp(2.4rem,5vw,3.6rem)] font-serif font-bold text-[#0546e0] leading-none mb-2">
                  {item.stat}
                </p>
                <p className="text-[0.95rem] text-[#555]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SUVRIN */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-serif font-bold text-[#111] mb-12">
            Why Businesses Choose Suvrin Technologies for Odoo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <h3 className="text-[1.15rem] font-serif font-bold text-[#111] mb-3">
                  {card.title}
                </h3>
                <p className="text-[0.93rem] text-[#666] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[720px] mx-auto mb-10">
            Whether you are starting fresh, migrating from an older version, rescuing a failed
            project, or adding AI and automation to an existing system — tell us about your project
            and we will come back with a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-white bg-[#0546e0] rounded-full hover:bg-[#0438c4] hover:-translate-y-0.5 transition-all duration-250"
            >
              Start the Conversation →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-[#0546e0] bg-white border border-[#0546e0] rounded-full hover:bg-[#0546e0]/5 hover:-translate-y-0.5 transition-all duration-250"
            >
              Download Odoo Capability Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
