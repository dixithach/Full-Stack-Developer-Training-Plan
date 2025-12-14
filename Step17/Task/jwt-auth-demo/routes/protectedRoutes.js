const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/profile', auth, async (req, res) => {
  // req.user is set by middleware
  res.json({ message: 'Access granted to protected resource', user: req.user });
});

module.exports = router;
