const { Category } = require('../models');

const addCategory = async ({ name }) => {
  console.log(name);
  const response = await Category.findOne({ where: { name } });
  if (response) {
    return null;
  }

  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = { addCategory };