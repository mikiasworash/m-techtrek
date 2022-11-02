const express = require('express')
const dotenv = require('dotenv')
// load third party middleware (morgan) to display request methods, URL, etc
const morgan = require('morgan')
// Load env vars
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middleware/error')

const bootcamps = require('./routes/bootcamps')
const users = require('./routes/users')

connectDB()

const app = express()

// Body parser
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routes
app.use('/bootcamps', bootcamps)
app.use('/users', users)

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
