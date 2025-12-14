const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  // Expect header: Authorization: Bearer <token>
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid Authorization header.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    // Attach user info to request for downstream handlers
    req.user = { id: decoded.sub, email: decoded.email };
    next();
  } catch (err) {
    console.error('JWT verify error', err);
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};
