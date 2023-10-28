const { setError } = require('../config/error');
const { verifyToken } = require('../config/jwt');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');
    if (!token) {
      return next(setError(401, 'Unauthorized'));
    }
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ data: 'No authenticated' });
  }
};

const queryAuth = (req, res, next) => {
  const { token } = req.query;
  if (token === process.env.QUERY_AUTH_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: 'Wrong token authentication' });
  }
};

module.exports = {
  auth,
  queryAuth
};
