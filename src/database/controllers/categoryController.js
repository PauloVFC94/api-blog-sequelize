const categoryService = require('../services/categoryService');

const addCategory = async (req, res, next) => {
  try {
  const { name } = req.body;
  const newCategory = await categoryService.addCategory({ name });

  if (!newCategory) {
    return res.status(409).json({ message: 'Category already registered' });
  }
  return res.status(201).json(newCategory);
} catch (error) {
  next(error);
}
};

module.exports = { addCategory };
