const Home = require('../models/home.model');

module.exports.create = (req, res, next) => {
  Home.create(req.body) //¿pasar sólo los campos que interesan o utilizar el middleware en la app.js que elimina los que no nos interesan?)
    .then((home) => res.status(201).json(home))
    .catch(next)
}