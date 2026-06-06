"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Speisekarte", href: "/menu" },
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          (isScrolled || !isHomepage || isMobileMenuOpen)
            ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-serif italic text-2xl tracking-wide text-offwhite hover:text-gold transition-colors">
              Osteria Notte
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm tracking-widest uppercase transition-colors hover:text-gold",
                      pathname === link.href ? "text-gold" : "text-offwhite/80"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#reservieren"
              className="border border-gold text-gold px-6 py-2 text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Reservieren
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-offwhite hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center min-h-screen"
          >
            <nav className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-serif italic tracking-wider transition-colors hover:text-gold",
                    pathname === link.href ? "text-gold" : "text-offwhite"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#reservieren"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 w-full text-center max-w-[250px]"
              >
                Reservieren
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
