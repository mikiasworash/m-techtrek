const express = require('express')
const dotenv = require('dotenv')
// load third party middleware (morgan) to display request methods, URL, etc
const morgan = require('morgan')
// Load env vars
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
const colors = require('colors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/error')

const bootcamps = require('./routes/bootcamps')
const users = require('./routes/users')
const auth = require('./routes/auth')
const courses = require('./routes/courses')

// to allow request from another domain
const cors = require('cors')

connectDB()

const app = express()

// enable CORS for all routes
app.use(cors())

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routes
app.use('/bootcamps', bootcamps)
app.use('/users', users)
app.use('/auth', auth)
app.use('/courses', courses)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow
      .bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)

  // Close server and exit process
  server.close(() => process.exit(1))
})
