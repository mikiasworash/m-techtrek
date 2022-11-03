const asyncHandler = require('../middleware/async')
const errorResponse = require('../utils/errorResponse')
const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find()

  res.status(200).json({
    success: true,
    data: bootcamps,
  })
}

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id)

  if (!bootcamp) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    )
  } else {
    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  }
})

exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body)

  res.status(201).json({
    success: true,
    data: bootcamp,
  })
}

exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: bootcamp,
  })
}

exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id)
  bootcamp.remove()

  res.status(200).json({
    success: true,
    data: {},
  })
}
