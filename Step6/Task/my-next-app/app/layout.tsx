export const metadata = {
  title: "My Next.js App Router Demo",
  description: "Learning Next.js App Router step by step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", padding: 20 }}>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/blog">Blog</a>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
