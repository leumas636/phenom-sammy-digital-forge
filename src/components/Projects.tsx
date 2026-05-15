const projects = [
  { title: "Aurum Exchange", tag: "Fintech · Next.js", desc: "A sleek crypto trading dashboard with real-time charts and portfolio analytics." },
  { title: "Velvet Studio", tag: "Agency · React", desc: "Award-style portfolio site for a boutique creative studio with cinematic motion." },
  { title: "Pulse Analytics", tag: "SaaS · TypeScript", desc: "Trading journal SaaS that turns raw trades into actionable performance insights." },
  { title: "Noir Commerce", tag: "E-commerce · Shopify", desc: "Premium Shopify theme for luxury menswear brands. Headless and lightning fast." },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-10 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">02 — Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1]">
              Crafted with <span className="italic text-gradient-gold">precision</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A handful of recent projects across fintech, commerce, and creative tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-background gold-border rounded-2xl p-8 md:p-10 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
              <div className="flex justify-between items-start mb-12">
                <span className="font-display text-6xl text-muted-foreground/30">0{i + 1}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary gold-border px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display text-3xl mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{p.desc}</p>
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary">
                Case Study
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
