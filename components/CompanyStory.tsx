"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { useRef } from "react";

export default function CompanyStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={ref}
      className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center"
    >
      {/* 1. Parallax Background Image */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/images/story-bg.jpg" 
            alt="Vineyard landscape"
            fill
            className="object-cover"
          />
          {/* Dark Overlay for text readability */}
          {/* Tailwind v4 Syntax: bg-linear-to-b */}
          <div className="absolute inset-0 bg-charcoal/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-charcoal/90 via-transparent to-charcoal/90" />
        </motion.div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Icon */}
          <Quote className="w-12 h-12 text-gold/40 mx-auto mb-6 rotate-180" />

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-offwhite mb-8 leading-tight">
            Founded on <span className="text-gold italic font-serif">Passion</span>,<br />
            Defined by <span className="text-gold italic font-serif">Excellence</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-offwhite/80 font-light leading-relaxed">
            Frisking began with a simple yet ambitious vision: to bridge the distance between 
            the world&apos;s most secluded heritage vineyards and the glasses of true connoisseurs. 
          </p>
          
          <p className="text-lg md:text-xl text-offwhite/80 font-light leading-relaxed">
            We are not merely distributors; we are storytellers. Every bottle in our 
            collection is hand-selected for its authenticity, its history, and its ability 
            to create a moment of pure luxury.
          </p>

          {/* Signature / Button */}
          <div className="pt-10 flex flex-col items-center gap-6">
            <div className="w-24 h-px bg-gold/50" />
            
            <Link 
              href="/about"
              className="px-8 py-3 border border-offwhite/30 rounded-full text-offwhite text-sm tracking-widest uppercase hover:bg-offwhite hover:text-charcoal transition-all duration-300"
            >
              Read Our Full History
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}