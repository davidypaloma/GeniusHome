const Message = require('../models/message.model');

module.exports.create = (req, res, next) => {
  //TODO replies
  //TODO cambiar req.body
  req.body.home = req.user.home
  req.body.owner = req.user
  Message.create(req.body)
    .then((message) => res.status(201).json(message))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Message.find({ home: req.user.home })
    .populate('owner')
    .populate('home') //haría falta para poner el autor del mensaje????
    //.sort({createdAt: desc})  para ordenarlos del más nuevo al más antiguo????
    .then((messages) => res.json(messages))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Message.deleteOne({ _id: req.message.id, home: req.user.home})
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  //TODO cambiar el req.body
  Object.assign(req.message, req.body);

  req.message
    .save()
    .then((message) => res.json(message))
    .catch(next)
}

