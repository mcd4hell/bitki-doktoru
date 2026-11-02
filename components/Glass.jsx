"use client";
/*!
 * Liquid Glass refraction — React port.
 * The refraction field is a port of the fragment shader in liquid-glass-js
 * (https://github.com/dashersw/liquid-glass-js) — Copyright (c) 2025 Armagan
 * Amcalar, MIT. Permission is hereby granted, free of charge, to any person
 * obtaining a copy of that software to deal in it without restriction,
 * provided this notice travels with it; it is provided "as is", without
 * warranty of any kind. Keep this header on any copy or port.
 *
 * Yalnızca Chromium'da SVG backdrop-filter çalışır; diğer motorlarda CSS'teki
 * blur() yedeği kalır (Safari'de boş çizilmemesi için motor kontrolü şart).
 */
import { useEffect, useRef } from "react";

const PRESET = {
  edgeIntensity: 0.015,
  rimIntensity: 0.028,
  baseIntensity: 0.05,
  edgeDistance: 0.5,
  rimDistance: 1.7,
  baseDistance: 0.2,
  cornerBoost: 0.06,
  rippleEffect: 0.26,
  blurRadius: 2,
  warp: false,
};
const SUPERSAMPLE = 2;
const MAX_MAP_EDGE = 1400;
const BLUR_STD_PER_RADIUS = 0.35;

const filters = new Map();
let defs = null;
let nextId = 0;

function destekleniyor() {
  const brands = navigator.userAgentData?.brands;
  if (brands) return brands.some((b) => /Chromium|Google Chrome|Microsoft Edge/i.test(b.brand));
  return /Chrome\//.test(navigator.userAgent);
}

function ensureDefs() {
  if (!defs || !defs.isConnected) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "fixed";
    svg.setAttribute("aria-hidden", "true");
    svg.appendChild(document.createElementNS(ns, "defs"));
    document.body.appendChild(svg);
    defs = svg;
  }
  return defs;
}

function clampByte(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}

function resolveRadius(computed, w, h) {
  const value = parseFloat(computed) || 0;
  return computed.trim().endsWith("%") ? (value / 100) * Math.min(w, h) : value;
}

function buildMap(w, h, radius, pageW, pageH, cfg) {
  const ss = Math.max(0.25, Math.min(SUPERSAMPLE, MAX_MAP_EDGE / Math.max(w, h)));
  const bw = Math.max(1, Math.round(w * ss));
  const bh = Math.max(1, Math.round(h * ss));
  const r = radius * ss;
  const minDim = Math.min(w, h);
  const dx = new Float32Array(bw * bh);
  const dy = new Float32Array(bw * bh);
  let maxAbs = 0;

  for (let py = 0; py < bh; py++) {
    for (let px = 0; px < bw; px++) {
      const cx = (px + 0.5) / bw;
      const cy = (py + 0.5) / bh;
      const tx = Math.abs(px + 0.5 - bw / 2) - (bw / 2 - r);
      const ty = Math.abs(py + 0.5 - bh / 2) - (bh / 2 - r);
      const outside = Math.hypot(Math.max(tx, 0), Math.max(ty, 0));
      const inside = Math.min(Math.max(tx, ty), 0);
      const distPx = Math.max(-(outside + inside - r), 0) / ss;

      const edgeFall = Math.exp(-distPx * cfg.edgeDistance);
      const rimFall = Math.exp(-distPx * cfg.rimDistance);
      const baseFall = 1 - Math.exp(-distPx * cfg.baseDistance);
      const base = cfg.warp ? baseFall * cfg.baseIntensity : 0;
      const total = base + edgeFall * cfg.edgeIntensity + rimFall * cfg.rimIntensity;

      let nx = cx - 0.5;
      let ny = cy - 0.5;
      const len = Math.hypot(nx, ny);
      if (len > 0) {
        nx /= len;
        ny /= len;
      }
      const cornerNorm = Math.max(Math.min(cx, 1 - cx), Math.min(cy, 1 - cy)) * minDim;
      const corner = Math.exp(-cornerNorm * 0.3) * cfg.cornerBoost;
      const ripple = Math.sin((distPx / minDim) * 25) * cfg.rippleEffect * rimFall;

      const fx = (nx * (total + corner) - ny * ripple) * pageW;
      const fy = (ny * (total + corner) + nx * ripple) * pageH;
      const i = py * bw + px;
      dx[i] = fx;
      dy[i] = fy;
      maxAbs = Math.max(maxAbs, Math.abs(fx), Math.abs(fy));
    }
  }

  const scale = Math.max(maxAbs * 2, 1e-4);
  const bias = scale * (128 / 255 - 0.5);
  const canvas = document.createElement("canvas");
  canvas.width = bw;
  canvas.height = bh;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(bw, bh);
  const data = image.data;
  for (let i = 0; i < bw * bh; i++) {
    data[i * 4] = clampByte(255 * (0.5 + (dx[i] - bias) / scale));
    data[i * 4 + 1] = clampByte(255 * (0.5 + (dy[i] - bias) / scale));
    data[i * 4 + 2] = 128;
    data[i * 4 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  return { mapUrl: canvas.toDataURL("image/png"), scale };
}

function acquire(key, w, h, radius, pageW, pageH, cfg) {
  let entry = filters.get(key);
  if (entry && entry.node.isConnected) {
    entry.refs++;
    return entry;
  }
  if (entry) filters.delete(key);

  const { mapUrl, scale } = buildMap(w, h, radius, pageW, pageH, cfg);
  const id = `lg-${nextId++}`;
  const ns = "http://www.w3.org/2000/svg";
  const filter = document.createElementNS(ns, "filter");
  filter.setAttribute("id", id);
  const marginPx = scale / 2 + 3 * cfg.blurRadius * BLUR_STD_PER_RADIUS;
  const mx = (marginPx / w) * 100;
  const my = (marginPx / h) * 100;
  filter.setAttribute("x", `${-mx}%`);
  filter.setAttribute("y", `${-my}%`);
  filter.setAttribute("width", `${100 + 2 * mx}%`);
  filter.setAttribute("height", `${100 + 2 * my}%`);
  filter.setAttribute("color-interpolation-filters", "sRGB");

  const feImage = document.createElementNS(ns, "feImage");
  feImage.setAttribute("href", mapUrl);
  feImage.setAttribute("x", "0");
  feImage.setAttribute("y", "0");
  feImage.setAttribute("width", String(w));
  feImage.setAttribute("height", String(h));
  feImage.setAttribute("preserveAspectRatio", "none");
  feImage.setAttribute("result", "map");

  const disp = document.createElementNS(ns, "feDisplacementMap");
  disp.setAttribute("in", "SourceGraphic");
  disp.setAttribute("in2", "map");
  disp.setAttribute("scale", String(scale));
  disp.setAttribute("xChannelSelector", "R");
  disp.setAttribute("yChannelSelector", "G");
  disp.setAttribute("result", "displaced");

  const blur = document.createElementNS(ns, "feGaussianBlur");
  blur.setAttribute("in", "displaced");
  blur.setAttribute("stdDeviation", String(cfg.blurRadius * BLUR_STD_PER_RADIUS));

  filter.append(feImage, disp, blur);
  ensureDefs().querySelector("defs").appendChild(filter);
  entry = { id, node: filter, refs: 1 };
  filters.set(key, entry);
  return entry;
}

function release(key) {
  const entry = filters.get(key);
  if (entry && --entry.refs <= 0) {
    filters.delete(key);
    entry.node.remove();
  }
}

/** Cam yüzey. `tier`: "panel" (kırılmalı) | "chip" | "menu" | "modal". */
// refract varsayılan KAPALI: kırılma haritası piksel piksel hesaplanır ve büyük panelde siteyi dondurur.
// Yalnızca küçük (~300x300 altı) yüzeylerde elle aç.
export default function Glass({ as: Tag = "div", tier = "panel", refract = false, className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !refract || tier === "chip" || tier === "menu") return;
    if (!destekleniyor()) return;

    let currentKey = null;
    let raf = 0;
    let deb;

    const rebuild = () => {
      const w = Math.round(el.offsetWidth);
      const h = Math.round(el.offsetHeight);
      if (w < 2 || h < 2) return;
      const radius = Math.min(
        resolveRadius(getComputedStyle(el).borderTopLeftRadius, w, h),
        Math.min(w, h) / 2,
      );
      const pageW = window.innerWidth;
      const pageH = window.innerHeight;
      const key = [w, h, radius, pageW, pageH].join("|");
      if (key === currentKey) return;
      if (currentKey) release(currentKey);
      const entry = acquire(key, w, h, radius, pageW, pageH, PRESET);
      currentKey = key;
      el.style.backdropFilter = `url(#${entry.id})`;
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(rebuild);
    };
    const onResize = () => {
      clearTimeout(deb);
      deb = setTimeout(schedule, 180);
    };

    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    window.addEventListener("resize", onResize, { passive: true });
    schedule();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      clearTimeout(deb);
      cancelAnimationFrame(raf);
      if (currentKey) release(currentKey);
      el.style.backdropFilter = "";
    };
  }, [refract, tier]);

  const tierClass =
    tier === "chip"
      ? "liquid-glass-chip"
      : tier === "menu"
        ? "liquid-glass-menu"
        : tier === "modal"
          ? "liquid-glass liquid-glass--modal"
          : "liquid-glass";

  return (
    <Tag ref={ref} className={`${tierClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
