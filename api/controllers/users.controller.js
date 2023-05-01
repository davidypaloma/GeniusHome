const User = require('../models/user.model');
const Home = require('../models/home.model');
const createError = require('http-errors');
const bcrypt = require('bcryptjs')

module.exports.create = async (req, res, next) => {
  // TODO: create home code instead of homeId (i.e. "home-name") which also solve the Cast error 

  if (req.body.homeId && req.body.homeName) {
    return next(createError(400, { errors: { homeId: 'Cannot send both New Home and Home Id' } }))
  }
  if (!req.body.homeId && !req.body.homeName) {
    return next(createError(400, { errors: { homeId: 'You should fill either New Home or Home Id' } }))
  }

  let newHome = {}
  if (req.body.homeName) {
    newHome = await Home.create({ homeName: req.body.homeName })
  }

  const newUser = {
    userName: req.body.userName,
    userAlias: req.body.userAlias,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
    home: req.body.homeId || newHome.id
  }

  try {
    const home = await Home.findById(newUser.home)

    if (!home) {
      return next(createError(400, { errors: { homeId: 'Invalid home' } }))
    }

    const user = await User.create(newUser)
    res.status(201).json(user)

  } catch (error) {
    next(error)
  }
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
  const updatedUser = {
    userName: req.body.userName,
    userAlias: req.body.userAlias,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
    home: req.body.homeId
  }
  Object.assign(req.user, updatedUser);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next)
};

module.exports.login = (req, res, next) => {

  function sendUnauthorizedError() {
    next(createError(401, { errors: { password: 'Invalid username or password' } }));
  }

  User.findOne(({ email: req.body.email })) // si se hace la confirmación del email se pondría aquí la condición confirm true además del email
    .then((user) => {
      if (!user) return sendUnauthorizedError();

      return bcrypt
        .compare(req.body.password, user.password)
        .then((passwordOk) => {
          if (!passwordOk) return sendUnauthorizedError();

          req.session.userId = user.id
          res.status(201).json(user)
        })
    }).catch(next);
}

module.exports.logout = (req, res, next) => {
  req.session.destroy(function (err) {
    req.session = null;
    res.clearCookie('connect.sid')
    res.clearCookie('sessionid')
    res.status(200).send()
  });
}