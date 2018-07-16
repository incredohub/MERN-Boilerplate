const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const config = require('../../config')

const sessionStore = new MongoStore({url: config.get('mongoose:uri')})

module.exports = sessionStore
