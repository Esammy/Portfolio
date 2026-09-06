"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

type Props = {
  src?: string;
  alt?: string;
  /** Rendered underneath the monogram when no photo is available. */
  caption?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Shows the portrait when one exists at `src`, and falls back to a designed
 * monogram panel if the file is missing or fails to load — so the layout never
 * shows a broken image while the photo is still being sorted out.
 */
export default function Portrait({
  src,
  alt = site.name,
  caption = site.role,
  priority = false,
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {showImage ? (
        <>
          {/* The source photo is shot on a warm brown backdrop, which fights the
              site's cool palette. A light grade plus a mint soft-light wash pulls
              it into the same colour world without flattening skin tones. */}
          <Image
            src={src as string}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-cover saturate-[0.72] contrast-[1.08] brightness-[0.9]"
            onError={() => setFailed(true)}
          />
          <div
            className="absolute inset-0 bg-mint/25 mix-blend-soft-light"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_25%,transparent_35%,color-mix(in_oklab,var(--color-ink)_75%,transparent)_100%)]"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="relative grid h-full w-full place-items-center bg-[radial-gradient(120%_100%_at_50%_0%,color-mix(in_oklab,var(--color-mint)_16%,transparent),transparent_62%)] bg-ink-3">
          <div
            className="absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-line-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line-soft) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative flex flex-col items-center gap-4">
            <span className="font-serif text-7xl leading-none tracking-tight text-mint/90">
              {site.initials}
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-mist-dim">
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
