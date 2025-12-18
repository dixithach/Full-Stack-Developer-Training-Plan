// controllers/appointmentController.js

// This is your controller function
const getAllAppointments = (req, res) => {
  const appointments = [
    { id: 1, name: "Doctor Visit", date: "2025-01-10" },
    { id: 2, name: "Dentist Cleaning", date: "2025-01-12" }
  ];

  res.json(appointments);
};

module.exports = { getAllAppointments };
