import Header from "@/components/Header";
import Menu from "@/components/Menu";
import PixelGrid from "@/components/PixelGrid";

export default function Page() {
  return (
    <main>
      <Header />
      <Menu />

      <div className="retro-container px-4">
        <div className="flex justify-center gap-2 py-2 text-xs">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="animate-blink">⬤</span>
          ))}
        </div>
      </div>

      <section className="retro-container">
        <PixelGrid />
      </section>

      <footer className="retro-container px-4 py-6 text-center text-xs">
        © 2025 Brand Space – All Rights Reserved
      </footer>
    </main>
  );
}
