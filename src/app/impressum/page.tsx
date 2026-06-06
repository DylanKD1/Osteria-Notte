import FadeIn from "@/components/animations/FadeIn";

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <FadeIn className="mb-16">
          <h1 className="font-serif italic text-4xl md:text-5xl text-gold mb-6">Impressum</h1>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </FadeIn>

        <FadeIn delay={0.2} className="space-y-8 text-offwhite/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Osteria Notte GmbH<br />
              Münsterplatz 7<br />
              79098 Freiburg im Breisgau
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Vertreten durch</h2>
            <p>Geschäftsführer: Marco Ferretti</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Kontakt</h2>
            <p>
              Telefon: +49 761 123 4567<br />
              E-Mail: info@osterianotte.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Freiburg<br />
              Registernummer: HRB 123456
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Marco Ferretti<br />
              Münsterplatz 7<br />
              79098 Freiburg im Breisgau
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
