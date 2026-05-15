export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">01 — About</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
            A young<br /><span className="italic text-gradient-gold">mogul</span><br />in motion.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground">Phenom Sammy</span> — a 25-year-old
            entrepreneur splitting my days between crafting elegant web experiences
            and navigating the volatility of global markets.
          </p>
          <p>
            What started as late-night coding sessions and obsessive chart study has
            grown into a personal brand and business built on one principle:
            <span className="text-primary"> compound everything.</span> Skills, code,
            capital, character.
          </p>
          <p>
            Whether I'm shipping a product or executing a position, the work is the same —
            disciplined, deliberate, and built to last.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { v: "25", l: "Years young" },
              { v: "5+", l: "Years trading" },
              { v: "∞", l: "Ambition" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-gradient-gold mb-1">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
