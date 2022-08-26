const { User } = require('../models');
const tokenTool = require('../../helpers/token');

const login = async ({ email, password }) => {
  const response = await User.findOne({ where: { email, password } });

  if (!response) {
    return null;
  }

  const token = tokenTool.createToken({ email: response.email });
  return token;
};

module.exports = { login };