const stats = [
  { v: "5+", l: "Years in the markets" },
  { v: "12", l: "Forex pairs traded" },
  { v: "30+", l: "Equities in rotation" },
  { v: "24/5", l: "Market coverage" },
];

const highlights = [
  "Founded a private trading & mentorship business serving clients across three continents.",
  "Specialized in price action, smart money concepts, and macro-driven swing setups.",
  "Built proprietary tooling to journal, backtest, and review every trade with discipline.",
];

export function Trading() {
  return (
    <section id="trading" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">03 — Trading & Business</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] mb-6">
            Where <span className="italic text-gradient-gold">discipline</span><br />
            meets opportunity.
          </h2>
          <p className="text-lg text-muted-foreground">
            The markets taught me patience. Patience built the business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden gold-border mb-16">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 md:p-10 text-center group hover:bg-card transition-colors">
              <div className="font-display text-5xl md:text-6xl text-gradient-gold mb-3">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <ul className="max-w-3xl mx-auto space-y-6">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-6 items-start">
              <span className="font-display text-2xl text-primary mt-1">0{i + 1}</span>
              <p className="text-lg text-muted-foreground leading-relaxed border-l border-border pl-6">{h}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
