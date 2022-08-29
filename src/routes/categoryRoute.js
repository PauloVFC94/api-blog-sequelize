const express = require('express');
const categoryController = require('../database/controllers/categoryController');
const categoryValidation = require('../middlewares/categoryValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.route('/')
  .post(tokenValidation.tokenValidator,
    categoryValidation.categoryValidator,
    categoryController.addCategory)
  .get(tokenValidation.tokenValidator, categoryController.getAllCategories);

module.exports = router;