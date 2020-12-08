// This file's purpose is used to build the questionModel
const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
  question: String,
  quizId: String,
  points: Number,
  options: [String]
}, {collection: "questions"})

module.exports = questionSchema
