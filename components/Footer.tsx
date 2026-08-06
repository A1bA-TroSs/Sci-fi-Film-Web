export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] px-6 py-14">
      <div className="mx-auto flex max-w-[var(--maxw)] flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-lg font-medium">
            Human–AI Co-Creation for Science Fiction Filmmaking
          </p>
          <p className="mt-2 font-display tracking-[0.12em] text-[var(--accent)]">
            Create the Future. Tell the Story.
          </p>
        </div>
        <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--faint)]">
          Science · Cinema · Imagination · AI
        </p>
      </div>
    </footer>
  );
}
