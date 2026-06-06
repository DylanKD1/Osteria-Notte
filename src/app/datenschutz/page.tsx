import FadeIn from "@/components/animations/FadeIn";

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <FadeIn className="mb-16">
          <h1 className="font-serif italic text-4xl md:text-5xl text-gold mb-6">Datenschutz</h1>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </FadeIn>

        <FadeIn delay={0.2} className="space-y-8 text-offwhite/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-semibold mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Osteria Notte GmbH<br />
              Münsterplatz 7<br />
              79098 Freiburg im Breisgau<br />
              Telefon: +49 761 123 4567<br />
              E-Mail: info@osterianotte.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-offwhite mb-4">3. Datenerfassung auf unserer Website</h2>
            <h3 className="font-semibold mb-2">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
