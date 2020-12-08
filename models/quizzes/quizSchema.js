
const mongoose = require("mongoose")
// create a schema
const quizSchema = mongoose.Schema({
  title: String,
  avg: Number
}, {collection: "quizzes"})

module.exports = quizSchema



