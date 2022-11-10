const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Course = require('../models/Course')
const Bootcamp = require('../models/Bootcamp')

// @desc    Get courses
// @route   GET /courses
// @route   GET /bootcamps/:bootcampId/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const courses = await Course.find({
      bootcamp: req.params.bootcampId,
    })

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    })
  } else {
    res.status(200).json(res.advancedResults)
  }
})

// @desc    Get courses
// @route   GET /courses/:courseTitle
// @access  Public
exports.getCoursesByTitle = asyncHandler(async (req, res, next) => {
  // Find all course the start with the sent param (title)
  // const courses = await Course.find({ title: {$regex : "^" + req.params.courseTitle} })

  // Find all cousrse that contain the sent param (title)
  // const regex = new RegExp(req.params.courseTitle, 'i')
  const courses = await Course.find({
    // title: {$regex : regex}
    title: { $regex: req.params.courseTitle, $options: 'i' },
  }).populate({
    path: 'bootcamp',
    select: 'name',
  })

  if (courses.length === 0) {
    return next(
      new ErrorResponse(
        `Course not found with the title of '${req.params.courseTitle}' `,
        404
      )
    )
  } else {
    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    })
  }
})

// @desc    Get single course
// @route   GET /courses/:id
// @access  Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await (
    await Course.findById(req.params.id)
  ).populate({
    path: 'bootcamp',
    select: 'name description',
  })

  if (!course) {
    next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  } else {
    res.status(200).json({
      success: true,
      data: course,
    })
  }
})

// @desc    Add course
// @route   POST /bootcamps/:bootcampId/courses
// @access  Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId
  req.body.user = req.user.id

  const bootcamp = await Bootcamp.findById(req.params.bootcampId)

  if (!bootcamp) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    )
  } else {
    // Make sure user is course owner
    if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(
        new ErrorResponse(
          `user ${req.user.id} is not authorized to add a course to bootcam ${bootcamp._id}`,
          401
        )
      )
    }

    const course = await Course.create(req.body)

    res.status(200).json({
      success: true,
      data: course,
    })
  }
})

// @desc    Update course
// @route   PUT /courses/:id
// @access  Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id)

  if (!course) {
    next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  } else {
    // Make sure user is course owner
    if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(
        new ErrorResponse(
          `user ${req.user.id} is not authorized to update this course ${course._id}`,
          401
        )
      )
    }

    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      success: true,
      data: course,
    })
  }
})

// @desc    Delete course
// @route   Delete /courses/:id
// @access  Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  } else {
    // Make sure user is course owner
    if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(
        new ErrorResponse(
          `user ${req.user.id} is not authorized to delete this course ${course._id}`,
          401
        )
      )
    }

    await course.remove()

    res.status(200).json({
      success: true,
      data: {},
    })
  }
})
