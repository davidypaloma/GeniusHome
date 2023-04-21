const CleaningTask = require('../models/cleaning-task.model');

module.exports.create = (req, res, next) => {
  //TODO meter por defecto el id de la Home cuando hayamos hecho autenticación
  //En react tendrá que tener un select para ver a quién se le asigna
  CleaningTask.create(req.body)
    .then((cleaningTask) => res.status(201).json(cleaningTask))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  CleaningTask.find()
    .then((cleaningTasks) => res.json(cleaningTasks))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  CleaningTask.deleteOne({ _id: req.cleaningTask.id })
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.cleaningTask, req.body);

  req.cleaningTask
    .save()
    .then((cleaningTask) => res.json(cleaningTask))
    .catch(next)
}

