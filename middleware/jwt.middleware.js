
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denegate');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Not valid Token');
  }
};


const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send('Needs to be admin');
  next();
};

module.exports = { verifyToken, isAdmin };