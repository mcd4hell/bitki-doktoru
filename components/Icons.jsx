// Tek ağırlık: 1.75 çizgi, yuvarlak uçlar. Hepsi currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c-9 0-15 4-15 11 0 1.6.4 3 1.2 4C7.5 12 12 9 16 8c-3 2-6 5-7.6 9.4.9.4 1.8.6 2.6.6 7 0 9-7 9-14Z" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.1a2 2 0 0 0 1.6-.8l.6-.9A2 2 0 0 1 11.5 3.5h1a2 2 0 0 1 1.7.9l.6.9a2 2 0 0 0 1.6.8h1.1A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8Z" />
      <circle cx="12" cy="12.5" r="3.4" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
