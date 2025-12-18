// controllers/tasksController.js
const { tasks } = require("../data/storage");

// GET /api/tasks
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// POST /api/tasks
exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "title is required" });
  const newId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const task = { id: newId, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
};

// PATCH /api/tasks/:id/toggle
exports.toggleTask = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.completed = !task.completed;
  res.json(task);
};
