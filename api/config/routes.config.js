const express = require('express');
const router = express.Router();
const homes = require('../controllers/homes.controller');
const homesMid = require('../middlewares/homes.mid');
const users = require('../controllers/users.controller');
const usersMid = require('../middlewares/users.mid');
const products = require('../controllers/products.controller');
const productsMid = require('../middlewares/products.mid');

const todo = (req, res, next) => { res.send("TODO") }

router.post('/signup', users.create);
router.get('/users/:id', usersMid.exists, users.detail);
router.delete('/users/:id', usersMid.exists, users.delete);
router.patch('/users/:id', usersMid.exists, users.update);


router.post('/homes', homes.create);
router.get('/homes/:id', homesMid.exists, homes.detail);
router.post('/homes/:id/invite', todo)
router.delete('/homes/:id', homesMid.exists, homes.deleteAsync)
router.patch('/homes/:id', homesMid.exists, homes.update)

router.post('/shopping-list-items', products.create);
router.get('/shopping-list-items', products.list);
router.delete('/shopping-list-items/:id', productsMid.exists, products.delete);
router.patch('/shopping-list-items/:id', productsMid.exists, products.update);

module.exports = router



