import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/components/case-studies/data";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";

interface StudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: StudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Suvrin Technologies`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: StudyPageProps) {
  const { slug } = await params;
  
  // Handle verbatim rendering for real-estate-platform to prevent any data cutting
  if (slug === "real-estate-platform") {
    return (
      <main className="min-h-screen bg-slate-50/40 pt-36">
        {/* Header Hero */}
        <div className="max-w-[1240px] mx-auto px-6 mb-12">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <Link 
                href="/case-studies"
                className="text-[0.9rem] font-medium text-gray-500 hover:text-[#0546e0] transition-colors"
              >
                Case Studies
              </Link>
              <span className="text-gray-300 text-xs">/</span>
              <span className="px-3.5 py-1 bg-blue-50 text-[#0546e0] text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-100">
                AI Products & Platforms
              </span>
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-serif font-medium tracking-tight text-[#111] leading-[1.15]">
              AI-Powered Real Estate Intelligence & Lead Management Platform
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] font-sans text-gray-500 font-normal">
              Developed by Suvrin Technologies
            </p>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="max-w-[1240px] mx-auto px-6 mb-16">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] shadow-lg border border-gray-100 bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
              alt="Real Estate Intelligence Platform" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="max-w-[1240px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 bg-white rounded-[20px] md:rounded-[24px] border border-gray-100 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Client</span>
              <span className="text-[1.1rem] font-semibold text-gray-800">NYC Real Estate Brokerage Firm</span>
            </div>
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Industry</span>
              <span className="text-[1.1rem] font-semibold text-gray-800">Real Estate</span>
            </div>
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Location</span>
              <span className="text-[1.1rem] font-semibold text-gray-800">New York, United States</span>
            </div>
            <div className="flex flex-col gap-1 pt-4 md:pt-0">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Key Impact</span>
              <span className="text-[1.1rem] font-semibold text-[#0546e0]">4.8x Lead Conv. Boost</span>
            </div>
          </div>
        </div>

        {/* Full Case Study Content */}
        <div className="max-w-[1240px] mx-auto px-6 mb-24 flex flex-col gap-16">
          
          {/* Client Overview Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-6 tracking-tight">
              Client Overview
            </h2>
            <div className="text-[1.05rem] text-gray-600 leading-relaxed font-sans font-light flex flex-col gap-6">
              <p>
                One of the largest real estate brokerage firms in New York approached Suvrin Technologies with the objective of building a centralized real estate intelligence platform capable of aggregating, monitoring, analyzing, and operationalizing real estate market data across New York City.
              </p>
              <p>
                The client’s primary challenge was the fragmented nature of real estate listing information spread across multiple online platforms, making it difficult for brokers, analysts, and relationship managers to derive actionable market insights or respond quickly to high-value leads.
              </p>
              <div>
                <p className="font-semibold text-gray-800 mb-4">The firm required a scalable technology solution capable of:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Aggregating real estate listings from multiple online sources",
                    "Tracking market movement in real time",
                    "Generating market intelligence reports",
                    "Integrating insights directly into their CRM ecosystem",
                    "Improving lead conversion efficiency",
                    "Providing data-driven advisory services to HNI (High Net Worth Individual) clients"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 text-[#0546e0] font-bold text-xs flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Business Challenges Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0546e0]" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0546e0]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] tracking-tight">
                Business Challenges
              </h2>
            </div>
            
            <div className="flex flex-col gap-8">
              <p className="text-gray-500 italic">The client faced several operational and analytical challenges:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge 1 */}
                <div className="p-6 rounded-[20px] bg-slate-50 border border-slate-100">
                  <h4 className="font-semibold text-gray-800 text-[1.1rem] mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">1</span>
                    Fragmented Property Data
                  </h4>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-9">
                    Property listings were distributed across multiple websites, marketplaces, public records, and brokerage networks, creating data inconsistency and duplication.
                  </p>
                </div>

                {/* Challenge 2 */}
                <div className="p-6 rounded-[20px] bg-slate-50 border border-slate-100">
                  <h4 className="font-semibold text-gray-800 text-[1.1rem] mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">2</span>
                    Lack of Real-Time Market Intelligence
                  </h4>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-9 mb-3">
                    The brokerage teams lacked centralized visibility into:
                  </p>
                  <ul className="pl-9 space-y-1.5">
                    {[
                      "Property price changes",
                      "Open house updates",
                      "Inventory movement",
                      "Time-to-market analysis",
                      "Micro-market performance trends"
                    ].map((item, i) => (
                      <li key={i} className="text-[0.9rem] text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge 3 */}
                <div className="p-6 rounded-[20px] bg-slate-50 border border-slate-100">
                  <h4 className="font-semibold text-gray-800 text-[1.1rem] mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">3</span>
                    Slow Lead Response Time
                  </h4>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-9">
                    Potential buyers and investors were not receiving timely responses because property intelligence and CRM workflows were disconnected.
                  </p>
                </div>

                {/* Challenge 4 */}
                <div className="p-6 rounded-[20px] bg-slate-50 border border-slate-100">
                  <h4 className="font-semibold text-gray-800 text-[1.1rem] mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">4</span>
                    Manual Reporting Processes
                  </h4>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-9">
                    Generating investment and market intelligence reports for HNI clients involved significant manual effort and data collection.
                  </p>
                </div>

                {/* Challenge 5 */}
                <div className="p-6 rounded-[20px] bg-slate-50 border border-slate-100 lg:col-span-2">
                  <h4 className="font-semibold text-gray-800 text-[1.1rem] mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">5</span>
                    No Centralized Analytics Engine
                  </h4>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-9">
                    There was no unified system to monitor market behavior and predict pricing trends across NYC neighborhoods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Suvrin's Solution Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] tracking-tight">
                Suvrin's Solution
              </h2>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="text-[1.05rem] text-gray-600 leading-relaxed font-sans font-light space-y-4 mb-4">
                <p>
                  Suvrin Technologies designed and implemented a comprehensive AI-powered Real Estate Data Intelligence Platform integrated with the client’s CRM ecosystem.
                </p>
                <p>
                  The platform transformed fragmented listing information into a centralized, intelligent, real-time market intelligence engine.
                </p>
              </div>

              <h3 className="font-semibold text-gray-800 text-[1.2rem] border-b border-gray-100 pb-3">Core Solution Components</h3>
              
              <div className="flex flex-col gap-10 mt-4">
                {/* Module 1 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">1. Real Estate Data Aggregation Engine</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    Suvrin developed a sophisticated property data scraping and aggregation framework capable of collecting listing data from public real estate portals, brokerage websites, listing directories, property feeds, open datasets, and market inventory sources.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">The platform continuously collected and normalized:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Property prices",
                      "Address information",
                      "Property attributes",
                      "Open house schedules",
                      "Agent information",
                      "Listing status",
                      "Commercial & residential data"
                    ].map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-gray-600 text-center">{item}</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-[0.95rem] mt-3">All collected data was processed and stored within a centralized structured repository.</p>
                </div>

                {/* Module 2 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">2. Centralized Property Intelligence Repository</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    The collected listing data was transformed into a unified NYC-wide property intelligence database.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">The repository enabled:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 list-disc text-[0.95rem] text-gray-600 mb-3">
                    <li>Property-level historical tracking</li>
                    <li>Market trend analysis</li>
                    <li>Price benchmarking</li>
                    <li>Neighborhood intelligence</li>
                    <li>Inventory monitoring</li>
                    <li>Comparative property analysis</li>
                  </ul>
                  <p className="text-gray-500 text-[0.95rem]">The system effectively created a single source of truth for NYC residential and commercial real estate data.</p>
                </div>

                {/* Module 3 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">3. Automated Cron-Based Market Monitoring Engine</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    Suvrin implemented an automated cron-based monitoring engine that continuously scanned and analyzed property changes across all tracked listings.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">The system automatically detected:</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Price increases/decreases",
                      "Open house updates",
                      "Listing removals",
                      "Status changes",
                      "Time-on-market movement",
                      "New property additions",
                      "Inventory fluctuations"
                    ].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">{item}</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-[0.95rem]">This enabled the brokerage firm to receive real-time visibility into market movements without manual intervention.</p>
                </div>

                {/* Module 4 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">4. Micro-Market Trend Analytics</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    The platform included advanced analytics capabilities to identify trends at the micro-market level across NYC boroughs and neighborhoods.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">Analytics included:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 list-disc text-[0.95rem] text-gray-600 mb-3">
                    <li>Price trend movement</li>
                    <li>Supply-demand indicators</li>
                    <li>Market absorption rates</li>
                    <li>Inventory heatmaps</li>
                    <li>Average days on market</li>
                    <li>Property appreciation trends</li>
                    <li>Commercial vs residential movement</li>
                  </ul>
                  <p className="text-gray-500 text-[0.95rem]">This allowed the client to provide data-driven investment insights to institutional and HNI clients.</p>
                </div>

                {/* Module 5 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">5. CRM Integration & Lead Intelligence</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    Suvrin integrated the property intelligence engine directly with the client’s CRM platform.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">The integration enabled:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 list-disc text-[0.95rem] text-gray-600 mb-3">
                    <li>Automated lead enrichment</li>
                    <li>Smart property recommendations</li>
                    <li>Faster lead assignment</li>
                    <li>Real-time property alerts</li>
                    <li>Personalized client engagement</li>
                  </ul>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                    Relationship managers could instantly access relevant market intelligence while responding to prospective buyers and investors. This significantly improved lead response time and conversion efficiency.
                  </p>
                </div>

                {/* Module 6 */}
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <h4 className="font-bold text-gray-800 text-[1.15rem] mb-3">6. HNI Market Intelligence Reporting System</h4>
                  <p className="text-gray-500 text-[0.98rem] leading-relaxed mb-4">
                    One of the platform’s most valuable capabilities was the automated market intelligence reporting engine. The brokerage firm could generate premium branded reports for HNI clients, investors, commercial real estate buyers, and portfolio managers.
                  </p>
                  <p className="font-semibold text-gray-700 text-[0.95rem] mb-2">Reports included:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 list-disc text-[0.95rem] text-gray-600 mb-3">
                    <li>Market performance insights</li>
                    <li>Investment opportunity analysis</li>
                    <li>Price movement trends</li>
                    <li>Neighborhood comparisons</li>
                    <li>Commercial market analytics</li>
                    <li>Residential growth indicators</li>
                  </ul>
                  <p className="text-gray-500 text-[0.95rem]">These reports positioned the brokerage as a data-driven advisory leader in the NYC real estate market.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Architecture Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-2 tracking-tight">
              Technical Architecture
            </h2>
            <p className="text-gray-400 text-[0.95rem] mb-8 uppercase tracking-wider font-semibold">Technology Stack</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Backend", items: ["Python", "Node.js", "Data Processing Pipelines"] },
                { title: "Database", items: ["PostgreSQL", "Elasticsearch"] },
                { title: "Data Collection", items: ["Intelligent Web Scraping Frameworks", "Scheduled Cron Jobs", "ETL Pipelines"] },
                { title: "Analytics", items: ["Real-Time Market Trend Engine", "BI Dashboards", "Predictive Analytics Modules"] },
                { title: "CRM Integration", items: ["API-based synchronization", "Lead enrichment workflows", "Automated notifications"] },
                { title: "Cloud Infrastructure", items: ["AWS Cloud Environment", "Scalable microservices architecture", "Automated backup & monitoring"] }
              ].map((stack, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-[24px] border border-slate-100">
                  <h4 className="font-bold text-gray-800 text-[1.05rem] mb-3.5 border-b border-gray-200/50 pb-2">{stack.title}</h4>
                  <ul className="flex flex-col gap-2">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="text-[0.9rem] text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features Delivered Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-8 tracking-tight">
              Key Features Delivered
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Centralized NYC property repository",
                "Real-time listing monitoring",
                "Automated property change detection",
                "Price trend analysis",
                "Open house intelligence tracking",
                "Micro-market analytics",
                "CRM-integrated lead intelligence",
                "HNI investment reporting",
                "Commercial & residential intelligence",
                "Automated cron-based data pipelines",
                "Executive dashboards & reporting"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold border border-emerald-100">
                    ✔
                  </span>
                  <span className="text-gray-600 text-[0.98rem] font-sans font-light">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-2 tracking-tight">
              Business Impact
            </h2>
            <p className="text-gray-500 text-[1.05rem] mb-8 italic">The solution delivered measurable business outcomes for the client.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Operational Improvements */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-[20px]">
                <h4 className="font-bold text-gray-800 text-[1.1rem] border-b border-gray-200 pb-3 mb-4 flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Operational Improvements
                </h4>
                <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-[0.95rem]">
                  <li>Significant reduction in manual market research effort</li>
                  <li>Faster access to accurate property intelligence</li>
                  <li>Improved broker productivity</li>
                </ul>
              </div>

              {/* Sales & Lead Conversion */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-[20px]">
                <h4 className="font-bold text-gray-800 text-[1.1rem] border-b border-gray-200 pb-3 mb-4 flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Sales & Lead Conversion
                </h4>
                <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-[0.95rem]">
                  <li>Improved lead response times</li>
                  <li>Better targeting of high-intent buyers</li>
                  <li>Increased engagement with HNI clients</li>
                </ul>
              </div>

              {/* Strategic Advantages */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-[20px]">
                <h4 className="font-bold text-gray-800 text-[1.1rem] border-b border-gray-200 pb-3 mb-4 flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Strategic Advantages
                </h4>
                <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-[0.95rem]">
                  <li>Positioned the brokerage as a technology-driven market leader</li>
                  <li>Enabled data-backed advisory services</li>
                  <li>Improved market forecasting capabilities</li>
                </ul>
              </div>

              {/* Reporting Efficiency */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-[20px]">
                <h4 className="font-bold text-gray-800 text-[1.1rem] border-b border-gray-200 pb-3 mb-4 flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Reporting Efficiency
                </h4>
                <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-[0.95rem]">
                  <li>Automated generation of executive-grade market reports</li>
                  <li>Reduced dependency on manual analysts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results Achieved Section */}
          <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0546e0]" />
            <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-8 tracking-tight">
              Results Achieved
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Centralized thousands of NYC property listings",
                "Enabled real-time monitoring of market movement",
                "Improved CRM responsiveness for lead management",
                "Enhanced investor confidence through market intelligence reports",
                "Created a scalable foundation for future AI-driven property analytics"
              ].map((res, i) => (
                <div key={i} className="p-6 rounded-[24px] border border-gray-100 bg-slate-50/50 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">★</span>
                  <span className="text-gray-600 text-[0.98rem] leading-relaxed font-sans">{res}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="bg-[#0546e0] rounded-[20px] md:rounded-[32px] p-6 md:p-12 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20">
              <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-serif font-medium text-white mb-6 tracking-tight">
              Conclusion
            </h2>
            <div className="text-[1.08rem] text-blue-50 leading-relaxed font-sans font-light flex flex-col gap-6">
              <p>
                Suvrin Technologies successfully delivered a large-scale Real Estate Intelligence & CRM Integration Platform that transformed how the client monitored, analyzed, and operationalized real estate market data in New York City.
              </p>
              <p>
                By combining data aggregation, automation, analytics, and CRM intelligence, the platform empowered the brokerage firm to make faster decisions, improve client engagement, and establish itself as a market intelligence leader in the highly competitive NYC real estate sector.
              </p>
              <p>
                The project stands as a strong example of Suvrin’s capability in building enterprise-grade data intelligence platforms powered by automation, analytics, and scalable cloud technologies.
              </p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mb-24 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold rounded-full transition-all duration-200 text-[0.95rem] bg-white shadow-sm hover:shadow"
          >
            ← Back to All Case Studies
          </Link>
        </div>

        <StudiesFinalCTA />
      </main>
    );
  }

  // Fallback rendering for regular case studies
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const hasDetailedContent = !!study.clientOverview;

  return (
    <main className="min-h-screen bg-slate-50/40 pt-36">
      {/* Hero Header */}
      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-3">
            <Link 
              href="/case-studies"
              className="text-[0.9rem] font-medium text-gray-500 hover:text-[#0546e0] transition-colors"
            >
              Case Studies
            </Link>
            <span className="text-gray-300 text-xs">/</span>
            <span className="px-3.5 py-1 bg-blue-50 text-[#0546e0] text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-100">
              {study.tag}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-serif font-medium tracking-tight text-[#111] leading-[1.15]">
            {study.title}
          </h1>

          {/* Short Overview */}
          <p className="text-[1.2rem] md:text-[1.35rem] font-sans text-gray-600 leading-relaxed font-light">
            {study.overview}
          </p>
        </div>
      </div>

      {/* Main Image Banner */}
      <div className="max-w-[1240px] mx-auto px-6 mb-16">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] shadow-lg border border-gray-100 bg-gray-100">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Meta Info & Results Section */}
      <div className="max-w-[1240px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 shadow-sm border border-gray-100">
          {/* Metadata Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:border-r lg:border-gray-100 lg:pr-12 pb-6 sm:pb-0 lg:pb-0 border-b sm:border-b-0 lg:border-b-0 border-gray-100">
            <div className="flex flex-col gap-1">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Client</span>
              <span className="text-[1.15rem] font-semibold text-gray-800">{study.client}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Industry</span>
              <span className="text-[1.15rem] font-semibold text-gray-800">{study.industry}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">Location</span>
              <span className="text-[1.15rem] font-semibold text-gray-800">{study.location}</span>
            </div>
          </div>

          {/* Key Results Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[0.85rem] font-bold text-gray-400 uppercase tracking-wider mb-6 block">Key Impact Metrics</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {study.results.map((res, i) => (
                <div key={i} className="flex flex-col gap-1 relative pl-6 border-l-2 border-[#0546e0]">
                  <span className="text-[2.6rem] md:text-[3.2rem] font-serif font-bold text-[#0546e0] leading-none tracking-tight">
                    {res.value}
                  </span>
                  <span className="text-[0.9rem] md:text-[0.95rem] font-medium text-gray-500 mt-1">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Rendering based on data availability */}
      {hasDetailedContent ? (
        <div className="max-w-[1240px] mx-auto px-6 mb-24 flex flex-col gap-20">
          
          {/* Client Overview Section */}
          {study.clientOverview && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-6 tracking-tight">
                Client Overview
              </h2>
              <p className="text-[1.1rem] text-gray-600 leading-relaxed font-sans font-light">
                {study.clientOverview}
              </p>
            </section>
          )}

          {/* Business Challenges Section */}
          {study.challengesList && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0546e0]" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0546e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] tracking-tight">
                  Business Challenges
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {study.challengesList.map((challenge, idx) => {
                  const [title = "", desc] = challenge.split(":");
                  return (
                    <div key={idx} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="font-semibold text-gray-800 text-[1.05rem]">{title.trim()}</h4>
                        {desc && <p className="text-gray-500 text-[0.95rem] leading-relaxed">{desc.trim()}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Suvrin's Solutions Section */}
          {study.solutionsList && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] tracking-tight">
                  Suvrin's Solutions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {study.solutionsList.map((sol, idx) => (
                  <div key={idx} className="p-6 rounded-[20px] bg-slate-50 border border-slate-100 hover:border-emerald-100 transition-colors">
                    <div className="flex items-center gap-3.5 mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <h4 className="font-semibold text-gray-800 text-[1.1rem]">{sol.title}</h4>
                    </div>
                    <p className="text-gray-500 text-[0.95rem] leading-relaxed pl-5.5">
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Architecture Section */}
          {study.techStack && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-8 tracking-tight">
                Technical Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {study.techStack.map((tech, idx) => (
                  <div key={idx} className="p-5 rounded-[20px] bg-slate-50/70 border border-slate-100">
                    <h5 className="font-bold text-[0.8rem] text-gray-400 uppercase tracking-wider mb-3.5">{tech.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-100 rounded-md text-[0.85rem] text-gray-600 font-medium font-sans">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features Delivered Section */}
          {study.keyFeatures && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-8 tracking-tight">
                Key Features Delivered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                {study.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
                      ✔
                    </span>
                    <span className="text-gray-600 text-[0.98rem] font-sans font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Business Impact Section */}
          {study.impact && (
            <section className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-[1.8rem] md:text-[2rem] font-serif font-medium text-[#111] mb-8 tracking-tight">
                Business Impact
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {study.impact.map((imp, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <h4 className="font-semibold text-gray-800 text-[1.1rem] border-b border-gray-100 pb-3">{imp.category}</h4>
                    <ul className="flex flex-col gap-3">
                      {imp.points.map((pt, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-500 text-[0.95rem] leading-relaxed font-light">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Conclusion Section */}
          {study.conclusion && (
            <section className="bg-blue-600 rounded-[20px] md:rounded-[32px] p-6 md:p-12 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20">
                <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-serif font-medium text-white mb-6 tracking-tight">
                Conclusion
              </h2>
              <p className="text-[1.1rem] text-blue-50 leading-relaxed font-sans font-light">
                {study.conclusion}
              </p>
            </section>
          )}

        </div>
      ) : (
        /* Legacy Simple Split Section */
        <div className="max-w-[1240px] mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Challenge */}
            <div className="flex flex-col gap-6 bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0546e0]" />
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0546e0] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h2 className="text-[1.8rem] font-serif font-medium text-[#111] tracking-tight">
                The Challenge
              </h2>
              <p className="text-[1.05rem] text-gray-600 leading-relaxed font-sans font-light">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-6 bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-[1.8rem] font-serif font-medium text-[#111] tracking-tight">
                Our Solution
              </h2>
              <p className="text-[1.05rem] text-gray-600 leading-relaxed font-sans font-light">
                {study.solution}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mb-24 flex justify-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold rounded-full transition-all duration-200 text-[0.95rem] bg-white shadow-sm hover:shadow"
        >
          ← Back to All Case Studies
        </Link>
      </div>

      <StudiesFinalCTA />
    </main>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
