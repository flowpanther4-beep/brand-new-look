import PixelBlock from "@/components/PixelBlock";
import type { Reservation } from "./types";

type Props = {
  gridSize?: number;
  reservations: Record<number, Reservation>;
  onOpenReserve: (index: number) => void;
};

export default function PixelGrid({ gridSize = 50, reservations, onOpenReserve }: Props) {
  const GRID = gridSize;

  // Ocupados falsos solo para “llenar” visualmente
  const fakeReservedCount = 350;
  const fakeTaken = new Set<number>(
    Array.from({ length: fakeReservedCount }).map(() => Math.floor(Math.random() * GRID * GRID))
  );

  const blocks = Array.from({ length: GRID * GRID }).map((_, i) => {
    const real = reservations[i];
    if (real) return { index: i, isTaken: true, real };
    return { index: i, isTaken: fakeTaken.has(i), real: null as Reservation | null };
  });

  // Tamaño de cada celda (en píxeles) y separación mínima
  const CELL = 12;   // prueba 12px (muy retro). Puedes subir a 14–16 si quieres más grande.
  const GAP  = 1;

  return (
    <div className="p-2 md:p-4">
      <div
        className="grid mx-auto"
        style={{
          gridTemplateColumns: `repeat(${GRID}, ${CELL}px)`,
          gridAutoRows: `${CELL}px`,
          gap: GAP,
          background: "#fff",
          boxShadow: "0 0 0 2px #000",
          width: GRID * CELL + (GRID - 1) * GAP,
        }}
      >
        {blocks.map((b) => (
          <div key={b.index} className="w-full h-full">
            <PixelBlock
              taken={b.isTaken}
              data={b.real || undefined}
              onAvailableClick={() => onOpenReserve(b.index)}
            />
          </div>
        ))}
      </div>

      <p className="text-xs mt-2 opacity-70 text-center">
        Demo grid {GRID}×{GRID}. Tus reservas se guardan en este navegador.
      </p>
    </div>
  );
}
