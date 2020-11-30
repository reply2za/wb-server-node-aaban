const express = require("express")
const app = express()
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

const quizzesService = require("./controllers/quizzes-controller")
quizzesService(app)
const questionsService = require("./controllers/questions-controller")
questionsService(app)

// Alternative way of saying the above

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require("./hello")(app)


console.log("How may I serve you?")
