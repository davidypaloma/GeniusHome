const express = require('express');
const router = express.Router();
const homes = require('../controllers/homes.controller');
const homesMid = require('../middlewares/homes.mid');
const users = require('../controllers/users.controller');

const todo = (req, res, next) => { res.send("TODO") }

router.post('/signup', users.create)


router.post('/homes', homes.create);
router.get('/homes/:id', homesMid.exists, homes.detail);
router.post('/homes/:id/invite', todo)
router.delete('/homes/:id', todo)
router.patch('/homes/:id', homesMid.exists, homes.update)

module.exports = router



