const joi = require('../helpers/joi');

const userValidator = (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  const { error } = joi.userSchema.validate(user);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { userValidator };