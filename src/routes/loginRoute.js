const express = require('express');
const loginController = require('../database/controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');

const router = express.Router();

router.route('/')
  .post(loginValidation.loginValidator, loginController.login);

module.exports = router;