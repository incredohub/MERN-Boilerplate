const Test = require('../../models/Test')

module.exports = function (req, res, next) {
  const params = req.body.data

  const newTest = new Test(params)
  newAdmin
  .save()
  .then(test => res.status(201).json(test))
  .catch(err => next(err))
}

