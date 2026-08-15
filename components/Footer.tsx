export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-16 pt-4">
      <div className="flex flex-col gap-8 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">
            Human–AI Co-Creation for Science Fiction Filmmaking
          </p>
          <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--amber)]">
            Create the Future. Tell the Story.
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="code code-faint">Hosted by</p>
          <a
            href="https://hkust.edu.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="dlink font-mono text-[0.74rem] uppercase tracking-[0.1em]"
          >
            The Hong Kong University of Science and Technology
          </a>
        </div>
      </div>
      <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--faint)]">
        WS-01 · Dossier · Est. 2025 — Science · Cinema · Imagination · AI
      </p>
    </footer>
  );
}
