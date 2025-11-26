// routes/tasksRoutes.js
const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);
router.post("/", tasksController.createTask);
router.patch("/:id/toggle", tasksController.toggleTask);

module.exports = router;
