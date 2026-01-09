"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Wines",
    subtitle: "Bordeaux, Cabernet & Pinot Noir",
    image: "/images/Wine.jpg",
    link: "/collections/red-wines",
    colSpan: "md:col-span-1",
  },
  {
    id: 2,
    title: "Premium Whiskey",
    subtitle: "Aged Whiskey",
    image: "/images/whiskey.jpg",
    link: "/collections/spirits",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Sparkling & White",
    subtitle: "Champagne, Prosecco & Chardonnay",
    image: "/images/Liquor.jpg",
    link: "/collections/white-wines",
    colSpan: "md:col-span-1",
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function FeaturedCollections() {
  return (
    <section className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">
              Our Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-maroon">
              Featured Collections
            </h2>
          </div>
          
          <Link 
            href="/collections" 
            className="group flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-maroon transition-colors"
          >
            View Full Catalog
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {collections.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`group relative h-[500px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-card ${item.colSpan}`}
            >
              <Link href={item.link} className="block h-full w-full">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  {/* Fix 2: Changed bg-gradient-to-t to bg-linear-to-t (Tailwind v4 syntax) */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-offwhite">
                  {/* Decorative Line */}
                  <div className="w-12 h-0.5 bg-gold mb-4 transform origin-left transition-all duration-500 group-hover:w-20" />
                  
                  <h3 className="text-2xl font-heading font-bold mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-light text-offwhite/80 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.subtitle}
                  </p>

                  {/* 'Explore' Button that appears on hover */}
                  <div className="mt-6 inline-flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase opacity-0 transform translate-y-4 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    Shop Now <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}