
const quizSchema = require("./quizSchema")
const mongoose = require("mongoose")

// Connect the schema to a unique model
const quizModel = mongoose.model("QuizModel", quizSchema)


const findAllQuizzes = () =>
  quizModel.find()
// .then(quizzes => console.log(quizzes))

const findQuizById = (qid) => {
  return quizModel.findById(qid)
  // Can also use findOne, returns the first element in the array
  // return quizModel.findOne({_id: qid})
}

const createQuiz = (quiz) => {
  return quizModel.create(quiz)
}

const removeQuiz = (qid) => {
  return quizModel.remove({_id: qid});
}

const updateQuiz = (qid, newQuiz) => {
  return quizModel.update({_id: qid},{$set: newQuiz})
}

module.exports = {
  findAllQuizzes, findQuizById, createQuiz, removeQuiz, updateQuiz
}
