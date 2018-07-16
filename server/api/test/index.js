const express = require('express')
const router = express.Router()

const create = require('./create')
const getAll = require('./getAll')

router.post('/', create)
router.get('/', getAll)

module.exports = router

