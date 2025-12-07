// controllers/taskController.js
const Task = require('../models/Task');

// Create a task
exports.createTask = async (req, res, next) => {
  try {
    const { description, completed, dueDate } = req.body;
    const task = await Task.create({ description, completed, dueDate });
    return res.status(201).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Get all tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    next(err);
  }
};

// Get single task by id
exports.getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    return res.status(200).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Update entire task (PUT)
exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    // { new: true } returns updated doc; runValidators enforces schema validators
    const task = await Task.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    return res.status(200).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Partial update (PATCH) — identical to PUT here, but kept for HTTP semantics
exports.patchTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const task = await Task.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    return res.status(200).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Delete a task
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    return res.status(200).json({ success: true, message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
