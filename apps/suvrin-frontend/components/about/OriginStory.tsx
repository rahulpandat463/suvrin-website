/* eslint-disable react/no-unescaped-entities */
export default function OriginStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <h2 className="text-[clamp(1.25rem,4vw,3rem)] font-serif tracking-tight text-[#111] leading-[1.15]">
              Built on Delivery. <br />
              Grown on Trust.
            </h2>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-[1rem] text-[#555] leading-[1.85]">
              Suvrin Technologies was founded by technology practitioners who had seen too many digital projects fail — not because of bad technology, but because of poor strategy, misaligned expectations, and lack of execution discipline. We built Suvrin to be different: a firm where every project is delivered with the same rigour, transparency, and client focus that we would demand if it were our own business.
            </p>
            <p className="text-[1rem] text-[#555] leading-[1.85] mt-6">
              From our first ERP implementation in India to AI platform deployments for global clients, we have grown by doing one thing consistently well: helping our clients win with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
