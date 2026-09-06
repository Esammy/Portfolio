import Portrait from "./Portrait";
import { contact, heroStats, portrait, site } from "@/content/site";

export default function Hero() {
  return (
    <section className="shell relative pt-32 pb-20 md:pt-40 md:pb-28" id="top">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* ── copy ── */}
        <div>
          <p
            className="kicker inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-2/60 px-3.5 py-1.5"
            data-reveal=""
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
            {site.availability}
          </p>

          <h1
            className="display mt-7 text-[clamp(2.6rem,7.2vw,5rem)]"
            data-reveal=""
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
          >
            I build AI systems that are <em>useful, measurable,</em> and ready
            for production.
          </h1>

          <p
            className="lede mt-7 max-w-xl"
            data-reveal=""
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            I design intelligent systems across machine learning, LLMs, agentic
            workflows, evaluation and infrastructure — with a bias toward
            reliability, cost, latency and outcomes that a business can actually
            point at.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3"
            data-reveal=""
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            <a href="#work" className="btn btn-primary">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a href="#about" className="btn btn-ghost">
              About me <span aria-hidden="true">↗</span>
            </a>
            {contact.resume ? (
              <a
                href={contact.resume}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>

          <dl
            className="mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line"
            data-reveal=""
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink-2 px-4 py-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl text-mint">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-xs leading-snug text-mist-dim">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── portrait + terminal ── */}
        <div
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          data-reveal=""
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          <div
            className="spin-slow pointer-events-none absolute -inset-8 rounded-full border border-dashed border-line opacity-60"
            aria-hidden="true"
          />
          <div
            className="float-slow pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-mint/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="panel aspect-[4/5] w-full">
            <Portrait
              src={portrait?.src}
              alt={portrait?.alt}
              priority
              className="absolute inset-0"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:max-w-[62%]">
              <span className="kicker">Building</span>
              <p className="display mt-1.5 text-2xl">AI systems with intent.</p>
            </div>
          </div>

          {/* Overlaps the portrait's bottom-right; the caption keeps the left. */}
          <div className="panel mt-4 p-4 font-mono text-xs sm:absolute sm:-bottom-8 sm:-right-4 sm:mt-0 sm:w-60 sm:bg-ink-2/90 sm:backdrop-blur-xl">
            <div className="flex items-center gap-1.5 border-b border-line pb-2.5">
              <span className="h-2 w-2 rounded-full bg-mist-dim/50" />
              <span className="h-2 w-2 rounded-full bg-mist-dim/50" />
              <span className="h-2 w-2 rounded-full bg-mint/70" />
              <span className="ml-auto text-[0.6rem] tracking-widest text-mist-dim">
                samuel.ai
              </span>
            </div>
            <p className="pt-3 text-mist">
              <span className="text-mint">$</span> ship --reliable-ai
            </p>
            <ul className="mt-2 space-y-1 text-[0.7rem] text-mist-dim">
              <li>
                <span className="text-mint">✓</span> evaluation gate passed
              </li>
              <li>
                <span className="text-mint">✓</span> latency optimised
              </li>
              <li>
                <span className="text-mint">✓</span> safeguards enabled
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
