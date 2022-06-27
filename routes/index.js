const express = require('express')
const app  = express()
const moviesRoute = require('./moviesRoute')
const categoriesRoute = require('./categoriesRoute')
const scheduleRoute = require('./scheduleRoute')
const locationRoute = require('./locationRoute')
const cinemaRoute = require('./cinemaRoute')
const bookingRoute = require('./bookingRoute')




app.use('/movies', moviesRoute)
app.use('/categories', categoriesRoute)
app.use('/schedule', scheduleRoute)
app.use('/location', locationRoute)
app.use('/cinema', cinemaRoute)
app.use('/booking', bookingRoute)


module.exports = app