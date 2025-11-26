// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Built-in middleware to parse JSON bodies:
app.use(express.json());

// Import routes
const appointmentsRoutes = require("./routes/appointmentsRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

// Mount routers with a prefix
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/tasks", tasksRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the MVC example API!");
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
