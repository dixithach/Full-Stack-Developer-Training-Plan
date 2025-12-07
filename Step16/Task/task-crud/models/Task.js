// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Task description is required'],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date
  }
}, {
  timestamps: true // createdAt, updatedAt
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
