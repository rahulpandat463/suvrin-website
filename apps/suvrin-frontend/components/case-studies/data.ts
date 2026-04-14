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
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fine-tuning-enterprise",
    slug: "fine-tuning-enterprise",
    tag: "LLM Fine-Tuning",
    categories: ["LLM Fine-Tuning", "Strategy & Advisory"],
    industry: "Consulting",
    location: "United States",
    title: "Fine-Tuning Program for Enterprise Consulting Firm",
    client: "Global Consulting Group",
    overview: "A specialized LLM fine-tuning initiative aimed at automating complex report generation for a top-tier consulting firm.",
    challenge: "The firm's consultants were spending thousands of hours manually synthesizing data into high-stakes reports, leading to burnout and varied quality.",
    solution: "We developed a proprietary fine-tuning pipeline using Llama-3-70B, trained on the firm's historical gold-standard reports to capture their unique voice and analytical framework.",
    results: [
      { value: "60%", label: "Time Saved" },
      { value: "98%", label: "Accuracy" },
    ],
    image: "https://images.unsplash.com/photo-1614850523296-e8c041df43a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pharmacy-automation",
    slug: "pharmacy-automation",
    tag: "AI Products & Platforms",
    categories: ["AI Products & Platforms", "Strategy & Advisory", "Automation & Integration"],
    industry: "Healthcare",
    location: "United States",
    title: "AI Product Strategy for Enterprise Pharmacy Automation",
    client: "HealthLogistics",
    overview: "Strategic roadmap and product development for an AI-enabled pharmacy fulfillment system.",
    challenge: "Manual prescription sorting was slow and prone to errors, causing significant delays in life-saving medication delivery.",
    solution: "Full execution of an AI strategy that integrated computer vision for pill identification and predictive modeling for inventory management.",
    results: [
      { value: "3x", label: "Throughput" },
      { value: "Zero", label: "Error Rate" },
    ],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
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