"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled
          ? "bg-offwhite/80 backdrop-blur-md shadow-luxury py-3 border-gray-200/20" // Glass effect when scrolled
          : "bg-transparent py-6" 
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/images/frisking.png"
              alt="Frisking Logo"
              width={45}
              height={45}
              priority
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span
            className={clsx(
              "text-xl font-heading font-bold tracking-widest transition-colors duration-300",
              scrolled ? "text-maroon" : "text-offwhite drop-shadow-md"
            )}
          >
            FRISKING
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className={clsx(
            "hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase transition-colors duration-300",
            scrolled ? "text-charcoal" : "text-offwhite drop-shadow-sm"
          )}
        >
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group py-1"
            >
              <span className="relative z-10 group-hover:text-gold transition-colors duration-300">
                {item}
              </span>
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          {/* CTA Button (Only visible on scroll or always if you prefer) */}
          <Link
            href="/contact"
            className={clsx(
              "px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105",
              scrolled
                ? "border-maroon text-maroon hover:bg-maroon hover:text-offwhite"
                : "border-offwhite text-offwhite hover:bg-offwhite hover:text-maroon"
            )}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={clsx(
              "p-2 rounded-md transition-colors duration-300 focus:outline-none",
              scrolled ? "text-maroon hover:bg-gray-100" : "text-offwhite hover:bg-white/10"
            )}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 top-[70px] z-40 bg-offwhite/95 backdrop-blur-xl transition-all duration-500 ease-in-out transform",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-3/4 space-y-8 text-charcoal tracking-widest uppercase font-semibold text-lg">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-gold transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}