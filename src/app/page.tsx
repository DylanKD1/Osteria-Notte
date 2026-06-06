import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import ReservationForm from "@/components/forms/ReservationForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2400"
            alt="Osteria Notte Interior"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/90" />
        </div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-20">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-offwhite mb-6">
              Osteria Notte
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <p className="text-xl md:text-2xl text-offwhite/80 font-light tracking-wide mb-12">
              Dove la notte ha sapore.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up" className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#reservieren"
              className="border border-gold text-gold px-10 py-4 tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/menu"
              className="border border-white/20 text-offwhite px-10 py-4 tracking-widest uppercase text-sm hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Speisekarte
            </Link>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <FadeIn>
                <h2 className="font-serif italic text-4xl md:text-5xl text-gold mb-8">
                  Handwerk. Geduld. Geschmack.
                </h2>
                <div className="space-y-6 text-offwhite/80 text-lg leading-relaxed font-light text-balance">
                  <p>
                    Wir glauben, dass die besten Dinge Zeit brauchen. In der Osteria Notte widmen wir uns der Kunst der traditionellen italienischen und mediterranen Küche, neu interpretiert für die moderne Zeit.
                  </p>
                  <p>
                    Unsere Pasta wird täglich von Hand gerollt, unsere Zutaten folgen dem Rhythmus der Jahreszeiten. Wir arbeiten eng mit lokalen Bauern im Schwarzwald und ausgewählten Produzenten in Italien zusammen, um die reinste Form des Geschmacks auf Ihren Teller zu bringen.
                  </p>
                  <p>
                    Ergänzt wird unsere Küche durch eine sorgfältig kuratierte Auswahl an Naturweinen, die Geschichten von Terroir und Leidenschaft erzählen.
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-gold tracking-widest uppercase text-sm group"
                  >
                    <span className="mr-4 group-hover:mr-6 transition-all">Unsere Geschichte</span>
                    <span className="h-[1px] w-8 bg-gold group-hover:w-12 transition-all"></span>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <FadeIn direction="left" delay={0.2} className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1100"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-20">
            <h2 className="font-serif italic text-4xl md:text-5xl text-offwhite mb-4">Unsere Küche</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Tagliatelle al Tartufo",
                price: "€24",
                desc: "Handgemachte Pasta, frischer schwarzer Trüffel, Parmigiano Reggiano.",
                img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800"
              },
              {
                name: "Branzino al Forno",
                price: "€31",
                desc: "Wolfsbarsch aus dem Ofen, mediterranes Gemüse, Salzzitrone.",
                img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800"
              },
              {
                name: "Panna Cotta al Limone",
                price: "€9",
                desc: "Amalfizitronen, geröstete Pistazien, feines Olivenöl.",
                img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800"
              }
            ].map((dish, idx) => (
              <FadeIn key={dish.name} delay={idx * 0.2}>
                <div className="group border border-white/5 bg-charcoal hover:border-gold/30 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dish.img}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl text-gold">{dish.name}</h3>
                      <span className="text-offwhite">{dish.price}</span>
                    </div>
                    <p className="text-offwhite/60 text-sm leading-relaxed mt-auto">
                      {dish.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center text-offwhite/80 hover:text-gold tracking-widest uppercase text-sm transition-colors group"
            >
              Vollständige Speisekarte 
              <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Reserve Section */}
      <section id="reservieren" className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl text-offwhite mb-4">
              Reservieren Sie Ihren Tisch
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
            <p className="text-offwhite/60 text-balance max-w-xl mx-auto">
              Für Gruppen ab 7 Personen oder spezielle Anfragen kontaktieren Sie uns bitte direkt.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ReservationForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
