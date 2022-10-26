exports.getBootcamps = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Showing bootcamps',
  })
}
