/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function FinalCTA() {
  return (
    <section className="bg-white pb-12 overflow-hidden px-0 md:px-0" id="cta">
      <div className="max-w-[1340px] mx-auto px-4 md:px-6 border-x-0 md:border-x border-[#e5e5e5] border-dashed">
        <div className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#0546e0] py-16 md:py-36 px-5 md:px-6 flex flex-col items-center justify-center text-center mt-8 md:mt-12 shadow-2xl shadow-blue-500/10">
          {/* Base Mesh Background */}
          <div className="absolute inset-0 bg-[#0546e0]"></div>

          {/* Animated Mesh Gradients */}
          <div className="absolute inset-0 overflow-hidden opacity-60">
            <div className="absolute -top-[20%] -left-[10%] w-[80%] md:w-[60%] h-[60%] rounded-full bg-[#3a76f0] blur-[80px] md:blur-[120px] animate-pulse"></div>
            <div className="absolute top-[20%] -right-[10%] w-[70%] md:w-[50%] h-[50%] rounded-full bg-[#1c55d4] blur-[70px] md:blur-[100px] [animation-delay:2s]"></div>
            <div className="absolute -bottom-[20%] left-[20%] w-[90%] md:w-[70%] h-[70%] rounded-full bg-[#2f71f4] blur-[90px] md:blur-[140px] [animation-delay:4s]"></div>
          </div>

          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.3] md:opacity-[0.4] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>

          {/* Premium Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.07] md:opacity-[0.1]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px md:80px 80px",
            }}
          ></div>

          {/* Floating Elements (Subtler on mobile) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute top-10 md:top-20 left-10 md:left-20 w-2 md:w-3 h-2 md:h-3 rounded-full bg-white/20 animate-bounce [animation-duration:3s]"></div>
            <div className="absolute bottom-10 md:bottom-20 right-10 md:right-40 w-3 md:w-4 h-3 md:h-4 rounded-full border border-white/10 animate-pulse [animation-duration:5s]"></div>
            <div className="hidden md:block absolute top-1/2 right-20 w-2 h-2 rounded-full bg-cyan-400/30 animate-ping [animation-duration:4s]"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center gap-6 md:gap-8 max-w-4xl">


            <h2 className="text-[clamp(2.2rem,8vw,5.5rem)] font-serif tracking-tight leading-[1.1] md:leading-[1] text-white">
              Let's Shape Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-200">
                AI Strategy Together
              </span>
            </h2>

            <p className="text-blue-100/80 text-[1rem] md:text-[1.25rem] max-w-2xl leading-relaxed font-sans font-light px-2">
              Join forward-thinking enterprises across India, Dubai, and the USA building high-impact AI solutions with Suvrin Technologies. Strategic advisory slots are now open — speak with our team today.
            </p>

            <div className="flex flex-col items-center gap-6 md:gap-8 mt-2 md:mt-4 w-full">
              <button className="w-full sm:w-auto group relative bg-white text-[#0546e0] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[1rem] md:text-[1.1rem] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
                <span className="relative z-10">Connect with Our Team →</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-3 text-white/70 text-[0.8rem] md:text-sm font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#0546e0] bg-blue-400 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-center">Strategic Advisory slots open for Q2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
