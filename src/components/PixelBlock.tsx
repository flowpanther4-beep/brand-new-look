"use client";
import { useMemo } from "react";
import type { Reservation } from "./types";

type Props = {
  taken?: boolean;
  data?: Reservation;
  onAvailableClick?: () => void;
};

export default function PixelBlock({ taken, data, onAvailableClick }: Props) {
  const effect = useMemo(() => {
    const options = ["", "animate-blink", "animate-pulseGlow"] as const;
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  if (taken) {
    const bgStyle: React.CSSProperties = data?.logoDataUrl
      ? { backgroundImage: `url(${data.logoDataUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
      : { background: data?.color || sampleColor(data?.name || data?.profile || "") };
    const label = data?.name || data?.profile || "Reserved";
    const href = data?.link || "#";

    return (
      <a
        href={href}
        className="block w-full h-full pixel-border"
        title={label}
        style={bgStyle}
        target={href === "#" ? undefined : "_blank"}
        rel="noreferrer noopener"
      >
        {/* No texto visible dentro del bloque */}
        <span className="sr-only">{label}</span>
      </a>
    );
  }

  // Disponible (SIN texto visible, solo efecto)
  return (
    <button
      className={`w-full h-full pixel-border bg-white relative ${effect}`}
      title="Click to reserve this pixel – Add your name, logo, number, or social profile."
      onClick={onAvailableClick}
      aria-label="Available block – click to reserve"
    />
  );
}

function sampleColor(seed?: string) {
  const palette = ["#ff4136","#0074d9","#2ecc40","#b10dc9","#ff851b","#7fdbff","#ffdc00"];
  const i = Math.abs(hash(seed || "seed")) % palette.length;
  return palette[i];
}
function hash(str: string) { let h = 0; for (let i=0;i<str.length;i++) h=(h<<5)-h+str.charCodeAt(i); return h; }
