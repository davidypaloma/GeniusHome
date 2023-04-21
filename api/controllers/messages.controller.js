const Message = require('../models/message.model');

module.exports.create = (req, res, next) => {
  //TODO meter por defecto el id de la Home y el del owner cuando hayamos hecho autenticación
  //TODO replies
  Message.create(req.body)
    .then((message) => res.status(201).json(message))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Message.find()
    .then((messages) => res.json(messages))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Message.deleteOne({ _id: req.message.id })
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.message, req.body);

  req.message
    .save()
    .then((message) => res.json(message))
    .catch(next)
}

