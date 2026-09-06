export default function SectionHeading({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="grid gap-6 border-b border-line pb-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14">
      <div data-reveal="">
        <p className="kicker">{kicker}</p>
        <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.25rem)]">
          {title}
        </h2>
      </div>
      {note ? (
        <p
          className="lede text-[0.95rem] md:pb-2"
          data-reveal=""
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
        >
          {note}
        </p>
      ) : null}
    </div>
  );
}
