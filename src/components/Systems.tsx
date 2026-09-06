import LoopDiagram from "./LoopDiagram";
import SectionHeading from "./SectionHeading";
import { systemLoop } from "@/content/site";

export default function Systems() {
  return (
    <section id="systems" className="relative border-y border-line bg-ink-2/30">
      <div className="shell section-pad">
        <SectionHeading
          kicker="Systems thinking"
          title="I care about the layer beneath the model."
          note="Reliable AI is a loop: retrieve the right context, generate with guardrails, evaluate the result, observe what actually happened, then improve the system on purpose rather than by feel."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <ol className="space-y-3">
            {systemLoop.map((step, i) => (
              <li
                key={step.index}
                className="panel panel-hover flex gap-5 p-6"
                data-reveal=""
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="font-mono text-xs text-mint">{step.index}</span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="lede mt-2 text-[0.9rem]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="panel p-6 md:p-10"
            data-reveal=""
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <LoopDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
