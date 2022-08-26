const { User } = require('../models');
const tokenTool = require('../../helpers/token');

const addUser = async ({ displayName, email, password, image }) => {
  const response = await User.findOne({ where: { email } });
  if (response) {
    return null;
  }

  const newUser = await User.create({ displayName, email, password, image });
  const token = tokenTool.createToken({ email: newUser.email });

  return token;
};

module.exports = { addUser };