import { capabilities } from "@/content/site";

export default function Ticker() {
  // Rendered twice so the -50% translate loops seamlessly.
  const run = [...capabilities, ...capabilities];

  return (
    <section
      className="marquee-wrap relative border-y border-line bg-ink-2/40 py-4"
      aria-label="Capabilities"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
        aria-hidden="true"
      />
      <div className="marquee">
        {run.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center font-mono text-xs tracking-[0.24em] text-mist-dim"
            aria-hidden={i >= capabilities.length ? "true" : undefined}
          >
            {item}
            <span className="px-8 text-mint/50" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
