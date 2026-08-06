"use client";

import Reveal from "./Reveal";
import { useParallax } from "./hooks";

export default function Vision() {
  const [ref, offset] = useParallax<HTMLDivElement>(0.14);
  return (
    <section id="vision" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
      {/* full-bleed cinematic still with parallax */}
      <div ref={ref} className="absolute inset-0 -z-10" style={{ transform: `translateY(${offset}px) scale(1.12)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="images/hero_window.jpg"
          alt="A figure gazes at Jupiter through a spaceship window"
          className="h-full w-full object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, var(--bg) 0%, rgba(5,6,9,0.55) 30%, rgba(5,6,9,0.55) 70%, var(--bg) 100%)" }} />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Our Vision</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-1 mt-6">
            Create the Future.
            <br />
            Tell the Story.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 font-display text-lg tracking-[0.14em] text-[var(--accent)] sm:text-xl">
            Science · Cinema · Imagination · Artificial Intelligence
          </p>
        </Reveal>
      </div>
    </section>
  );
}
