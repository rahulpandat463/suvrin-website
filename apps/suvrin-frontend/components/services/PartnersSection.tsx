import FrameworkLogos from "@/components/shared/FrameworkLogos";

interface PartnersSectionProps {
  variant?: "standard" | "tech";
}

export default function PartnersSection({
  variant = "standard",
}: PartnersSectionProps) {
  return (
    <section className="bg-white" id="partners">
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed flex flex-col text-center">
        <div className="pt-12 px-6">
          <p className="text-[#888] font-bold text-[0.95rem] font-sans mb-8">
              Worked with:
          </p>
          <FrameworkLogos variant={variant} />
        </div>
      </div>
    </section>
  );
}
