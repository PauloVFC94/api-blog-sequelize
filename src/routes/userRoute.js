const express = require('express');
const userController = require('../database/controllers/userController');
const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.route('/')
  .post(userValidation.userValidator, userController.addUser);

module.exports = router;