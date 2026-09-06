import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { heroStats, site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#070c0a";
const MINT = "#6ee7b7";
const MIST = "#9db0a8";

/**
 * Pre-graded green duotone portrait, generated from public/assets/samuel.jpg.
 * Read from disk at build time and inlined — Satori cannot fetch relative URLs.
 * Returns null if the file is absent, and the card falls back to text only.
 */
async function portraitDataUri() {
  try {
    const bytes = await readFile(
      join(process.cwd(), "public", "assets", "samuel-og.jpg")
    );
    return `data:image/jpeg;base64,${bytes.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const portrait = await portraitDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, #0c1a15 0%, ${INK} 58%)`,
          color: "#eaf2ee",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 14,
                border: `1px solid ${MINT}40`,
                color: MINT,
                fontSize: 20,
                letterSpacing: 2,
              }}
            >
              {site.initials}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 26 }}>{site.name}</span>
              <span style={{ fontSize: 17, color: MINT, letterSpacing: 3 }}>
                {site.role.toUpperCase()}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 52,
              lineHeight: 1.12,
              letterSpacing: -1.2,
            }}
          >
            I build AI systems that are useful, measurable, and ready for
            production.
          </div>

          <div style={{ display: "flex", gap: 44 }}>
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  maxWidth: 190,
                }}
              >
                <span style={{ fontSize: 36, color: MINT }}>{stat.value}</span>
                <span style={{ fontSize: 16, color: MIST }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {portrait ? (
          <div style={{ display: "flex", position: "relative", width: 430 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portrait} alt="" width={430} height={630} />
            {/* Softens the seam between the photo and the panel. */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(90deg, ${INK} 0%, ${INK}cc 14%, transparent 48%)`,
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    size
  );
}
