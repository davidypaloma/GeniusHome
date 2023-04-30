const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: 'Message text is required',
      minLength: [3, 'Message text need at least 3 characters']
    },
    urgent: {
      type: Boolean
    },
    home: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Home"
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;