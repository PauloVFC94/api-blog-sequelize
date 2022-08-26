const userService = require('../services/userService');

const addUser = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.addUser({ displayName, email, password, image });

  if (!newUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json({ token: newUser });
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, getAllUsers };