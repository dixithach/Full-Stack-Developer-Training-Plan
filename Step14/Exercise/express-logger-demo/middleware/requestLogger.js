// middleware/requestLogger.js
function requestLogger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next(); // important: pass control to the next middleware / route
}

module.exports = requestLogger;
