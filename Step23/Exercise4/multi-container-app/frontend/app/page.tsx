"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend (Next.js)</h1>
      <p>{data}</p>
    </div>
  );
}
