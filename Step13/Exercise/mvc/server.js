const express = require("express");
const app = express();

// import routes
const appointmentRoutes = require("./routes/appointmentRoutes");
const taskRoutes = require("./routes/taskRoutes");

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// use the routers
app.use("/api/appointments", appointmentRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
