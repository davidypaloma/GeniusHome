const express = require('express');
const router = express.Router();
const homes = require('../controllers/homes.controller');
const users = require('../controllers/users.controller');
const products = require('../controllers/products.controller');
const productsMid = require('../middlewares/products.mid');
const cleaningTasks = require('../controllers/cleaning-tasks.controller');
const cleaningTasksMid = require('../middlewares/cleaning-tasks.mid');
const messages = require('../controllers/messages.controller');
const messagesMid = require('../middlewares/messages.mid');
const auth = require('../controllers/authentication.controller');
const secureMid = require('../middlewares/secure.mid');


const todo = (req, res, next) => { res.send("TODO") }

router.post('/signup', users.create);
router.post('/login', auth.login);

router.get('/profile', secureMid.isAuthenticated, users.detail);
router.delete('/profile', secureMid.isAuthenticated, users.delete);
router.patch('/profile', secureMid.isAuthenticated, users.update);


router.post('/homes', homes.create);
router.get('/home-profile', secureMid.isAuthenticated, homes.detail);
router.post('/home-profile/invite', secureMid.isAuthenticated, todo)
router.delete('/home-profile', secureMid.isAuthenticated, homes.deleteAsync)
router.patch('/home-profile', secureMid.isAuthenticated, homes.update)

router.post('/shopping-list-items', secureMid.isAuthenticated, products.create);
router.get('/shopping-list-items', secureMid.isAuthenticated, products.list);
router.delete('/shopping-list-items/:id', secureMid.isAuthenticated, productsMid.exists, products.delete);
router.patch('/shopping-list-items/:id', secureMid.isAuthenticated, productsMid.exists, products.update);

router.post('/assigned-tasks', secureMid.isAuthenticated, cleaningTasks.create);
router.get('/assigned-tasks', secureMid.isAuthenticated, cleaningTasks.list);
router.delete('/assigned-tasks/:id', secureMid.isAuthenticated, cleaningTasksMid.exists, cleaningTasks.delete);
router.patch('/assigned-tasks/:id', secureMid.isAuthenticated, cleaningTasksMid.exists, cleaningTasks.update);

router.post('/messages', secureMid.isAuthenticated, messages.create);
router.get('/messages', secureMid.isAuthenticated, messages.list);
router.delete('/messages/:id', secureMid.isAuthenticated, messagesMid.exists, messages.delete);
router.patch('/messages/:id', secureMid.isAuthenticated, messagesMid.exists, messages.update);

module.exports = router



