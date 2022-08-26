require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
    return token;
};

const verifyToken = (token) => {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
};

module.exports = { createToken, verifyToken }; 