export function Footer() {
  return (
    <footer className="bg-maroon text-offwhite py-12 mt-20 relative overflow-hidden">
      {/* Subtle gold top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/60"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base tracking-wider mb-6 font-body">
          © {new Date().getFullYear()} Frisking — Purveyors of Fine Wine and Liquors.
        </p>

        <div className="flex justify-center space-x-8 text-sm md:text-base">
          {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={platform}
              className="hover:text-gold transition-all duration-300 hover:scale-110"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
