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
  title: "Technology & AI Services | Suvrin Technologies — India, Dubai, USA ",
  description: "Suvrin Technologies offers end-to-end technology services including AI development, Odoo ERP implementation, custom software development, cybersecurity, digital transformation, and IT consulting across India and the UAE. ",
};

export default function Services() {
  return (
    <>
      <ServicesHero
        id="services-hero"
        title={
          <>
            Technology Services Built
            <br />
            for Impact
          </>
        }
        description="From AI strategy to enterprise ERP — Suvrin Technologies delivers the full spectrum of technology services that modern businesses need to compete, grow, and lead. Our work spans seven service domains, with teams operating across India, Dubai, and the USA."
      />

      <PartnersSection variant="standard" />
    </>
  );
}
