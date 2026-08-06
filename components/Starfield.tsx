"use client";

import { useEffect, useRef } from "react";

/** A restrained, interactive starfield on a fixed canvas behind all content.
 *  Stars drift slowly and gently brighten / lean toward the cursor. */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Star = { x: number; y: number; z: number; r: number; tw: number; ph: number };
    let stars: Star[] = [];
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.floor((w * h) / 9000));
      stars = Array.from({ length: count }, () => {
        const z = Math.random();               // depth 0..1
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.4 + z * 1.4,
          tw: 0.4 + Math.random() * 0.6,
          ph: Math.random() * Math.PI * 2,
        };
      });
    };

    let raf = 0;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        // slow drift
        if (!reduce) s.x -= (0.02 + s.z * 0.06);
        if (s.x < -2) s.x = w + 2;
        // cursor influence
        const dx = s.x - mouse.x, dy = s.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const near = d2 < 130 * 130;
        const twinkle = reduce ? 0.7 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.tw + s.ph);
        let alpha = (0.25 + s.z * 0.6) * twinkle;
        let r = s.r;
        if (near) {
          const k = 1 - Math.sqrt(d2) / 130;
          alpha = Math.min(1, alpha + k * 0.6);
          r = s.r + k * 1.2;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(224,164,90,${alpha})`   // warm glow near cursor
          : `rgba(233,235,240,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onResize = () => build();

    build();
    raf = requestAnimationFrame(draw);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "radial-gradient(120% 90% at 50% -10%, #0a0d16 0%, #050609 60%)" }}
    />
  );
}
