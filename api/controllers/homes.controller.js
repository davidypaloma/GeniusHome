const Home = require('../models/home.model');

module.exports.create = (req, res, next) => {
  Home.create({ name: req.body.name })
    .then((home) => res.status(201).json(home))
    .catch(next)
}