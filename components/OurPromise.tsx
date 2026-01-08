"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Award, Crown } from "lucide-react";

const promises = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Every bottle in our portfolio is rigorously vetted by certified sommeliers to ensure it meets the highest global standards.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Authenticity",
    description: "We source directly from chateaus and distilleries, ensuring 100% provenance and eliminating the risk of counterfeits.",
  },
  {
    icon: Crown,
    title: "Service Excellence",
    description: "From white-glove delivery to private consultation, our service reflects the same refinement as our premium selections.",
  },
];

// Fix: Add ': Variants' type annotation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Fix: Add ': Variants' type annotation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurPromise() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl mx-auto">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-3 block">
            The Frisking Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-maroon mb-6">
            Our Promise to You
          </h2>
          <div className="h-0.5 w-24 bg-gold/30 mx-auto" />
        </div>

        {/* 3 Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {promises.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-offwhite hover:bg-white transition-all duration-500 border border-transparent hover:border-gold/20 hover:shadow-card"
            >
              {/* Icon Circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maroon/5 text-maroon mb-6 transition-all duration-500 group-hover:bg-maroon group-hover:text-gold group-hover:scale-110">
                <item.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-heading font-bold text-charcoal mb-4 group-hover:text-maroon transition-colors">
                {item.title}
              </h3>

              <p className="text-charcoal/70 leading-relaxed font-light text-sm md:text-base">
                {item.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}