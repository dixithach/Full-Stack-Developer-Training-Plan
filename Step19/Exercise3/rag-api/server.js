import express from "express";
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

// -------------------- CONFIG --------------------
const SUPABASE_URL = "https://cjkwtsrsqnxvaoirgamc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YWBSMS7Y_ET5_MmNCJxoTA_l2zI6LD-";

const OLLAMA_BASE_URL = "http://localhost:11434";
const CHAT_MODEL = "llama3:latest";          // Use smaller model to fit RAM
const EMBED_MODEL = "nomic-embed-text:latest";

// -------------------- INIT --------------------
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const app = express();
app.use(express.json());

// -------------------- HELPERS --------------------

// 1️⃣ Get embedding from Ollama
async function getEmbedding(text) {
  const res = await fetch(`${OLLAMA_BASE_URL}/api/embeddings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: EMBED_MODEL, prompt: text }),
  });

  const data = await res.json();
  if (!data.embedding || !Array.isArray(data.embedding))
    throw new Error("Embedding is not an array!");
  return data.embedding;
}

// 2️⃣ Vector search in Supabase
async function searchSupabase(queryEmbedding) {
  const { data, error } = await supabase.rpc("match_family_recipes", {
    query_embedding: queryEmbedding,
    match_count: 3,
    match_threshold: 0.7,
  });

  if (error) {
    console.error("Supabase search error:", error);
    return [];
  }
  return data;
}

// 3️⃣ Ask Ollama using matched recipes as context
async function askOllama(question, contextRows) {
  try {
    // Build a prompt including context from Supabase
    let contextText = "";
    if (contextRows && contextRows.length > 0) {
      contextText = contextRows
        .map(r => `Title: ${r.title}\nInstructions: ${r.instructions}`)
        .join("\n\n");
    }

    const prompt = contextText
      ? `Answer the question using the following recipes:\n${contextText}\n\nQuestion: ${question}`
      : question;

    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: CHAT_MODEL,      // Use configured model
        messages: [
          { role: "user", content: prompt }
        ],
        stream: false,
        options: { temperature: 0.2 }
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Ollama HTTP ${response.status}: ${errText}`);
    }

    const result = await response.json();
    return result.message?.content?.trim() || "No answer generated.";

  } catch (error) {
    console.error("Error calling Ollama:", error);
    return "Error generating answer.";
  }
}

// -------------------- API --------------------
app.post("/api/research", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Question is required" });

    // Step 1: Embed the question
    const questionEmbedding = await getEmbedding(question);

    // Step 2: Retrieve relevant recipes
    const relevantRows = await searchSupabase(questionEmbedding);

    console.log("Retrieved rows from Supabase:", relevantRows);

    // Step 3: Ask Ollama using context
    const answer = await askOllama(question, relevantRows);

    res.json({
      question,
      answer,
      sources: relevantRows.map(r => r.title),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// -------------------- START SERVER --------------------
const PORT = 3000;
app.listen(PORT, () => console.log(`RAG API running at http://localhost:${PORT}`));
