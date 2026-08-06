"use client";

import Jupiter from "./Jupiter";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-6">
      {/* Jupiter looming from the right, rotating on scroll */}
      <Jupiter className="absolute top-[8%] right-[-22%] h-[66vh] w-[66vh] sm:right-[-12%] lg:right-[-4%] lg:h-[74vh] lg:w-[74vh]" />

      {/* soft vignette to seat content over space */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(5,6,9,0.85) 0%, rgba(5,6,9,0.35) 45%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--maxw)]">
        <div className="max-w-2xl">
          <p className="eyebrow reveal in">Research-Led Interdisciplinary Workshop</p>
          <h1 className="display-1 mt-6">
            Human–AI Co-Creation for{" "}
            <span style={{ color: "var(--accent)" }}>Science Fiction</span> Filmmaking
          </h1>
          <p className="mt-7 font-display text-lg text-[var(--muted)] sm:text-xl">
            Imagining Future Worlds through Human–AI Co-Creation
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-6 py-3 text-sm font-semibold text-[#1a130a] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--accent)" }}
            >
              Explore the workshop
            </button>
            <span className="font-display text-sm tracking-wide text-[var(--faint)]">
              Science · Cinema · Imagination · AI
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(transparent, var(--bg))" }}
      />
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-max flex-col items-center gap-2 text-[var(--faint)] transition-colors hover:text-[var(--fg)]"
        style={{ animation: "floatY 2.6s ease-in-out infinite" }}
        aria-label="Scroll down"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 18 26" fill="none">
          <rect x="1" y="1" width="16" height="24" rx="8" stroke="currentColor" strokeOpacity="0.5" />
          <circle cx="9" cy="8" r="2.5" fill="currentColor" />
        </svg>
      </button>
    </section>
  );
}
