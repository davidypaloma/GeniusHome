const session = require('express-session');
const MongoStore = require('connect-mongo');
const User = require('../models/user.model');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/geniushome'

module.exports.session = session({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false, //para que cada vez que se haga una operación se guarde la cookie en base de datos
  saveUninitialized: false, //true implica que aunque el usuario no se haya autenticado, le guardo una cookie 
  proxy: process.env.SESSION_SECURE === 'true', //VER EXPLICACIÓN
  cookie: {
    httpOnly: true, //no se pueden leer las cookies desde el javaScript navegador
    secure: process.env.SESSION_SECURE === 'true', //https de candadito verde (man in the middle)
  },
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    ttl: 7 * 24 * 60 * 60 // 7 días
  })
})

module.exports.loadSessionUser = (req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    User.findById(userId)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(error => next(error))
  } else {
    next()
  }
}

//qué hay que poner en SESSION_SECRET y en SESSION_SECURE?