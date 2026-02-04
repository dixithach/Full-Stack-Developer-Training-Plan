"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Next.js → Node.js Communication</h1>
      <p>{message}</p>
    </main>
  );
}
