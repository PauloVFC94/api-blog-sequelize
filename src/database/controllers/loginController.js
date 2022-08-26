const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.login({ email, password });
  if (!response) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  res.status(200).json({ token: response });
};

module.exports = { login };