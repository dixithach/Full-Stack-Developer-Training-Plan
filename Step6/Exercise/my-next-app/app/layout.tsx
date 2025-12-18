// app/layout.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "My Next App",
  description: "Example Next.js App with simple navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
        <header style={{ marginBottom: 20 }}>
          <nav>
            <Link href="/" style={{ marginRight: 12 }}>
              Home
            </Link>
            <Link href="/about" style={{ marginRight: 12 }}>
              About
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 40, color: "#666" }}>
          © {new Date().getFullYear()} My Next App
        </footer>
      </body>
    </html>
  );
}
