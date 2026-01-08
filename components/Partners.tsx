"use client";

import { motion } from "framer-motion";


const partners = [
  "Moët & Chandon",
  "Hennessy",
  "Dom Pérignon",
  "Penfolds",
  "Glenfiddich",
  "Remy Martin",
  "Grey Goose",
  "Bombay Sapphire",
  "Macallan",
  "Veuve Clicquot",
];

const carouselItems = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-20 bg-offwhite border-t border-charcoal/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="text-gold font-bold tracking-widest uppercase text-xs mb-3 block">
          Trusted Distribution
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-maroon">
          Our Global Partners
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[90%] mx-auto">
        
        {/* Gradient Masks (Fade out edges for smooth look) */}
        {/* Note: Using Tailwind v4 'bg-linear-to-r' */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-offwhite to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40, 
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {carouselItems.map((partner, index) => (
              <div 
                key={`${partner}-${index}`} 
                className="shrink-0 group cursor-default"
              >
                {/* Typography Logo Style */}
                <span className="text-2xl md:text-3xl font-heading font-bold text-charcoal/20 uppercase tracking-widest transition-all duration-500 group-hover:text-maroon group-hover:scale-110 block">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}