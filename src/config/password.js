const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log('>>> Hashed password');
  return hash;
};

const verifyPassword = async (password, hash) => {
  const isValid = await bcrypt.compare(password, hash);
  console.log('>>> Successfully verified password');
  return isValid;
};

module.exports = {
  hashPassword,
  verifyPassword
};
