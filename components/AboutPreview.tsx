"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="py-20 md:py-28 bg-offwhite"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-preview.png"
                alt="Wine cellar with oak barrels at Frisking"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 text-center md:text-left space-y-6"
          >
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-serif text-maroon font-bold"
            >
              About Frisking
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-lg mx-auto md:mx-0">
              Frisking is a premium distributor of fine wines and liquors, connecting
              distinguished brands with exceptional clients.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 bg-maroon text-offwhite rounded-full font-medium tracking-wide hover:bg-gold hover:text-maroon transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}