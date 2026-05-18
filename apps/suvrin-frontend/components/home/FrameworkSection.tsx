import FrameworkLogos from "../shared/FrameworkLogos";

export default function FrameworkSection() {
  return (
    <section className="bg-white" id="framework">
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
        {/* Logos and Title */}
        <div className="pt-12 px-6">
          <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
              Worked with:
            </p>

          <FrameworkLogos />

          <h2 className="text-[clamp(1.8rem,4.5vw,4rem)] text-text-primary tracking-tight font-serif mb-2">
            How We Deliver AI — From Idea to Impact 
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
                <p className="text-[0.98rem] text-[#666] leading-[1.6] mb-4">
                  Clarify your highest-value AI opportunities and build a practical roadmap. We identify where AI creates the most impact for your business — starting with first-principles thinking and a deep understanding of your market. You leave with a clear vision, a prioritised backlog, and confidence in the ROI.
                </p>
                <ul className="space-y-3 text-[0.95rem] text-[#666]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI opportunity assessment and prioritisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Technical feasibility and risk analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI roadmap with milestones, timelines, and budget estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Stakeholder alignment workshops</span>
                  </li>
                </ul>
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
                <p className="text-[0.98rem] text-[#666] leading-[1.6] mb-4">
                  Our team of AI engineers, architects, and designers build scalable, production-grade AI systems tailored to your specific business context. From intelligent agents to enterprise platforms — we deliver AI that works in the real world, not just the demo room.
                </p>
                <ul className="space-y-3 text-[0.95rem] text-[#666]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Custom AI model development and fine-tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Intelligent agent and automation development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enterprise-grade UI/UX design and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>API integrations and third-party system connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Scalable cloud deployment on AWS, GCP, or Azure</span>
                  </li>
                </ul>
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
                <p className="text-[0.98rem] text-[#666] leading-[1.6] mb-4">
                  Building AI is only half the job. We help you turn your AI into a market-winning product — from launch strategy and user onboarding to performance optimisation and continuous improvement. We measure success by the business value your AI creates, not just the code we ship.
                </p>
                <ul className="space-y-3 text-[0.95rem] text-[#666]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Go-to-market strategy for AI products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>User adoption and change management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Performance monitoring and KPI frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Continuous optimisation and iteration cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
