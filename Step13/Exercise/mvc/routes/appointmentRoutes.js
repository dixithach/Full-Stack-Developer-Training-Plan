// routes/appointmentRoutes.js

const express = require("express");
const router = express.Router();

// import the controller function
const { getAllAppointments } = require("../controllers/appointmentController");

// define the route
router.get("/", getAllAppointments);

module.exports = router;
