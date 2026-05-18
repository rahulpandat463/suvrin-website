/* eslint-disable react/no-unescaped-entities */
export default function WhoWeAre() {
  return (
    <div className="bg-white pt-32 px-10">
      <section
        className="relative pt-28 pb-36 bg-[#f9f9f9] overflow-hidden rounded-[24px] mx-auto max-w-[1200px]"
        id="who-we-are"
      >
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Icon Circle */}
          <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center mb-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#0546e0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              <path
                d="M20.5 14.5c-.83 0-2.5.41-2.5 1.25V17h5v-1.25c0-.84-1.67-1.25-2.5-1.25zm0-2.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                opacity="0.8"
              />
              <path
                d="M3.5 14.5c-.83 0-2.5.41-2.5 1.25V17h5v-1.25c0-.84-1.67-1.25-2.5-1.25zm0-2.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif tracking-tight text-[#111] mb-6 leading-[1.1]">
            Who We Are
          </h2>

          {/* Description */}
          <p className="text-[1.1rem] text-[#555] leading-[1.8] max-w-[700px] mb-4">
            Suvrin Technologies is a global technology and AI consulting firm founded on a simple belief: technology should create real, measurable value for the businesses that adopt it. We work with companies across India, the UAE, and the United States to design, build, and deploy AI solutions, enterprise ERP systems, and custom digital products that solve real business problems.
          </p>
          <p className="text-[1.1rem] text-[#555] leading-[1.8] max-w-[700px]">
            Based in Gurgaon (India), Dubai (UAE), and Hoboken (USA), our team of engineers, AI specialists, business analysts, and project managers bring together decades of combined experience across industries including manufacturing, healthcare, logistics, finance, real estate, and professional services.
          </p>
        </div>
      </section>
    </div>
  );
}
