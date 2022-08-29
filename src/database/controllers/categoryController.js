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

const getAllCategories = async (_req, res, next) => {
  try {
    const users = await categoryService.getAllCategories();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { addCategory, getAllCategories };
