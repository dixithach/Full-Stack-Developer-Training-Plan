const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: Date.now(),
    title,
  };

  tasks.push(newTask);
  res.json(newTask);
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/ai-research", (req, res) => {
  const { question } = req.body;

  res.json({
    answer: `This is a mock AI answer for: "${question}"`,
  });
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
