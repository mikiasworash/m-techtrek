const express = require('express')

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps')

// use the express router
const router = express.Router()

router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').put(updateBootcamp).get(getBootcamp).delete(deleteBootcamp)

module.exports = router
