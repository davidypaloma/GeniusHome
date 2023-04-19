const Home = require('../models/home.model');

module.exports.create = (req, res, next) => {
  Home.create({ name: req.body.name })
    .then((home) => res.status(201).json(home))
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  req.home.populate('users')
    .then((home) => res.json(home))
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Object.assign(req.home, { name: req.body.name })
  req.home
    .save()
    .then((home) => res.json(home))
    .catch(next)
}