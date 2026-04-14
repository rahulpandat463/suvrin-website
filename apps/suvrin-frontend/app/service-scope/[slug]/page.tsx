import { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import { Footer } from "@/components/Footer";
import { categories, slugify, categoryDescriptions } from "@/components/case-studies/data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((cat) => slugify(cat) === slug);

  if (!category) {
    return {
      title: "Page Not Found | Suvrin Technologies",
    };
  }

  return {
    title: `${category} Case Studies | Suvrin Technologies`,
    description: categoryDescriptions[category] || `Explore our ${category} case studies and see how we deliver world-class AI with acceleration.`,
  };
}

export default async function ServiceScopePage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((cat) => slugify(cat) === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <CaseStudiesHero 
        title={category} 
        description={categoryDescriptions[category]}
      />
      <FrameworkLogos />
      <DiscoverGrid initialFilter={category} />
      <StudiesFinalCTA />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: slugify(cat),
  }));
}
