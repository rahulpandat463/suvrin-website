import FrameworkLogos from "../shared/FrameworkLogos";

export default function FrameworkSection() {
  return (
    <section className="bg-white" id="framework">
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
        {/* Logos and Title */}
        <div className="pt-12 px-6">
          <p className="text-[#888] text-[0.95rem] font-sans mb-8">
            Worked with:
          </p>

          <FrameworkLogos />

          <h2 className="text-[clamp(1.8rem,4.5vw,4rem)] text-text-primary tracking-tight font-serif mb-2">
            Our proven AI delivery framework
          </h2>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-[#e5e5e5] border-dashed"></div>

        {/* Framework Cards */}
        <div className="bg-[#fafafa] py-16 px-6 w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full text-left">
            {/* Strategy */}
            <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
              <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                <img
                  src="https://framerusercontent.com/images/oXDuZAUX9L5DJtCxlTAoJYaee4.svg?width=338&height=264"
                  alt="Strategy Visual"
                  className="w-[85%] h-full object-contain"
                />
              </div>
              <div className="p-8 pt-0 flex flex-col flex-1">
                <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                  Strategy
                </h3>
                <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                  Clarify your high-value AI opportunities and set an AI roadmap
                  to accelerate your business&apos; growth. We help you minimize
                  technical risk and maximize value return through professional
                  AI strategy, starting with first-principles.
                </p>
              </div>
            </div>

            {/* Development */}
            <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
              <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                <img
                  src="https://framerusercontent.com/images/pWnkjFiOVw83aOdWsi4YpJcyV4.png?scale-down-to=512&width=760&height=456"
                  alt="Development Visual"
                  className="w-[95%] h-full object-contain"
                />
              </div>
              <div className="p-8 pt-0 flex flex-col flex-1">
                <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                  Development
                </h3>
                <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                  Our team of AI engineers and designers build scalable AI
                  custom to your business. From prototypes to enterprise-grade
                  systems, we ensure all projects — from Agents to Platforms —
                  create long-term impact.
                </p>
              </div>
            </div>

            {/* Commercial */}
            <div className="rounded-xl overflow-hidden bg-white flex flex-col pt-8">
              <div className="flex items-center justify-center px-8 pb-6 aspect-[4/3] relative">
                <img
                  src="https://framerusercontent.com/images/FTYr7yDYpTGrjLecLA7dZOE1dU.png?scale-down-to=512&width=750&height=450"
                  alt="Commercial Visual"
                  className="w-[95%] h-full object-contain"
                />
              </div>
              <div className="p-8 pt-0 flex flex-col flex-1">
                <h3 className="text-3xl font-serif tracking-tight text-text-primary mb-4">
                  Commercial
                </h3>
                <p className="text-[0.98rem] text-[#666] leading-[1.6]">
                  Turn your AI into a market-winning product. From launch to
                  scaled adoption to continuous optimization, we help you create
                  real-world value and turn your AI innovation into a lasting
                  competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
