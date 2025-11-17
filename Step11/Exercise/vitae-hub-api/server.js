// server.js
const express = require('express');
const app = express();

const PORT = 3001;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Vitae Hub API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
