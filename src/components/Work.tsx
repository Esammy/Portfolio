"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/content/site";

export default function Work() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openProject && !dialog.open) dialog.showModal();
    if (!openProject && dialog.open) dialog.close();
  }, [openProject]);

  // Keep the page from scrolling behind the dialog.
  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  return (
    <section id="work" className="shell section-pad">
      <SectionHeading
        kicker="Selected work"
        title="Work that goes beyond the demo."
        note="A few systems and research projects that show how I approach AI — from model behaviour all the way down to production engineering."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delay={i * 70}
            onOpen={() => setOpenProject(project)}
          />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenProject(null)}
        onClick={(e) => {
          // Clicks landing on the dialog element itself are backdrop clicks.
          if (e.target === dialogRef.current) close();
        }}
        aria-labelledby="case-study-title"
        className="m-auto w-[min(46rem,calc(100vw-2rem))] max-w-none bg-transparent p-0 text-chalk backdrop:bg-black/70"
      >
        {openProject ? (
          <div className="dialog-body panel max-h-[85vh] overflow-y-auto p-7 md:p-10">
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-line text-mist transition-colors hover:border-mint/40 hover:text-chalk"
              aria-label="Close case study"
            >
              ×
            </button>

            <p className="kicker pr-12">
              {openProject.index} · {openProject.category}
            </p>
            <h3
              id="case-study-title"
              className="display mt-3 text-[clamp(1.7rem,4vw,2.6rem)]"
            >
              {openProject.title}
            </h3>
            <p className="lede mt-4">{openProject.study.lead}</p>

            {openProject.metrics ? (
              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                {openProject.metrics.map((m) => (
                  <div key={m.label} className="bg-ink-3 px-4 py-4">
                    <span className="block font-serif text-2xl text-mint">
                      {m.value}
                    </span>
                    <span className="mt-1 block text-[0.7rem] text-mist-dim">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <StudyColumn title="What I did" items={openProject.study.work} />
              <StudyColumn title="Outcome" items={openProject.study.outcome} />
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-2 border-t border-line pt-6">
              {openProject.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
              {openProject.link ? (
                <a
                  href={openProject.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost ml-auto text-xs"
                >
                  {openProject.link.label} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}

function StudyColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="kicker">{title}</p>
      <ul className="mt-4 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: Project;
  delay: number;
  onOpen: () => void;
}) {
  const span = project.featured
    ? "md:col-span-2 lg:col-span-6"
    : "lg:col-span-3";

  return (
    <article
      className={`panel panel-hover group flex flex-col ${span}`}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <button
        type="button"
        onClick={onOpen}
        className="flex h-full flex-col items-start p-6 text-left md:p-8"
        aria-label={`Open case study: ${project.title}`}
      >
        <div className="flex w-full items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mist-dim">
          <span className="text-mint">{project.index}</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
          <span>{project.category}</span>
        </div>

        <div
          className={
            project.featured
              ? "mt-7 grid w-full gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end"
              : "mt-7 w-full"
          }
        >
          <div>
            <h3 className="display text-[clamp(1.35rem,2.4vw,2rem)] transition-colors group-hover:text-mint">
              {project.title}
            </h3>
            <p className="lede mt-3 text-[0.95rem]">{project.summary}</p>
          </div>

          <div>
            {project.metrics ? (
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-ink-3 px-3 py-3.5">
                    <span className="block font-serif text-xl text-mint">
                      {m.value}
                    </span>
                    <span className="mt-0.5 block text-[0.65rem] text-mist-dim">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {project.callout ? (
              <div className="flex items-baseline gap-3 rounded-xl border border-line bg-ink-3 px-4 py-3.5">
                <span className="font-serif text-2xl text-mint">
                  {project.callout.value}
                </span>
                <span className="text-[0.7rem] leading-snug text-mist-dim">
                  {project.callout.label}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex w-full flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-7 inline-flex items-center gap-2 text-sm text-mint">
          View case study
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            ↗
          </span>
        </span>
      </button>
    </article>
  );
}
