const mongoose = require('../db/mongoose')
const crypto = require('crypto')
const Schema = mongoose.Schema

const TestSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: String,
  title: String
})

module.exports = mongoose.model('tests', TestSchema)
