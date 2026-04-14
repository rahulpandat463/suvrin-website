import { Metadata } from "next";
import CategoryHero from "@/components/case-studies/CategoryHero";
import FrameworkLogos from "@/components/shared/FrameworkLogos";
import DiscoverGrid from "@/components/case-studies/DiscoverGrid";
import { categories, slugify, categoryDescriptions } from "@/components/case-studies/data";
import { Footer } from "@/components/Footer";
import StudiesFinalCTA from "@/components/case-studies/StudiesFinalCTA";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((cat) => slugify(cat) === slug);

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category} Case Studies | Suvrin Technologies`,
    description: categoryDescriptions[category] || `Explore our ${category} case studies and AI transformations.`,
  };
}

export default async function ServiceScopePage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((cat) => slugify(cat) === slug);

  if (!category) {
    notFound();
  }

  const description = categoryDescriptions[category] || "Specialized AI solutions tailored to your industry needs.";

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <CategoryHero category={category} description={description} />
      <FrameworkLogos />
      <div className="bg-white">
        <DiscoverGrid initialFilter={category} disableScroll={true} />
      </div>
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
