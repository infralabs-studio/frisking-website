import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import FeaturedCollections from "@/components/FeaturedCollections";
import CompanyStory from "@/components/CompanyStory";
import OurPromise from "@/components/OurPromise";
import Partners from "@/components/Partners";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "Frisking | Purveyors of Fine Wine and Liquors",
  description:
    "Frisking is a premium wine and liquor distributor offering curated selections of fine spirits and luxury wines.",
  openGraph: {
    title: "Frisking – Purveyors of Fine Wine and Liquors",
    description:
      "Explore Frisking’s world of fine wine and luxury liquor, curated for the most refined tastes.",
    url: "https://frisking.com", // Update with your actual domain later
    siteName: "Frisking",
    images: [
      {
        url: "/images/hero-bg.jpg", // Ensure this path is correct
        width: 1200,
        height: 630,
        alt: "Frisking Luxury Wines",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-offwhite text-charcoal selection:bg-gold selection:text-maroon">
      {/* 1. Hero Section (Parallax & Video/Image) */}
      <Hero />

      {/* 2. Introduction (Magazine Style) */}
      <AboutPreview />

      {/* 3. Products (Grid Gallery) */}
      <FeaturedCollections />

      {/* 4. Brand Story (Dark Parallax Break) */}
      <CompanyStory />

      {/* 5. Service Pillars (Interactive Cards) */}
      <OurPromise />

      {/* 6. Social Proof (Infinite Marquee) */}
      <Partners />

      {/* 7. Final Call to Action (Framed) */}
      <ContactCTA />
    </main>
  );
}