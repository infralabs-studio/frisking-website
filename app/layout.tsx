// app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Frisking | Purveyors of Fine Wine and Liquors",
  description: "Luxury wine and liquor distributor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/hero-bg.png" as="image" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}