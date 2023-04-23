const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: 'User name is required',
      minlength: [2, 'User name need at least 2 characters']
    },
    alias: {
      type: String,
      required: 'You need an alias to be part of this family',
      minlength: [2, 'Your alias need at least 2 characters'],
      match: [/^[a-z0-9]+$/, "Alias must be lowercase and without spaces"],
      lowercase: true,
    },
    email: {
      type: String,
      required: 'An email is required',
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The format of the email entered is not correct"]
    },
    password: {
      type: String,
      required: 'Password is required',
      minlength: [8, "Your password needs at least 8 chars"]
    },
    image: {
      type: String,
      required: 'Your image is required',
      // match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"]
      default: "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
    },
    home: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home"
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt
          .hash(user.password, salt)
          .then((hash) => {
            user.password = hash;
            next();
          });
      })
      .catch(next);
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;