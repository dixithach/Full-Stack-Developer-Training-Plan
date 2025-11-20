// server.js
const express = require('express');
const app = express();

// Optional: middleware to parse JSON bodies (not needed for GET, but good to have)
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Hardcoded data
const appointments = [
  { id: 1, title: "Dental Checkup", date: "2025-11-25", time: "10:00", with: "Dr. Rao" },
  { id: 2, title: "Project Meeting", date: "2025-11-26", time: "15:00", with: "Team" },
  { id: 3, title: "Eye Test", date: "2025-12-02", time: "09:00", with: "Dr. Iyer" }
];

const tasks = [
  { id: 1, title: "Finish README", description: "Write project README file", done: false },
  { id: 2, title: "Fix bug #12", description: "Resolve type error in utils", done: true },
  { id: 3, title: "Push changes", description: "Push latest work to GitHub", done: false }
];

// Route: GET /api/appointments
app.get('/api/appointments', (req, res) => {
  // res.json() sends JSON with correct headers
  res.json(appointments);
});

// Route: GET /api/tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Root route (optional) to check server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Vitae Hub API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
