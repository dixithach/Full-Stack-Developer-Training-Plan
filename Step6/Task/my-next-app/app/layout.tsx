export const metadata = {
  title: "My App Router Demo",
  description: "Detailed Next.js App Router example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 20 }}>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> |{" "}
            <a href="/blog">Blog</a>
          </nav>
          <hr />
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 30 }}>
          <hr />
          <small>© My Demo</small>
        </footer>
      </body>
    </html>
  );
}
