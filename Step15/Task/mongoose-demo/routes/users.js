// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); // triggers pre-save middleware
    res.status(201).json(user);
  } catch (err) {
    // basic error handling
    if (err.code === 11000) { // duplicate key
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(400).json({ message: err.message });
  }
});

// Read all with simple pagination
router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 10);
    const users = await User.find()
      .skip((page-1)*limit)
      .limit(limit)
      .select('-__v'); // exclude __v
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const opts = { new: true, runValidators: true }; // return updated doc & run schema validators
    const user = await User.findByIdAndUpdate(req.params.id, req.body, opts);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
