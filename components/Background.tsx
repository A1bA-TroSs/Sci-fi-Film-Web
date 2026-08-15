"use client";

import { useEffect, useRef } from "react";
import { useScrollY } from "./hooks";

/**
 * Continuous archival backdrop, fixed behind all content:
 *  · deep-space wash + vertical dossier grid lines
 *  · small flickering stars that stream upward as you scroll (space-travel)
 *  · a Jupiter plate that slowly rotates on scroll, with an instrument reticle
 */
export default function Background() {
  const y = useScrollY();
  const rot = y * 0.018;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scroll = { y: window.scrollY };
    const onScroll = () => { scroll.y = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let stars: { x: number; y: number; r: number; a: number; par: number; tw: number; ph: number; fw: number; fp: number }[] = [];
    const build = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      stars = [];
      const n = Math.min(300, Math.round((cv.width * cv.height) / 7000));
      for (let i = 0; i < n; i++) {
        const depth = Math.random(); // 0 far … 1 near
        stars.push({
          x: Math.random() * cv.width,
          y: Math.random() * cv.height,
          r: 0.3 + depth * 1.0,             // small
          a: 0.25 + depth * 0.55,
          par: 0.12 + depth * 0.55,         // scroll parallax — near stars stream faster
          tw: 1.2 + Math.random() * 2.4,    // twinkle speed
          ph: Math.random() * 6.28,
          fw: 3 + Math.random() * 5,        // flicker speed
          fp: Math.random() * 6.28,
        });
      }
    };
    build();
    window.addEventListener("resize", build);

    const draw = () => {
      const H = cv.height;
      ctx.clearRect(0, 0, cv.width, H);
      const now = performance.now() / 1000;
      const drift = reduce ? 0 : now * 6; // gentle autonomous upward drift
      for (const s of stars) {
        // scroll down → subtract → star moves up; wrap
        let sy = s.y - scroll.y * s.par - drift;
        sy = ((sy % H) + H) % H;
        const twinkle = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(now * s.tw + s.ph));
        const flick = Math.sin(now * s.fw + s.fp) > 0.9 ? 0.25 : 1; // occasional sharp flicker
        ctx.beginPath();
        ctx.arc(s.x, sy, s.r, 0, 6.283);
        ctx.fillStyle = `rgba(238,232,218,${s.a * twinkle * flick})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 78% 32%, #17110b 0%, #0b0a08 46%, #060504 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0, transparent calc(20% - 1px), rgba(214,164,90,0.05) calc(20% - 1px), rgba(214,164,90,0.05) 20%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Jupiter plate — rotating disc + static reticle */}
      <div className="absolute right-[-16%] top-[8%] h-[86vmin] w-[86vmin] sm:right-[-8%]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: "url(images/jupiter.jpg)",
            backgroundSize: "180%",
            backgroundPosition: "62% 40%",
            filter: "brightness(0.62) saturate(0.7) sepia(0.32) contrast(1.05)",
            transform: `rotate(${rot}deg)`,
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 56%, transparent 74%)",
            maskImage: "radial-gradient(circle at 50% 50%, #000 56%, transparent 74%)",
            opacity: 0.62,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: "inset 0 0 120px 30px rgba(214,164,90,0.10)", opacity: 0.8 }}
        />
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
          <circle cx="200" cy="200" r="150" stroke="rgba(214,164,90,0.18)" strokeWidth="0.7" />
          <circle cx="200" cy="200" r="176" stroke="rgba(214,164,90,0.10)" strokeWidth="0.7" strokeDasharray="1 6" />
          {Array.from({ length: 72 }).map((_, i) => {
            const a = (i / 72) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = 150, r2 = long ? 160 : 155;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * r1}
                y1={200 + Math.sin(a) * r1}
                x2={200 + Math.cos(a) * r2}
                y2={200 + Math.sin(a) * r2}
                stroke="rgba(214,164,90,0.22)"
                strokeWidth={long ? 1 : 0.6}
              />
            );
          })}
        </svg>
      </div>

      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 60px rgba(0,0,0,0.6)" }} />
    </div>
  );
}
