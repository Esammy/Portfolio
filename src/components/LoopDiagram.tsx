const NODES = [
  { label: "Retrieve", sub: "grounded context", x: 240, y: 41 },
  { label: "Generate", sub: "with guardrails", x: 400, y: 200 },
  { label: "Evaluate", sub: "score the result", x: 240, y: 359 },
  { label: "Observe", sub: "trace + measure", x: 80, y: 200 },
];

const ARCS = [
  "M270.5 86 A118 118 0 0 1 354 169.5",
  "M354 230.5 A118 118 0 0 1 270.5 314",
  "M209.5 314 A118 118 0 0 1 126 230.5",
  "M126 169.5 A118 118 0 0 1 209.5 86",
];

/**
 * The reliability loop: retrieve → generate → evaluate → observe → improve.
 * Inline SVG so it inherits the theme tokens and stays crisp at any size.
 */
export default function LoopDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-labelledby="loop-title loop-desc"
      className="h-auto w-full"
    >
      <title id="loop-title">The AI reliability loop</title>
      <desc id="loop-desc">
        A continuous cycle: retrieve grounded context, generate with guardrails,
        evaluate the result, observe what happened, and feed that back into
        improving the system.
      </desc>

      <defs>
        <marker
          id="loop-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" className="fill-mint" opacity="0.75" />
        </marker>
        <radialGradient id="loop-core" cx="50%" cy="40%" r="70%">
          <stop
            offset="0%"
            stopColor="var(--color-mint)"
            stopOpacity="0.22"
          />
          <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* orbit guide */}
      <circle
        cx="240"
        cy="200"
        r="118"
        fill="none"
        stroke="var(--color-line)"
        strokeDasharray="3 7"
      />

      {/* flow arrows */}
      {ARCS.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="var(--color-mint)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          markerEnd="url(#loop-arrow)"
        />
      ))}

      {/* core */}
      <circle cx="240" cy="200" r="72" fill="url(#loop-core)" />
      <circle
        cx="240"
        cy="200"
        r="56"
        fill="var(--color-ink-3)"
        stroke="var(--color-line)"
      />
      <text
        x="240"
        y="196"
        textAnchor="middle"
        className="fill-[var(--color-mint)] font-mono text-[11px] tracking-[0.18em]"
      >
        IMPROVE
      </text>
      <text
        x="240"
        y="213"
        textAnchor="middle"
        className="fill-[var(--color-mist-dim)] font-sans text-[9px]"
      >
        every cycle
      </text>

      {/* nodes */}
      {NODES.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x - 70}
            y={node.y - 23}
            width="140"
            height="46"
            rx="12"
            fill="var(--color-ink-2)"
            stroke="var(--color-line)"
          />
          <text
            x={node.x}
            y={node.y - 2}
            textAnchor="middle"
            className="fill-[var(--color-chalk)] font-sans text-[13px] font-medium"
          >
            {node.label}
          </text>
          <text
            x={node.x}
            y={node.y + 13}
            textAnchor="middle"
            className="fill-[var(--color-mist-dim)] font-mono text-[8.5px] tracking-[0.08em]"
          >
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
