const AI_API = "http://localhost:3000/api/ai-research";

async function askAI() {
  const question = document.getElementById("question").value;

  const res = await fetch(AI_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  const data = await res.json();
  document.getElementById("answer").textContent = data.answer;
}
