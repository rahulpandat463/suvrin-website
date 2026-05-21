import { Metadata } from "next";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";

export const metadata: Metadata = {
  title: "AI Case Studies | Suvrin Technologies",
  description: "Explore our portfolio of successful AI transformations and innovations across various industries.",
};

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudiesHero />
      <FrameworkLogos />
      <DiscoverGrid />
      <StudiesFinalCTA />

    </main>
  );
}