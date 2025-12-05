// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Task description is required'], // nice validation message
    trim: true // trims whitespace
  },
  completed: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date,
    // optional: you can add validation (example below)
    validate: {
      validator: function(value) {
        // if value is provided, ensure it's in the future (optional)
        if (!value) return true; // allow empty
        return value >= new Date();
      },
      message: 'dueDate must be today or a future date'
    }
  }
}, {
  timestamps: true // adds createdAt and updatedAt automatically
});

// Create the model
const Task = mongoose.model('Task', taskSchema);

// Export it
module.exports = Task;
