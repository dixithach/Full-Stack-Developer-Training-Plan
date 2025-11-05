import Link from "next/link";

export default function BlogList() {
  // For demo we hardcode posts. In real apps fetch from an API.
  const posts = [
    { id: "1", title: "Hello World" },
    { id: "2", title: "Learning App Router" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
