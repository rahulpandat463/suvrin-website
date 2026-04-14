import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PartnersSection from "@/components/services/PartnersSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ProprietaryFramework from "@/components/services/ProprietaryFramework";
import InnovationCycle from "@/components/services/InnovationCycle";
import WhitepaperCTA from "@/components/services/WhitepaperCTA";
import WhatYouGain from "@/components/shared/WhatYouGain";
import LabsAccelerationTable from "@/components/services/LabsAccelerationTable";
import ToolsSection from "@/components/home/ToolsSection";
import FAQSection from "@/components/services/FAQSection";

export const metadata: Metadata = {
  title: "AI Services for Business | Suvrin Technologies",
  description:
    "Transform your business with AI. From strategy to launch, we support your entire AI innovation lifecycle.",
};

export default function BusinessServices() {
  return (
    <>
      <ServicesHero
        id="business"
        title={
          <>
            AI
            <br />
            transformation
            <br />
            as a service
          </>
        }
        description="We support you through your entire AI innovation lifecycle, from strategy to launch."
      />

      <PartnersSection variant="standard" />

      <TestimonialsSection />
      <ProprietaryFramework />
      <InnovationCycle />
      <WhitepaperCTA />
      <WhatYouGain />
      <LabsAccelerationTable />
      <ToolsSection />
      <FAQSection />
    </>
  );
}
