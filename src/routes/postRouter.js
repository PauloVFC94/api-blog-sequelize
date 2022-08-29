const express = require('express');
const blogPostController = require('../database/controllers/blogPostController');
const postValidation = require('../middlewares/postValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.route('/')
  .post(tokenValidation.tokenValidator,
    postValidation.postValidator,
    blogPostController.addPost);

module.exports = router;