// @ts-nocheck
const express = require('express')
const bodyParser = require('body-parser')
const importDate = require('./data.json')

// create express app
const app = express()

// setup the server port
const port = process.env.PORT || 3000

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse request data content type application/json
app.use(bodyParser.json())

// define root route
app.get('/', (_req, res) => {
  res.send('Hello World')
})
app.get('/players', (_req, res) => {
  res.send(importDate)
})
// import employee routes
const employeeRoutes = require('./src/routesEN/employee.route')

// create employee routes
app.use('/api/v1/employee', employeeRoutes)

// import Register routes
const registerRouters = require('./src/routesEN/Register.route')

// create employee routes
app.use('/api/v1/Register', registerRouters)

const detailsRouters = require('./src/routesEN/details.route')

// create employee routes
app.use('/api/v1/details', detailsRouters)

const overViewRouters = require('./src/routesEN/OverView')

// create employee routes
app.use('/api/v1/overView', overViewRouters)

app.listen(port, () => {
  console.log(`Express is running at port ${port}`)
})
