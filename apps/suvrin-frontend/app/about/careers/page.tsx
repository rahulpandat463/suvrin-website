import Link from "next/link";

export const metadata = {
  title: "Careers | Suvrin Technologies",
  description:
    "Join Suvrin Technologies and help build the future of AI. Explore open roles in engineering, strategy, design, and more.",
};

export default function Careers() {
  const openRoles = [
    {
      title: "Senior AI Engineer",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Build and deploy production-grade AI systems. Experience with LLMs, RAG pipelines, and ML infrastructure required.",
      tags: ["Python", "LLMs", "ML Ops"],
    },
    {
      title: "AI Product Manager",
      location: "Remote / Singapore",
      type: "Full-time",
      description:
        "Drive AI product strategy from concept to launch. Work closely with engineering and clients to deliver business value.",
      tags: ["Product Strategy", "AI/ML", "Agile"],
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Build enterprise-grade AI platforms and user interfaces. React, Node.js, and cloud experience preferred.",
      tags: ["React", "Node.js", "Cloud"],
    },
    {
      title: "AI Strategist",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "Consult with clients to identify high-value AI opportunities and develop implementation roadmaps.",
      tags: ["Consulting", "AI Strategy", "Business"],
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Contract",
      description:
        "Design intuitive experiences for complex AI-powered products. Strong portfolio in SaaS or enterprise tools required.",
      tags: ["Figma", "Design Systems", "UX Research"],
    },
    {
      title: "Data Engineer",
      location: "Remote / Singapore",
      type: "Full-time",
      description:
        "Architect and maintain scalable data pipelines that power our AI solutions. Experience with Spark, Airflow, and cloud data platforms.",
      tags: ["Spark", "Airflow", "ETL"],
    },
  ];

  const perks = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Remote-First",
      desc: "Work from anywhere in the world. We believe great talent isn't bound by geography.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
        </svg>
      ),
      title: "Cutting-Edge AI",
      desc: "Work with the latest in LLMs, agentic systems, and AI infrastructure every day.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "Learning Budget",
      desc: "Annual stipend for conferences, courses, and books to keep growing your skills.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Health & Wellness",
      desc: "Comprehensive health coverage and wellness benefits for you and your family.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Small, Elite Team",
      desc: "Collaborate with world-class engineers and strategists in a tight-knit, high-impact environment.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Equity & Ownership",
      desc: "Meaningful equity compensation so you share in the success you help create.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="bg-white pt-32 px-10">
        <section
          className="relative pt-30 pb-40 bg-[#f4f6f8] overflow-hidden rounded-[24px] mx-auto max-w-[1200px]"
          id="careers-hero"
        >
          {/* Geometric Pattern - SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Vertical dashed center line */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#d0d4da"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            {/* Horizontal center line */}
            <line
              x1="0"
              y1="75%"
              x2="100%"
              y2="75%"
              stroke="#d0d4da"
              strokeWidth="1"
            />
            {/* Diagonal lines from center - left */}
            <line
              x1="50%"
              y1="40%"
              x2="0"
              y2="0"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="0"
              y2="100%"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="15%"
              y2="100%"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="15%"
              y2="0"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            {/* Diagonal lines from center - right */}
            <line
              x1="50%"
              y1="40%"
              x2="100%"
              y2="0"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="100%"
              y2="100%"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="85%"
              y2="100%"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            <line
              x1="50%"
              y1="40%"
              x2="85%"
              y2="0"
              stroke="#d8dce2"
              strokeWidth="0.8"
            />
            {/* Blue dots */}
            <circle cx="20%" cy="75%" r="5" fill="#0546e0" />
            <circle cx="80%" cy="75%" r="5" fill="#0546e0" />
          </svg>

          <div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[76px] h-[76px] rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-8 border border-[#eee]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="#0546e0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] font-serif tracking-tight text-[#111] mb-5 leading-[1.1]">
              Careers
            </h1>

            <p className="text-[1.05rem] text-[#555] leading-[1.7] max-w-[560px]">
              We don&apos;t just build AI — we&apos;re defining AI innovation in
              the modern era.
            </p>
          </div>
        </section>
      </div>
      {/* Tools & Technologies */}
      <section
        className="bg-white py-12 border-t border-[#e5e5e5] border-dashed overflow-hidden"
        id="tools"
      >
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed relative z-10">
          <p className="text-center text-[#888] text-[0.95rem] font-medium mb-10">
            Tools & Technologies
          </p>
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-20">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-20 shrink-0 text-[1.4rem] font-bold font-sans text-gray-800 pb-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-[#61DAFB]">
                      <svg
                        width="28"
                        height="28"
                        viewBox="-11.5 -10.23174 23 20.46348"
                      >
                        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                        <g stroke="#61dafb" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                      </svg>
                    </div>
                    React
                  </div>
                  <div className="font-black tracking-tighter text-3xl">
                    NEXT<span className="font-light text-xl">.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3776AB]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 118 118"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.3093 3.63004C43.515 3.63004 39.5413 10.3121 39.5413 10.3121L39.4678 25.1385H77.6749V28.1887H33.2764C18.6657 28.1887 13.5645 36.6346 13.5645 52.8875C13.5645 69.1404 17.5 76.5447 28.98 77.2847H38.257V66.2411C38.257 56.548 46.223 48.582 55.9161 48.582H78.9327C88.6258 48.582 96.5918 40.616 96.5918 30.9229V15.2533C96.5918 15.2533 91.5471 3.63004 58.3093 3.63004ZM44.2057 11.2335C46.8523 11.2335 48.997 13.3782 48.997 16.0248C48.997 18.6714 46.8523 20.816 44.2057 20.816C41.5591 20.816 39.4144 18.6714 39.4144 16.0248C39.4144 13.3782 41.5591 11.2335 44.2057 11.2335Z"
                        fill="#387EB8"
                      />
                      <path
                        d="M59.6274 114.37C74.4218 114.37 78.3955 107.688 78.3955 107.688L78.4689 92.8615H40.2619V89.8113H84.6603C99.2711 89.8113 104.372 81.3654 104.372 65.1125C104.372 48.8596 100.437 41.4553 88.9568 40.7153H79.6797V51.7589C79.6797 61.452 71.7138 69.418 62.0207 69.418H39.0041C29.311 69.418 21.3449 77.384 21.3449 87.0771V102.747C21.3449 102.747 26.3897 114.37 59.6274 114.37ZM73.7311 106.767C71.0845 106.767 68.9398 104.622 68.9398 101.975C68.9398 99.3286 71.0845 97.184 73.7311 97.184C76.3777 97.184 78.5224 99.3286 78.5224 101.975C78.5224 104.622 76.3777 106.767 73.7311 106.767Z"
                        fill="#FFE052"
                      />
                    </svg>{" "}
                    Python
                  </div>
                  <div className="flex flex-col items-start leading-[0.8]">
                    <span className="font-bold text-xl">LLaMA</span>
                    <span className="text-[0.6rem] text-gray-500 font-semibold tracking-wider uppercase">
                      by Meta
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-gradient-to-tr from-purple-600 to-blue-500 rounded flex items-center justify-center text-white text-[10px]">
                      🦙
                    </div>
                    LlamaIndex
                  </div>
                  <div className="font-medium flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.28 11.5c.06-.52.09-1.04.1-1.57-.26-3.8-3.03-6.9-6.79-7.58-.2-.04-.42-.06-.63-.07-1.12-.08-2.26.11-3.3.56-1 .44-1.92 1.05-2.68 1.83C7.26 3.1 5.07 2.44 2.8 3.2 0 4.29-1 7.15-.35 9.87c.2.86.58 1.66 1.12 2.37-1.07 1.55-1.56 3.42-1.38 5.3.36 3.73 3.23 6.72 6.94 7.24 1.15.16 2.31 0 3.38-.45 1.05-.44 2-.1 2.8-1.85 1.67 1.62 3.96 2.37 6.27 1.67 2.82-1.13 3.8-4.04 3.08-6.79-.19-.77-.52-1.5-1-2.14 1.25-.97 2-2.3 2.14-3.72zm-12.75-8.4c1.86.13 3.53 1.25 4.3 2.92L8.2 8.52c-.6-1.18-.8-2.5-.58-3.8l.64.08c.6-.9 1.4-1.63 2.3-2.12.57-.3 1.22-.44 1.86-.48h.01zm-5.18 2.6c1.17 0 2.3.43 3.2 1.2-.5 1.4-1.25 2.7-2.17 3.8-1.44-.06-2.82.35-3.95 1.16v-.66c-.03-2.3 1.42-4.32 3.6-5.02.43-.13.88-.22 1.34-.23zm-.67 16l4.63-2.53-2.65-4.52C4.54 15.65 3.32 16.5 2 17.1c-.04-.37-.06-.75-.06-1.13 0-1.87.97-3.5 2.5-4.47 1.2-.75 2.6-1.05 3.9-1v.7c0 1.25.32 2.45.9 3.53l.3.62L5 19.86l-1.3-.15zm10.74 1.15c-1.86-.12-3.53-1.24-4.3-2.92l5.64-2.5c.6 1.18.8 2.5.58 3.8-.2-.02-.4-.05-.58-.08-.63.9-1.44 1.62-2.36 2.1-.56.3-1.2.45-1.84.5h-.02v-.02zm3.36-4.9c-.8.56-1.74.88-2.73.9V14.6c1.44.02 2.8-.4 3.94-1.2v.63c.02 2.3-1.44 4.32-3.6 5.04-.43.15-.9.23-1.36.24l.5-.5-1.2-1.95zm2.74-5.32c-.1.35-.15.72-.2 1.07 0 1.87-1 3.53-2.5 4.5h-1c-1.05.65-2.28.94-3.5 1h-.6l2.12-3.52c.98-.32 1.83-.94 2.45-1.78l1.32-.4" />
                    </svg>
                    OpenAI
                  </div>
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    <span className="text-[1.5rem]">🤗</span> HuggingFace
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-16 bg-white" id="intro">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-serif tracking-tight leading-[1.1] text-[#111] mb-6">
                We&apos;re building the next
                <br />
                era of AI products
              </h2>
              <p className="text-[1.05rem] text-[#666] max-w-[520px] leading-[1.75] mb-10">
                At Suvrin Technologies, we partner with visionary founders,
                businesses, and enterprises to turn ideas into scalable AI
                products. Our team thrives at the intersection of strategy,
                technology, and commercial — where projects become
                breakthroughs.
              </p>

              {/* Feature List */}
              <div className="flex flex-col gap-4 mb-10 max-w-[480px]">
                {[
                  {
                    title: "Impact-first mindset",
                    desc: "Measurable innovation over empty hype.",
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    ),
                  },
                  {
                    title: "Continuous growth",
                    desc: "From design sprints to deep AI research.",
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <circle cx="12" cy="11" r="3" />
                      </svg>
                    ),
                  },
                  {
                    title: "Entrepreneurial",
                    desc: "Have a % ownership of created products.",
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 border border-[#eaeaea] rounded-[16px] p-4 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    <div className="w-[46px] h-[46px] rounded-[10px] bg-[#f9f9f9] border border-[#f0f0f0] flex items-center justify-center shrink-0 text-[#333]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[1.05rem] font-semibold text-[#111] leading-tight mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[0.9rem] text-[#888] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[0.95rem] font-semibold text-white bg-[#0546e0] rounded-full transition-all duration-300 hover:bg-[#0437b0] shadow-[0_4px_16px_rgba(5,70,224,0.25)]"
              >
                Meet Our Team
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full aspect-[4/5] max-h-[640px] rounded-[24px] overflow-hidden bg-[#e0e0e0] border border-[#eee]">
              <img
                src="https://images.unsplash.com/photo-1541094000305-acbfdffdf693?auto=format&fit=crop&w=800&q=80"
                alt="Zen Garden with Rock"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life at Suvrin */}
      <section className="bg-white" id="life-at-suvrin">
        <div className="max-w-[1400px] mx-auto pt-16 pb-12 px-6 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,3.8rem)] font-serif tracking-tight text-[#111]">
            Life at Suvrin labs
          </h2>
        </div>

        <div className="bg-[#f4f6f8] py-20 w-full overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Zen Mastery",
                  desc: "We value focus and clarity of mind, actions of self-improvement ripple out into quality of work and life.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="6" r="2.5" />
                      <path d="M6 14.5c0-1.5 2-3.5 6-3.5s6 2 6 3.5" />
                      <path d="M12 11l-3 7" />
                      <path d="M12 11l3 7" />
                      <path d="M7 16l-3-2" />
                      <path d="M17 16l3-2" />
                    </svg>
                  ),
                },
                {
                  title: "Innovation Every Day",
                  desc: "We're advancing the frontier of AI technology to create the future.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  ),
                },
                {
                  title: "Autonomy & trust",
                  desc: "We believe in ownership, not micromanagement. We trust you.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h4" />
                      <rect x="8" y="8" width="8" height="8" rx="2" />
                      <path d="M16 10h4" />
                      <path d="M16 14h4" />
                    </svg>
                  ),
                },
                {
                  title: "Global Impact",
                  desc: "We build for clients in 10+ countries, from SF, to Singapore, to Dubai, to London.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-[20px] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#eaeaea] flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 group">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-white border border-[#eaeaea] shadow-[0_2px_12px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-4 outline-[#f4f4f4] flex items-center justify-center text-[#555] mb-16 group-hover:text-[#0546e0] group-hover:outline-[#e0e4fa] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-[1.25rem] font-serif tracking-tight text-[#111] leading-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] text-[#666] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Open Roles Expandable Accordion */}
      <section className="py-24 bg-white" id="open-roles">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-serif tracking-tight text-[#111] mb-5">
              Start doing work that matters
            </h2>
            <p className="text-[1.05rem] text-[#666] leading-[1.75] max-w-[620px]">
              Our philosophy is simple — hire a team of diverse, passionate people and foster
              a culture that empowers you to do you best work.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {[
              {
                name: "Design",
                description: "Open positions in our design team.",
                roles: [
                  {
                    title: "Product Designer",
                    category: "Design",
                    location: "Global",
                    type: "Part-time",
                    desc: "We're looking for a senior product designer to lead the design of our core AI products.",
                    dotColor: "bg-[#0546e0]",
                    badgeBg: "bg-[#f0f4ff]",
                  }
                ]
              },
              {
                name: "Software Development",
                description: "Open positions in our development team.",
                roles: [
                  {
                    title: "Engineering Manager",
                    category: "Software Development",
                    location: "San Fransisco",
                    type: "Full-time",
                    desc: "We're looking for a mid-level engineering manager to join our team and build scalable AI infrastructure.",
                    dotColor: "bg-[#e0145c]",
                    badgeBg: "bg-[#fff0f5]",
                  },
                  {
                    title: "Senior AI Engineer",
                    category: "Software Development",
                    location: "Remote",
                    type: "Full-time",
                    desc: "Build and deploy production-grade AI systems. Experience with LLMs and RAG pipelines required.",
                    dotColor: "bg-[#e0145c]",
                    badgeBg: "bg-[#fff0f5]",
                  }
                ]
              }
            ].map((category) => (
              <div key={category.name} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 pt-14 border-t border-[#eaeaea] first:border-0 first:pt-0">
                {/* Category Header */}
                <div>
                  <h3 className="text-[1.75rem] font-serif tracking-tight text-[#111] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[1rem] text-[#555] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Job Cards */}
                <div className="flex flex-col gap-4">
                  {category.roles.map((job) => (
                    <div key={job.title} className="bg-white border border-[#eaeaea] rounded-[20px] p-6 lg:p-8 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#d0d0d0] transition-all duration-300">
                      
                      {/* Always Visible Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 bg-white">
                        <div className="flex flex-wrap items-center gap-4">
                          <h4 className="text-[1.05rem] font-medium text-[#111]">
                            {job.title}
                          </h4>
                          <span className={`text-[0.8rem] font-medium ${job.badgeBg} text-[#333] px-3 py-1 rounded-full flex items-center gap-2`}>
                            <span className={`w-1.5 h-1.5 ${job.dotColor} rounded-full`}></span>
                            {job.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[0.85rem] text-[#666] whitespace-nowrap">
                          {/* Globe Icon mockup */}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          {job.location}
                        </div>
                      </div>

                      {/* Expandable Content on Hover */}
                      <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-6 relative z-0">
                            <p className="text-[0.95rem] text-[#555] leading-relaxed mb-6">
                              {job.desc}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-[0.85rem] text-[#444] font-medium">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{job.type}</span>
                              </div>
                              <button className="px-7 py-2.5 bg-[#0546e0] text-white text-[0.9rem] font-semibold rounded-full hover:bg-[#0437b0] transition-colors shadow-[0_4px_16px_rgba(5,70,224,0.25)]">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
