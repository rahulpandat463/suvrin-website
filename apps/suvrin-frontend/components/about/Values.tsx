/* eslint-disable react/no-unescaped-entities */
export default function Values() {
  const values = [
    {
      title: "Delivery Over Promises",
      desc: "We judge ourselves by what we ship, not what we say. Every commitment we make comes with a plan to back it up.",
    },
    {
      title: "Client-First Thinking",
      desc: "Your business outcomes are our north star. We design solutions that fit your reality — not the other way around.",
    },
    {
      title: "Technical Excellence",
      desc: "We hold ourselves to the highest engineering standards. Our code, our architecture, and our AI models are built to last.",
    },
    {
      title: "Transparency",
      desc: "No surprises. No hidden costs. No scope creep without your knowledge. We communicate early, often, and clearly.",
    },
    {
      title: "Long-Term Partnership",
      desc: "We are not a one-project vendor. We invest in understanding your business deeply so we can grow with you year after year.",
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]" id="values">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-serif tracking-tight text-[#111] mb-12 text-center">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#f0f0f0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              <div className="text-[0.8rem] text-[#888] font-bold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-3">
                {val.title}
              </h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
