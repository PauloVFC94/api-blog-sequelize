const { Category } = require('../models');

const addCategory = async ({ name }) => {
  const response = await Category.findOne({ where: { name } });
  if (response) {
    return null;
  }

  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    return null;
  }

  return categories;
};

module.exports = { addCategory, getAllCategories };