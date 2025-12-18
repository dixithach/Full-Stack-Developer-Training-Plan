// server.js
const express = require('express');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = 3001;

// Use the requestLogger for every incoming request
app.use(requestLogger);

// Example routes
app.get('/', (req, res) => {
  res.send('Hello! This is the root route.');
});

app.get('/api/appointments', (req, res) => {
  res.json([
    { id: 1, title: 'Doctor', time: '2025-12-01T09:00:00' },
    { id: 2, title: 'Dentist', time: '2025-12-02T15:00:00' }
  ]);
});

app.post('/api/tasks', express.json(), (req, res) => {
  // pretend we saved the task
  res.status(201).json({ message: 'Task created', task: req.body || {} });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
