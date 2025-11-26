// routes/appointmentsRoutes.js
const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointmentsController");

router.get("/", appointmentsController.getAllAppointments);
router.get("/:id", appointmentsController.getAppointmentById);
router.post("/", appointmentsController.createAppointment);

module.exports = router;
