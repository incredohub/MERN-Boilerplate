const testRoutes = require('./test')

module.exports = function (app) {
  app.use('/tests', testRoutes)
}
