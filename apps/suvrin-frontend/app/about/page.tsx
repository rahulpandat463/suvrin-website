import WhoWeAre from "@/components/about/WhoWeAre";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Mission from "@/components/about/Mission";
import OriginStory from "@/components/about/OriginStory";
import Values from "@/components/about/Values";
import GlobalPresence from "@/components/about/GlobalPresence";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Suvrin Technologies | AI & Technology Consulting Firm — India, Dubai, USA ",
  description: "Suvrin Technologies is a global AI and technology consulting firm with offices in Gurgaon, Dubai, and the USA. We help businesses in India and the GCC transform through AI, ERP, and custom software solutions.",
};

export default function About() {
  return (
    <>
      <WhoWeAre />
      <section className="bg-white" id="framework">
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
          <div className="pt-12 px-6">
            <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
              Worked with:
            </p>
            <FrameworkLogos />
          </div>
        </div>
      </section>
      <Mission />
      <OriginStory />
      <Values />
      <GlobalPresence />
    </>
  );
}
