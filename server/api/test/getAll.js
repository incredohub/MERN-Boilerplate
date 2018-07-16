const Test = require('../../models/Test')

module.exports = function (req, res, next) {
  const limit = Number(req.query.limit)
  const skip = Number(req.query.skip)
  Test.find({}).limit(limit).skip(skip)
  .then(tests => res.status(200).send(tests))
  .catch(err => next(err))
}

