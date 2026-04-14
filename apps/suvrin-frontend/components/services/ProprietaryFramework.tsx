/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ProprietaryFramework() {
  const features = [
    {
      title: "Value-driven innovation",
      desc: "Integrate technical and commercial insights",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M4 9h16" />
          <path d="M12 9v11" />
          <path d="M9 20h6" />
          <path d="M7 14h10" />
        </svg>
      ),
    },
    {
      title: "Accelerated implementation",
      desc: "Build Agents, to Platform, to a Product in steps",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
          <circle cx="4" cy="4" r="1" />
          <circle cx="20" cy="20" r="1" />
          <circle cx="20" cy="4" r="1" />
          <circle cx="4" cy="20" r="1" />
        </svg>
      ),
    },
    {
      title: "Real-world launches",
      desc: "Phased releases with thorough user feedback",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 12a8.5 8.5 0 0 1 14.5-6M20.5 12a8.5 8.5 0 0 1-14.5 6" />
          <path d="M18 3v4h4 M6 21v-4H2" />
          <path d="M13 10l-2 4h4l-2 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 pb-20" id="transformation-framework">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Banner */}
        <div className="bg-gradient-to-br from-[#edf2f9] via-[#f7f9fc] to-[#e4ecf7] rounded-[32px] py-16 md:py-24 px-8 text-center relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Background decorative soft shapes */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/70 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-white/60 to-transparent rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
            <h2 className="text-[clamp(2.5rem,4vw,3.6rem)] font-serif tracking-tight text-[#111] leading-[1.08] mb-6">
              Powered by SFAI&apos;s proprietary{" "}
              <br className="hidden sm:block" />
              AI transformation framework
            </h2>
            <p className="text-[1.1rem] text-[#444] leading-relaxed max-w-[650px] mb-10">
              Our expert team of ex- AI Researchers and VC-backed founders,
              designers, and engineers helps transform businesses to grow with
              AI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-[1.05rem] font-semibold text-white bg-[#0546e0] rounded-full transition-all duration-300 hover:bg-[#0437b0] hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(5,70,224,0.25)]"
            >
              Connect with Our Team
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-16 px-4">
          {features.map((feature, i) => (
            <div key={i}>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-12 h-12 rounded-[12px] bg-white border border-[#eee] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] shrink-0">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-[1.25rem] text-[#111] leading-tight">
                  {feature.title}
                </h3>
              </div>
              <div className="w-full h-[1px] bg-[#eee] mb-5"></div>
              <p className="text-[#666] text-[0.98rem] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
