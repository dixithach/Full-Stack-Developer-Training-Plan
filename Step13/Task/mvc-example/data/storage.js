// data/storage.js
// Simple in-memory arrays to simulate DB
const appointments = [
  { id: 1, date: "2025-11-22", time: "10:00", patient: "Alice" },
  { id: 2, date: "2025-11-23", time: "14:00", patient: "Bob" }
];

const tasks = [
  { id: 1, title: "Finish report", completed: false },
  { id: 2, title: "Email client", completed: true }
];

module.exports = { appointments, tasks };
