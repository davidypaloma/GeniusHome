const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    homeName: {
      type: String,
      required: 'Home name is required',
      minlength: [3, 'Home name needs at least 3 chars'],
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

homeSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "home",
  justOne: false,
});

const Home = mongoose.model('Home', homeSchema);
module.exports = Home;