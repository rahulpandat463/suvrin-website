/* eslint-disable react/no-unescaped-entities */
export default function GlobalPresence() {
  const locations = [
    {
      city: "India — Gurgaon (HQ)",
      address: "P1/55, DLF Phase 2, Cyber City, Gurgaon",
      desc: "Our India headquarters drives delivery across the subcontinent and serves as our primary engineering and AI development hub.",
    },
    {
      city: "UAE — Dubai",
      address: "MAXCODE SOLUTIONS LLC, Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina",
      desc: "Our Dubai office serves clients across the UAE, Saudi Arabia, Qatar, and the broader GCC region.",
    },
    {
      city: "USA — Hoboken, NJ",
      address: "Riverfront Center, 221 River St, 9th Floor, Hoboken, NJ 07030",
      desc: "Our US office supports North American clients and facilitates strategic partnerships with global technology leaders.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="global-presence">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-serif tracking-tight text-[#111] mb-12 text-center">
          Global Presence
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-[#fafafa] p-8 rounded-2xl border border-[#f0f0f0] flex flex-col"
            >
              <h3 className="text-[1.25rem] font-serif font-bold text-[#111] mb-2">
                {loc.city}
              </h3>
              <p className="text-[0.85rem] text-[#0546e0] font-medium mb-4">
                {loc.address}
              </p>
              <p className="text-[0.95rem] text-[#666] leading-relaxed mt-auto">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
