"use client";

import { GROUPS, type Person } from "@/lib/data";
import Reveal from "./Reveal";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function photoStyle(name: string) {
  if (name === "Sebastian Deterding" || name === "Zhonghua Yao") {
    return { objectPosition: "center 30%" as const };
  }

  return undefined;
}

function Entry({ p, code }: { p: Person; code: string }) {
  const NameTag: React.ElementType = p.link ? "a" : "span";
  const nameProps = p.link
    ? { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "dlink font-display text-[1.02rem] font-semibold leading-tight" }
    : { className: "font-display text-[1.02rem] font-semibold leading-tight text-[var(--fg)]" };

  return (
    <div className="group flex items-start gap-4 border-t border-[var(--line)] py-4">
      <span className="mt-1 hidden w-9 shrink-0 font-mono text-[0.62rem] tracking-[0.12em] text-[var(--faint)] sm:block">
        {code}
      </span>

      <div className="relative h-[70px] w-[56px] shrink-0 overflow-hidden border border-[var(--line-2)]">
        {p.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photo} alt={p.name} className="h-full w-full object-cover" style={photoStyle(p.name)} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--panel)] font-mono text-[0.8rem] tracking-[0.06em] text-[var(--amber)]">
            {initials(p.name)}
          </div>
        )}
      </div>

      <div className="min-w-0 pt-0.5">
        <NameTag {...nameProps}>
          {p.name}
          {p.link && (
            <svg className="ml-1 inline-block -translate-y-px" width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 7.5L7.5 2.5M3.5 2.5h4v4" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          )}
        </NameTag>
        <p className="mt-1 text-[0.82rem] leading-snug text-[var(--muted)]">{p.role}</p>
        {p.affiliation && (
          <p className="mt-0.5 font-mono text-[0.66rem] leading-snug tracking-[0.02em] text-[var(--faint)]">
            {p.affiliation}
          </p>
        )}
      </div>
    </div>
  );
}

export default function People() {
  return (
    <section id="people" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-3">
        <span className="code">§ 02 — People</span>
        <span className="code code-faint">02 / 04</span>
      </div>

      <Reveal className="mt-12">
        <h2 className="h-sec max-w-[18ch]">The minds behind the workshop</h2>
        <p className="lede mt-5">
          An interdisciplinary community spanning artificial intelligence, science,
          film, media, art, and design.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16">
        {GROUPS.map((g) => (
          <div key={g.id}>
            <Reveal>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="code">{g.code}</span>
                <h3 className="font-display text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-[var(--fg)]">
                  {g.title}
                </h3>
              </div>
            </Reveal>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {g.people.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 60}>
                  <Entry p={p} code={`${g.code}·${String(i + 1).padStart(2, "0")}`} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
