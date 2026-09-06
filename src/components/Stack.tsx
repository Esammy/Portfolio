import SectionHeading from "./SectionHeading";
import { stack } from "@/content/site";

export default function Stack() {
  return (
    <section className="shell section-pad">
      <SectionHeading
        kicker="Toolkit"
        title="Comfortable across the stack."
        note="The stack is a means to an outcome. I reach for whatever makes the system dependable and maintainable, and I'm happy to learn the rest."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {stack.map((group, i) => (
          <div
            key={group.group}
            className="panel p-6 md:p-7"
            data-reveal=""
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-3">
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mint">
                {group.group}
              </h3>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
