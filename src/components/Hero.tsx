import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-primary animate-shimmer" />
            Portfolio · 2026
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.9] mb-8">
            Phenom
            <br />
            <span className="text-gradient-gold italic">Sammy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Building the Web. Growing Wealth. — A 25-year-old developer & trader
            engineering interfaces by day and the markets by night.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="group bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-medium shadow-gold hover:scale-[1.03] transition-transform"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="gold-border px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-card transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative gold-border rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={portrait}
              alt="Phenom Sammy"
              width={1024}
              height={1280}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Lagos / Worldwide</span>
              <span className="text-primary">● Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
