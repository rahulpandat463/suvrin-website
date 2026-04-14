/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Mission() {
  const missionFeatures = [
    {
      title: "Human-Centered AI",
      desc: "Built for people, not just data.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="7" r="3" />
          <path d="M7 21v-2a5 5 0 0 1 10 0v2" />
        </svg>
      ),
    },
    {
      title: "Impact-Driven Strategy",
      desc: "Innovation with business meaning.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l3 3 5-5" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Rapid AI Transformation",
      desc: "Systems designed to scale and change.",
      icon: (
        <svg
          width="24"
          height="24"
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
    },
  ];

  return (
    <section className="py-32 bg-white" id="mission">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-serif tracking-tight leading-[1.1] text-[#111] mb-6">
              Turning AI innovation
              <br />
              into value
            </h2>
            <p className="text-[1.05rem] text-[#666] max-w-[420px] leading-[1.75] mb-10">
              Our mission is to help teams harness AI to amplify human potential
              and create measurable business value.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-6 mb-12">
              {missionFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-[52px] h-[52px] rounded-full border border-[#e0e0e0] flex items-center justify-center shrink-0 text-[#111]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-[#111] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] text-[#888]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[0.95rem] font-semibold text-white bg-[#0546e0] rounded-full transition-all duration-300 hover:bg-[#0437b0] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(5,70,224,0.25)]"
            >
              Connect with Our Team
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full aspect-[4/5] max-h-[620px] rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
              alt="Golden Gate Bridge in fog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
