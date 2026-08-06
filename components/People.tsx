"use client";

import { GROUPS, type Person } from "@/lib/data";
import Reveal from "./Reveal";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

function Avatar({ p }: { p: Person }) {
  if (p.photo) {
    return (
      <span className="ring relative block h-14 w-14 overflow-hidden rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
      </span>
    );
  }
  return (
    <span className="ring flex h-14 w-14 items-center justify-center rounded-full">
      <span className="font-display text-sm font-semibold tracking-wide text-[var(--accent)]">
        {initials(p.name)}
      </span>
    </span>
  );
}

function Card({ p }: { p: Person }) {
  const inner = (
    <div className="card group flex h-full items-start gap-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]">
      <Avatar p={p} />
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <h4 className="truncate font-display text-[0.98rem] font-medium">{p.name}</h4>
          {p.link && (
            <svg className="shrink-0 text-[var(--faint)] transition-colors group-hover:text-[var(--accent)]" width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M5 3h6v6M11 3L4 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <p className="mt-1 text-[0.82rem] leading-snug text-[var(--muted)]">{p.role}</p>
        {p.affiliation && (
          <p className="mt-0.5 text-[0.76rem] leading-snug text-[var(--faint)]">{p.affiliation}</p>
        )}
      </div>
    </div>
  );
  return p.link ? (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function People() {
  return (
    <section id="people" className="section relative mx-auto max-w-[var(--maxw)] px-6">
      <Reveal>
        <p className="eyebrow">People</p>
        <h2 className="display-2 mt-5">The minds behind the workshop</h2>
        <p className="lede mt-6">
          An interdisciplinary community spanning artificial intelligence, science,
          film, media, art, and design.
        </p>
      </Reveal>

      <div className="mt-14 space-y-14">
        {GROUPS.map((g) => (
          <div key={g.id}>
            <Reveal>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-lg font-medium tracking-tight">{g.title}</h3>
                <span className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-xs text-[var(--faint)]">{g.people.length}</span>
              </div>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.people.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 70}>
                  <Card p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
