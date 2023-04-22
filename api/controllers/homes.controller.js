const Home = require('../models/home.model');
const User = require('../models/user.model')

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

// module.exports.delete = (req, res, next) => {
//   const { id } = req.user.home;
//   Home.deleteOne({ _id: id })
//     .then(() => {
//       return User
//         .deleteMany({ home: id })
//         .then(() => res.status(204).send())
//     })
//     .catch(next)
// }

module.exports.deleteAsync = async (req, res, next) => {
  const { id } = req.user.home;
  try {
    await Home.deleteOne({ _id: id })
    await User.deleteMany({ home: id })
    res.status(204).send()
  } catch (err) {
    next(err);
  }
}

module.exports.update = (req, res, next) => {
  Object.assign(req.user.home, { name: req.body.name })
  req.user.home
    .save()
    .then((home) => res.json(home))
    .catch(next)
}
