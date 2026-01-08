"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Wine } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {

    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-charcoal"
    >
      {/* 1. Parallax Background Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png" // Ensure this matches your file extension
          alt="Wine Cellar and Premium Bottles"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-maroon/20 to-black/60 mix-blend-multiply" />
      </motion.div>

      {/* 2. Grain Texture (Adds that 'Vintage/Premium' feel) */}
      <div className="absolute inset-0 z-[1] opacity-15 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Content */}
      <motion.div 
        style={{ opacity }} 
        className="relative z-10 px-6 flex flex-col items-center max-w-4xl mx-auto"
      >
        {/* Logo/Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 relative"
        >
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading text-offwhite tracking-widest drop-shadow-xl"
          >
            FRISKING
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 opacity-80">
            <div className="h-px w-12 bg-gold" />
            <Wine className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-sm md:text-lg text-offwhite/90 tracking-[0.25em] uppercase font-light">
            Purveyors of Fine Wine & <br className="md:hidden" /> 
            <span className="text-gold font-medium">Premium Spirits</span>
          </p>
        </motion.div>

        {/* Stylish Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 mt-12"
        >
          {/* Primary Button */}
          <a
            href="/collection"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-maroon text-offwhite transition-all duration-300 hover:scale-105 hover:bg-red-900 shadow-luxury"
          >
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase">
              View Collection
            </span>
          </a>

          {/* Secondary "Glass" Button */}
          <a
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full border border-offwhite/30 bg-white/5 backdrop-blur-sm text-offwhite transition-all duration-300 hover:bg-white/10 hover:border-gold"
          >
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-gold transition-colors">
              Our Story
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-offwhite/40 hover:text-gold transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} className="animate-pulse" />
      </motion.button>
    </section>
  );
}