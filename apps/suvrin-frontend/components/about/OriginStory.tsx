/* eslint-disable react/no-unescaped-entities */
export default function OriginStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <h2 className="text-[clamp(1.25rem,4vw,3rem)] font-serif tracking-tight text-[#111] leading-[1.15]">
              Born at the intersection <br />
              of research, startups, and AI.
            </h2>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-[1rem] text-[#555] leading-[1.85]">
              SFAI Labs was founded by a collective of Ex-AI Researcher and
              Ex-VC-backed Founders who saw a gap between AI research and
              business reality.
            </p>
            <p className="text-[1rem] text-[#555] leading-[1.85] mt-6">
              What started as a small innovation unit is evolving into a global
              network — delivering AI products that learn, adapt, and transform
              industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
