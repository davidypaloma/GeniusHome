const CleaningTask = require('../models/cleaning-task.model');

const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const cleaningTaskId = req.params.id
  CleaningTask.findById(cleaningTaskId)
    .then((cleaningTask) => {
      console.log(cleaningTaskId, cleaningTask)
      if (cleaningTask) {
        req.cleaningTask = cleaningTask;
        next();
      } else {
        next(createError(404, 'Cleaning Task not found'))
      }
    })
    .catch(next)
}
