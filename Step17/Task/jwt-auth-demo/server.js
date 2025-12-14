const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
