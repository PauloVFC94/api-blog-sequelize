const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, Category, PostCategory } = require('../models');

const sequelize = new Sequelize(config.development);

const addPost = async ({ userId, title, content, categoryIds }) => {
  const { count, rows } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (!count) {
    return null;
  }

  const post = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({ title, content, userId }, { transaction: t });
    const postCategory = rows.map((category) => ({ postId: newPost.id, categoryId: category.id }));
    await PostCategory.bulkCreate(postCategory, { transaction: t });
    return newPost;
  });
  return post;
};

module.exports = { addPost };