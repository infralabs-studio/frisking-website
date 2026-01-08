"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-sm shadow-luxury"
          : "bg-offwhite/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/frisking.png"
            alt="Frisking Logo"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />
          <span className="text-2xl font-heading font-bold text-maroon tracking-wide">
            Frisking
          </span>
        </Link>

        <div className="hidden md:flex space-x-10 font-body">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative group text-charcoal transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {open ? (
            <X className="w-6 h-6 cursor-pointer text-charcoal" onClick={() => setOpen(false)} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer text-charcoal" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-offwhite border-t border-gold/20 flex flex-col items-center py-4 space-y-3 text-charcoal font-body">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-maroon transition">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-maroon transition">About</Link>
        </div>
      )}
    </nav>
  );
}
