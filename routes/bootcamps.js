const express = require('express')

const { getBootcamps } = require('../controllers/getBootcamps')

// use the express router
const router = express.Router()

router.route('/').get(getBootcamps)

module.exports = router
