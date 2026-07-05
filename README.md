import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImage from "@/assets/hero.jpg";
import outerwearImage from "@/assets/outerwear.jpg";
import footwearImage from "@/assets/footwear.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground font-body selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-display font-extrabold text-xl tracking-tighter uppercase">
          Drift
        </span>
        <button
          className="flex gap-4 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {menuOpen ? "Close" : "Menu"}
          </span>
          <div className="size-5 flex flex-col justify-between py-1">
            <div
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <div
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background px-6 pt-24 animate-reveal">
          <div className="flex flex-col gap-6">
            <a
              href="#"
              className="font-display text-4xl font-extrabold tracking-tighter uppercase"
            >
              Shop
            </a>
            <a
              href="#"
              className="font-display text-4xl font-extrabold tracking-tighter uppercase"
            >
              Collections
            </a>
            <a
              href="#"
              className="font-display text-4xl font-extrabold tracking-tighter uppercase"
            >
              About
            </a>
            <a
              href="#"
              className="font-display text-4xl font-extrabold tracking-tighter uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-6 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Man in a tailored charcoal overcoat walking through a minimalist concrete landscape"
            className="w-full h-full object-cover"
            width={1200}
            height={1808}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-xs md:max-w-2xl space-y-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] animate-reveal">
            OBJECTS <br />
            FOR THE <br />
            <span className="text-primary">DRIFT.</span>
          </h1>
          <p
            className="text-sm md:text-base leading-relaxed max-w-[28ch] md:max-w-md text-balance animate-reveal"
            style={{ animationDelay: "150ms" }}
          >
            Precise garments designed for the modern transit. Structured for
            longevity, cut for the body in motion.
          </p>
          <button
            className="w-full md:w-auto md:px-12 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-[0.2em] animate-reveal active:scale-[0.98] transition-transform"
            style={{ animationDelay: "300ms" }}
          >
            Shop Collection
          </button>
        </div>
      </section>

      {/* Services / Collections */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              01 / Curation
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter mt-2 uppercase">
              The Edit
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <div className="w-full aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={outerwearImage}
                alt="Heavy cotton weave outerwear fabric"
                className="w-full h-full object-cover"
                width={704}
                height={944}
                loading="lazy"
              />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-tighter">
              01. Heavy Knit
            </p>
          </div>
          <div className="space-y-4 mt-12 md:mt-16">
            <div className="w-full aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={footwearImage}
                alt="Minimalist leather boots on a stone plinth"
                className="w-full h-full object-cover"
                width={704}
                height={944}
                loading="lazy"
              />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-tighter">
              02. Raw Hide
            </p>
          </div>
          <div className="space-y-4 hidden md:block">
            <div className="w-full aspect-[3/4] bg-secondary rounded-sm grid place-items-center">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Accessories
              </span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-tighter">
              03. Fine Details
            </p>
          </div>
          <div className="space-y-4 mt-12 md:mt-8 hidden md:block">
            <div className="w-full aspect-[3/4] bg-secondary rounded-sm grid place-items-center">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                New Arrivals
              </span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-tighter">
              04. Season Drop
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-foreground text-background py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
            Architecture of Dress
          </span>
          <p className="mt-8 text-2xl md:text-4xl font-display tracking-tight leading-snug text-balance">
            We believe in the{" "}
            <span className="text-background/50">reduction of noise.</span> Each
            piece is a response to the chaos of modern life—a uniform that
            simplifies the morning and elevates the evening.
          </p>
          <div className="mt-12 h-px w-12 bg-primary" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <span className="text-primary text-2xl font-display">“</span>
        </div>
        <blockquote className="text-xl md:text-3xl font-display font-bold tracking-tight mb-6 text-balance">
          "The fit is clinical. It's the first time a jacket felt like it was
          built specifically for my frame."
        </blockquote>
        <cite className="font-mono text-[10px] uppercase tracking-widest not-italic text-muted-foreground">
          Marcus V. — Architect
        </cite>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <div className="border border-border p-8 md:p-12 text-center space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
            Join the Drift
          </h3>
          <p className="text-sm text-muted-foreground">
            Subscribers receive first access to seasonal drops and archival
            releases.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-b border-border py-3 text-center text-xs font-mono focus:outline-none focus:border-primary transition-colors"
            />
            <button className="w-full py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest active:scale-[0.98] transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t border-border max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <span className="font-display font-extrabold uppercase tracking-tighter">
              Drift
            </span>
            <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest">
              <span>IG</span>
              <span>TW</span>
            </div>
          </div>
          <p className="font-mono text-[8px] text-muted-foreground tracking-widest">
            © 2024 DRIFT ARCHIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
