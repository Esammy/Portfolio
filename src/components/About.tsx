import Portrait from "./Portrait";
import { about, portrait } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-ink-2/30">
      <div className="shell section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div
            className="panel relative aspect-[4/5] w-full max-w-sm"
            data-reveal=""
          >
            <Portrait
              src={portrait?.src}
              alt={portrait?.alt}
              className="absolute inset-0"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10"
              aria-hidden="true"
            />
            <span className="kicker absolute bottom-5 left-5">
              AI/ML · Product · Engineering
            </span>
          </div>

          <div
            data-reveal=""
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <p className="kicker">{about.kicker}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.25rem)]">
              {about.heading}
            </h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="lede mt-5">
                {paragraph}
              </p>
            ))}

            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-ink-2 px-5 py-5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mist-dim">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-lg">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 border-b border-mint/40 pb-1 text-sm text-mint"
            >
              Work with me
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
