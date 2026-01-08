"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Luxury wine cellar background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-maroon/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center text-offwhite px-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/images/frisking.png"
              alt="Frisking Logo"
              width={90}
              height={90}
              priority
            />
          </motion.div>

          {/* Brand Name */}
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-3">
            FRISKING
          </h1>

          {/* Tagline */}
          <p className="text-sm md:text-base tracking-[0.25em] uppercase opacity-90 mb-8">
            Purveyors of Fine Wine and Liquors
          </p>

          {/* CTA */}
          <a
            href="#about-preview"
            className="inline-block border border-gold px-8 py-3 text-sm tracking-widest uppercase
                       hover:bg-gold hover:text-maroon transition-all duration-300"
          >
            Explore Our Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
