const mongoose = require("mongoose")
const questionSchema = require("./questionSchema")

const questionModel = mongoose.model("QuestionModel", questionSchema);

const findAllQuestions = () => questionModel.find()

const findQuestionForQuiz = (qid) => questionModel.find({quizId: qid})

module.exports = {
  findAllQuestions, findQuestionForQuiz
}
