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

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!users) {
    return null;
  }

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  console.log(user);
  return user;
};

module.exports = { addUser, getAllUsers, getUserById };