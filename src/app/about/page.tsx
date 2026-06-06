import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <div className="bg-charcoal min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh] w-full mt-20">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000"
          alt="Restaurant ambiance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply" />
      </section>

      {/* Story Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn className="text-center mb-20">
            <h1 className="font-serif italic text-4xl md:text-6xl text-gold mb-6">Unsere Geschichte</h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
          </FadeIn>

          <div className="space-y-16 text-offwhite/80 font-light leading-relaxed text-lg md:text-xl">
            <FadeIn delay={0.2}>
              <p>
                Die Geschichte der Osteria Notte begann nicht mit einem Geschäftsplan, sondern mit einer Sehnsucht. Der Sehnsucht nach den späten Abenden in Neapel, wo das Lachen laut ist, der Wein in Strömen fließt und einfache Zutaten durch Hingabe in etwas Magisches verwandelt werden.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="font-serif italic text-3xl text-offwhite mb-6">Marco Ferretti</h2>
              <p className="mb-6">
                Chefkoch Marco Ferretti bringt über 15 Jahre Erfahrung in unsere Küche. Aufgewachsen in Neapel, wo er von seiner Nonna die Kunst der perfekten Pasta lernte, zog es ihn später nach Freiburg. Hier verfeinerte er sein Handwerk und verband die reiche, sonnenverwöhnte Seele der süditalienischen Küche mit der Präzision und dem Reichtum regionaler badischer Produkte.
              </p>
              <p>
                Für Marco ist Kochen keine Arbeit, sondern eine Sprache. Es ist seine Art, Geschichten von Heimat, Erinnerungen und Leidenschaft zu erzählen.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="border-t border-b border-white/10 py-12 my-16">
              <h3 className="font-serif italic text-3xl text-gold mb-6 text-center">Zwei Heimaten auf einem Teller</h3>
              <p className="text-center">
                Unsere Philosophie ist einfach: Die Qualität des Gerichts wird durch die Qualität der Zutaten bestimmt. Deshalb beziehen wir unser Fleisch, saisonales Gemüse und frische Kräuter von ausgewählten Erzeugern aus Baden-Württemberg. Gleichzeitig importieren wir jene Dinge direkt aus Italien, die sich nicht ersetzen lassen: feines Olivenöl aus der Toskana, San Marzano Tomaten, echter Parmigiano Reggiano und natürlich unsere Weine.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-center italic font-serif text-2xl text-offwhite">
                &quot;Kochen ist ein Akt der Liebe. Und wir lieben, was wir tun.&quot;
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
