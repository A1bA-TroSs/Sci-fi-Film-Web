"use client";

import { useScrollY } from "./hooks";

/** A luminous Jupiter that rotates as the page slides.
 *  `className` positions and sizes the disc; rotation is scroll-driven. */
export default function Jupiter({
  className = "",
  speed = 0.025,
  base = 0,
}: {
  className?: string;
  speed?: number;
  base?: number;
}) {
  const y = useScrollY();
  const rot = base + y * speed;

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      {/* ambient glow (does not rotate) */}
      <div
        className="absolute inset-[-18%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(224,164,90,0.22), rgba(224,164,90,0.06) 55%, transparent 72%)",
          filter: "blur(6px)",
        }}
      />
      {/* rotating banded surface */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          transform: `rotate(${rot}deg)`,
          backgroundImage: "url(images/jupiter.jpg)",
          backgroundSize: "185%",
          backgroundPosition: "69% 37%",
          boxShadow: "inset -30px -20px 90px rgba(0,0,0,0.75)",
        }}
      />
      {/* sphere shading + rim light (fixed, gives volume) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(120% 120% at 34% 28%, rgba(255,224,180,0.14), transparent 46%), radial-gradient(130% 130% at 78% 82%, rgba(0,0,0,0.6), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: "inset 0 0 2px 1px rgba(224,164,90,0.35)" }}
      />
    </div>
  );
}
