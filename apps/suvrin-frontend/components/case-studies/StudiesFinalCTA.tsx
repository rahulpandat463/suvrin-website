import Link from "next/link";

export default function StudiesFinalCTA() {
  return (
    <section className="bg-white pb-32" id="final-cta">
      <div className="max-w-[1240px] w-full mx-auto px-6">
        <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1e60f2] via-[#2a70ff] to-[#4b8aff] pt-24 pb-16 px-6 flex flex-col items-center justify-center text-center shadow-[0_20px_60px_-15px_rgba(30,96,242,0.3)]">
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-10 max-w-[800px]">
            <h2 className="text-[clamp(2.5rem,6vw,4.2rem)] font-serif tracking-tight leading-[1.05] text-white">
              Let's shape your <br /> AI strategy together
            </h2>

            <Link
              href="/contact"
              className="bg-[#0b3dc1] hover:bg-[#0932a1] transition-all duration-300 text-white px-10 py-4 rounded-full font-semibold text-[1.1rem] shadow-2xl hover:-translate-y-1"
            >
              Connect with Our Team
            </Link>

            {/* Team Avatars */}
            <div className="mt-4 flex flex-col items-center gap-4">
              <div className="flex items-center -space-x-4">
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg z-[3]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-xl z-[4] scale-110">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg z-[3]">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
