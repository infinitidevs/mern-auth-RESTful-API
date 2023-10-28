const jwt = require('jsonwebtoken');

const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log('>>> Generated token');
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  console.log('>>> Successful login token');
  return payload;
};

module.exports = {
  signToken,
  verifyToken
};
