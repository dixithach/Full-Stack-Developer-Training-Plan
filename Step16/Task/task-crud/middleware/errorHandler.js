// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err); // for dev visibility

  // Mongoose bad ObjectId
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({ success: false, message: 'Invalid ID format' });
  }

  // Validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ success: false, message: messages.join(', ') });
  }

  // Default 500
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};
