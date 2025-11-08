import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Space™ — 1,000,000 pixels",
  description: "Reserve your name, logo, profile, number, and links on the global wall.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
