const express = require("express");
const app = express();

app.use(express.json());

// GET route
app.get("/welcome", (req, res) => {
  res.send("Hello! This is a GET requests.");
});

// POST route
app.post("/send-data", (req, res) => {
  const dataFromClient = req.body;

  res.send({
    message: "POST request received!",
    yourData: dataFromClient
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
