import Link from "next/link";

const items = [
  { href: "#", label: "Homepage" },
  { href: "#buy", label: "Buy Space" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
  { href: "#directory", label: "Directory" },
  { href: "#press", label: "Press" },
];

export default function Menu() {
  return (
    <nav className="w-full bg-retroGray border-y border-black/30">
      <div className="retro-container">
        <div className="retro-menu px-2 md:px-4 py-2 text-retroBlue">
          {items.map((it, idx) => (
            <Link key={idx} href={it.href} className="mr-2 hover:underline">
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
