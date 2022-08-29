const tokenTool = require('../helpers/token');

const tokenValidator = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const requistion = tokenTool.verifyToken(authorization);
    req.userId = requistion.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidator };