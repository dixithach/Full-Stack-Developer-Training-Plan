const express = require('express');
const app = express();

// --- SIMPLE MIDDLEWARE EXAMPLE ---
function myMiddleware(req, res, next) {
  console.log("Middleware: Request received");
  next(); // allow request to move to the next step
}

// Use the middleware for EVERY request
app.use(myMiddleware);

// A simple GET route
app.get('/', (req, res) => {
  res.send("Hello! This is the Home Page.");
});

// Another route
app.get('/about', (req, res) => {
  res.send("This is the About Page.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
