"use client";
import { useEffect, useRef } from "react";

// Çizilmiş vektör yaprak: gövde çizgisi + yan damarlar (geometri, resim taklidi değil).
const YAPRAK = "M100 6C172 58 194 150 100 254C6 150 28 58 100 6Z";
const DAMARLAR = [
  "M100 40L100 246",
  "M100 80L148 58", "M100 80L52 58",
  "M100 120L158 90", "M100 120L42 90",
  "M100 160L150 128", "M100 160L50 128",
  "M100 198L130 172", "M100 198L70 172",
];

function Yaprak({ id, ton }) {
  return (
    <svg viewBox="0 0 200 260" className="leaf-svg" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={ton[0]} />
          <stop offset="1" stopColor={ton[1]} />
        </linearGradient>
      </defs>
      <path d={YAPRAK} fill={`url(#g-${id})`} />
      <path d={YAPRAK} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
      {DAMARLAR.map((d) => (
        <path key={d} d={d} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" strokeLinecap="round" />
      ))}
    </svg>
  );
}

/**
 * Hafif 3D sahne: yalnızca transform animasyonu (GPU), backdrop-filter yok.
 * İşaretçiyi yay gibi takip eder; hareket bitince döngü durur.
 */
export default function LeafScene() {
  const sahne = useRef(null);

  useEffect(() => {
    const el = sahne.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let hx = 0, hy = 0; // hedef
    let x = 0, y = 0; // mevcut
    let vx = 0, vy = 0; // hız (yay)
    let raf = 0;

    const adim = () => {
      // Sönümlü yay: hedefe hafif aşımla oturur.
      vx += (hx - x) * 0.08; vy += (hy - y) * 0.08;
      vx *= 0.82; vy *= 0.82;
      x += vx; y += vy;
      el.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
      const duruyor = Math.abs(hx - x) + Math.abs(hy - y) + Math.abs(vx) + Math.abs(vy) < 0.002;
      raf = duruyor ? 0 : requestAnimationFrame(adim);
    };
    const baslat = () => { if (!raf) raf = requestAnimationFrame(adim); };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      hx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      hy = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      baslat();
    };
    const onLeave = () => { hx = 0; hy = 0; baslat(); };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="scene" ref={sahne} role="img" aria-label="Süzülen üç boyutlu yaprak illüstrasyonu">
      <div className="stage">
        <div className="float">
          <span className="orb" />
          <span className="ring" />
          <div className="l l-back"><Yaprak id="a" ton={["#0f3d27", "#06190f"]} /></div>
          <div className="l l-mid"><Yaprak id="b" ton={["#5eeb98", "#12865a"]} /></div>
          <div className="l l-front"><Yaprak id="c" ton={["rgba(190,255,220,0.35)", "rgba(60,200,140,0.12)"]} /></div>
          <span className="bead d1" />
          <span className="bead d2" />
          <span className="bead d3" />
        </div>
      </div>
    </div>
  );
}
