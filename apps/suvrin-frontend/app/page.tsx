import HeroSection from "@/components/home/HeroSection";
import FrameworkSection from "@/components/home/FrameworkSection";
import ImpactSection from "@/components/home/ImpactSection";
import MidCTA from "@/components/home/MidCTA";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import WhatYouGain from "@/components/shared/WhatYouGain";
import AccelerationSection from "@/components/home/AccelerationSection";
import ToolsSection from "@/components/home/ToolsSection";
import BlogSection from "@/components/home/BlogSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FrameworkSection />
      <ImpactSection />
      <MidCTA />
      <TestimonialsSection />
      <FrameworkSection />
      <WhatYouGain />
      <AccelerationSection />
      <ToolsSection />
      <BlogSection />
      <FinalCTA />
    </>
  );
}
