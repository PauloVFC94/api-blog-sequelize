const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login({ email, password });
  if (!response) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  res.status(200).json({ token: response });
};

module.exports = { login };