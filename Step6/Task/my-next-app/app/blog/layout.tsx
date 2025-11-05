export default function BlogLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <aside style={{ width: 220 }}>
        <h3>Blog Sidebar</h3>
        <p>Links, categories, or filters go here.</p>
      </aside>

      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
