import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-20">
          <h1 className="font-serif italic text-5xl md:text-6xl text-offwhite mb-6">Kontakt</h1>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0.2} direction="right" className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-serif italic text-3xl text-gold mb-8">Wir freuen uns auf Sie</h2>
              
              <div className="flex items-start space-x-6">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="tracking-widest uppercase text-sm text-offwhite/60 mb-2">Adresse</h3>
                  <p className="text-offwhite text-lg">Münsterplatz 7<br />79098 Freiburg im Breisgau</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Clock className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="tracking-widest uppercase text-sm text-offwhite/60 mb-2">Öffnungszeiten</h3>
                  <p className="text-offwhite text-lg">Di–Sa: 17:30 – 23:00 Uhr<br />So–Mo: Geschlossen</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="tracking-widest uppercase text-sm text-offwhite/60 mb-2">Telefon</h3>
                  <p className="text-offwhite text-lg">+49 761 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="tracking-widest uppercase text-sm text-offwhite/60 mb-2">E-Mail</h3>
                  <p className="text-offwhite text-lg">info@osterianotte.de</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
              <a 
                href="tel:+497611234567" 
                className="flex items-center justify-center space-x-3 border border-white/20 hover:border-gold text-offwhite hover:text-gold px-6 py-4 transition-all duration-300 w-full"
              >
                <Phone size={18} />
                <span className="tracking-widest uppercase text-xs">Anrufen</span>
              </a>
              <a 
                href="https://wa.me/497611234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 border border-[#25D366]/50 hover:border-[#25D366] text-offwhite hover:text-[#25D366] px-6 py-4 transition-all duration-300 w-full"
              >
                <MessageCircle size={18} />
                <span className="tracking-widest uppercase text-xs">WhatsApp</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-[16/9] bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center text-center p-6 mt-8">
              <MapPin className="text-gold/50 mb-4" size={32} />
              <p className="text-offwhite/60 font-serif italic text-xl">Google Maps Integration</p>
              <p className="text-offwhite/40 text-sm mt-2">Münsterplatz 7, 79098 Freiburg</p>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4} direction="left" className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5">
            <h2 className="font-serif italic text-3xl text-gold mb-8">Schreiben Sie uns</h2>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
