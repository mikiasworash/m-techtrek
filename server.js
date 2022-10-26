const express = require('express')
const dotenv = require('dotenv')
// load third party middleware (morgan) to display request methods, URL, etc
const morgan = require('morgan')
// Load env vars
dotenv.config({ path: './config/config.env' })

const bootcamps = require('./routes/bootcamps')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routes
app.use('/', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
)
