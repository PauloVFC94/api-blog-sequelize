const blogPostService = require('../services/blogPostService');

const addPost = async (req, res, next) => {
  const { userId } = req;
  try {
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPostService.addPost({ userId, title, content, categoryIds });
    if (!newPost) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = { addPost };