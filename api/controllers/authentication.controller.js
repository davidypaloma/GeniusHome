const User = require('../models/user.model');
const bcrypt = require('bcryptjs')

module.exports.login = (req, res, next) => {
  User.findOne(({ email: req.body.email }))
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordOk) => {
          if (passwordOk) {
            req.session.userId = user.id //código incompleto
            res.set('Set-Cookie', `sessionid=${req.session.userId}`);
          }
        })
        .catch(next);
    })
    .catch(next)
}

module.exports.logout = (req, res, next) => {
  req.session.destroy(function (err) {
    req.session = null;
    res.clearCookie('connect.sid')
    res.clearCookie('sessionid')
  });
}


