"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with Gradient (Tailwind v4 syntax) */}
      <div className="absolute inset-0 bg-linear-to-br from-maroon via-red-950 to-charcoal z-0" />
      
      {/* Grain Texture Overlay for consistency */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 pointer-events-none" />

      {/* Decorative Gold Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-gold/30 rounded-3xl z-10 pointer-events-none" />

      <div className="container mx-auto relative z-20 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 mb-8 text-gold">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-offwhite mb-6">
            Ready to Elevate Your <br />
            <span className="text-gold italic">Portfolio?</span>
          </h2>

          <p className="text-lg text-offwhite/80 mb-10 leading-relaxed font-light">
            Join an exclusive network of hotels, restaurants, and private collectors 
            who trust Frisking for their premium wine and spirit needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gold text-charcoal font-bold tracking-widest uppercase rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-luxury"
            >
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/catalog"
              className="px-8 py-4 bg-transparent border border-offwhite/30 text-offwhite font-medium tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-offwhite hover:text-maroon"
            >
              Request Catalog
            </Link>
          </div>

          {/* Trust Indicator */}
          <p className="mt-12 text-xs text-offwhite/40 uppercase tracking-widest">
            Licensed Distributor • Global Logistics • 24/7 Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}