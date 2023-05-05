const Product = require('../models/product.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const productId = req.params.id
  Product.findOne({ _id: productId, home: req.user.home})
    .then((product) => {
      if (product) {
        req.product = product;
        next();
      } else {
        next(createError(404, 'Product not found'))
      }
    })
    .catch(next)
}
