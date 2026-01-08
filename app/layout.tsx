import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GeistSans, GeistMono } from "geist/font";

export const metadata = {
  title: "Frisking | Purveyors of Fine Wine and Liquors",
  description: "Frisking is a luxury distributor of fine wines and liquors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-body bg-offwhite text-charcoal scroll-smooth antialiased`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
