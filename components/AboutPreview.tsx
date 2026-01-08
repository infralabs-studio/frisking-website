"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-offwhite overflow-hidden"
    >
      {/* Background decoration (Subtle watermark) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03] select-none pointer-events-none">
        <Image
          src="/images/frisking.png"
          alt="Watermark"
          width={800}
          height={800}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Image Side --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Gold Border Outline (Offset) */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl z-0 hidden md:block" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/about-preview.png"
                alt="Curating fine wines at Frisking"
                width={600}
                height={700}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gold/20 max-w-[180px]">
                <p className="text-maroon font-bold text-3xl mb-1">500+</p>
                <p className="text-charcoal text-xs uppercase tracking-wider font-medium">
                  Premium Labels Distributed
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Text Side --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-maroon leading-tight">
                Curators of the <br />
                <span className="italic font-light text-charcoal">Exceptional.</span>
              </h2>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              At <strong className="text-maroon">Frisking</strong>, we don&apos;t just distribute alcohol; 
              we bridge the gap between heritage vineyards and modern connoisseurs. 
              Our collection represents a relentless pursuit of quality, ensuring every bottle 
              tells a story of craftsmanship and tradition.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {[
                "Exclusive partnerships with global vineyards",
                "Temperature-controlled logistics chain",
                "Tailored sommeliere consultation"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-charcoal/90">
                  {/* Fixed: flex-shrink-0 -> shrink-0 */}
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-gold" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-maroon font-semibold tracking-wide border-b-2 border-maroon pb-1 hover:text-gold hover:border-gold transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}