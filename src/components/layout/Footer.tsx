import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-olive pt-20 pb-10 text-offwhite/70 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-serif italic text-3xl text-offwhite mb-2">Osteria Notte</h3>
              <p className="tracking-wide">Dove la notte ha sapore.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dinavora.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-offwhite font-semibold uppercase tracking-widest text-xs mb-2">Entdecken</h4>
            <Link href="/" className="hover:text-gold transition-colors w-fit">Home</Link>
            <Link href="/menu" className="hover:text-gold transition-colors w-fit">Speisekarte</Link>
            <Link href="/about" className="hover:text-gold transition-colors w-fit">Über uns</Link>
            <Link href="/contact" className="hover:text-gold transition-colors w-fit">Kontakt</Link>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-offwhite font-semibold uppercase tracking-widest text-xs mb-2">Besuchen Sie uns</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Münsterplatz 7<br />79098 Freiburg im Breisgau</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} className="flex-shrink-0" />
              <span>+49 761 123 4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} className="flex-shrink-0" />
              <span>info@osterianotte.de</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p>&copy; 2026 Osteria Notte. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4">
              <Link href="/impressum" className="hover:text-gold transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-gold transition-colors">Datenschutz</Link>
            </div>
          </div>
          
          <a 
            href="https://digital.dinavora.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 group"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">Erstellt von</span>
            <span className="font-semibold text-offwhite group-hover:text-gold transition-colors">Dinavora Digital</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
