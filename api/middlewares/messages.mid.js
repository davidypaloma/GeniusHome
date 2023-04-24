const Message = require('../models/message.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const messageId = req.params.id;
  Message.findOne({ _id: messageId, home: req.user.home })
    .then((message) => {
      console.log(messageId, message)
      if (message) {
        req.message = message;
        next();
      } else {
        next(createError(404, 'Message not found'))
      }
    })
    .catch(next)
};

module.exports.checkOwner = (req, res, next) => {
  if (req.message.owner.toString() !== req.user.id.toString()) {
    next(createError(403, 'Forbidden action'));
  } else {
    next();
  }
};