// app/blog/[id]/page.js
export default function BlogPost({ params }) {
  // params is an object like { id: '1' } or { id: 'abc' }
  const { id } = params;

  return (
    <main style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Blog Post Page</h1>
      <p>
        This page is generated for the blog post with ID: <b>{id}</b>
      </p>
    </main>
  );
}
