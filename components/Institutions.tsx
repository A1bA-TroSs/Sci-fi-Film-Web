"use client";

import { INSTITUTIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Institutions() {
  return (
    <section id="partners" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-3">
        <span className="code">§ 03 — Partners</span>
        <span className="code code-faint">03 / 04</span>
      </div>

      <Reveal className="mt-12">
        <h2 className="h-sec max-w-[16ch]">Collaborating institutions</h2>
        <p className="lede mt-5">
          The workshop brings together collaborators from universities, research
          organizations, and creative institutions across artificial intelligence,
          science, film, media, art, and design.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-4">
        {INSTITUTIONS.map((inst, i) => (
          <Reveal key={inst.name} delay={(i % 4) * 45}>
            <div className="flex h-full min-h-[168px] flex-col items-center justify-center gap-4 bg-[var(--bg)] p-6 text-center transition-colors duration-300 hover:bg-[var(--panel)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={inst.logo}
                alt={inst.name}
                className="h-14 w-auto max-w-[80%] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
              <span className="font-mono text-[0.64rem] uppercase leading-snug tracking-[0.08em] text-[var(--muted)]">
                {inst.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
