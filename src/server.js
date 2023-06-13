'use strict'

//importing the express server
const express = require('express');

//using express server into app
const app = express();

//importing the cors
const cors = require('cors');

//using express server into app
app.use(cors())

//importing middlewares
const logger = require('./middleware/logger')
const Error500 = require('./error-handlers/500')
const Error404 = require('./error-handlers/404')
const validator = require('./middleware/validator')

// using logger middleware in every route
app.use(logger)

// controller
app.get('/', (req, res) => { res.status(200).json('welcome to home page') })
app.get('/person/:name', validator, personHandler)

// using the handle errors in every route
app.use(Error404)
app.use(Error500)

//handelers
function personHandler(req, res, next) {
    res.status(200).json({
        name : req.query
    })
 
}

// store the app connection into function to pass it into the index.js
function start(PORT) {
    app.listen(PORT, () => {
        console.log('SERVER RUN ON PORT ', PORT)
    })
}

//exporting the app and the app connection
module.exports = {
    app,
    start
}