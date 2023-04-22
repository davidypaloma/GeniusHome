const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return next(createError(401, "Log In is needed"));
  }
}