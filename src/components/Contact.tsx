"use client";

import { useEffect, useState } from "react";
import { contact, site } from "@/content/site";

type Row = { label: string; value: string; href: string; display: string };

const rows: Row[] = [
  contact.email && {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    display: contact.email,
  },
  contact.linkedin && {
    label: "LinkedIn",
    value: contact.linkedin,
    href: contact.linkedin,
    display: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
  },
  contact.github && {
    label: "GitHub",
    value: contact.github,
    href: contact.github,
    display: contact.github.replace(/^https?:\/\/(www\.)?/, ""),
  },
  contact.phone && {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
    display: contact.phone,
  },
  contact.x && {
    label: "X",
    value: contact.x,
    href: contact.x,
    display: contact.x.replace(/^https?:\/\/(www\.)?/, ""),
  },
  contact.resume && {
    label: "Résumé",
    value: contact.resume,
    href: contact.resume,
    display: "Download CV",
  },
].filter(Boolean) as Row[];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <section id="contact" className="border-t border-line bg-ink-2/40">
      <div className="shell section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="">
            <p className="kicker">Contact</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">
              Let&rsquo;s build something that deserves to be shipped.
            </h2>
            <p className="lede mt-6 max-w-lg">
              Actively looking for <strong className="text-chalk">Senior or
              Lead AI/ML Engineer</strong> and{" "}
              <strong className="text-chalk">Agentic AI Engineer</strong> roles
              — production AI, multi-agent systems, evaluation and reliability.
              Based in {site.location}, working remotely with teams anywhere.
            </p>

            {contact.email ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${contact.email}`} className="btn btn-primary">
                  Send an email <span aria-hidden="true">↗</span>
                </a>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(contact.email);
                      setCopied(true);
                    } catch {
                      // Clipboard blocked (insecure context or denied permission) —
                      // the mailto link above still works.
                    }
                  }}
                >
                  {copied ? "Copied ✓" : "Copy address"}
                </button>
              </div>
            ) : null}
          </div>

          <div
            className="panel h-fit p-2"
            data-reveal=""
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            {rows.length ? (
              <ul>
                {rows.map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      target={/^(mailto|tel):/.test(row.href) ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-6 rounded-xl px-5 py-5 transition-colors hover:bg-ink-3"
                    >
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist-dim">
                        {row.label}
                      </span>
                      <span className="flex min-w-0 items-center gap-3 text-sm">
                        <span className="truncate text-mist transition-colors group-hover:text-chalk">
                          {row.display}
                        </span>
                        <span
                          className="text-mint transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-5 py-8 text-sm text-mist-dim">
                {process.env.NODE_ENV === "development"
                  ? "No contact details yet — fill in `contact` in src/content/site.ts and this panel populates itself."
                  : `Reach out via the channels listed on ${site.name}'s profiles.`}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
