const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Product name is required',
      minLength: [3, 'Product name need at least 3 characters']
    },
    location: {
      type: String,
      required: 'The purchase establishment is required',
      minLength: [3, 'Purchase establishment need at least 3 characters']
    },
    image: {
      type: String,
    },
    type: {
      type: String
    },
    home: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Home"
    }
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

const Product = mongoose.model('Product', productSchema);
module.exports = Product;