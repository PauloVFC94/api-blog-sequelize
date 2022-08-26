const express = require('express');
const userController = require('../database/controllers/userController');
const userValidation = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.route('/')
  .post(userValidation.userValidator, userController.addUser)
  .get(tokenValidation.tokenValidator, userController.getAllUsers);

module.exports = router;