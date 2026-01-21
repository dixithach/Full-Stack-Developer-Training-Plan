const express = require("express");
const http = require("http");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/ask-ollama", (req, res) => {
  const postData = JSON.stringify({
    model: "llama3",
    prompt: "What are the benefits of a balanced diet?",
    stream: false,
  });

  const options = {
    hostname: "localhost",
    port: 11434,
    path: "/api/generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  const request = http.request(options, (response) => {
    let body = "";

    response.on("data", (chunk) => {
      body += chunk.toString();
    });

    response.on("end", () => {
      try {
        const data = JSON.parse(body);

        console.log("AI Response:");
        console.log(data.response);

        res.json({
          success: true,
          response: data.response,
        });
      } catch (err) {
        console.error("JSON Parse Error:", err);
        res.status(500).json({ error: "Invalid JSON from Ollama" });
      }
    });
  });

  request.on("error", (error) => {
    console.error("REQUEST ERROR:", error);
    res.status(500).json({ error: error.message });
  });

  request.write(postData);
  request.end();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
