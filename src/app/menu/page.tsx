import FadeIn from "@/components/animations/FadeIn";

const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Burrata con Pomodori", price: "€14", description: "Cremige Burrata, alte Tomatensorten, frisches Basilikum, Olivenöl extra vergine." },
      { name: "Carpaccio di Manzo", price: "€17", description: "Hauchdünnes Rinderfilet, Rucola, gehobelter Parmigiano, Trüffelöl." },
      { name: "Bruschetta al Tartufo", price: "€12", description: "Geröstetes Landbrot, schwarze Trüffelcreme, Ricotta." }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tagliatelle al Tartufo", price: "€24", description: "Handgemachte Pasta, frischer schwarzer Trüffel, Parmigiano Reggiano." },
      { name: "Risotto ai Funghi Porcini", price: "€22", description: "Carnaroli-Reis, frische Steinpilze, ein Hauch von Weißwein." },
      { name: "Spaghetti alle Vongole", price: "€26", description: "Spaghetti, frische Venusmuscheln, Knoblauch, Petersilie, Weißwein." }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Branzino al Forno", price: "€31", description: "Wolfsbarsch aus dem Ofen, mediterranes Gemüse, Salzzitrone." },
      { name: "Costolette d'Agnello", price: "€36", description: "Lammkoteletts vom Grill, Rosmarinkartoffeln, Rotweinjus." },
      { name: "Pollo al Marsala", price: "€27", description: "Hähnchenbrust in Marsala-Wein-Sauce, sautierter Spinat." }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Panna Cotta al Limone", price: "€9", description: "Amalfizitronen, geröstete Pistazien, feines Olivenöl." },
      { name: "Tiramisù della Casa", price: "€10", description: "Klassisches Tiramisù nach Familienrezept, Savoiardi, Mascarpone, Espresso." },
      { name: "Torta al Cioccolato", price: "€11", description: "Warmer Schokoladenkuchen, flüssiger Kern, Vanilleeis." }
    ]
  }
];

const wineData = {
  whites: [
    { name: "Verdicchio dei Castelli di Jesi", region: "Marken", glass: "€8", bottle: "€32" },
    { name: "Lugana Riserva", region: "Lombardei", glass: "€9", bottle: "€38" },
    { name: "Chardonnay Alto Adige", region: "Südtirol", glass: "€11", bottle: "€45" }
  ],
  reds: [
    { name: "Chianti Classico Riserva", region: "Toskana", glass: "€10", bottle: "€42" },
    { name: "Barolo DOCG", region: "Piemont", glass: "€18", bottle: "€85" },
    { name: "Primitivo di Manduria", region: "Apulien", glass: "€9", bottle: "€36" }
  ]
};

export default function MenuPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <FadeIn className="text-center mb-24">
          <h1 className="font-serif italic text-5xl md:text-6xl text-offwhite mb-6">Speisekarte</h1>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </FadeIn>

        <div className="space-y-24">
          {menuData.map((section, idx) => (
            <FadeIn key={section.category} delay={0.1 * idx} className="space-y-10">
              <h2 className="font-serif font-normal text-[32px] text-offwhite border-b border-olive pb-4">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl font-medium text-offwhite">{item.name}</h3>
                      <div className="hidden sm:block flex-grow border-b border-dashed border-white/20 mx-4 relative top-[-6px]"></div>
                      <span className="text-gold font-medium text-right tabular-nums">{item.price}</span>
                    </div>
                    <p className="text-[#9a9080] text-sm max-w-2xl">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.4} className="space-y-10 pt-10">
            <h2 className="font-serif font-normal text-[32px] text-offwhite border-b border-olive pb-4">
              Vini
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-offwhite tracking-widest uppercase text-sm mb-8 opacity-80">Weißweine</h3>
                <div className="space-y-6">
                  {wineData.whites.map((wine) => (
                    <div key={wine.name} className="flex flex-col">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif font-medium text-lg text-offwhite">{wine.name}</span>
                        <div className="flex justify-end space-x-4 text-gold text-sm text-right tabular-nums ml-4">
                          <span>{wine.glass}</span>
                          <span>{wine.bottle}</span>
                        </div>
                      </div>
                      <span className="font-sans text-[#9a9080] text-sm">{wine.region}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-offwhite tracking-widest uppercase text-sm mb-8 opacity-80">Rotweine</h3>
                <div className="space-y-6">
                  {wineData.reds.map((wine) => (
                    <div key={wine.name} className="flex flex-col">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif font-medium text-lg text-offwhite">{wine.name}</span>
                        <div className="flex justify-end space-x-4 text-gold text-sm text-right tabular-nums ml-4">
                          <span>{wine.glass}</span>
                          <span>{wine.bottle}</span>
                        </div>
                      </div>
                      <span className="font-sans text-[#9a9080] text-sm">{wine.region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 text-xs text-offwhite/40 pt-4">
              <span>Glas (0,15l)</span>
              <span>Flasche (0,75l)</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
