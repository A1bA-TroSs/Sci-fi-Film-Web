"use client";

import { INSTITUTIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Institutions() {
  return (
    <section id="institutions" className="section relative mx-auto max-w-[var(--maxw)] px-6">
      <Reveal>
        <p className="eyebrow">Collaborating Institutions</p>
        <h2 className="display-2 mt-5">A constellation of partners</h2>
        <p className="lede mt-6">
          Universities, research organizations, and creative institutions across
          artificial intelligence, science, film, media, art, and design.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {INSTITUTIONS.map((inst, i) => (
          <Reveal key={inst.name} delay={(i % 4) * 60}>
            <div className="card flex h-28 items-center justify-center p-4 text-center transition-colors duration-300 hover:border-[var(--border-strong)]">
              {inst.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="max-h-16 w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              ) : (
                <span className="font-display text-[0.82rem] font-medium leading-snug text-[var(--muted)]">
                  {inst.name}
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="mt-6 text-center text-xs text-[var(--faint)]">
          Institution logos are being added; university names shown in the meantime.
        </p>
      </Reveal>
    </section>
  );
}
