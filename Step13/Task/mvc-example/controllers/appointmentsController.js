// controllers/appointmentsController.js
const { appointments } = require("../data/storage");

// GET /api/appointments
exports.getAllAppointments = (req, res) => {
  res.json(appointments);
};

// GET /api/appointments/:id
exports.getAppointmentById = (req, res) => {
  const id = Number(req.params.id);
  const appt = appointments.find(a => a.id === id);
  if (!appt) return res.status(404).json({ error: "Appointment not found" });
  res.json(appt);
};

// POST /api/appointments
exports.createAppointment = (req, res) => {
  const { date, time, patient } = req.body;
  if (!date || !time || !patient) {
    return res.status(400).json({ error: "date, time and patient are required" });
  }
  const newId = appointments.length ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
  const newAppt = { id: newId, date, time, patient };
  appointments.push(newAppt);
  res.status(201).json(newAppt);
};
