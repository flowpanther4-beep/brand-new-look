"use client";
import { useMemo } from "react";

type Props = {
  taken?: boolean;
  label?: string;
  href?: string;
};

export default function PixelBlock({ taken, label, href }: Props) {
  const effect = useMemo(() => {
    const options = ["", "animate-blink", "animate-pulseGlow"] as const;
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  if (taken) {
    return (
      <a
        href={href || "#"}
        className="block w-full h-full pixel-border"
        title={label || "Reserved"}
        style={{ background: sampleColor(label) }}
      >
        <span className="sr-only">{label || "Reserved"}</span>
      </a>
    );
  }

  return (
    <button
      className={`w-full h-full pixel-border bg-white/80 relative ${effect}`}
      title="Click to reserve this pixel – Add your name, logo, number, or social profile."
      onClick={() => alert("Reserve modal coming soon ✨")}
    >
      <div className="absolute inset-0 grid place-items-center text-[10px] font-bold">
        <span>{label || randomAvailableLabel()}</span>
      </div>
    </button>
  );
}

function randomAvailableLabel() {
  const labels = [
    "AVAILABLE NOW",
    "RESERVE YOUR SPOT",
    "GET YOUR NAME",
    "JOIN THE WALL",
    "BE SEEN HERE",
    "GET YOUR LOGO HERE",
    "RESERVE YOUR PROFILE",
    "ADD YOUR SIGNATURE",
    "LINK YOUR BRAND",
  ];
  return labels[Math.floor(Math.random() * labels.length)];
}

function sampleColor(seed?: string) {
  const palette = ["#ff4136","#0074d9","#2ecc40","#b10dc9","#ff851b","#7fdbff","#ffdc00"];
  const i = Math.abs(hash(seed || "seed")) % palette.length;
  return palette[i];
}

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h;
}
