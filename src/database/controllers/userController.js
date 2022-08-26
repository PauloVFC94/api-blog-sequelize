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

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, getAllUsers, getUserById };