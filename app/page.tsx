// app/page.tsx
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import FeaturedCollections from "@/components/FeaturedCollections";
import Partners from "@/components/Partners";

export const metadata = {
  title: "Frisking | Purveyors of Fine Wine and Liquors",
  description:
    "Frisking is a premium wine and liquor distributor offering curated selections of fine spirits and luxury wines.",
  openGraph: {
    title: "Frisking – Purveyors of Fine Wine and Liquors",
    description:
      "Explore Frisking’s world of fine wine and luxury liquor, curated for the most refined tastes.",
    url: "https://frisking.com",
    siteName: "Frisking",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-offwhite text-gray-900">
      <Hero />
      <AboutPreview />
      <FeaturedCollections />
      <Partners />
    </main>
  );
}
