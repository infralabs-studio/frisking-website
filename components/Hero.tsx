"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-maroon/90 via-maroon/70 to-maroon/50"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Wine cellar with oak barrels"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </div>

      {/* Logo */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/frisking.png" 
          alt="Frisking Logo"
          width={120}
          height={120}
          className="mx-auto"
        />
      </motion.div>

      {/* Title & Subtitle */}
      <motion.div
        className="relative z-10 px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-heading text-offwhite tracking-widest">
          FRISKING
        </h1>
        <p className="text-sm md:text-base text-offwhite/90 tracking-widest uppercase">
          Purveyors of Fine Wine and Liquors
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="/collections"
        className="relative z-10 mt-10 inline-block px-8 py-3 bg-maroon text-offwhite rounded-full font-medium tracking-wide hover:bg-gold hover:text-maroon transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Collection
      </motion.a>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-full p-2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
} 