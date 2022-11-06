const express = require('express')

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps')

const bootcamp = require('../models/Bootcamp')
const advancedResults = require('../middleware/advancedResults')

// use the express router
const router = express.Router()

router
  .route('/')
  .get(advancedResults(bootcamp), getBootcamps)
  .post(createBootcamp)
router.route('/:id').put(updateBootcamp).get(getBootcamp).delete(deleteBootcamp)

module.exports = router
