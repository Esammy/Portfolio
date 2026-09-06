import SectionHeading from "./SectionHeading";
import { principles } from "@/content/site";

export default function Principles() {
  return (
    <section className="shell section-pad">
      <SectionHeading
        kicker="Engineering principles"
        title="The way I approach AI engineering."
        note="Six things I keep coming back to, whatever the model or the framework happens to be that quarter."
      />

      {/* Reveal sits on the grid, not the cells — otherwise the 1px mint
          divider background flashes through while the cells are still faded. */}
      <div
        className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
        data-reveal=""
      >
        {principles.map((principle) => (
          <div
            key={principle.index}
            className="group relative bg-ink-2 p-8 transition-colors hover:bg-ink-3 md:p-10"
          >
            <span className="font-mono text-xs text-mint">
              {principle.index}
            </span>
            <h3 className="display mt-4 text-2xl">{principle.title}</h3>
            <p className="lede mt-3 text-[0.95rem]">{principle.body}</p>
            <span
              className="absolute bottom-0 left-0 h-px w-0 bg-mint transition-all duration-500 group-hover:w-full"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
