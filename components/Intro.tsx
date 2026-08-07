"use client";

import Reveal from "./Reveal";
import { useParallax } from "./hooks";

export default function Intro() {
  const [imgRef, offset] = useParallax<HTMLDivElement>(0.08);
  return (
    <section id="about" className="section relative mx-auto max-w-[var(--maxw)] px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow">The Workshop</p>
            <h2 className="display-2 mt-5">Where storytelling meets scientific imagination</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede mt-7">
              The Human–AI Co-Creation for Science Fiction Filmmaking Workshop is a
              research-led interdisciplinary initiative that brings together science
              fiction storytelling, filmmaking, scientific inquiry, and generative
              artificial intelligence. It offers participants an environment for
              exploring how emerging AI technologies can support complex creative
              practices — collaborating with generative AI tools to develop original
              concepts, translate scientific ideas into compelling narratives, and
              iteratively refine their screenplays.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="lede mt-5">
              Beyond creative production, the workshop is a platform for investigating
              new forms of human–AI collaboration, interdisciplinary knowledge
              integration, and responsible creative practice — advancing both the
              practice and understanding of AI-supported science fiction filmmaking
              while fostering dialogue between creative professionals, researchers,
              scientists, and emerging creators.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={imgRef}
            className="relative"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <div className="relative aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="images/hall.jpg"
                alt="A figure within a futuristic hall, Jupiter beyond the glass"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* feather all edges into the space background so it blends seamlessly */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg) 1%, transparent 22%)," +
                    "linear-gradient(to bottom, var(--bg) 1%, transparent 20%)," +
                    "linear-gradient(to left, var(--bg) 1%, transparent 18%)," +
                    "linear-gradient(to right, var(--bg) 1%, transparent 18%)",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
