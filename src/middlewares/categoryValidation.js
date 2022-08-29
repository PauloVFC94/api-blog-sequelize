const joi = require('../helpers/joi');

const categoryValidator = (req, res, next) => {
    const { name } = req.body;
    const category = { name };
    const { error } = joi.categorySchema.validate(category);
  
    if (error) {
      return res.status(400).json({ message: error.message });
    }
  
    next();
  };
  
  module.exports = { categoryValidator };