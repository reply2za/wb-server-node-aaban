const express = require("express")
const app = express()

// initialize mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.listen(3008)
app.listen(process.env.PORT || 3000)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});


const quizzesController = require("./controllers/quizzes-controller")
quizzesController(app)
const questionsController = require("./controllers/questions-controller")
questionsController(app)

// Alternative way of saying the above

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require("./hello")(app)


console.log("How may I serve you?")
