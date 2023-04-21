const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleaningTaskSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Cleaning Task name is required',
      minLength: [3, 'Cleaning Task name need at least 3 characters']
    },
    image: {
      type: String,
      required: 'Cleaning Task image is required'
    },
    home: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home"
    },
    assignedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    toJson: {
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const CleaningTask = mongoose.model('CleaningTask', cleaningTaskSchema);
module.exports = CleaningTask;