export const categories = [
  "Strategy & Advisory",
  "AI Products & Platforms",
  "Commercialization & Growth",
  "Agents",
  "Knowledge Systems",
  "Automation & Integration",
  "AI Infrastructure",
  "Governance & Risk",
  "LLM Fine-Tuning",
  "Web-Scraping",
];

export const categoryDescriptions: Record<string, string> = {
  "Strategy & Advisory": "Expert AI roadmapping and strategic consulting to transform your business vision into a scalable AI reality.",
  "AI Products & Platforms": "Building high-performance, enterprise-grade AI software and scalable platforms from blueprint to production.",
  "Commercialization & Growth": "Accelerating market dominance through AI-driven revenue intelligence and hyper-targeted growth experiments.",
  "Agents": "Developing autonomous AI agents capable of complex reasoning, task orchestration, and 24/7 decision support.",
  "Knowledge Systems": "Advanced RAG implementations and semantic search architectures that turn fragmented data into enterprise intelligence.",
  "Automation & Integration": "Seamlessly embedding state-of-the-art AI into your existing tech stack to eliminate bottlenecks and unlock efficiency.",
  "AI Infrastructure": "Architecting robust MLOps foundations and secure cloud environments for reliable AI deployment at global scale.",
  "Governance & Risk": "Ensuring ethical AI deployments with comprehensive security, compliance, and proactive risk mitigation frameworks.",
  "LLM Fine-Tuning": "Customizing foundational models to capture your brand's unique analytical voice and deepest industry expertise.",
  "Web-Scraping": "High-velocity data extraction and processing pipelines for real-time market insights and competitive advantage.",
};

// Helper to slugify category names
export const slugify = (name: string) =>
  name.toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

export interface CaseStudy {
  id: string;
  slug: string;
  tag: string;
  categories: string[];
  industry: string;
  location: string;
  title: string;
  client: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  image: string;

  // Custom detailed fields
  clientOverview?: string;
  challengesList?: string[];
  challengeDetails?: { title: string; points: string[] }[];
  solutionsList?: { title: string; description: string }[];
  modules?: { title: string; points: string[] }[];
  integrations?: string[];
  stakeholders?: string[];
  reports?: string[];
  techStack?: { category: string; items: string[] }[];
  keyFeatures?: string[];
  impact?: { category: string; points: string[] }[];
  strategicBenefits?: string[];
  conclusion?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "odoo-erp-implementation",
    slug: "odoo-erp-implementation",
    tag: "Automation & Integration",
    categories: ["Automation & Integration", "Strategy & Advisory"],
    industry: "Manufacturing",
    location: "India & Japan",
    title: "Odoo ERP Implementation for Indo-Japanese Precision Tools Manufacturing Company",
    client: "Precision Tools Manufacturer",
    overview: "End-to-end strategic design and Odoo ERP implementation to centralize manufacturing operations, international supply chain, multi-currency accounting, and multi-location logistics.",
    challenge: "The client faced fragmented legacy systems, disconnected spreadsheets, rapid SKU growth, manufacturing supply chain complexity, and multi-geography coordination.",
    solution: "We designed and implemented a comprehensive enterprise-grade Odoo ERP ecosystem covering MRP, Inventory, Procurement, CRM, Accounting, Quality, HRMS, and Export Compliance.",
    results: [
      { value: "95%", label: "Excel Reduced" },
      { value: "40%", label: "Efficiency Boost" },
      { value: "100%", label: "GST & Export Compliance" },
    ],
    image: "https://static.wixstatic.com/media/b0d27a_8f92d5aa653f4c3182be59d3ab55bb1a~mv2.png/v1/fill/w_740,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0d27a_8f92d5aa653f4c3182be59d3ab55bb1a~mv2.png",

    clientOverview: "Suvrin Technologies partnered with a leading Indo-Japanese precision tools manufacturing company specializing in industrial-grade precision tooling solutions catering to domestic and international markets. The company had experienced significant business growth across multiple geographies along with a rapid increase in product SKUs, operational complexity, vendor networks, export activities, and compliance requirements. As the organization scaled, its existing legacy operational ecosystem—primarily dependent on disconnected software applications, manual processes, and extensive use of Microsoft Excel—became increasingly inefficient and unsustainable. The client required a modern, scalable, and fully integrated ERP platform capable of managing end-to-end manufacturing, operations, compliance, finance, inventory, procurement, sales, exports, and stakeholder collaboration.",

    challengeDetails: [
      {
        title: "Fragmented Legacy Systems",
        points: [
          "Legacy software applications, manual spreadsheets, offline approval workflows, and department-specific systems",
          "Data inconsistency and duplication of work across departments",
          "Reporting delays and lack of centralized visibility",
        ],
      },
      {
        title: "Rapid Growth in Product SKUs",
        points: [
          "Growing catalog of precision tools significantly increased operational complexity",
          "SKU-level inventory tracking and production planning became unmanageable",
          "Procurement synchronization, warehouse management, and BOM complexity were critical pain points",
        ],
      },
      {
        title: "Multi-Geography Operations",
        points: [
          "Expansion across regions and export markets made operational coordination increasingly difficult",
          "Multi-location management, multi-currency handling, and export documentation were unsupported",
          "No centralized reporting or inter-department synchronization across geographies",
        ],
      },
      {
        title: "Manufacturing & Supply Chain Complexity",
        points: [
          "Raw material procurement, vendor coordination, production planning, and quality inspections were siloed",
          "Inventory movement and dispatch management lacked integration",
          "Lack of unified visibility caused operational inefficiencies and delayed decision-making",
        ],
      },
      {
        title: "Compliance & Regulatory Requirements",
        points: [
          "Stronger controls needed for GST and export regulations",
          "Foreign currency transactions, import-export documentation, and government reporting were manual",
        ],
      },
      {
        title: "Stakeholder Visibility Gaps",
        points: [
          "Buyers, vendors, employees, management teams, and compliance agencies operated in silos",
          "No unified data ecosystem across all stakeholder groups",
        ],
      },
    ],

    modules: [
      {
        title: "Manufacturing (MRP)",
        points: [
          "Production planning",
          "Bill of Materials (BOM)",
          "Work order management",
          "Production scheduling",
          "Shop floor workflows",
        ],
      },
      {
        title: "Inventory & Warehouse Management",
        points: [
          "SKU management",
          "Batch tracking",
          "Multi-warehouse operations",
          "Inventory valuation",
          "Reorder rules",
          "Stock movement automation",
        ],
      },
      {
        title: "Procurement & Vendor Management",
        points: [
          "Vendor onboarding",
          "RFQ workflows",
          "Purchase approvals",
          "Procurement analytics",
          "Vendor performance tracking",
        ],
      },
      {
        title: "Sales & CRM",
        points: [
          "Lead management",
          "Quotation workflows",
          "Sales order processing",
          "Customer lifecycle tracking",
          "Distributor management",
        ],
      },
      {
        title: "Finance & Accounting",
        points: [
          "Multi-currency accounting",
          "GST compliance",
          "Bank reconciliation",
          "Cost center tracking",
          "Export invoicing",
          "Financial reporting",
        ],
      },
      {
        title: "HRMS & Employee Management",
        points: [
          "Attendance management",
          "Leave management",
          "Payroll workflows",
          "Employee self-service portal",
          "Performance tracking",
        ],
      },
      {
        title: "Quality Management",
        points: [
          "Quality checkpoints",
          "Inspection workflows",
          "Manufacturing quality compliance",
          "Rejection management",
        ],
      },
      {
        title: "Export & Compliance Management",
        points: [
          "Export documentation workflows",
          "Foreign currency transaction management",
          "Compliance reporting",
          "Regulatory documentation support",
        ],
      },
    ],

    integrations: [
      "Banking systems",
      "Export documentation systems",
      "Compliance platforms",
      "Vendor communication workflows",
      "External reporting systems",
    ],

    stakeholders: [
      "Buyers",
      "Vendors",
      "Employees",
      "Management Teams",
      "Compliance & Government Agencies",
      "Finance & Accounts Teams",
      "Production Teams",
      "Warehouse Teams",
    ],

    reports: [
      "Production efficiency reports",
      "Inventory movement reports",
      "Procurement analytics",
      "Export performance dashboards",
      "Financial MIS reports",
      "Vendor performance analysis",
      "SKU profitability analysis",
    ],

    techStack: [
      {
        category: "ERP Platform",
        items: ["Odoo v18"],
      },
      {
        category: "Backend",
        items: ["Python", "PostgreSQL"],
      },
      {
        category: "Integrations",
        items: ["REST APIs", "Middleware integrations"],
      },
      {
        category: "Infrastructure",
        items: ["Cloud-hosted deployment", "Secure backup architecture", "Role-based access controls"],
      },
    ],

    impact: [
      {
        category: "Operational Efficiency",
        points: [
          "Major gains in process automation and inter-department coordination",
          "Significant reduction in manual dependencies",
          "Improved reporting accuracy and workflow visibility",
        ],
      },
      {
        category: "Inventory & SKU Management",
        points: [
          "Successfully managed growing SKU complexity with better stock visibility",
          "Automated replenishment and improved warehouse accuracy",
        ],
      },
      {
        category: "Decision-Making Speed",
        points: [
          "Real-time dashboards and centralized reporting significantly improved management visibility",
          "Faster decisions across operations and finance",
        ],
      },
      {
        category: "Compliance Management",
        points: [
          "Streamlined GST workflows and export documentation",
          "Multi-currency accounting and regulatory reporting improved",
          "Reduced compliance risks and improved audit readiness",
        ],
      },
      {
        category: "Employee Productivity",
        points: [
          "Reduction in manual effort and faster approvals",
          "Improved employee productivity and better operational coordination",
        ],
      },
      {
        category: "Excel Dependency Eliminated",
        points: [
          "Replaced fragmented spreadsheet-based operations with a centralized real-time system",
          "Improved data consistency, decision-making speed, and operational reliability",
        ],
      },
    ],

    strategicBenefits: [
      "Centralized enterprise-wide operations",
      "Scalable ERP architecture for future growth",
      "Improved manufacturing visibility",
      "Better export & compliance control",
      "Stronger management reporting",
      "Enhanced operational transparency",
      "Reduced process dependency on manual systems",
    ],

    conclusion: "Suvrin Technologies successfully transformed the client's operational ecosystem by implementing a fully integrated Odoo ERP platform tailored for precision manufacturing and international business operations. The solution enabled the organization to modernize legacy workflows, streamline manufacturing and supply chain processes, improve compliance management, and create a scalable digital foundation capable of supporting long-term global growth. This implementation stands as a strong example of Suvrin's expertise in enterprise ERP transformation, manufacturing digitization, workflow automation, and scalable business systems engineering.",
  },
  {
    id: "real-estate-platform",
    slug: "real-estate-platform",
    tag: "AI Products & Platforms",
    categories: ["AI Products & Platforms", "Strategy & Advisory", "Automation & Integration"],
    industry: "Real Estate",
    location: "New York, NY",
    title: "AI-Powered Real Estate Intelligence & Lead Management Platform",
    client: "Investly",
    overview: "End-to-end strategic design and engineering of a next-generation real estate intelligence platform that automates lead scoring, property matching, and NYC-wide market monitoring at scale.",
    challenge: "Investly's brokers struggled with fragmented listing data, slow lead response times, and manually synthesizing micro-market trends. They needed a centralized repository and cron-based monitoring engine to track price drops, inventory, and new listings in real time.",
    solution: "We designed a comprehensive intelligence platform powered by an intelligent web scraping framework and an automated monitoring engine. Fully integrated with their CRM, the system automates lead enrichment, provides HNI investment reports, and tracks micro-market analytics across NYC.",
    results: [
      { value: "4.8x", label: "Lead Conv. Boost" },
      { value: "75%", label: "Time Saved/Agent" },
      { value: "10k+", label: "listings monitored" },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",

    // Custom detailed fields
    clientOverview: "One of the largest real estate brokerage firms in New York approached Suvrin Technologies with the objective of building a centralized real estate intelligence platform capable of aggregating, monitoring, analyzing, and operationalizing real estate market data across New York City. The client's primary challenge was the fragmented nature of real estate listing information spread across multiple online platforms, making it difficult for brokers, analysts, and relationship managers to derive actionable market insights or respond quickly to high-value leads.",

    challengesList: [
      "Fragmented Property Data: Property listings were distributed across multiple websites, marketplaces, public records, and brokerage networks, creating data inconsistency and duplication.",
      "Lack of Real-Time Market Intelligence: The brokerage teams lacked centralized visibility into property price changes, open house updates, inventory movement, and micro-market performance trends.",
      "Slow Lead Response Time: Potential buyers and investors were not receiving timely responses because property intelligence and CRM workflows were disconnected.",
      "Manual Reporting Processes: Generating investment and market intelligence reports for HNI (High Net Worth Individual) clients involved significant manual effort and data collection.",
      "No Centralized Analytics Engine: There was no unified system to monitor market behavior and predict pricing trends across NYC neighborhoods."
    ],

    solutionsList: [
      {
        title: "Real Estate Data Aggregation Engine",
        description: "Developed a sophisticated property data scraping and aggregation framework capable of collecting, normalizing, and storing listing data (prices, addresses, status, schedules, agent info) from public portals, feeds, directories, and brokerage networks continuously in a central repository."
      },
      {
        title: "Centralized Property Intelligence Repository",
        description: "Transformed listing data into a unified, NYC-wide database enabling property-level historical tracking, price benchmarking, neighborhood intelligence, and inventory monitoring to create a single source of truth."
      },
      {
        title: "Automated Cron-Based Monitoring",
        description: "Implemented an automated monitoring engine that scans listings for price adjustments, status updates, open houses, or new listings, giving real-time visibility into market movements."
      },
      {
        title: "Micro-Market Trend Analytics",
        description: "Built advanced analytics for boroughs and neighborhoods to track pricing trends, supply-demand indicators, inventory heatmaps, absorption rates, and property appreciation, enabling data-backed HNI advisory."
      },
      {
        title: "CRM Integration & Lead Intelligence",
        description: "Integrated the property intelligence engine directly into their CRM to enable automated lead enrichment, instant matching, rapid lead routing, and highly personalized buyer alerts."
      },
      {
        title: "HNI Market Intelligence Reporting",
        description: "Designed an automated generator for premium branded reports covering market performance, residential/commercial growth indicators, and investment opportunities for portfolio managers."
      }
    ],

    techStack: [
      {
        category: "Backend",
        items: ["Python", "Node.js", "Data Processing Pipelines"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Elasticsearch"]
      },
      {
        category: "Data Collection",
        items: ["Intelligent Web Scraping", "Scheduled Cron Jobs", "ETL Pipelines"]
      },
      {
        category: "Analytics",
        items: ["Real-Time Market Trend Engine", "BI Dashboards", "Predictive Modules"]
      },
      {
        category: "CRM & Cloud",
        items: ["API Integration", "AWS Cloud Environment", "Microservices Architecture"]
      }
    ],

    keyFeatures: [
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
    ],

    impact: [
      {
        category: "Operational Improvements",
        points: [
          "Significant reduction in manual market research effort",
          "Faster access to accurate property intelligence",
          "Improved broker productivity and decision-making"
        ]
      },
      {
        category: "Sales & Lead Conversion",
        points: [
          "Improved lead response times through automated enrichment",
          "Better targeting of high-intent buyers",
          "Increased engagement with HNI clients"
        ]
      },
      {
        category: "Strategic & Efficiency Gains",
        points: [
          "Positioned the brokerage as a technology-driven market leader",
          "Enabled data-backed advisory services",
          "Automated executive-grade report generation, reducing analyst overhead"
        ]
      }
    ],

    conclusion: "Suvrin Technologies successfully delivered a large-scale Real Estate Intelligence & CRM Integration Platform that transformed how the client monitored, analyzed, and operationalized real estate market data in New York City. By combining data aggregation, automation, analytics, and CRM intelligence, the platform empowered the brokerage firm to make faster decisions, improve client engagement, and establish itself as a market intelligence leader in the highly competitive NYC real estate sector."
  },
  {
    id: "coaching-chatbot",
    slug: "coaching-chatbot",
    tag: "Agents",
    categories: ["Agents", "AI Products & Platforms", "LLM Fine-Tuning"],
    industry: "EdTech",
    location: "Los Angeles, CA",
    title: "AI Chatbot for Coaching with 40% Latency Improvement",
    client: "LearnBoost",
    overview: "High-performance AI agent designed to provide real-time coaching feedback to students.",
    challenge: "Existing chatbot solutions were too slow for real-time interaction, leading to student frustration and abandonment.",
    solution: "Optimized RAG pipeline with custom caching and model quantization, reducing end-to-end latency by 40% while maintaining high reasoning quality.",
    results: [
      { value: "40%", label: "Latency Improv." },
      { value: "2x", label: "Engagement" },
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "revenue-intelligence",
    slug: "revenue-intelligence",
    tag: "AI Products",
    categories: ["AI Products & Platforms", "Knowledge Systems"],
    industry: "FinTech",
    location: "San Francisco, CA",
    title: "AI Revenue Intelligence Platform",
    client: "Aperian",
    overview: "Built a comprehensive AI-powered revenue intelligence platform that automates capital raising analysis and investor matching.",
    challenge: "The client was manually processing thousands of investor documents, leading to significant delays in capital raising.",
    solution: "We developed a custom LLM-powered engine that extracts key financial metrics and cross-references them with a database of investor preferences.",
    results: [
      { value: "2.5x", label: "Revenue Growth" },
      { value: "+40%", label: "Efficiency" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbda64626dc1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "construction-takeoff",
    slug: "construction-takeoff",
    tag: "Automation",
    categories: ["Automation & Integration", "AI Infrastructure"],
    industry: "Construction",
    location: "Houston, TX",
    title: "Accelerate Construction Takeoffs",
    client: "BuiltFast",
    overview: "AI-powered automation that reduces construction takeoff time from hours to minutes with precision extraction.",
    challenge: "Manual measurements from complex PDF blueprints were a massive bottleneck for estimators.",
    solution: "Computer-vision tool that automatically identifies and measures components in blueprints.",
    results: [
      { value: "10x", label: "Faster Takeoffs" },
      { value: "95%", label: "Accuracy" },
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];