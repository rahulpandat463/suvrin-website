import FrameworkLogos from "../shared/FrameworkLogos";

export default function WorkedWithSection() {
  return (
    <section className="bg-white" id="worked-with">
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
        <div className="pt-12 px-6">
          <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
            Worked with:
          </p>
          <FrameworkLogos />
        </div>
      </div>
    </section>
  );
}
