// index.js - minimal Express server (CommonJS)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse JSON bodies (useful later)
app.use(express.json());

// simple GET route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// example POST route that echoes JSON
app.post('/echo', (req, res) => {
  // body is available as req.body because of express.json() middleware
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
