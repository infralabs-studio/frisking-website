"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-maroon text-offwhite pt-20 pb-10 relative overflow-hidden">
      {/* Top Gold Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-bold tracking-widest text-offwhite">
                FRISKING
              </span>
            </Link>
            <p className="text-offwhite/70 text-sm leading-relaxed max-w-xs">
              Purveyors of fine wines and premium spirits. Bridging the gap between heritage vineyards and modern connoisseurs.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-offwhite/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-maroon transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-gold font-bold tracking-widest uppercase text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-offwhite/80">
              {["Home", "About Us", "Our Collections", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-gold font-bold tracking-widest uppercase text-xs mb-6">Contact</h4>
            <ul className="space-y-6 text-sm text-offwhite/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>123 Vineyard Estate,<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+254700000000" className="hover:text-gold transition-colors">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@frisking.co.ke" className="hover:text-gold transition-colors">info@frisking.co.ke</a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-gold font-bold tracking-widest uppercase text-xs mb-6">Newsletter</h4>
            <p className="text-offwhite/70 text-sm mb-4">
              Subscribe for exclusive access to new arrivals and private tastings.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-offwhite/5 border border-offwhite/10 rounded-lg px-4 py-3 text-sm text-offwhite focus:outline-none focus:border-gold transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-gold text-maroon font-bold text-sm py-3 rounded-lg hover:bg-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-offwhite/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-offwhite/50">
          <p>© {new Date().getFullYear()} Frisking. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-gold transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Responsible Drinking Disclaimer */}
        <div className="mt-8 pt-8 border-t border-offwhite/5 text-center">
          <p className="text-[10px] uppercase tracking-widest text-offwhite/30">
            Excessive alcohol consumption is harmful to your health. Please drink responsibly. Not for sale to persons under the age of 18.
          </p>
        </div>
      </div>
    </footer>
  );
}