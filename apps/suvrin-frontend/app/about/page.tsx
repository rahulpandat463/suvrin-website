import WhoWeAre from "@/components/about/WhoWeAre";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import Mission from "@/components/about/Mission";
import OriginStory from "@/components/about/OriginStory";

export default function About() {
  return (
    <>
      <WhoWeAre />
      <section className="bg-white" id="framework">
        <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
          <div className="pt-12 px-6">
            <p className="text-[#888] text-[0.95rem] font-sans mb-8">
              Worked with:
            </p>
            <FrameworkLogos />
          </div>
        </div>
      </section>
      <Mission />
      <OriginStory />
    </>
  );
}
