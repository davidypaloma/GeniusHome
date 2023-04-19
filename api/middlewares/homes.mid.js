const Home = require('../models/home.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const homeId = req.params.id
  Home.findById(homeId)
    .then((home) => {
      if (home) {
        req.home = home;
        next();
      } else {
        next(createError(404, 'Home not found'))
      }
    })
    .catch(next)
}