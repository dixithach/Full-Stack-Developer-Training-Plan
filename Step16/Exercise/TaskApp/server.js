const express = require('express');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// Use your routes
app.use('/api/tasks', taskRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Task App API is running...');
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
