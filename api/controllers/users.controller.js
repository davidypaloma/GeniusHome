const User = require('../models/user.model');
const createError = require('http-errors');
const bcrypt = require('bcryptjs')

module.exports.create = (req, res, next) => {
  //TODO cambiar el req.body
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  res.json(req.user)
}

module.exports.delete = (req, res, next) => {

  User.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  //TODO cambiar el req.body
  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next)
};

module.exports.login = (req, res, next) => {
  User.findOne(({ email: req.body.email })) // si se hace la confirmación del email se pondría aquí la condición confirm true además del email
    .then((user) => {
      if (!user) {
        return next(createError(401, "Invalid credentials"));
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordOk) => {
          if (!passwordOk) {
            return next(createError(401, "Invalid credentials"))
          }
          req.session.userId = user.id //código incompleto
          res.set('Set-Cookie', `sessionid=${req.session.userId}`);
          res.status(200).send()
        })
        .catch(next);
    })
}

module.exports.logout = (req, res, next) => {
  req.session.destroy(function (err) {
    req.session = null;
    res.clearCookie('connect.sid')
    res.clearCookie('sessionid')
    res.status(200).send()
  });
}