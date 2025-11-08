import PixelBlock from "@/components/PixelBlock";

const GRID = 50;
const reserved: { i: number; label: string; href?: string }[] = Array.from({ length: 500 }).map((_, k) => ({
  i: Math.floor(Math.random() * GRID * GRID),
  label: `Brand #${k + 1}`,
  href: "#",
}));
const takenSet = new Set(reserved.map((r) => r.i));

export default function PixelGrid() {
  const blocks = Array.from({ length: GRID * GRID }).map((_, i) => {
    const isTaken = takenSet.has(i);
    const label = isTaken ? reserved.find((r) => r.i === i)?.label : undefined;
    const href = isTaken ? reserved.find((r) => r.i === i)?.href : undefined;
    return { isTaken, label, href };
  });

  return (
    <div className="p-2 md:p-4">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${GRID}, minmax(10px, 1fr))`,
          gridAutoRows: "10px",
          gap: 2,
          background: "#fff",
          boxShadow: "0 0 0 2px #000",
        }}
      >
        {blocks.map((b, idx) => (
          <div key={idx} className="w-full h-[10px]">
            <PixelBlock taken={b.isTaken} label={b.label} href={b.href} />
          </div>
        ))}
      </div>
      <p className="text-xs mt-2 opacity-70 text-center">
        Demo grid {GRID}×{GRID}. Virtual 1000×1000 coming soon.
      </p>
    </div>
  );
}
