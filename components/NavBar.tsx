"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "people", label: "People" },
  { id: "institutions", label: "Institutions" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all"
      style={{
        background: scrolled ? "rgba(5,6,9,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-[var(--maxw)] items-center justify-between px-6 py-4">
        <button onClick={() => go("top")} className="group flex items-center gap-2.5 text-left">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #f0c07a, #b06a2a 70%)" }} />
            <span className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 10px 1px rgba(224,164,90,0.6)" }} />
          </span>
          <span className="font-display text-[0.86rem] font-medium tracking-tight">
            Human–AI Co-Creation{" "}
            <span className="hidden text-[var(--faint)] sm:inline">· Sci-Fi Filmmaking</span>
          </span>
        </button>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-md px-3 py-1.5 text-[0.82rem] font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                {l.label}
              </button>
            ))}
          </div>

          <span className="hidden h-7 w-px bg-[var(--border)] md:block" />

          <a
            href="https://hkust.edu.hk"
            target="_blank"
            rel="noopener noreferrer"
            title="Hosted by The Hong Kong University of Science and Technology"
            className="shrink-0 opacity-85 transition-opacity hover:opacity-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="logos/hkust-mark.png" alt="HKUST" className="h-8 w-auto" />
          </a>

          <button
            className="rounded-md border border-[var(--border-strong)] p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-3 md:hidden">
          <div className="grid grid-cols-2 gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-md px-3 py-2 text-left text-sm text-[var(--muted)]"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
