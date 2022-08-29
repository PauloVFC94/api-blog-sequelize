const joi = require('../helpers/joi');

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;
  const login = { email, password };
  const { error } = joi.loginSchema.validate(login);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = { loginValidator };