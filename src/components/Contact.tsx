import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 bg-card/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">04 — Contact</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-6">
            Let's build<br /><span className="italic text-gradient-gold">something</span> rare.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Open to web development collaborations, trading mentorship inquiries, and
            ambitious partnerships.
          </p>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground"><span className="text-primary uppercase tracking-[0.2em] text-xs">Email </span>hello@phenomsammy.com</p>
            <p className="text-muted-foreground"><span className="text-primary uppercase tracking-[0.2em] text-xs">Based </span>Lagos · Worldwide</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 bg-background gold-border rounded-2xl p-8 md:p-10 space-y-6"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                required
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg transition-colors"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-full text-sm uppercase tracking-[0.2em] font-medium shadow-gold hover:scale-[1.02] transition-transform"
          >
            {sent ? "Message Sent ✓" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
