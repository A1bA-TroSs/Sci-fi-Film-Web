"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="brief" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-3">
        <span className="code">§ 01 — The Workshop</span>
        <span className="code code-faint">01 / 04</span>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="h-sec">
              Where storytelling meets scientific imagination
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={80}>
            <p className="lede">
              The Human–AI Co-Creation for Science Fiction Filmmaking Workshop is a
              research-led interdisciplinary initiative that brings together science
              fiction storytelling, filmmaking, scientific inquiry, and generative
              artificial intelligence. The workshop offers participants an
              interdisciplinary environment for exploring how emerging AI
              technologies can support complex creative practices — collaborating
              with generative AI tools to develop original science fiction concepts,
              translate scientific ideas into compelling narratives, and iteratively
              refine their screenplays.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-6">
              Beyond creative production, the workshop is a platform for
              investigating new forms of human–AI collaboration, interdisciplinary
              knowledge integration, and responsible creative practice — advancing
              both the practice and understanding of AI-supported science fiction
              filmmaking while fostering meaningful dialogue between creative
              professionals, researchers, scientists, and emerging creators.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120} className="relative left-1/2 mt-20 w-screen -translate-x-1/2">
        <div className="relative h-[clamp(240px,40vh,480px)] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/hero_window.jpg"
            alt="A figure gazes at Jupiter through a spaceship window"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: "center 34%",
              filter: "brightness(0.58) saturate(0.7) sepia(0.3) contrast(1.03)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 16%, #000 82%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, #000 16%, #000 82%, transparent)",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
