const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('../config')
const sessionStore = require('./db/sessionStore')

const router = require('./api')

const app = express()
const port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(bodyParser.json({type: '*/*'}))
app.use(cookieParser())

app.use(session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: sessionStore
}))

app.use(express.static(path.resolve(__dirname, '/client/public')))
app.use(express.static('client/public'))
router(app)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

app.listen(port, () => console.log('server started on port ' + port))
