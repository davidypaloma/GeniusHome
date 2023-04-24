const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return next(createError(401, "Log In is needed"));
  }
}

module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body._id
    delete req.body.owner
    delete req.body.createdAt
    delete req.body.updatedAt
  }
  next();
}