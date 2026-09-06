import SectionHeading from "./SectionHeading";
import { credentials, experience } from "@/content/site";

export default function Experience() {
  return (
    // Plain surface: it sits directly after the tinted About section.
    <section id="experience" className="relative">
      <div className="shell section-pad">
        <SectionHeading
          kicker="Experience"
          title="Where the work has happened."
          note="Four years across production AI, consulting and teaching — the last of which is where I learned to explain a system before defending it."
        />

        <ol className="mt-12">
          {experience.map((role, i) => (
            <li
              key={`${role.org}-${role.period}`}
              className="group relative grid gap-6 border-b border-line py-9 last:border-b-0 md:grid-cols-[13rem_1fr] md:gap-12"
              data-reveal=""
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="md:pt-1">
                <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mist-dim">
                  {role.current ? (
                    <span
                      className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-mint"
                      aria-hidden="true"
                    />
                  ) : null}
                  {role.period}
                </p>
                <p className="mt-2 text-[0.8rem] text-mist-dim">{role.place}</p>
              </div>

              <div>
                <h3 className="display text-2xl md:text-[1.75rem]">
                  {role.title}
                  <span className="text-mint"> · {role.org}</span>
                </h3>

                <ul className="mt-4 space-y-3">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.95rem] leading-relaxed text-mist"
                    >
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-mint"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.tech.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <dl
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3"
          data-reveal=""
        >
          {credentials.map((item) => (
            <div key={item.label} className="bg-ink-2 p-6 md:p-7">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mint">
                {item.label}
              </dt>
              <dd className="mt-3">
                <span className="block text-base">{item.value}</span>
                <span className="mt-1.5 block text-[0.8rem] leading-snug text-mist-dim">
                  {item.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
