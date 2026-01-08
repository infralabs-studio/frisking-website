// app/about/page.tsx
import CompanyStory from "@/components/CompanyStory";
import OurPromise from "@/components/OurPromise";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "About Frisking | Purveyors of Fine Wine and Liquors",
  description:
    "Discover the story behind Frisking – a leading distributor of premium wines and liquors committed to excellence and authenticity.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-offwhite text-gray-900">
      <section className="relative h-[60vh] bg-maroon flex items-center justify-center text-white">
        <h1 className="text-5xl font-serif font-bold">About Frisking</h1>
      </section>
      <CompanyStory />
      <OurPromise />
      <ContactCTA />
    </main>
  );
}
