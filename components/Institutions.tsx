"use client";

import { INSTITUTIONS, type Institution } from "@/lib/data";
import Reveal from "./Reveal";

function Tile({ inst, featured }: { inst: Institution; featured: boolean }) {
  // Wide horizontal wordmarks get more width so they don't read small.
  const wide = inst.name === "The Central Academy of Drama";
  return (
    <figure className="flex h-full flex-col items-center text-center">
      <div
        className={`flex w-full items-center justify-center rounded-md border border-[rgba(255,255,255,0.28)] bg-[rgba(230,230,230,0.30)] ${
          featured ? "h-[156px] p-6" : "h-[124px] p-5"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={inst.logo}
          alt={inst.name}
          className={`w-auto object-contain ${featured ? "max-h-[108px] max-w-[86%]" : wide ? "max-h-[82px] max-w-[96%]" : "max-h-[82px] max-w-[80%]"}`}
        />
      </div>
      <figcaption
        className={`mt-3 leading-snug ${
          featured
            ? "font-display text-[0.92rem] font-semibold text-[var(--fg)]"
            : "font-display text-[0.8rem] font-medium text-[var(--muted)]"
        }`}
      >
        {inst.name}
      </figcaption>
    </figure>
  );
}

export default function Institutions() {
  const featured = INSTITUTIONS.filter((i) => i.featured);
  const rest = INSTITUTIONS.filter((i) => !i.featured);

  return (
    <section id="partners" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="border-t border-[var(--line)] pt-3" />

      <Reveal className="mt-12">
        <h2 className="h-sec max-w-[16ch]">Collaborating institutions</h2>
        <p className="lede mt-5">
          The workshop brings together collaborators from universities, research
          organizations, and creative institutions across artificial intelligence,
          science, film, media, art, and design.
        </p>
      </Reveal>

      {/* Lead institutions — larger, more prominent */}
      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {featured.map((inst, i) => (
          <Reveal key={inst.name} delay={(i % 5) * 45}>
            <Tile inst={inst} featured />
          </Reveal>
        ))}
      </div>

      {/* Remaining institutions */}
      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {rest.map((inst, i) => (
          <Reveal key={inst.name} delay={(i % 4) * 40}>
            <Tile inst={inst} featured={false} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
