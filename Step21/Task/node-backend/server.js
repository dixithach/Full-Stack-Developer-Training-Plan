const express = require("express");
const cors = require("cors");

const app = express();

// allow frontend to call backend
app.use(cors());
app.use(express.json());

// test API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Node.js backend 👋"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
