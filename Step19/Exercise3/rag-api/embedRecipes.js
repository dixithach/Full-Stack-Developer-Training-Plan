import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

// Supabase credentials
const SUPABASE_URL = "https://cjkwtsrsqnxvaoirgamc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YWBSMS7Y_ET5_MmNCJxoTA_l2zI6LD-";

// Ollama
const OLLAMA_BASE_URL = "http://localhost:11434";
const EMBED_MODEL = "nomic-embed-text"; // 768-dim embeddings

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1️⃣ Get embedding from Ollama
async function getEmbedding(text) {
  const res = await fetch(`${OLLAMA_BASE_URL}/api/embeddings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: EMBED_MODEL, prompt: text })
  });
  const data = await res.json();

  if (!data.embedding || !Array.isArray(data.embedding))
    throw new Error("Embedding is not an array!");
  if (data.embedding.length !== 768)
    throw new Error(`Embedding length ${data.embedding.length} != 768`);

  return data.embedding;
}

// 2️⃣ Embed all recipes missing embeddings
async function embedRecipes() {
  const { data: rows, error } = await supabase
    .from("family_recipes")
    .select("id, instructions")
    .is("embedding", null);

  if (error) return console.error("Supabase fetch error:", error);
  if (!rows.length) return console.log("No recipes to embed");

  for (const row of rows) {
    console.log("Embedding recipe ID", row.id);
    const embedding = await getEmbedding(row.instructions);

    const { error: updateError } = await supabase
      .from("family_recipes")
      .update({ embedding })
      .eq("id", row.id);

    if (updateError) console.error("Update error:", updateError);
    else console.log(`Embedded recipe ID ${row.id}`);
  }

  console.log("All embeddings complete");
}

embedRecipes();
