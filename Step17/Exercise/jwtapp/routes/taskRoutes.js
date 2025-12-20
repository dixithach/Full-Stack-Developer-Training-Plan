const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");

router.get("/", protect, (req, res) => {
  res.json({ message: "Get all tasks" });
});

router.post("/", protect, (req, res) => {
  res.json({ message: "Create task" });
});

router.put("/:id", protect, (req, res) => {
  res.json({ message: "Update task" });
});

router.delete("/:id", protect, (req, res) => {
  res.json({ message: "Delete task" });
});

module.exports = router;
